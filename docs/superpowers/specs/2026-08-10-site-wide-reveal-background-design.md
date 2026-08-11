# Site-wide cursor-reveal background

## Goal

Promote the cursor-reveal image effect from a 16:9 box on the homepage to a fixed
background that persists across every page of the site.

At rest the pixelated photo (`PixelZNFP`) fills the viewport under a translucent
cream veil, so the page still reads as the cream site it is today. The cursor
drags a window that shows the photo sharp and unveiled, with the tracker outline
and `°N` label that exist today.

## Visual direction

Decided during brainstorming:

- **The photo is always visible**, not hidden until hovered. The pixelated image
  fills the viewport at all times.
- **A cream veil keeps text readable.** `#F2EDE5` at ~0.75 opacity over the
  photo. Body text stays `#1C1814`, links stay `#C4714E`, the `#E8E1D8` hover
  highlight is untouched. No page's palette changes.
- **The homepage hero box goes away.** One reveal effect, not two nested.

The photo is midtone and busy — near-white mist in the upper middle, dark
foliage below — so neither dark nor light text survives on it unaided. The veil
is not optional.

## Architecture

### `src/components/revealbg.astro` (new)

Wrapper: `position: fixed; inset: 0; z-index: -1; pointer-events: none;
overflow: hidden`, `aria-hidden="true"`. A single negative z-index on the
wrapper; children stack normally inside it.

| Order | Element | Role |
| --- | --- | --- |
| 1 | `.bg-lowres` | `PixelZNFP`, `object-fit: cover`, `image-rendering: pixelated` |
| 2 | `.bg-veil` | `background-color: rgba(242, 237, 229, 0.75)` |
| 3 | `.bg-hires` | `ZNFP`, `object-fit: cover`, `clip-path: inset(50% 50% 50% 50%)` at rest |
| 4 | `.tracker-box`, `.coord-label` | Window outline and the `°N` readout |

The hires layer sits **above** the veil. That is what makes the effect work with
no hole-punching: one `clip-path` animation makes the window simultaneously
sharp and unveiled. Everything outside the clip stays veiled and pixelated.

The veil uses `rgba()` rather than `opacity` so it does not create a stacking
context that would trap the hires layer beneath it.

The reveal window keeps today's dimensions, 180 × 240 px.

`html { background-color: #F2EDE5 }` stays in `global.css` as the pre-load
fallback colour.

### Geometry

The layer is `position: fixed`, so `clientX`/`clientY` map directly onto it. The
`getBoundingClientRect()` math in `revealimg.astro` is dropped. For a window of
`BOXwd × BOXht` centred on the cursor:

```
top    = y - BOXht / 2
right  = window.innerWidth  - (x + BOXwd / 2)
bottom = window.innerHeight - (y + BOXht / 2)
left   = x - BOXwd / 2
```

`clip-path: inset(top right bottom left)`. The tracker box and label are
positioned at `left`/`top`.

The coord readout becomes viewport-relative:
`((window.innerHeight - y) / window.innerHeight) * 90`, clamped to 0–90, four
decimals, suffixed `°N` — same formula as today, measured against the viewport
instead of the element.

### Events

- `pointermove` on `window` — the layer is `pointer-events: none` and cannot
  receive events itself.
- `mouseleave` on `document.documentElement` hides the overlay when the pointer
  leaves the window; the next `pointermove` fades it back in. Fading in is
  driven off the first move, not `pointerenter`, for the same reason as today:
  the browser skips enter if the cursor is already sitting there on load.
- Same anime.js `animate` calls as the current component — 150ms, `outBack`,
  7ms delay, 100ms fade in / 500ms fade out — so the feel is unchanged.

### Contrast fix carried over from the port

The tracker outline and coord label are `#faf5f2` today, which works because
they are always over the photo. As a background overlay they are not: the label
floats above the window over veiled cream, where near-white is invisible, and
the outline straddles the boundary.

Both switch to the site's dark ink `#1C1814` with a soft cream text-shadow /
border treatment so they read against the veil and against the exposed photo.

## Mounting

Every page except `index.astro` renders through `layouts/page.astro`
(about, projects, archive, fedd, archive-bin/{books,music,podcasts}). So the
component is imported in exactly two places:

- `src/layouts/page.astro`
- `src/pages/index.astro`

`index.astro` is not refactored onto the shared layout — it has a different
structure (single-page scroll sections, its own sidebar with 88x31 badges) and
folding it in is out of scope here.

Scrolling: `index.astro` scrolls `.content` internally while the other pages
scroll the window. A fixed layer is unaffected by either, so the background
holds still on all pages.

## Performance

`ZNFP.png` is 5.7MB. Putting it behind every page unconditionally is the one
real cost of this change, so:

- Convert both images to WebP with `cwebp` (available on this machine). The
  pixel image downscales to ~512px first — it is already pixelated, so scaling
  back up under `image-rendering: pixelated` is visually free — landing around
  20KB. Hires at 2048px, q80.
- The source PNGs stay in `public/` untouched; the component references the
  WebP files.
- Lowres and veil load eagerly, since that is what is on screen at rest.
- The hires `src` is assigned on the **first `pointermove`**. Visitors who
  scroll and leave, and every touch device, never download it.

## Mobile and accessibility

- The tracking script binds only under `(hover: hover)`. On touch devices no
  handlers attach and the hires image never loads; the background is a static
  veiled photo.
- Under `prefers-reduced-motion: reduce`, clip-path and positions are set
  directly with no anime.js tween.
- The wrapper is `aria-hidden="true"` and both images use `alt=""` — it is
  decoration.

## Homepage changes

`src/pages/index.astro`:

- Drop `<Reveal>`.
- `Home` becomes a normal `<h1>`, and the welcome paragraph becomes normal body
  copy at the top of `#home`, preserving the `[blog]` link. Its class goes from
  `reveal-link nav-link` to `projectlink nav-link` — `projectlink` is what the
  page already uses for an internal prose link (see the `/fedd` link in the
  projects list), and `nav-link` must stay so the smooth-scroll handler keeps
  picking it up.
- Mount `<RevealBg>`.

## Removals

- `src/components/revealimg.astro` — superseded.
- `src/pages/test.astro` — exists only to render `revealimg.astro`.

## Verification

- `npm run build` succeeds.
- `npm run dev` and check by eye: homepage (all four scroll sections), a
  `page.astro` page (projects), and a nested one (archive-bin/books).
- Confirm the veil reads well against the photo and text stays legible; 0.75 is
  a starting value to be tuned against the real image.
- Confirm the hires WebP is not requested until the pointer moves.
