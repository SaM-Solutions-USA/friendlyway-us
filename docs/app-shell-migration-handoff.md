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
overlay, nested drill-down view, and back controls.

**Required behavior**:

- Dialog semantics, focus containment, scroll lock, Escape and backdrop close.
- Close on navigation and viewport transition to desktop.
- One data tree shared with desktop navigation.

**Done when**:

- Focus cannot escape while the menu is open.
- Mobile drill-down/back paths preserve predictable focus.
- No horizontal scroll, clipped labels, or body-layout shift at 375px.
- `npm run build` passes.

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