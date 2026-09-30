$html = (Invoke-WebRequest -Uri "http://localhost:3178/" -UseBasicParsing -TimeoutSec 20).Content
$start = $html.IndexOf('Insights and News')
$seg = $html.Substring($start, 4200)
# Extract the <ul ...>...</ul> that contains the articles
$ulStart = $seg.IndexOf('<ul')
$ulEnd = $seg.IndexOf('</ul>')
$ul = $seg.Substring($ulStart, $ulEnd - $ulStart + 5)
Write-Output ("UL_COUNT_li=" + ([regex]::Matches($ul,'<li').Count))
Write-Output ("H3_INSIDE_A=" + ($ul -match '<a [^>]*href="[^"]*"[^>]*>.{0,400}?<h3'))
Write-Output ("TIME_COUNT=" + ([regex]::Matches($ul,'<time').Count))
Write-Output ("CTA_IS_LI=" + ($ul -match '<li[^>]*>\s*<a [^>]*href="/news/"'))
# Confirm no nested interactive: each <a> contains exactly one h3
$h3count = ([regex]::Matches($ul,'<h3').Count)
$acount = ([regex]::Matches($ul,'<a ').Count)
Write-Output ("H3_COUNT=$h3count A_COUNT=$acount")
