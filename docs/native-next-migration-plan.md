# Native Next Migration Plan

## Purpose

Migrate selected friendlyway.us pages from complete static WordPress documents
to native Next.js App Router pages without breaking URLs or unmigrated legacy
pages. Native routes take precedence over the catch-all legacy route handler.

## Current Baseline

- `app/route.ts` serves the static legacy homepage.
- `app/[...slug]/route.ts` serves all other matching static legacy documents.
- `lib/resolve-legacy-page.ts` safely resolves documents only below `legacy/`.
- `npm run build` passed on 2026-09-15.
- The application does not yet contain native page components.
- Local fonts and WordPress browser assets are already available under `public/`.

## Compatibility Contract

1. Keep the exported documents in `legacy/` unchanged until their specific
   native Next route is ready.
2. Preserve public URLs, including the canonical trailing-slash behavior.
3. Do not alter the legacy catch-all while migrating individual routes.
4. Unmatched routes must remain `404`; they must never receive the homepage.
5. Browser assets remain in `public/` at their existing URL paths.
6. Verify each native route while also checking one unrelated legacy URL and
   one representative public asset URL.

## Requested Route Inventory

| Route | Legacy state | Scope | Migration family |
| --- | --- | --- | --- |
| `/` | Full export: 10 headings, 94 images | High | Homepage composition |
| `/visitor-management-solution/` | Immediate redirect to `https://www.friendlyway.com/visitor-management-solution/` | Blocked on source content | Solution landing page |
| `/emergency-mustering-evacuation-tracking` | 20 headings, 64 images, FAQ | High | Solution landing page |
| `/products/counter-22` | 18 headings, 54 images, FAQ, product-detail modal | Medium-high | Product detail |
| `/solutions-for-manufacturing` | 17 headings, 85 images, FAQ, slider/comparison content | High | Solution landing page |
| `/pricing` | 2 headings, 41 images, pricing plans, hardware tabs/comparison | High | Dedicated pricing page |
| `/case-studies/` | Immediate redirect to `https://www.friendlyway.com/case-studies/` | Blocked on source content | Case-study archive |
| `/about-us/` | 10 headings, 72 images, office/partner/client sections | Medium | Marketing page |

The figures above count the exported document, including shared chrome. They
are useful for sizing and parity checks, not for prescribing implementation.

## Required Architecture

### Application Shell

Build a reusable native shell before converting pages:

- Responsive header, navigation, search behavior, and footer.
- Shared layout primitives: page container, section spacing, typography,
  buttons, links, media treatment, and CTA patterns.
- Local font loading and global visual tokens based on the existing theme.
- Analytics, marketing integrations, and consent policy implemented once at
  the application boundary, not copied from WordPress page scripts.

The legacy documents load 15-19 scripts per route. Only integrations that are
still required should move to the native app; WordPress and obsolete plugin
scripts should not be carried forward.

## Shared App Shell Extraction Plan

### Verified Legacy Scope

The target exports use the same structural chrome, with page-specific active
navigation and generated values causing byte-level differences:

- A dismissible welcome banner links to the current campaign and remembers
  dismissal by its release identifier in local storage.
- The header has a utility row (phone, support, contact, login, free trial,
  search, and country switcher) and a primary row (logo, hierarchical
  navigation, mobile search, contact CTA, and mobile menu trigger).
- The primary navigation has up to three levels. Its Solutions, Software,
  Hardware, Industries, Pricing, and Resources menus contain descriptive text
  and image/icon assets, not merely link labels.
- Desktop navigation reveals dropdowns; below 992px the menu opens as an
  overlay and supports nested drill-down/back navigation.
- The header becomes sticky after the banner and utility row scroll away, and
  changes height based on scroll direction.
- The footer contains international addresses, social links, sales contact
  information, Company and Explore link columns, copyright, legal links, and
  a Cookie Settings trigger.

### Decisions Before Coding

Resolve these product decisions in a short written decision record before
extracting the shell:

| Decision | Options to resolve |
| --- | --- |
| Navigation coverage | Carry the full current navigation now, or link only to native-ready URLs while remaining links continue to legacy pages. The recommended path is full navigation with existing URLs because the legacy fallback preserves those destinations. |
| Search | The legacy form submits `?s=` to `/`, but the current root handler serves the homepage regardless. Define a native search-results contract before exposing a search submission; do not reproduce a non-working control. |
| Welcome banner | Confirm whether the current GSX campaign, its content, target, release ID, and expiry should be retained, replaced, or omitted. Store it as data, never embedded in a component. |
| Sticky behavior | Preserve the direction-sensitive legacy behavior or simplify to a consistently sticky primary row. Treat this as an intentional UX decision, not accidental parity drift. |
| Country/pricing targeting | Legacy code asks a WordPress AJAX endpoint for visitor country to alter pricing visibility. Define a privacy-compliant server, edge, or client strategy, or remove this targeting intentionally. |
| Consent and analytics | Identify the owner/configuration of Cookiebot, HubSpot, and Google Analytics; load them only after the approved consent signal. |
| Footer email | Replace Cloudflare-obfuscated email markup with an approved direct `mailto:` address or the agreed contact destination. |

### Target Component and Data Boundaries

```text
content/
  site.ts                    # Brand, contacts, locales, campaign, footer, menu tree
components/
  app-shell/                 # Server composition only
  welcome-banner/            # Client: dismissal persistence
  site-header/               # Server: active route and data assembly
  desktop-navigation/        # Client: keyboard/focus menu behavior
  mobile-navigation/         # Client: overlay and drill-down state
  site-search/               # Client only when a search destination exists
  site-footer/               # Server: semantic address and link content
  cookie-settings-button/    # Client: consent-provider adapter
  hubspot-form/              # Client: consent-gated HubSpot form embed
lib/
  navigation.ts              # Active-branch and internal/external-link helpers
```

Use one recursive navigation-item data type that supports a label, optional
link, description, media, external target, and children. Do not duplicate the
desktop and mobile navigation trees. Pass the current pathname from each native
route or layout boundary to derive `aria-current` and expanded active branches.

Every component lives in `components/{component-name}/` and exports its public
API from `index.ts`. Consumers import from the folder, never an implementation
file. Keep the component TSX, CSS Module, tests, and implementation-only types
inside that folder. The barrel exposes only what another component or route
needs, preventing accidental dependence on private implementation details.

### Styling Architecture

Native CSS is part of every component migration. It is not a final polish pass.
The legacy theme's global selectors, including `.container`, `.row`, `.header`,
and WordPress block classes, must not be imported into the Next component tree:
they can change the output of legacy documents and create accidental coupling
between unrelated native components.

Use this ownership model:

```text
app/
  globals.css                         # Fonts, reset, tokens, global a11y only
components/
  site-header/
    index.ts                            # Public exports
    site-header.tsx
    site-header.module.css              # Header and desktop menu only
  mobile-navigation/
    index.ts                            # Public exports
    mobile-navigation.tsx
    mobile-navigation.module.css        # Mobile overlay and drill-down only
  site-footer/
    index.ts                            # Public exports
    site-footer.tsx
    site-footer.module.css              # Footer only
  welcome-banner/
    index.ts                            # Public exports
    welcome-banner.tsx
    welcome-banner.module.css           # Banner only
  icon-grid/
    index.ts                            # Public exports
    icon-grid.tsx
    icon-grid.module.css                # Section variant styles
  about-us-page/
    index.ts                            # Public exports
    about-us-page.tsx
    about-us-page.module.css            # Page-only composition adjustments
```

Keep [app/globals.css](app/globals.css) intentionally small:

- `@font-face` declarations, normalized box sizing/margins, color and spacing
  tokens, responsive container custom properties, base typography, link/focus
  styles, `prefers-reduced-motion`, and screen-reader-only utilities.
- No `.header`, `.footer`, `.container`, `.row`, `.block-*`, page, card, menu,
  or component layout selectors.
- Move the existing welcome-banner rules out of `globals.css` into the banner
  module when that component is extracted, preserving only tokens globally.

Use CSS Modules for all native component and page styles. Class names should
describe the native component API, such as `root`, `utilityRow`, `primaryRow`,
`menuPanel`, `cardGrid`, and `isOpen`; do not carry forward WordPress BEM names
or page-specific generated identifiers. Use `data-*` attributes and ARIA state
selectors where component state affects styling.

Establish tokens from measured legacy values before styling components:

```css
:root {
  --color-accent: #f96240;
  --color-ink: #111;
  --color-surface: #fff;
  --font-body: "Open Sans", sans-serif;
  --font-display: Poppins, sans-serif;
  --content-width: 1168px;
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
}
```

Add tokens only when a second component uses them. Component-specific values
remain local instead of expanding a speculative design-token system.

### CSS Extraction Sequence

1. Audit the legacy stylesheet for the selected component and capture only its
   direct selectors, variables, breakpoints, and state styles. Also capture
   page-level inline styles that intentionally modify that component.
2. Translate those measurements into the owning CSS Module while replacing
   legacy global/layout dependencies with module-local grid or flex layouts.
3. Render the component in the native preview route and compare it at the
   legacy breakpoints (475px, 576px, 768px, 992px, 1200px where applicable).
4. Add base tokens to `globals.css` only after a concrete duplicated value is
   observed. Do not paste theme CSS or inline WordPress styles into modules.
5. Check that native component styles do not alter an unrelated legacy route;
   CSS Modules and a narrow global stylesheet make this mechanically testable.
6. Retire the legacy CSS rules only after no legacy document depends on them.

### CSS Acceptance Gate

For each migrated component:

1. Layout, typography, spacing, colors, borders, media cropping, hover/focus,
   and open/closed states match the approved reference at supported widths.
2. Component styles are imported only by their owner and have no global
   selectors except documented accessibility utilities in `globals.css`.
3. No horizontal overflow, layout shift, or clipped menu/dialog content occurs
   at the smallest and largest supported viewport.
4. Native styles leave both `/about-us/` and a second legacy route visually and
   functionally unchanged.

### Incremental Extraction Sequence

1. Capture desktop and mobile reference screenshots for the header, open each
  top-level desktop dropdown, open a third-level dropdown, open the mobile
  menu, and capture the footer. Record the 992px transition and sticky states.
2. Add `content/site.ts` with the approved contacts, locales, campaign, footer
  links, social links, and complete navigation tree. Validate this data against
  the legacy HTML; do not introduce components yet.
3. Add server-only shell primitives: `AppShell`, `SiteHeader` static structure,
  `SiteFooter`, and a scoped shell stylesheet. Use semantic `header`, `nav`,
  `main`, `footer`, `address`, lists, and links. Do not import the WordPress
  theme stylesheet into native rendering.
4. Add the desktop navigation client boundary. It must support pointer use,
  keyboard open/close, focus management, Escape, outside click, and visible
  focus without relying on hover alone.
5. Add the mobile navigation client boundary. Use a dialog-like overlay with
  focus containment, scroll locking, Escape/overlay close, drill-down/back
  controls, and deterministic close-on-route-change behavior.
6. Add the welcome banner client boundary once campaign policy is known. Render
  it server-side initially to avoid layout shift, then hide it after hydration
  only when the persisted release identifier matches. Use a real button for
  dismissal and preserve an accessible campaign link.
7. Add sticky-header behavior only after the non-sticky shell passes parity.
  Prefer CSS `position: sticky`; add small client scroll state only if the
  approved direction-sensitive behavior remains a requirement. Respect
  `prefers-reduced-motion`.
8. Integrate the search control after its route contract exists. Until then,
  omit it from native chrome or make it a non-submitting UI only when product
  approves that temporary behavior.
9. Add the consent-provider adapter and conditionally loaded analytics/form
  integrations. The Cookie Settings control must fail harmlessly when no
  provider has loaded.
10. Mount `AppShell` around the first native page only. Do not change the root
   layout in a way that affects full-document legacy route responses.

### Shell Acceptance Gate

The shared shell is ready to support the first native page when:

1. Desktop and mobile match approved references at the legacy breakpoints.
2. Every desktop menu path and every mobile drill-down path is usable using
  keyboard only; focus never escapes an open mobile menu.
3. Navigation items correctly distinguish internal Next links and external
  URLs, including locale, cloud-login, helpdesk, and social destinations.
4. The active route has correct visual treatment and `aria-current` without
  content-specific class names.
5. Banner dismissal persists only for its release ID and does not cause a
  server/client hydration mismatch or cumulative layout shift.
6. Sticky behavior neither covers anchors nor causes content to jump while
  scrolling, resizing, opening menus, or closing the banner.
7. Footer addresses, telephone links, legal links, and social-link labels are
  semantically correct and responsive.
8. Consent-sensitive integrations do not load before consent, and missing
  third-party providers do not throw browser-console errors.
9. An unrelated legacy route and public asset still return their original
  responses after the first native shell-backed route is added.

### Content Model

Create typed page data in a predictable location such as `content/`:

```text
content/
  site.ts
  home.ts
  marketing-pages.ts
  products.ts
  solutions.ts
  pricing.ts
  case-studies.ts
components/
  {component-name}/
    index.ts
    {component-name}.tsx
    {component-name}.module.css
```

Page-specific editorial text, asset references, alt text, links, CTAs,
metadata, structured data, and section order belong in typed data. Route files
remain thin server components that select data and render a page-family
component. Use discriminated section types where blocks differ materially.

### Shared Components

The legacy exports indicate these reusable blocks:

- Hero/introduction, alternating content-media sections, icon grids, logo and
  client strips, product and solution card grids, object/media galleries, and
  feedback/contact CTAs.
- Testimonials, case-study cards, partner and office listings.
- Accessible FAQ accordion with matching FAQ JSON-LD when applicable.
- Small client components for tabs, carousels, comparison controls, navigation
  menus, search, and the Counter 22 detail modal.

Use server components by default. Isolate only interactive behavior behind
small client-component boundaries.

For recurring editorial typography, use small server primitives instead of a
fixed title-and-copy section: `section-heading` renders a requested `h1`,
`h2`, or `h3` with display typography, and `paragraph` renders one `p` with
body typography and adjacent-paragraph rhythm. The consuming page component
retains ownership of its section layout, spacing, background, media, and CTA.
Do not turn either primitive into a general WordPress/HTML renderer.

### HubSpot Form Integration

Provide one reusable `components/hubspot-form/` client component for approved
HubSpot forms. Page components render their static contact copy and layout on
the server, then place `HubSpotForm` where the form belongs; no page may copy
the WordPress loader snippet or call HubSpot APIs directly.

The public API should receive a typed, immutable configuration object from
page data:

```ts
interface HubSpotFormConfig {
  readonly portalId: string;
  readonly formId: string;
  readonly region?: string;
  readonly formName: string;
  readonly consentCategory: "functional" | "marketing";
  readonly context?: {
   readonly pageName?: string;
   readonly pageUri?: string;
  };
}
```

Keep form IDs, portal IDs, consent categories, and optional HubSpot context in
typed `content/` data. Do not embed those values in page markup, read them from
environment files in the browser, or reproduce WordPress session-storage and
analytics side effects unless they have separate approval.

`HubSpotForm` owns only the provider boundary:

1. Render an accessible named region with a stable reserved height and a
  loading state in the initial HTML.
2. Ask the consent adapter whether the configured category is granted; do not
  request `forms/embed/v2.js` or create `window.hbspt` before it is.
3. Inject the HubSpot script once per document, deduplicate concurrent form
  mounts, and wait for it to load before calling `hbspt.forms.create`.
4. Create one form per component instance against a component-owned container;
  cleanup must remove only that instance's rendered content and listeners.
5. Show a non-throwing blocked state when consent is absent, with a control
  that opens Cookie Settings when the adapter is available. Show a retryable,
  accessible error state when the provider fails to load or initialize.
6. Subscribe to consent changes so a blocked form can load after approval and
  an approved form is removed when consent is revoked. Never submit, proxy,
  or store form data in Next.js unless a separately approved first-party form
  design replaces HubSpot.

The component must accept a provider adapter rather than import a specific
Cookiebot global. The adapter exposes the minimum operations needed to read
the category state, subscribe to changes, and open settings. Until a consent
provider is approved, use an adapter that reports no consent and leaves the
form in its blocked state without browser errors.

Add focused tests for script deduplication, delayed consent, consent revocation,
provider-load failure, initialization failure, retry, and multiple forms on one
page. Browser validation must confirm that no HubSpot request occurs before
consent and that each approved instance renders once. The About Us form becomes
the first consumer only after its portal/form IDs and consent category are
approved.

### SEO and Metadata

For every native route, recreate through Next metadata and JSON-LD:

- Title, description, canonical URL, Open Graph, Twitter metadata, and social
  image dimensions/alt text.
- Breadcrumb schema and page-specific schema such as `FAQPage`, `Product`, or
  `AboutPage` where supported by the source content.
- Existing robots directives require an explicit launch decision. The legacy
  exports currently include `noindex`; do not silently change production
  indexing behavior during the conversion.

## Delivery Sequence

### Phase 0: Source and Parity Capture

1. Capture desktop and mobile reference screenshots for all six full exports.
2. Record metadata, schema, headings, links, assets, and interactions for each
   route in a parity checklist.
3. Obtain an approved content and SEO source for the two redirect-only URLs:
   `/visitor-management-solution/` and `/case-studies/`.
4. Confirm analytics, HubSpot/form ownership, consent requirements, canonical
   host, and production indexing policy.

### Phase 1: Foundation

1. Implement the app shell and foundational CSS without importing legacy
   document styles globally.
2. Add content schemas and generic section primitives.
3. Add a metadata/schema helper and a route-level parity-test harness.
4. Ship no native page route until the shell is responsive and accessible.

### Phase 2: First Representative Page

Migrate `/about-us/` first. It exercises the shared shell and standard
marketing sections without requiring pricing logic or the product modal.

Deliverables:

- `app/about-us/page.tsx` with typed data.
- Clients, team, solution/hardware, partners, offices, and contact sections.
- Native metadata and `AboutPage`/breadcrumb schema.
- Desktop/mobile visual and accessibility parity evidence.

### Phase 3: Product Detail

Migrate `/products/counter-22` after the common blocks are stable.

Deliverables:

- Product-detail renderer and typed product data.
- Accessible FAQ accordion and FAQ schema.
- Keyboard-accessible dialog for the product-card detail modal.
- Product media, applications, industries, related products, and contact CTA.

### Phase 4: Solution Landing Family

Migrate `/emergency-mustering-evacuation-tracking` as the representative
solution landing page, then reuse that renderer for
`/solutions-for-manufacturing`.

Additional section variants:

- Emergency mustering: timeline/how-it-works, integrations, use cases, FAQ.
- Manufacturing: solution cards, media slider, comparison list, statistics,
  stories, industry focus, FAQ.

### Phase 5: Dedicated Pricing Experience

Migrate `/pricing` after shared controls are proven.

Deliverables:

- Typed plan, feature, hardware, and CTA data.
- Accessible tab interface for license/hardware views.
- Responsive comparison tables that remain usable on narrow screens.
- Clear contact/quote flow with agreed HubSpot or internal form ownership.

### Phase 6: Homepage

Migrate `/` after the shared blocks exist. Compose the page from typed section
data instead of reproducing WordPress markup. Its large image/link count makes
it a final integration page rather than the best initial route.

### Phase 7: Redirect-Only Routes

Build `/visitor-management-solution/` and `/case-studies/` only after Phase 0
provides authoritative content. For case studies, model archive filters,
pagination, cards, and detail links if present in the approved source.

## Per-Route Definition of Done

Before retiring a legacy route, verify:

1. Native page owns the existing public URL, while unrelated fallback URLs
   still resolve to their legacy documents.
2. Desktop and mobile screenshots match the approved visual/content baseline.
3. Heading hierarchy, copy, images, alt text, links, CTAs, and section order
   match the approved source.
4. Navigation, search, menus, tabs, accordions, sliders, modals, and forms are
   keyboard accessible and have useful loading, error, and empty states.
5. Metadata, schema, canonical URL, robots directives, HTTP status, and social
   previews match the approved launch policy.
6. Browser console and network requests have no unexpected errors or missing
   assets.
7. Focused tests and `npm run build` pass.

## Testing Strategy

- Unit-test content schemas, metadata/schema generation, and route data
  selection.
- Add component tests for keyboard interaction in accordions, dialogs, tabs,
  menus, and comparison controls.
- Add route tests for HTTP status and metadata output.
- Use browser checks at desktop and mobile widths for visual parity, asset
  loading, accessibility behavior, and console errors.
- Retain the existing legacy resolver and route-handler tests throughout the
  staged cutover.

## Risks and Decisions

| Item | Required decision or mitigation |
| --- | --- |
| Redirect-only pages | Supply approved content, assets, metadata, and canonical strategy before implementation. |
| SEO indexing | Confirm whether legacy `noindex` remains intentional at native launch. |
| External integrations | Identify the required HubSpot, analytics, tracking, form, and consent integrations; do not copy all WordPress scripts. |
| Visual parity | Capture references before modernizing styles, then approve any intentional design changes separately. |
| Pricing conversion | Confirm price source of truth, currency/region logic, sales routing, and whether values are editorial or dynamic. |
| Case-study archive | Confirm listing source, filters, pagination, and ownership of individual case-study detail routes. |
| Asset cleanup | Defer removal of WordPress styles, JavaScript, and assets until every dependent legacy route is migrated. |

## Final Cleanup

Remove `legacy/`, its catch-all route handlers, and unused WordPress assets
only after all public pages are native and a full URL/asset crawl passes.
Replace static sitemap artifacts with Next-generated sitemap routes at that
point, not earlier.