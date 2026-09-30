# Visitor Management Solution Migration Handoff

## Route And Source

- Target: `/visitor-management-solution/` on the standalone `friendlyway.us` site.
- Scope: replace only this route's redirect with native page content. Reuse the
  existing shared shell and form integration; do not change site-wide navigation,
  search, consent infrastructure, or other routes for this migration.
- Current `.us` export: `legacy/visitor-management-solution/index.html` is only
  a redirect to `https://www.friendlyway.com/visitor-management-solution/`.
  Leave the export unchanged; the specific native `page.tsx` now takes
  precedence over the legacy fallback.
- Current native route is unindexed and uses the existing `AppShell` and
  `SolutionHero` in a warm-toned `ContentSection`, with local video, MP4
  fallback, poster, and bespoke play/pause control. Featured Clients uses the
  existing `LogoMarquee` with six local logos; Proven at Scale uses the existing
  `StatisticsGrid` with three source metrics. How It Works uses the shared
  `AlternatingFeatureList` with seven steps, five images, and two local WebM
  videos with generated posters and the shared play/pause control. Its Video
  Chat action is an inline link, while pricing is a centered primary CTA after
  the seven steps. Why friendlyway Visitor Management? uses the existing
  `BenefitIconGrid` for six icon-and-label benefits, followed by the captured
  Millennium Print Group review using shared testimonial data. Contact Us uses the existing
  consent-gated `HubSpotForm` alongside Dmitry Koshkin's existing `.us` profile,
  followed by the six captured FAQ items in the shared accordion. The free-trial
  action uses the existing hero's outline variant; "Book a Demo" now links to
  the on-page contact section. Remaining sections and SEO are not yet at parity;
  keep `noindex` until the acceptance gate is complete and indexing is approved.
- Source capture: `artifacts/live-source/visitor-management-solution/source.html`
  is the untouched `.com` response. `preview.html` resolves deferred media for
  static review; `manifest.json` lists source URLs, hashes, and dependencies.
  These captures are ignored staging data and can be refreshed with
  `./scripts/capture-regional-pages.ps1 -Pages visitor-management-solution`.
- The static preview's layout and media were visually approved on 2026-09-28.
  Its disabled scripts do not establish interaction or form parity.

## Source Inventory

The page has one H1, "friendlyway Visitor Management", and these content bands
in order: hero with check-in video; Featured Clients; Proven at Scale; How It
Works (seven steps, including video chat, agreements, PIAM, and wayfinding);
Why friendlyway Visitor Management?; customized visitor experiences;
off-the-shelf scenarios; platform features; Why Choose friendlyway?; hardware;
selected success stories; About Us; news and insights; Contact Us; and
Frequently Asked Questions (six items).
The capture includes three `.webm` videos and locally mirrored same-host media.
Do not carry over WordPress lazy-load placeholders or autoplay assumptions.

Two HTML forms in the export submit searches to the `.com` root; they are not
part of this route migration. Do not reproduce them or alter the shared shell's
search behavior. The contact section is a HubSpot integration, not a standalone
HTML lead form. The capture also records HubSpot and Cloudflare Insights script
URLs as external resources. Confirm form ID, consent category, and submission
destination for this page. Inventory story, product, free-trial, news, and CTA
links; preserve internal `.us` destinations where they exist, and make
intentional decisions for destinations available only on `.com`.

The `.com` contact capture shows Soeren Seybert and HubSpot portal `20121678`,
form `7805242e-8bcd-489c-bb41-76d55919be85`. Per the regional direction,
the native route instead uses Dmitry Koshkin and the existing `.us` portal
`50845293`, form `1d974790-256b-4ef6-860e-bced18225498` with functional
consent. Verify the regional destination and a real submission before parity
approval; the static capture cannot establish submission behavior.

## SEO Ownership

The source title is "Visitor Management System - friendlyway" and its
description begins "Our Visitor Management solution lets you easily welcome
guests into your facility". Its `canonical` and `og:url` point to `.com`, its
Open Graph type is `article`, and its social image is
`/wp-content/uploads/visitor-management-solution-for-social.jpg` on `.com`.
The source robots policy is index/follow. Its JSON-LD graph includes Place,
Organization, WebSite, ImageObject, BreadcrumbList, WebPage, and Service.

For the native route, set a `.us` canonical and absolute social image URL,
review title/description and indexing with the regional content owner, and
emit only schema supported by the `.us` page. Do not copy `.com` organization
IDs, author/article claims, search actions, or URLs without checking the
corresponding `.us` behavior. Confirm that the chosen social image is served
locally under `public/` and that the global bootstrap robots policy is
overridden intentionally.

## Implementation Sequence

1. Approve regional copy, images, video, CTA destinations, indexing, and form
   ownership using the captured page as the parity reference. Record any
   approved deviations from the source.
2. Add route-owned `content.ts`, `types.ts`, `presenter.ts`, and `seo.ts` under
  `app/visitor-management-solution/`, following the existing native solution
  routes: typed editorial data in `content.ts`, component prop mapping in
  `presenter.ts`, and metadata/schema in `seo.ts`. Keep `page.tsx` as the thin
  server composition of these data-backed sections and mount the existing
  `AppShell` via route layout without modifying it. Keep editorial content in
  route data and section order in `page.tsx`, as in the existing solution routes.
3. Compose the page with existing shared layout and solution-page hero, logo,
  feature, benefit, story, media, contact, and FAQ components and their
  established props. Extend `SolutionHero` to accept video media for the hero,
  and `AlternatingFeatureList` to accept video media in the two "How It Works"
  steps that need it. Use typed image/video media variants while keeping the
  existing image-based callers working unchanged. The hero and the two
  "How It Works" videos use one shared keyboard-accessible play/pause control
  instead of native controls.
  Use a poster and avoid autoplay so reduced-motion users stay in control;
  do not
  create route-specific hero or journey replacements. Reuse existing section
  types and presenter conventions; add a route-specific component only when
  another captured section cannot be represented faithfully by an existing
  API. Do not introduce a new page renderer or content system for this route.
4. Move approved browser assets to stable paths in `public/`; do not refer to
   the ignored capture directory at runtime. Use real media URLs, accessible
   controls, poster/loading behavior, and reduced-motion handling for video.
5. Render the existing consent-gated `HubSpotForm` with this route's approved
  settings; do not build a new form integration or change shared consent
  infrastructure. Do not copy WordPress, analytics, or search scripts into
  the native route.

## Acceptance Gate

- `/visitor-management-solution/` serves the native page while an unrelated
  legacy URL and a representative public asset still work; an unknown URL
  remains `404`.
- Desktop/mobile section order, headings, copy, media, alt text, link targets,
  focus states, and FAQ behavior match the approved baseline. All three
  videos have usable controls and no blank or placeholder-only frames.
- This route's CTA, story, product, and lead-form destinations are deliberate
  and usable; verify the existing HubSpot component's consent and loading
  states and test an approved form submission through success and error paths.
- Metadata, canonical, robots, social preview, and Service/WebPage schema use
  approved `.us` values. No missing assets, unexpected console/network errors,
  or unintended requests to `.com` occur.
- Focused content/SEO/interaction checks and `npm run build` pass before the
  redirect-only export is considered retired.