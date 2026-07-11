<!-- Reconstructed 2026-07-10 from session context after the original
     web/website_planning/ was lost in the repo move. Contents match the
     final edited state; 03-competitor-teardown.md could not be recovered. -->

# Website Planning — paperthoughts.app

Planning for the PaperThoughts marketing site. Docs 01-06 are strategy; 07 is the phased build plan. Refreshed 2026-07-10 for the Ink & Glow palette revision (chrome hero, new tokens, six journal covers) - the brand repo's readme is the visual contract.

**Inputs used:** PRD.md (§11–13), `brand/` (the canonical design system — tokens, foundations, components), full git history (139 commits), all 60+ closed GitHub issues, issue #68 (screenshot seed plan), and teardowns of noteshelf.net, penjoapp.com, and dayoneapp.com.

## Documents

| Doc | Contents |
|---|---|
| [01-goals-strategy.md](01-goals-strategy.md) | What the site is for, audience, phases, the Penjo tagline problem |
| [02-feature-inventory.md](02-feature-inventory.md) | Every shipped feature mined from git/issues, ranked for marketing weight |
| [03-competitor-teardown.md](03-competitor-teardown.md) | LOST in the 2026-07-10 repo move — stub only |
| [04-site-structure-copy.md](04-site-structure-copy.md) | Page structure, section-by-section layout, draft copy directions |
| [05-visual-design.md](05-visual-design.md) | Colors, typography, screenshot/imagery plan, layout feel |
| [06-tech-stack-deployment.md](06-tech-stack-deployment.md) | Next.js + Firebase decisions, domain, waitlist options |
| [07-implementation-plan.md](07-implementation-plan.md) | Phased build plan with done-states and the screenshot manifest |

## The one-paragraph thesis

The website is the app's philosophy applied to the web: a quiet, typographic, paper-toned page where real handwriting is the hero and the copy stays out of the way. Every competitor site is busier than its app; ours should be exactly as calm as the app. That restraint *is* the differentiation — nobody lands on a serene off-white page with beautiful ink and confuses it with Noteshelf's feature wall or Penjo's 13-item grid.

## Decisions — all resolved 2026-07-10

1. Hero headline: **"Paper Thoughts."** — the name is the headline; tagline stays ASO-only; Penjo collision moot (01 §4). No paper-replacement framing anywhere on the site.
2. Waitlist: **none.** Site launches alongside the app; CTA is a two-state flag ("Coming soon" → App Store badge). Site still deploys quietly pre-approval because review requires live privacy/support URLs.
3. Pages: one page + privacy/support subpages (04 §1).
4. Dark mode: **ship at v1** (05 §5).
5. Analytics: **none at v1**; privacy counter later when drawing traffic (06 §5).
6. Pricing: **decided via app issue #92** — free tier with every feature (3 journals, 5 entries each); Premium removes limits ($3.99/mo, $24.99/yr, $59.99 lifetime — confirm prices at App Store Connect setup). Content never locked. "No subscription. Ever." stays retired.

Details live in Phase 0 of [07-implementation-plan.md](07-implementation-plan.md).
