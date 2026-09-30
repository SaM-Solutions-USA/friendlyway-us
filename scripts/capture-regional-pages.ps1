param(
  [ValidateSet('visitor-management-solution', 'case-studies')]
  [string[]] $Pages = @('visitor-management-solution', 'case-studies'),
  [string] $OutputDirectory = (Join-Path $PSScriptRoot '../artifacts/live-source')
)

$ErrorActionPreference = 'Stop'
$sourceOrigin = 'https://www.friendlyway.com'
$parserVersion = '1.12.4'
$maxResourceBytes = 200MB
$outputRoot = [System.IO.Path]::GetFullPath($OutputDirectory)
[System.IO.Directory]::CreateDirectory($outputRoot) | Out-Null

$toolsDirectory = Join-Path $outputRoot '.tools'
$parserDll = Join-Path $toolsDirectory 'htmlagilitypack/lib/netstandard2.0/HtmlAgilityPack.dll'
if (-not (Test-Path $parserDll)) {
  [System.IO.Directory]::CreateDirectory($toolsDirectory) | Out-Null
  $packagePath = Join-Path $toolsDirectory "htmlagilitypack.$parserVersion.nupkg"
  Invoke-WebRequest -Uri "https://api.nuget.org/v3-flatcontainer/htmlagilitypack/$parserVersion/htmlagilitypack.$parserVersion.nupkg" -OutFile $packagePath -TimeoutSec 60
  [System.IO.Compression.ZipFile]::ExtractToDirectory($packagePath, (Join-Path $toolsDirectory 'htmlagilitypack'), $true)
}
Add-Type -Path $parserDll

$http = [System.Net.Http.HttpClient]::new([System.Net.Http.HttpClientHandler]@{ AllowAutoRedirect = $true })
$http.Timeout = [TimeSpan]::FromSeconds(40)
$http.DefaultRequestHeaders.UserAgent.ParseAdd('friendlyway-us-static-capture/1.0')

function Get-SourceResponse([uri] $url) {
  $response = $http.GetAsync($url, [System.Net.Http.HttpCompletionOption]::ResponseHeadersRead).GetAwaiter().GetResult()
  try {
    $finalUrl = $response.RequestMessage.RequestUri
    if ($finalUrl.Scheme -ne 'https' -or $finalUrl.Host -ne 'www.friendlyway.com') {
      throw "Unexpected redirect from $url to $finalUrl"
    }
    $response.EnsureSuccessStatusCode() | Out-Null
    if ($response.Content.Headers.ContentLength -gt $maxResourceBytes) {
      throw "Resource exceeds $maxResourceBytes bytes: $url"
    }
    $stream = $response.Content.ReadAsStreamAsync().GetAwaiter().GetResult()
    $buffer = [byte[]]::new(65536)
    $memory = [System.IO.MemoryStream]::new()
    try {
      while (($count = $stream.Read($buffer, 0, $buffer.Length)) -gt 0) {
        $memory.Write($buffer, 0, $count)
        if ($memory.Length -gt $maxResourceBytes) { throw "Resource exceeds $maxResourceBytes bytes: $url" }
      }
      return [pscustomobject]@{
        Url = $finalUrl.AbsoluteUri
        Status = [int]$response.StatusCode
        Bytes = $memory.ToArray()
        ContentType = $response.Content.Headers.ContentType.MediaType
        Encoding = $response.Content.Headers.ContentType.CharSet
      }
    } finally {
      $memory.Dispose()
      $stream.Dispose()
    }
  } finally {
    $response.Dispose()
  }
}

function Get-Text($resource) {
  try {
    if ($resource.Encoding) { return [System.Text.Encoding]::GetEncoding($resource.Encoding).GetString($resource.Bytes) }
  } catch [System.ArgumentException] { }
  return [System.Text.Encoding]::UTF8.GetString($resource.Bytes)
}

function Get-Hash([byte[]] $bytes) {
  return [Convert]::ToHexString([System.Security.Cryptography.SHA256]::HashData($bytes)).ToLowerInvariant()
}

function Get-AssetPath([uri] $url, [string] $contentType) {
  $urlHash = Get-Hash ([System.Text.Encoding]::UTF8.GetBytes($url.AbsoluteUri))
  $extension = [System.IO.Path]::GetExtension($url.AbsolutePath).ToLowerInvariant()
  if ($extension -notmatch '^\.[a-z0-9]{1,8}$') {
    $extension = switch ($contentType) {
      'text/css' { '.css' }
      'text/javascript' { '.js' }
      'image/jpeg' { '.jpg' }
      'image/png' { '.png' }
      'image/webp' { '.webp' }
      'image/svg+xml' { '.svg' }
      'font/woff2' { '.woff2' }
      default { '.bin' }
    }
  }
  return "assets/$urlHash$extension"
}

foreach ($page in $Pages) {
  $pageDirectory = Join-Path $outputRoot $page
  $assetsDirectory = Join-Path $pageDirectory 'assets'
  [System.IO.Directory]::CreateDirectory($assetsDirectory) | Out-Null
  $sourceUrl = [uri]"$sourceOrigin/$page/"
  $manifest = [ordered]@{
    source = $sourceUrl.AbsoluteUri
    capturedAt = [DateTimeOffset]::UtcNow.ToString('o')
    resources = [System.Collections.Generic.List[object]]::new()
    external = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
    errors = [System.Collections.Generic.List[string]]::new()
  }
  $assetPaths = [System.Collections.Generic.Dictionary[string, string]]::new([StringComparer]::Ordinal)

  function Resolve-Asset([string] $reference, [uri] $baseUrl, [string] $from) {
    if (-not $reference -or $reference -match '^(?:data:|blob:|#|javascript:|mailto:|tel:)') { return $reference }
    $resolved = $null
    if (-not [uri]::TryCreate($baseUrl, [System.Net.WebUtility]::HtmlDecode($reference.Trim()), [ref]$resolved)) { return $reference }
    if ($resolved.Scheme -ne 'https' -or $resolved.Host -ne 'www.friendlyway.com') {
      $manifest.external.Add($resolved.AbsoluteUri) | Out-Null
      return $reference
    }
    $key = $resolved.AbsoluteUri
    if ($assetPaths.ContainsKey($key)) { $path = $assetPaths[$key] }
    else {
      try {
        $resource = Get-SourceResponse $resolved
        $path = Get-AssetPath $resolved $resource.ContentType
        $assetPaths[$key] = $path
        $bytes = $resource.Bytes
        if ($resource.ContentType -eq 'text/css') {
          $css = Get-Text $resource
          $css = Rewrite-Css $css $resolved 'assets'
          $bytes = [System.Text.Encoding]::UTF8.GetBytes($css)
        }
        [System.IO.File]::WriteAllBytes((Join-Path $pageDirectory $path), $bytes)
        $manifest.resources.Add([ordered]@{
          source = $key
          finalUrl = $resource.Url
          status = $resource.Status
          path = $path
          contentType = $resource.ContentType
          bytes = $bytes.Length
          sha256 = Get-Hash $bytes
        })
      } catch {
        $manifest.errors.Add("$key : $($_.Exception.Message)")
        return $reference
      }
    }
    if ($from -eq 'assets') { return [System.IO.Path]::GetFileName($path) }
    return "./$path"
  }

  function Rewrite-Css([string] $css, [uri] $baseUrl, [string] $from) {
    $css = [regex]::Replace($css, 'url\(\s*(["'']?)([^)"'']+)\1\s*\)', {
      param($match)
      $reference = $match.Groups[2].Value.Trim()
      $local = Resolve-Asset $reference $baseUrl $from
      return "url('$local')"
    })
    return [regex]::Replace($css, '@import\s+(["''])([^"'']+)\1', {
      param($match)
      $local = Resolve-Asset $match.Groups[2].Value $baseUrl $from
      return "@import '$local'"
    })
  }

  try {
    $documentResponse = Get-SourceResponse $sourceUrl
    $manifest.finalUrl = $documentResponse.Url
    $rawHtml = Get-Text $documentResponse
    $sourceBytes = [System.Text.UTF8Encoding]::new($false).GetBytes($rawHtml)
    [System.IO.File]::WriteAllBytes((Join-Path $pageDirectory 'source.html'), $sourceBytes)
    $manifest.document = [ordered]@{
      path = 'source.html'
      status = $documentResponse.Status
      contentType = $documentResponse.ContentType
      bytes = $sourceBytes.Length
      sha256 = Get-Hash $sourceBytes
    }
    $document = [HtmlAgilityPack.HtmlDocument]::new()
    $document.LoadHtml($rawHtml)
    $nodes = $document.DocumentNode.SelectNodes('//*')
    foreach ($node in $nodes) {
      $isResourceLink = $node.Name -eq 'link' -and $node.GetAttributeValue('rel', '') -match '\b(stylesheet|icon|manifest|preload|modulepreload)\b'
      foreach ($attributeName in @('src', 'poster', 'data-src', 'href')) {
        if ($attributeName -eq 'href' -and -not $isResourceLink) { continue }
        $attribute = $node.Attributes[$attributeName]
        if ($attribute) { $attribute.Value = Resolve-Asset $attribute.Value $sourceUrl 'page' }
      }
      foreach ($attributeName in @('srcset', 'data-srcset')) {
        $attribute = $node.Attributes[$attributeName]
        if (-not $attribute) { continue }
        $candidates = foreach ($entry in [regex]::Matches($attribute.Value, '(?:data:[^\s,]+,[^\s,]+|[^\s,]+)(?:\s+[^,\s]+)?')) {
          $candidate = $entry.Value
          if ($candidate -match '^(\S+)(\s+.*)?$') {
            (Resolve-Asset $matches[1] $sourceUrl 'page') + $matches[2]
          }
        }
        $attribute.Value = $candidates -join ', '
      }
      if ($node.Name -in @('img', 'source')) {
        if ($node.Attributes['data-src']) { [void]$node.SetAttributeValue('src', $node.GetAttributeValue('data-src', '')) }
        if ($node.Attributes['data-srcset']) { [void]$node.SetAttributeValue('srcset', $node.GetAttributeValue('data-srcset', '')) }
        $classes = $node.GetAttributeValue('class', '')
        if ($classes -match '(?<!\S)lazyload(?!\S)') {
          [void]$node.SetAttributeValue('class', [regex]::Replace($classes, '(?<!\S)lazyload(?!\S)', 'lazyloaded'))
        }
      }
      if ($node.Name -eq 'video') {
        [void]$node.SetAttributeValue('controls', 'controls')
        [void]$node.SetAttributeValue('preload', 'metadata')
      }
      $style = $node.Attributes['style']
      if ($style) { $style.Value = Rewrite-Css $style.Value $sourceUrl 'page' }
      if ($node.Name -eq 'style') { $node.InnerHtml = Rewrite-Css $node.InnerHtml $sourceUrl 'page' }
    }
    foreach ($script in @($document.DocumentNode.SelectNodes('//script'))) {
      if ($script.GetAttributeValue('type', '') -ne 'application/ld+json') { $script.Remove() }
    }
    $previewBytes = [System.Text.UTF8Encoding]::new($false).GetBytes($document.DocumentNode.OuterHtml)
    [System.IO.File]::WriteAllBytes((Join-Path $pageDirectory 'preview.html'), $previewBytes)
    $manifest.preview = [ordered]@{
      path = 'preview.html'
      bytes = $previewBytes.Length
      sha256 = Get-Hash $previewBytes
    }
  } catch {
    $manifest.errors.Add($_.Exception.Message)
  } finally {
    $manifest.external = @($manifest.external | Sort-Object)
    $manifest | ConvertTo-Json -Depth 8 | Set-Content -Path (Join-Path $pageDirectory 'manifest.json') -Encoding utf8
  }
  if ($manifest.errors.Count -gt 0) {
    throw "Capture of $page incomplete: $($manifest.errors.Count) errors. See $pageDirectory/manifest.json"
  }
  Write-Output "Captured $page ($($manifest.resources.Count) resources, $($manifest.external.Count) external references) in $pageDirectory"
}

$http.Dispose()