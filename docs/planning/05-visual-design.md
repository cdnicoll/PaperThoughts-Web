<!-- Reconstructed 2026-07-10 from session context after the original
     web/website_planning/ was lost in the repo move. Note: §3's
     no-device-frames rule was superseded the same day — full-screen
     captures now get flat CSS device frames; see 07. -->

# 05 — Visual Design

Governing rule, same as the app: **the ink is the hero; the site recedes.** The website is a sheet of paper that happens to scroll. `brand/` is the contract — this doc maps it to the web.

## 1. Color

Straight from `brand/tokens/colors.css`, **Ink & Glow revision (2026-07-10, C2 Frame — see the brand readme's decision record and chrome patterns).** No new colors invented for the web. The lamp-lit-desk metaphor governs: pine chrome for set pieces, cream for content, amber as the single lamp per view.

| Web role | Token | Value | Notes |
|---|---|---|---|
| Chrome ground — hero, footer, set pieces | `--chrome-ground` | `#14211B` | The "desk." Marketing surfaces earned chrome in the C2 decision. |
| Raised on chrome | `--chrome-raised` / `--chrome-border` | `#223A2F` / `#2A473A` | Chips, cards, hairlines on the dark ground |
| Text on chrome | `--on-chrome` / `--on-chrome-muted` | `#F6F1E7` / `#9DBCA9` | 14.8:1 / 8.1:1 on the ground |
| The lamp on chrome — hero CTA | `--accent-on-chrome` | `#FFB042` | 9.1:1 on ground; dark ink text on the amber fill |
| Content section background | canvas | `#FAF7F2` | The "page" — cream, never white |
| Sunken/alternate content sections | paper-200 | `#F2EDE4` | Section rhythm on the light stretch |
| Headlines, body on cream | ink | `#1E1B13` | Warm ink, not cool black |
| Captions, meta, footer text | paper-600 | `#8A8172` | Muted, exactly like in-app tags/locations |
| Links, secondary buttons on cream | sage-600/700 | `#2E6B4F` / `#235841` | The brand green, re-saturated |
| Amber on cream | accent | `#EFA02E` | Fills and rules only at this value (1.97:1 — never body text); the bookmark screenshot keeps its amber |

**One lamp per view still rules:** on chrome sections the amber CTA is the highlight; on cream sections the sage button is primary and amber appears only as accents (rules, the icon, the bookmark shot). The old "amber never buttons" rule is superseded *on chrome only* — that's the chrome-CTA pattern from the brand readme.

Gradients: `--gradient-chrome` (pine, 155°) is allowed on hero/set-piece grounds and `--gradient-sage` on quote cards — both are brand tokens now, not violations. Still no blur, no cool grays, no drop-shadowed cards on cream (warm hairlines + background shifts); on chrome, the lit-sheet treatment (a cream screenshot with a soft warm shadow on the pine ground) is the signature move. Corner radius near-zero (4px; 12px for floating elements).

## 2. Typography

System font stacks mirror the app — no webfont downloads, which also keeps the page fast:

- **Headlines + any "journal voice" text:** serif stack — `ui-serif, "New York", Georgia, serif`. Matches the app's serif entry titles; this is the single strongest "matches the app" move available on the web.
- **Body/UI copy:** `ui-sans-serif, -apple-system, "SF Pro Text", system-ui, sans-serif`.
- **Meta/captions:** same sans, smaller, muted (use the paper-600 token — the original doc's `#8A8480` here was a typo; the token table above wins), interpunct separators (·) exactly as in-app.

(Noted 2026-07-10: the brand repo specifies Newsreader / Hanken Grotesk / IBM Plex Mono via Google Fonts, but those are flagged there as substitutions; the shipping iOS app uses system faces, so system stacks match the actual product better AND avoid webfont weight. Standing decision unless Cody says otherwise.)

Optional flourish, use once if at all: a line of *actual handwriting* (scanned/exported ink, not a handwriting font) as a section accent. Handwriting fonts are the tell of a fake — real exported ink is on-brand honesty.

## 3. Imagery — the screenshot plan

Issue #68 already scripts the perfect content set; the website reuses it 1:1. **Do the #68 capture session once, at highest quality, and feed both the App Store and the site.**

| Website section | Source from #68 | Format |
|---|---|---|
| Hero | Entry 1 *Slow Saturday* (coffee doodle, rain entry) | Full screen (built as flat CSS iPad frame, 2026-07-10) |
| Pencil section | Close crop of Entry 1 mid-stroke with tool picker | Crop or short loop |
| Paper styles | Same short passage on lined/grid/dots/blank | 4-up row |
| Photos & places | Placeholder→photo before/after pair (rotator) | Two slides, same crop window |
| Journals moment | Drawer over feed | Full screen in iPad frame |
| Gallery band | Location picker, details sidebar, dark paper, insights | 2×2 framed grid |
| Favicon / touch icon | `brand/assets/icon-tile.svg` | — |

Rules (`brand/readme.md`: honesty): real screenshots only, no stock, no illustration, no over-rendered 3D device scenes. ORIGINAL rule was "no device frames — a full-bleed page of ink is more distinctive than another floating-iPad render"; superseded 2026-07-10 by Cody's direction: flat, minimal CSS device frames for full-screen captures, raised paper mats for detail crops. No 3D renders, ever. Retina exports, WebP/AVIF (Phase 3).

## 4. Layout feel

- Single column, generous max-width (~960-1040px content, screenshots may bleed wider), lots of air.
- Section rhythm like page turns: background alternation + whitespace, no divider lines, no cards.
- Mobile: everything stacks; the hero page-of-ink actually gets *better* on a phone (it's page-shaped). Half of App Store referral traffic will be on iPhone — the mobile hero must be flawless since the buyer's iPad is on the couch.
- Short copy is what makes the whitespace possible.

## 5. Dark mode — recommended yes, cheap here (DECIDED: ship at v1)

Ink & Glow makes this nearly free: dark mode is the same world with the chrome ground extended (`#14211B` page ground, warm-ink surfaces `#232019`, `#7DB597` sage, `#FFB042` amber — exact values from `brand/tokens/colors.css` and the app's dark colorsets, which are the reference implementation). The app re-renders ink for dark paper (#40). A site that follows `prefers-color-scheme` proves the app's own care. Built with tokens as custom properties plus a manual sun/moon toggle (localStorage, pre-paint apply) — consistent with the app's own appearance override (#72).

## 6. Motion — one moment, maybe (UPDATED 2026-07-10 by build decisions)

`brand/readme.md` motion language: calm, easeInOut/ease-out, no bounce, no infinite loops. Original stance: site default is no animation. As built: quiet scroll reveals (fade + short rise, ease-out, staggered swatches/gallery), and the photos before/after rotator (4s crossfade cycle, dots take over on click). Scroll parallax on the hero was tried and cut — it read as lag, not depth. Respect `prefers-reduced-motion` everywhere (reveals show instantly; rotator doesn't auto-advance).

## 7. Favicon / social

- Favicon + touch icon from `brand/assets/icon-tile.svg` (already web-ready).
- OG/Twitter card: the hero ink page with wordmark — this is what gets seen when the site is shared on Reddit/Mastodon/X, and those shares are likely the main pre-launch traffic. Design it deliberately, not as an afterthought crop. (Still pending — Phase 3.)
