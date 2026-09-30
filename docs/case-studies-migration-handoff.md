# Case Studies Migration Handoff

## Route And Source

- Target archive: `/case-studies/` on the standalone `friendlyway.us` site.
- Current `.us` export: `legacy/case-studies/index.html` redirects to
  `https://www.friendlyway.com/case-studies/`. Keep the export unchanged until
  the native archive passes its cutover gate.
- Source capture: `artifacts/live-source/case-studies/source.html` is the
  untouched `.com` response; `preview.html` resolves deferred images for
  static review, and `manifest.json` records provenance and asset hashes.
  Refresh with `./scripts/capture-regional-pages.ps1 -Pages case-studies`.
  Captures are ignored staging data, not deployable browser assets.
- The static preview's layout and media were visually approved on 2026-09-28;
  its disabled scripts do not establish filter, pagination, or form behavior.

## Archive Inventory And Route Gaps

The source H1 is "Cases". The archive shows an All filter plus five linked
industries: Manufacturing, Public Sector, Tourism & Hospitality, Retail, and
Logistics. Its first page has ten distinct story detail URLs, a page-two link
(`.../case-studies/page/2/`), and a "Live demo and product consultation"
section. Filter and pagination URLs are navigable routes in the `.com` source,
not evidence of a client-side filter or endless scrolling. The two HTML forms
submit searches to the `.com` root; the consultation area depends on HubSpot.

Do not assume the `.us` fallback supplies these destinations. The existing
`legacy/case-studies/industries/` tree has four industry folders but no
Logistics folder; `legacy/case-studies/page/2/` is absent. Two of the first
page's captured story URLs, automated yard logistics at Spreenhagener and
digital check-in for Muller, have no corresponding `.us` legacy document.
Audit every category, pagination, and story URL for content, redirect behavior,
and ownership before pointing a native card or filter at it. Define whether
the first migration includes native detail pages, approved regional legacy
exports, or explicitly approved external links; do not silently turn `.us`
card clicks into `.com` navigation.

## SEO Ownership

The source title is "Cases - friendlyway", description is
"Cases Archive - friendlyway", canonical and `og:url` point to `.com`,
Open Graph type is `article`, and robots is index/follow. The source has a
large Twitter card but no `og:image` field. Its JSON-LD graph includes Place,
Organization, WebSite, BreadcrumbList, and CollectionPage.

Approve a `.us` archive canonical, indexing policy, social preview image (or
an explicit decision not to have one), and CollectionPage/breadcrumb schema.
Decide canonical and indexability for industry and paginated URLs separately;
do not reuse the root canonical for distinct content without an SEO decision.
Remove `.com` graph identifiers and links unless they are intentionally
external. Ensure the native route overrides bootstrap robots metadata as
approved.

## Implementation Sequence

1. Approve the regional story inventory, category taxonomy, ordering,
   pagination size, missing destinations, demo form ownership, and URLs.
   Capture category/page-two/detail references separately where the root
   snapshot is insufficient; record intentional differences from `.com`.
2. Model cards, image/alt text, excerpts, categories, and destinations as
   typed route-owned data. Add `app/case-studies/page.tsx`, `content.ts`,
   `types.ts`, `presenter.ts`, and `seo.ts` for the archive. Reuse shared
   story-grid primitives only where they support real linked archive cards.
3. Implement industry and page routes as needed using one archive renderer
   and route data selection. Make filter links, current state, prev/next,
   empty results, and `404` behavior keyboard accessible and predictable.
4. Implement or approve every visible story destination before cutover;
   ensure cards do not lead to the old `.com` site or unhandled `.us` 404s.
5. Move approved capture assets to `public/` and use the native consent-gated
   form adapter. Do not ship WordPress search, analytics, or plugin scripts.

## Acceptance Gate

- Root archive, each approved category, page two, and every first-page story
  link resolve to intentional destinations with correct back/forward behavior;
  unknown archive routes return `404`.
- Desktop/mobile cards, images, headings, industry state, pagination, and
  consultation section match the approved source. Filters and pagination
  function without relying on WordPress JavaScript.
- Metadata and schema describe the actual `.us` archive and distinct listing
  routes. Forms have consent, submission, loading, success, and error states;
  no unexpected `.com` navigation or network requests remain.
- An unrelated legacy URL and a representative public asset still work, with
  no missing assets or console errors. Focused route/data/SEO checks and
  `npm run build` pass before replacing the redirect-only export.