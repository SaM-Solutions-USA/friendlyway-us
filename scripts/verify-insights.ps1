$html = (Invoke-WebRequest -Uri "http://localhost:3178/" -UseBasicParsing -TimeoutSec 20).Content
$checks = [ordered]@{
  link1 = $html -match 'href="/meet-friendlyway-at-gsx-2026"'
  link2 = $html -match 'href="/visitor-and-workforce-access-management-for-manufacturing"'
  link3 = $html -match 'href="/what-are-visitor-check-in-systems"'
  d1 = $html -match 'datetime="2026-06-11"'
  d2 = $html -match 'datetime="2026-02-27"'
  d3 = $html -match 'datetime="2026-02-16"'
  lbl1 = $html -match '>Jun 11, 2026<'
  lbl2 = $html -match '>Feb 27, 2026<'
  lbl3 = $html -match '>Feb 16, 2026<'
  img1 = $html -match '/wp-content/uploads/890x530\.webp'
  img2 = $html -match '/wp-content/uploads/title-890x530-11\.webp'
  img3 = $html -match '/wp-content/uploads/title-890x530-10\.webp'
  ctaText = $html -match 'VIEW MORE\s*NEWS'
  ctaHref = $html -match 'href="/news/"'
  t1 = $html -match 'Meet friendlyway at GSX 2026 in Atlanta'
  t2 = $html -match 'Secure Every Entry: Smarter Visitor and Workforce Access Management for Manufacturing'
  t3 = $html -match 'What Are Visitor Check-In Systems\?'
}
$checks.GetEnumerator() | ForEach-Object { Write-Output ("{0}={1}" -f $_.Key, $_.Value) }
$iInsights = $html.IndexOf('Insights and News')
$iStories  = $html.IndexOf('Proven Success and Measurable Results')
$iLiveDemo = $html.IndexOf('>Live Demo<')
Write-Output ("ORDER_stories_before_insights=" + ($iStories -lt $iInsights))
Write-Output ("ORDER_insights_before_livedemo=" + ($iInsights -lt $iLiveDemo) + " (insights=$iInsights livedemo=$iLiveDemo)")
