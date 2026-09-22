# About Us Migration Handoff

> **Status (2026-09-22): complete and archived.** `/about-us/` is a native
> route. This document remains as its migration record; active site work is
> tracked in `docs/native-next-migration-plan.md`.

## Goal

Replace the static legacy document at `/about-us/` with a native App Router
page that matches its approved content, visual behavior, accessibility, and
metadata while leaving every other legacy route untouched.

This is the first native editorial page after the shared application shell.
The shell is mounted by `app/about-us/layout.tsx`; this work owns only the
contents rendered inside its `main` element.

## Boundaries

### In scope

- The page content in `legacy/about-us/index.html`, in its existing order.
- Typed About Us editorial data, media references, links, and metadata.
- Native CSS Modules and page-specific responsive behavior.
- The approved HubSpot form integration through the reusable `hubspot-form`
  component.
- AboutPage and BreadcrumbList structured data.

### Out of scope

- Changes to `app/route.ts`, `app/[...slug]/route.ts`, `legacy/`, or public
  asset URLs.
- Shared header, footer, navigation, search, welcome banner, or consent
  implementation changes except the approved integration points required by
  the form.
- Copying WordPress, jQuery, Owl Carousel, HubSpot, analytics, or Cloudflare
  scripts from the legacy document.
- Metadata launch/indexing decisions not approved for the route.

## Legacy Page Inventory

The legacy page comprises the following sequence after shared chrome:

| Order | Legacy content | Native responsibility |
| --- | --- | --- |
| 1 | Discover friendlyway image | `about-hero` |
| 2 | H1, company introduction, three proof points | `company-intro` |
| 3 | Fourteen client logos in a continuous strip | `logo-marquee` |
| 4 | End-to-end solutions editorial section | `section-heading` + `paragraph` |
| 5 | SMB and enterprise editorial section | `section-heading` + `paragraph` |
| 6 | European leadership profiles | `team-grid` |
| 7 | US leadership profiles | `team-grid` |
| 8 | Seven software-solution cards and platform CTA | `solution-card-grid` |
| 9 | Four hardware offering cards and product CTA | `product-grid` |
| 10 | Seven partner logos | `partner-grid` |
| 11 | Four office/contact cards | `office-grid` |
| 12 | Contact copy, managing-director profile, and form | `contact-panel` + `hubspot-form` |

The legacy image and logo files are already served from `public/` at their
existing `/wp-content/uploads/...` paths. Native components must retain those
URLs rather than duplicate assets.

## Component Boundaries

Place the About Us UI under `components/about-us/{component-name}/`, with an
`index.ts` public export, implementation file, CSS Module, and any
component-owned prop types. Shared UI remains under `components/shared/`.
Route content must not import component types; `app/about-us/presenter.ts`
maps the route's content model to these component props.

```text
components/
  about-us/
    about-us-page/           # Server page composition and section rhythm
    about-hero/              # Server hero image
    company-intro/           # Server intro copy and proof-point row
    team-grid/               # Server people profiles, used twice
    solution-card-grid/      # Server linked/unlinked solution cards and CTA
    partner-grid/            # Server partner-logo grid
    office-grid/             # Server address and telephone cards
  shared/
    logo-marquee/            # Client only if continuous scrolling is retained
    section-heading/         # Server semantic h1-h3 typography primitive
    paragraph/               # Server body-copy typography primitive
    product-grid/            # Server hardware cards and CTA
    contact-panel/           # Server contact copy and person profile
    hubspot-form/            # Client consent-gated provider adapter
```

Do not create a generic WordPress-derived `block-icons` abstraction. The
legacy icon, team, and solution variants differ in layout and semantics;
`team-grid` and `solution-card-grid` are the only meaningful shared patterns
on this page.

## Content Section Handoff

The legacy page assigns unrelated top and bottom padding to every block. That
approach creates accidental double spacing when a reusable component such as
`logo-marquee` is inserted or moved. Introduce shared `content-section` as the
native outer-layout primitive instead.

`ContentSection` owns the full-width section band, optional background tone,
1168px content container, 16px horizontal gutter, responsive vertical padding,
and optional spacing between its immediate children. Content components own
only their internal layout: heading-to-grid spacing, card gaps, portrait/text
relationships, CTA offsets, and media dimensions.

### Public API

```ts
interface ContentSectionProps {
  readonly as?: "section" | "div" | "aside";
  readonly headingId?: string;
  readonly width?: "content" | "full";
  readonly paddingBlock?: "none" | "sm" | "md" | "lg" | "xl";
  readonly paddingBlockStart?: "none" | "sm" | "md" | "lg" | "xl";
  readonly paddingBlockEnd?: "none" | "sm" | "md" | "lg" | "xl";
  readonly gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  readonly tone?: "default" | "muted";
  readonly bleed?: "none" | "background";
  readonly children: ReactNode;
}
```

- `as` defaults to `section`. Use `div` only when a parent section already
  supplies the landmark, such as the two regional team grids.
- `headingId` maps to `aria-labelledby`; the consumer owns the heading and its
  semantic level.
- `width="content"` is the default 1168px container. `full` removes the
  container constraint and its gutter.
- `paddingBlock` sets both block edges. `paddingBlockStart` and
  `paddingBlockEnd` override it for transitions such as hero-to-intro.
- `gap` creates a vertical stack gap only between direct children. It does not
  reset paragraph margins or replace internal component layout.
- `tone="muted"` provides the future contact-panel background. With
  `bleed="background"`, the background fills the viewport while content stays
  constrained to `width="content"`.

Start with the following responsive scale, kept inside the CSS Module until a
second page confirms the values: `none` 0, `xs` 8px, `sm` 24px, `md` 40px,
`lg` 64px, and `xl` 96px. Reduce `md` through `xl` at the 575px breakpoint.

### Refactor Sequence

1. Create `components/content-section/` with the API above, CSS Module, and
   barrel export. Do not add global section-spacing selectors.
2. Convert current About Us content component roots from `section` to `div`
   and remove their outer width, horizontal gutter, and block padding. Preserve
   semantic substructure and component-internal gaps.
3. Use `ContentSection` in `about-us-page` for every top-level page section.
   Keep the editorial heading/paragraph map inline; it has one use and does not
   justify an `editorial-sections` component.
4. Group the "Meet Our Friendly Team" heading and both regional `team-grid`
   instances in one `ContentSection`, using `gap` for their shared rhythm.
5. Apply explicit padding variants to hero, introduction, marquee, editorial,
   grids, and the future contact panel. Do not encode adjacency rules in child
   components.
6. Compare desktop and mobile flow after each group. Confirm no adjacent
   sections accumulate padding, and verify components still render sensibly in
   isolation.

## Cross-Page Reuse Assessment

The requested legacy-route comparison on 2026-09-15 covers `/`,
`/visitor-management-solution/`, `/emergency-mustering-evacuation-tracking`,
`/products/counter-22`, `/solutions-for-manufacturing`, `/pricing`,
`/case-studies/`, and `/about-us/`. The visitor-management and case-studies
exports are immediate redirects, so they provide no reusable page body.

| About Us candidate | Decision | Verified legacy consumers | Notes |
| --- | --- | --- | --- |
| `about-hero` | Keep local | `/about-us/` only | Other routes use `block-introduction` split heroes or homepage promo, not the full-width image treatment. |
| `company-intro` | Split into local composition plus future primitive | `/about-us/` only | Its proof-point row resembles feature grids elsewhere, but its heading/copy/proof-point arrangement is not repeated. |
| `logo-marquee` | Make shared | `/`, `/about-us/`, `/emergency-mustering-evacuation-tracking`, `/solutions-for-manufacturing` | All use `block-clients_style_1` and the Owl continuous logo strip. Replace Owl instead of carrying it forward. |
| `section-heading` + `paragraph` | Make shared, server-only | All full-page routes in varied positions | Separate semantic typography primitives are more composable than a fixed heading/paragraph section. |
| `team-grid` | Keep local; extract a lower-level feature grid only after a second approved use | `/about-us/` only as people profiles | `block-icons_style_4` also represents homepage benefits, emergency use cases, and manufacturing value propositions. Those are not team grids. |
| `solution-card-grid` | Keep local initially | `/about-us/` only in this card treatment | The solution pages use `block-solutions`, a separate visual and semantic system. Share card data types only when an approved design matches. |
| `product-grid` | Make shared catalog variant | `/about-us/`, `/products/counter-22` | Both use `block-objects_style_1` for related/showcase products. Homepage `block-objects_style_2` is an event-style variant and must not be forced into this component. |
| `partner-grid` | Keep local | `/about-us/` only | Static bordered, grayscale-hover logos differ from client marquee behavior. |
| `office-grid` | Keep local | `/about-us/` only | No other requested export has the office/address card pattern. |
| `contact-panel` | Make shared | `/about-us/`, `/emergency-mustering-evacuation-tracking`, `/products/counter-22`, `/solutions-for-manufacturing` | All use the two-column `block-feedback_style_2` pattern. Make the profile/quote optional; homepage uses distinct `style_3`. |
| `hubspot-form` | Make shared integration | `/about-us/`, `/emergency-mustering-evacuation-tracking`, `/products/counter-22`, `/solutions-for-manufacturing`, `/pricing` | Form IDs vary, so configuration must remain page data and loading remains consent-gated. Pricing uses `block-formback`, not `contact-panel`. |

Build shared components only where the rendered content and visual system are
both repeated: `logo-marquee`, `section-heading`, `paragraph`, catalog
`product-grid`, `contact-panel`, and `hubspot-form`. Treat repeated WordPress
block class names as source evidence, not component boundaries. In particular,
do not merge the different `block-icons_style_4` feature/team arrangements or
the distinct `block-objects` catalog/event styles into a single component
prematurely.

`SectionHeading` accepts an explicit semantic level (`h1`, `h2`, or `h3`) and
owns display-heading typography only. `Paragraph` renders a single `p` and
owns body typography plus adjacent-paragraph rhythm. The page or feature
component owns its `section` landmark, layout, background, alignment, spacing,
and any CTA or media; neither primitive becomes a generic rich-text renderer.

## Data Model

Use `app/about-us/content.ts` for immutable page values and
`app/about-us/types.ts` for the independent About Us source-data model. The
route-local presenter maps that model to component props. The content module
should own:

- Hero source, dimensions, and alt text.
- Title, paragraphs, and proof points.
- Client and partner logos, dimensions, and alt text.
- Editorial heading/paragraph sections.
- Team members: name, role, portrait, dimensions, and alt text.
- Software cards, hardware cards, and their optional links/CTAs.
- Office names, addresses, telephone display strings, and `tel:` URLs.
- Contact copy and managing-director profile data.
- A typed `seo` object for route metadata and JSON-LD data, kept separate from
  component markup so approved values can change without editing the route.
- Optional `HubSpotFormConfig`; leave it absent until its approval gate passes.

`app/about-us/page.tsx` remains a thin server component: select the data, map
it through `presenter.ts`, render `AboutUsPage`, and map `seo` to Next
metadata. Editorial strings, media URLs, links, and SEO values do not belong
in route or component markup.

## Interaction and Accessibility

### Client-logo strip

The legacy implementation auto-scrolls fourteen client logos using Owl
Carousel. Prefer a CSS animation or a small isolated client component instead
of importing Owl Carousel. The strip must:

- Render every logo in the initial HTML.
- Pause while hovered or focused.
- Respect `prefers-reduced-motion` by rendering a non-animated, wrapping or
  horizontally scrollable logo list.
- Avoid duplicate accessible names if visual duplication is used for a seamless
  animation.

Static grids are preferred if the approved reference does not require motion.

### Links and cards

Use an anchor only where legacy data has a real destination. Unlinked solution
and hardware items are text, not disabled links. Cards must have visible
keyboard focus only when they contain a destination.

### Offices and contact profile

Render office locations with semantic address content and telephone links.
The contact portrait is decorative unless approved editorial alt text is
provided. Preserve logical heading order: one H1 followed by H2 section
headings.

### HubSpot form

`contact-panel` renders the static contact copy and profile. It composes
`HubSpotForm` only when `HubSpotFormConfig` is approved and present. The form
component follows the reusable integration contract in
`docs/native-next-migration-plan.md`:

- It checks the configured consent category before requesting HubSpot.
- It has loading, blocked, retryable error, and consent-revocation states.
- It deduplicates `forms/embed/v2.js` per document and scopes each instance to
  its own container.
- It does not recreate WordPress session-storage, analytics, or submission
  side effects.

Until HubSpot ownership, portal/form IDs, consent category, and loading policy
are approved, render the visual contact panel without a third-party form.

## Styling and Responsive Requirements

- Use CSS Modules only; do not import WordPress theme or block styles.
- Use existing global font and color tokens. Add a global token only after a
  concrete second use.
- Establish component-local container/grid layout; do not depend on legacy
  `.container`, `.row`, `.block-*`, or WordPress classes.
- Match the legacy breakpoints at 475px, 576px, 768px, 992px, and 1200px.
- Verify hero media cropping, card wrapping, logo sizing, team portrait size,
  office grid collapse, CTA placement, and contact-panel stacking.
- Prevent horizontal overflow and layout shifts at 375px through 1440px.

## Metadata and Structured Data

Extract the current legacy metadata as the initial data baseline, then map it
from `content/about-us.ts` to Next metadata. The extracted values are:

- Title: `About Us - friendlyway`
- Description: `We are a global provider of digital signage and self-service solutions with over 25 years of experience. Our clients rely on our leading SaaS platform.`
- Robots: `nofollow, noindex`
- Open Graph and Twitter title/description: same as the title and description
- Social image: `/wp-content/uploads/fw-rich-snippet-Manufacturing.png`
  (1200 x 630, `friendlyway Solutions`)
- Open Graph locale/type: `en_US` / `article`

Represent canonical URL, title, description, robots directives, Open Graph,
Twitter, social image dimensions/alt text, and JSON-LD inputs as explicit
fields in the typed `seo` object. Do not store a copied Rank Math JSON string;
generate native JSON-LD from the data object so future approved changes are
localized and type checked.

Before launch approval, replace or confirm these baseline values with approved
title, description, Open Graph, Twitter, canonical, and robots policy. Generate:

- `AboutPage` JSON-LD using approved organization and primary-image data.
- `BreadcrumbList` JSON-LD for Home and About Us.

The legacy export currently declares `noindex`; preserve the temporary
no-index policy until product/SEO explicitly approves a change.

## Implementation Order

1. Create `content/about-us.ts`, page metadata/schema helpers, and
   `about-us-page` composition with no form integration.
2. Implement the hero, company intro, and editorial text sections; compare
   desktop/mobile typography and spacing against the legacy reference.
3. Implement team, solution, hardware, partner, and office grids as server
   components with their page data.
4. Implement the client-logo strip, using a static accessible baseline before
   adding any approved motion.
5. Implement `contact-panel` with static copy and profile image.
6. Implement the generic `hubspot-form` component separately once its consent
   and provider decisions are approved; then mount it as the contact-panel
   consumer.
7. Add data-driven metadata/JSON-LD from the extracted legacy baseline, then
  update only the `seo` data object when approved launch values are available.

After each component slice, run the narrowest applicable tests, `npm run
build`, and browser comparison before continuing.

## Acceptance Checklist

- `/about-us/` is native, while an unrelated legacy URL continues to return
  its legacy document and a representative public asset remains available.
- Section order, copy, headings, images, alt text, links, CTAs, and asset URLs
  match the approved source.
- Desktop and mobile match the captured legacy reference at target widths.
- No page styling affects a legacy route.
- All links, any marquee controls, and the form state are keyboard accessible.
- The page has no horizontal overflow, unexpected console errors, missing
  assets, or unapproved third-party requests.
- HubSpot makes no network request before consent; each approved embed renders
  exactly once and handles provider failure without crashing the page.
- Focused tests and `npm run build` pass.