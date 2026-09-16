# App Shell Migration Handoff

## Goal

Build the reusable native application shell incrementally at `/about-us/`,
its final public URL. Use the live site as the legacy reference for visual and
functional comparison. The shell is approved only after each extracted piece
matches the live legacy behavior or an explicitly approved replacement.

This document is the execution companion to
`docs/native-next-migration-plan.md`. That document owns the broader site
migration; this document owns the shared shell work only.

## Current State

- The legacy compatibility handlers own `/` and all matching paths without a
  native App Router page.
- `/native-preview/about-us` is a deliberately empty static App Router page;
  work package 1 moves this placeholder to `/about-us/`.
- No native shell components, content data, or component CSS Modules exist.
- `app/globals.css` contains local font faces, base styles, design tokens, and
  temporary welcome-banner styles.
- `npm run build` passes.

## Guardrails

1. Do not change `app/route.ts`, `app/[...slug]/route.ts`, `legacy/`, or
  public asset URLs while working on the native shell. The exact native
  `/about-us/` page takes route precedence over the transitional catch-all.
2. Do not import `public/wp-content/themes/friendlyway/style.css` or legacy
   block styles into native components.
3. Use the existing public assets at their current `/wp-content/...` URLs;
   do not duplicate assets merely for the preview.
4. Keep editorial content, URLs, media, contacts, and navigation hierarchy in
   typed data, never in component markup.
5. Create every component at `components/{component-name}/`. Its `index.ts`
   is the only public import surface; implementations, CSS Modules, tests, and
   private types stay within that folder.
6. Make each milestone independently buildable. Do not begin the next shell
   feature until its focused validation passes.
7. Keep temporary no-index metadata on the native route until the About Us
  page is approved for release. Do not transfer canonical ownership yet.
8. Treat the live site and exported legacy markup as measurable specifications,
   not design inspiration. Before implementing a shell slice, capture its
   source DOM hierarchy, content grouping, direct CSS dependencies, inherited
   typography, and responsive rules. Preserve those distinctions in typed data
   and semantic markup unless a replacement is explicitly approved. Do not
   start the next slice until browser measurements at the target widths confirm
   its layout and text rhythm match the reference.

## Reference Behavior

Use the live site as the source of visual and interaction truth. Capture dated
reference screenshots and behavior notes before component work at these widths:

| Viewport | Required reference states |
| --- | --- |
| 1440px | banner, header at top, sticky header, every top-level dropdown, footer |
| 992px | desktop/mobile navigation transition |
| 768px | mobile navigation closed and open |
| 576px | banner and utility-header wrapping |
| 375px | mobile menu drill-down, footer stacking, no horizontal overflow |

Record the expected behavior for:

- Welcome-banner visibility, campaign link, and dismissal persistence.
- Utility links, country switcher, logo, primary navigation, and contact CTA.
- Desktop menu hover/focus, nested menu behavior, Escape, outside click, and
  route navigation.
- Mobile overlay, menu button state, drill-down/back controls, focus handling,
  scroll locking, and close behavior.
- Sticky-header trigger, scroll-direction behavior, anchor offset, and resize.
- Footer addresses, telephone and external links, social labels, legal links,
  and Cookie Settings invocation.

## Required Decisions

Do not implement the following behavior from assumption. Record the approved
answer in the related data or integration task before enabling it.

| Topic | Decision needed | Temporary behavior |
| --- | --- | --- |
| Search | Define a native search-results URL and query contract. | Omit search from native shell. |
| Campaign | Approve replacement, retention, or removal of the GSX banner. | Omit banner until approved. |
| Sticky header | Preserve direction-sensitive behavior or use a fixed sticky primary row. | Render static header. |
| Geo targeting | Define compliant replacement for WordPress country AJAX behavior. | Do not target navigation or pricing. |
| Consent | Confirm Cookiebot ownership, consent categories, and script loading policy. | No third-party consent integration. |
| Analytics/HubSpot | Confirm approved identifiers and loading conditions. | Do not inject WordPress scripts. |
| Contact email | Approve direct mailto or a different contact destination. | Keep footer email control absent until approved. |

## Target File Layout

```text
app/
  about-us/
    layout.tsx                      # Native shell mount
    page.tsx                        # Page canvas; content migrates later
  globals.css                       # Fonts, reset, tokens, global a11y only
content/
  site.ts                           # Typed shell content and navigation data
components/
  app-shell/
    index.ts
    app-shell.tsx
    app-shell.module.css
  site-header/
    index.ts
    site-header.tsx
    site-header.module.css
  site-footer/
    index.ts
    site-footer.tsx
    site-footer.module.css
  desktop-navigation/
    index.ts
    desktop-navigation.tsx
    desktop-navigation.module.css
  mobile-navigation/
    index.ts
    mobile-navigation.tsx
    mobile-navigation.module.css
  welcome-banner/
    index.ts
    welcome-banner.tsx
    welcome-banner.module.css
  site-search/
    index.ts
    site-search.tsx
    site-search.module.css
  cookie-settings-button/
    index.ts
    cookie-settings-button.tsx
    cookie-settings-button.module.css
lib/
  navigation.ts                     # Active state and safe link helpers
```

Each `index.ts` re-exports its component and any required public prop types.
Do not use a workspace-wide `components/index.ts`; it would weaken the
component boundary and create broad dependency coupling.

## Data Contract

Implement `content/site.ts` before rendering the shell. It should export
typed, immutable data for:

- Brand name, logo source/dimensions/alt text, and default contact CTA.
- Utility navigation links and locale links.
- Recursive primary navigation with optional URL, description, media, external
  target, and children.
- Footer address groups, contact methods, social links, menu columns,
  copyright, and legal links.
- Optional campaign-banner content keyed by a release identifier.

The navigation model must permit a non-link parent for expandable menus and
must not duplicate the desktop and mobile tree. `lib/navigation.ts` determines
the active branch from a pathname and distinguishes internal links from trusted
external destinations.

## Work Packages

### 1. Baseline and Data

**Scope**: Move the empty placeholder from `/native-preview/about-us` to
`/about-us`, create `content/site.ts` and `lib/navigation.ts`, and capture
dated live-site visual references and behavior notes. Do not render native
shell UI yet.

**Done when**:

- Shell data covers all legacy header/footer items currently in scope.
- Data has no presentation-only CSS class names or WordPress IDs.
- Active-path behavior is unit-tested for `/about-us`, descendants, and an
  unrelated legacy URL.
- `npm run build` passes.

### 2. App Shell and Static Footer

**Scope**: Add `app-shell` and `site-footer`, mount them in
`app/about-us/layout.tsx`, and leave the page canvas empty.

**Implementation**:

- `AppShell` accepts `children` and the current pathname.
- `SiteFooter` is a server component using semantic `footer`, `address`, list,
  telephone, and link elements.
- Add only the needed CSS Module styles. Keep `globals.css` limited to shared
  tokens and accessibility primitives.

**Done when**:

- Footer content, links, visual hierarchy, and responsive stacking match the
  legacy reference.
- External links use correct `target` and `rel` values.
- Telephone links work and social links have accessible names.
- `/about-us/` renders the native shell at its final public URL.
- `npm run build` passes.

### 3. Static Header

**Scope**: Add `site-header` with the utility and primary rows, logo, primary
labels, country switcher links, and contact CTA. Menus remain non-interactive.

**Done when**:

- Desktop and mobile layout match the static legacy header at target widths.
- Current-page styling and `aria-current` derive from pathname data.
- There are no hover-only essential controls.
- CSS is scoped to `site-header.module.css`.
- `npm run build` passes.

### 4. Desktop Navigation

**Scope**: Add `desktop-navigation` as the smallest client boundary required
for multi-level interactive menus.

**Required behavior**:

- Pointer and keyboard open/close controls.
- Enter/Space, Escape, outside click, focus entry/exit, and visible focus.
- Correct `aria-expanded`, `aria-controls`, menu labeling, and active branches.
- Navigation tree media and descriptions where the legacy menu provides them.

**Done when**:

- All first-, second-, and third-level paths are reachable by keyboard.
- Escape returns focus to the invoking control.
- Closing a menu never moves focus to hidden content.
- `npm run build` passes.

### 5. Mobile Navigation

**Scope**: Add `mobile-navigation` as a client component with menu trigger,
overlay, nested drill-down view, and back controls. Keep the header and all
navigation content server-rendered; this client boundary owns only disclosure,
focus, and scroll state.

**Legacy reference**:

- At `max-width: 991px`, the desktop navigation is absent and the hamburger
  opens a right-aligned drawer below the primary row, separated by a 16px top
  offset. The backdrop covers the viewport with `#1e1e1ee6`.
- The drawer is 300px wide from 476px through 991px and full viewport width at
  475px and below. Its scrollable height is the viewport less the header: 105px
  at 576px and above, 95px below 576px.
- Each row has a 1px `#e5e7eb` bottom border and `0.75em 1em` link padding.
  Current and hovered non-accent rows use `#ebf0f4`.
- Parent rows have a 45px next control. Selecting it slides the child list in
  from the right; every drill-down view starts with a back row using the parent
  label and a 45px back control.
- The legacy implementation mutates the DOM with jQuery. Do not reproduce that
  approach, its WordPress admin-bar calculations, or its global body classes.

**Implementation sequence**:

1. Create `components/mobile-navigation/index.ts`,
   `mobile-navigation.tsx`, and `mobile-navigation.module.css`. The component
   accepts the existing recursive `NavigationItem[]`, current active IDs, and
   the current pathname; it must not create a second navigation data tree.
2. Replace the present decorative `menuTrigger` span in `SiteHeader` with the
   component. Render a semantic `<button>` with an accessible name, expanded
   state, and `aria-controls` pointing at the drawer dialog. Keep the Contact
   CTA beside it exactly as the current header layout requires.
3. Render every mobile destination as an `<a href>` in the initial server HTML,
   including descendants that are initially hidden inside inactive drill-down
   views. Rendering may be inside the client component, since Next prerenders
   client components to HTML; do not fetch navigation data after hydration.
4. Model state as `isOpen` plus an ordered path of expanded parent IDs. A
   forward disclosure pushes one ID; Back pops one ID; Close resets the path.
   Do not store copied menu node objects or query/mutate DOM nodes.
5. Use dialog semantics: `role="dialog"`, `aria-modal="true"`, an accessible
   drawer label, and a backdrop button outside the dialog surface. On open,
   focus the first meaningful drawer control; trap Tab/Shift+Tab inside; on
   close, restore focus to the hamburger.
6. Close on Escape, backdrop click, a destination-link click, and a viewport
   transition to at least 992px. Use `matchMedia("(min-width: 992px)")` in an
   effect rather than reading viewport width during render.
7. Lock document scrolling only while the dialog is open. Preserve and restore
   the prior inline `body.style.overflow` value during cleanup; compensate for
   scrollbar width only if a measured layout shift remains. Never leave the
   body locked after route navigation, breakpoint changes, or unmount.
8. Animate only the drawer view translation (`transform: translateX`) and
   respect `prefers-reduced-motion`. Keep inactive views non-interactive using
   `hidden` or inert semantics so focus cannot enter them.
9. Start with the generic hierarchy and text labels. Reuse shared media from
   the existing typed data where it improves parity, but do not import desktop
   mega-menu layout styles into the mobile module. Search remains omitted until
   its separate route and query contract are approved.

**Required behavior**:

- Dialog semantics, focus containment, scroll lock, Escape, and backdrop close.
- Correct `aria-expanded`, `aria-controls`, dialog label, and visible keyboard
  focus treatment.
- One data tree shared with desktop navigation, with every destination link
  present in the server-rendered HTML.
- Drill-down and Back preserve predictable focus: focus moves to the child
  view's Back control after Forward, and returns to the invoking parent control
  after Back.
- Opening, closing, and changing views must not cause horizontal overflow,
  content clipping, or a body-layout shift.

**Done when**:

- The 300px drawer at 768px and the full-width drawer at 375px match the
  reference placement, row rhythm, control widths, and backdrop.
- All first-, second-, and third-level paths are reachable with pointer and
  keyboard. Escape, backdrop click, destination navigation, and desktop
  breakpoint transition close the drawer and restore or transfer focus safely.
- Focus cannot escape while the drawer is open; hidden drill-down views cannot
  receive focus; Back returns focus to the control that opened the view.
- At 375px, 576px, 768px, and 992px there is no horizontal scroll, clipped
  label, layout shift, or lingering document scroll lock.
- Browser checks confirm every destination `href` exists before interaction,
  the representative legacy route still resolves through compatibility, and
  no new console errors or missing assets occur.
- Add focused interaction tests for open/close, nested forward/back, focus
  restoration, Escape, backdrop, and desktop-breakpoint cleanup; then run
  `npm run build`.

### 6. Campaign Banner and Sticky Behavior

**Scope**: Implement only after their decisions are approved.

**Implementation**:

- `welcome-banner` renders on the server first, then applies release-keyed
  local-storage dismissal after hydration with no visual jump.
- Move existing banner CSS from `app/globals.css` to the component CSS Module.
- Begin sticky behavior with CSS `position: sticky`. Add a small scroll-state
  client boundary only for approved direction-sensitive behavior.

**Done when**:

- Banner dismissal is isolated to its release ID and works without hydration
  warnings.
- Header does not obscure content or anchors after banner dismissal or on
  scroll/resize.
- Motion respects `prefers-reduced-motion`.
- `npm run build` passes.

### 7. Search and Third-Party Integrations

**Scope**: Implement only after their contracts are approved.

**Implementation**:

- `site-search` submits to the agreed native endpoint and handles empty input.
- `cookie-settings-button` delegates to an adapter that fails harmlessly when
  the consent provider is unavailable.
- Analytics and HubSpot load only under approved consent conditions, using
  native integration code instead of copied WordPress snippets.

**Done when**:

- Search has a real destination and an accessible error/empty state.
- Consent-sensitive scripts do not load before consent.
- Missing providers do not produce console errors.
- `npm run build` passes.

## Styling Rules

- Use CSS Modules beside their owning component.
- `app/globals.css` may define font faces, reset/base rules, tokens, global
  focus treatment, reduced-motion rules, and screen-reader-only utilities.
- Do not add component selectors such as `.header`, `.footer`, `.container`,
  `.row`, or `.block-*` to `globals.css`.
- Copy measured values from the legacy theme only as needed, then express them
  with local grid/flex layout instead of retaining legacy DOM assumptions.
- Add a global token only after a second concrete use; keep one-off values in
  the owning CSS Module.

## Validation Protocol

Run after every work package:

1. Focused component/data tests when they exist.
2. `npm run build`.
3. Browser comparison of local `/about-us/` and the live site's `/about-us/`
  at the relevant desktop and mobile widths, using the captured reference
  states.
4. Runtime check that one unrelated legacy route still returns legacy HTML
  during the transitional migration, and that a representative
  `/wp-content/...` asset still loads.
5. Browser console/network check for new errors, missing assets, unexpected
   third-party scripts, layout shift, and horizontal overflow.
6. Compare measured browser geometry for the slice's text blocks, item gaps,
  wrapping, and responsive ordering against the captured live-site reference.

Before accepting the complete shell, repeat the reference behavior matrix and
verify all accessible interactions using keyboard only.

## Non-Goals

- Do not migrate About Us editorial sections during shell extraction.
- Do not replace the legacy catch-all, delete legacy assets, or alter existing
  canonical URLs.
- Do not create a broad client-side application shell; server-render static
  content and isolate only interaction state to client components.
- Do not carry WordPress, jQuery, Cloudflare email-decoding, or unused plugin
  behavior forward by default.

## Handoff Completion

The shell handoff is complete when `/about-us` renders the approved shell
around an otherwise empty page canvas and all approved interactions pass the
validation protocol against the live-site reference. At that point, begin About
Us content migration one section component at a time.