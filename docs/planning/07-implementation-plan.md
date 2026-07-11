<!-- Reconstructed 2026-07-10 from session context after the original
     web/website_planning/ was lost in the repo move. This is the
     authoritative plan; decisions below reflect end-of-day state. -->

# 07 — Implementation Plan (phased)

The build order for paperthoughts.app, derived from 01–06 as updated for the
Ink & Glow revision (2026-07-10). Each phase has an explicit done-state; no
phase starts until the previous one's blockers clear. Screenshots come from
the #91 demo-seed pipeline (`app/runbooks/RB-09-demo-seed-screenshots.md`);
current captures live in `demo_journals/_captures/`.

## Phase 0 — Decisions (resolved 2026-07-10)

1. **Hero headline: "Paper Thoughts."** The name is the headline. An optional
   second phrase may be added later if one earns it; don't block on it. The
   tagline stays ASO-only (the Penjo collision is moot on the web — the hero
   makes no handwriting claim at all). Positioning note: the site sells a
   distraction-free journal for the modern age, not a paper replacement
   (01 §3, 04 §3).
2. **No waitlist.** The site launches alongside the app; the only CTA is the
   App Store badge. Pre-approval, the CTA slot shows a quiet "Coming soon to
   the App Store" state behind the same single flag (the site must deploy
   before approval anyway — App Store review requires the privacy and support
   URLs to be live).
3. **Dark mode: ship at v1.** Same token set via Ink & Glow; plus a manual
   sun/moon toggle (localStorage, pre-paint apply) added at Cody's request.
4. **Pricing (supersedes the buy-once framing in 01/04/06):** free version at
   launch, paid model TBD (possibly lifetime subscription). Site section is
   "Free to write in."; the feature table carries a single all-checked "Free"
   column and takes tier columns later. "No subscription. Ever." is retired
   and must not reappear.
5. **Feature presentation:** the six-item extras cap from 04 §7 is superseded
   by a framed-device gallery (2×2 grid on the chrome band) + a grouped
   feature table mined from the closed issues. Word budget accepted at ~550.

## Phase 1 — Scaffold (DONE 2026-07-10, exceeded)

Built and pushed as `9ec66d3` (github.com/cdnicoll/PaperThoughts-Web; working
tree lives at `PaperThoughts/web/`):

1. Next.js `output: 'export'` — the guardrail against server creep.
2. `styles/tokens.css`: brand custom properties, light + dark +
   `data-theme` manual override. No hexes in components.
3. `content/copy.ts`: every string in one file. `content/config.ts`: the
   coming-soon ⇄ badge flag.
4. Sections per the 04 §2 skeleton as revised: chrome hero (flat CSS iPad
   frame, oversized, icon glyph + name-as-headline) → pencil → paper
   swatches + journals drawer in iPad frame → photos before/after rotator
   with dots → 2×2 framed gallery on chrome (location picker, details
   sidebar, dark paper, insights) → privacy → "Free to write in." →
   feature table (FEATURE / FREE columns) → FAQ → chrome footer.
5. `/privacy` and `/support` (plain cream pages, theme toggle included).
6. Motion: scroll reveals (fade + rise, ease-out, staggered), rotator
   crossfade; parallax tried and cut. `prefers-reduced-motion` respected.

Done-state met: `next build` exports static files verified in both color
schemes, desktop and phone width, no console errors.

## Phase 2 — Deploy (quiet; before App Store submission)

1. Firebase Hosting (classic, not App Hosting), `firebase deploy` (06 §2).
2. paperthoughts.app domain + www redirect + TLS via console (06 §3).
3. Analytics: none at v1 (decided 2026-07-10). Add a privacy counter later
   when we start drawing traffic (06 §5). The "No cookies. Obviously."
   footer line ships regardless.

Done when: the live URL serves the static site over HTTPS with the
"Coming soon" CTA state, and /privacy + /support resolve (they're required
for App Store submission).

## Phase 3 — Final assets

1. Final capture batch once Trail Log / Kitchen / typed exports land
   (checklist lives in #91's session log; run per RB-09).
2. Export/optimize: WebP/AVIF at 2–3 widths per slot via a build-time sharp
   script (static export drops `next/image` optimization — 06 §2 caveat).
3. OG/Twitter card designed deliberately from the hero + wordmark (05 §7 —
   pre-launch traffic is link shares).
4. Swap interim crops → finals. Pure asset swap by design.

## Phase 4 — Launch flip + post-launch

1. Flip the CTA flag on App Store approval: "Coming soon" → App Store badge.
   Both states are built; the flip is setting `appStoreUrl` in
   `content/config.ts` + deploy.
2. Post-launch, cheap adds in order: analytics via a privacy counter once
   we start drawing traffic (06 §5), `/press` (icon SVGs from
   `brand/assets/`, final screenshots, one-paragraph fact sheet), then a
   real-quotes band once TestFlight quotes exist (04 §4 — never fake it).
3. Pricing/tier columns in the feature table when the paid model is decided.

## Screenshot manifest (site slot → capture; end-of-day 2026-07-10)

| Site section | Capture | Status |
|---|---|---|
| Hero — framed iPad | `02-hero-clean.png`, full screen in flat CSS iPad frame | ✅ built |
| Pencil close-up | crop of `01-canvas-hero.png` (doodle + ink) | ✅ built |
| Paper styles 4-up | square swatch crops of `08-paper-{blank,lined,grid,dots}.png` (ink fading into ruling) | ✅ built |
| Photos & places rotator | `12-photo-placeholder.png` + `02-hero-clean.png`, same crop window (before/after) | ✅ built; may be the permanent plan (stronger than a static Joffre entry) |
| Journals moment | full `04-drawer.png` in iPad frame; streak card retouched out | ⚠️ retake should capture this without streak UI |
| Gallery band (chrome, 2×2 framed) | `11-location-picker.png`, `03-metadata-sidebar.png`, `06-dark-paper.png`, `05-insights.png` (full — shows the Streak card; brand rule tension accepted by Cody for now, retake can recompose) | ✅ built |
| Favicon / touch icon | `brand/assets/icon-tile.svg` | ✅ |
| OG card | derived from hero | ⏳ Phase 3 |

Unused but banked: `07-pair-dark.png` (light/dark pair was cut as repetitive),
`09/10-iphone-*.png` (iPhone shot cut from gallery; iPhone frame CSS still in
globals.css if it returns).

Presentation system (settled with Cody 2026-07-10): full-screen captures get
flat CSS device frames (iPad/iPhone bezels, no 3D renders, no Pencil props);
detail crops sit on raised paper mats. Retake wishlist for RB-09:
drawer-over-feed without streak UI, insights without the streak card.
