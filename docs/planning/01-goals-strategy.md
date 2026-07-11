<!-- Reconstructed 2026-07-10 from session context after the original
     web/website_planning/ was lost in the repo move. -->

# 01 — Goals & Strategy

## 1. What the site is for

One job: convert "iPad + Pencil owner who journals" into an App Store tap.
(Decided 2026-07-10: no waitlist — the site launches alongside the app.)

- **Pre-approval:** the site deploys quietly with a "Coming soon" CTA state. Its only jobs are satisfying App Store review requirements (privacy policy, support contact — the URLs must be live during review) and being ready.
- **Launched:** the CTA flips to the App Store badge. Secondary job: give press/reviewers a landing spot. Launch-day audience comes from Reddit/TestFlight/press outreach, not an email list — accepted trade.

What the site is explicitly **not** for (v1): blog, SEO content farm, docs, community. Day One has all of those because Day One is a company. PaperThoughts is one developer and a good app; the site should look like that on purpose (Penjo's "developer responsiveness" testimonials show indie is a selling point, not a weakness).

## 2. Audience

Straight from `brand/readme.md` (Product context / Content fundamentals) — write for this person and nobody else:

- Owns an iPad (often a mini) and an Apple Pencil
- Wants the feeling of a paper notebook with digital benefits (sync, photos, location)
- Has been burned: Apple Journal drops their handwriting, Day One treats ink as a second-class "drawing," GoodNotes/Notability have no journaling model, Penjo is cluttered
- Responds to: handwriting, notebook, paper, ink, private, calm, yours
- Repelled by: streaks, gamification, AI, "supercharge," productivity-speak

Implication: the site never needs to explain *why* journal by hand. The visitor already wants to. The site only has to prove PaperThoughts is the app that finally does it right. That kills 80% of typical landing-page copy before it's written.

## 3. Positioning on the page

The pitch in one breath: **the handwriting journal that actually feels like a notebook.**

Three pillars, in order (matches PRD §11 differentiators):

1. **Pencil-first.** Built exclusively for Apple Pencil. The pencil always draws; nothing gets between you and the page. (Contrast, unstated: Day One's keyboard-first ink, Apple Journal's bugs.)
2. **Distraction-free, for the modern age.** Paper styles, serif dates, muted tags, no badges, no dashboards — a simplified journal that stays out of the way. (Contrast, unstated: Penjo's clutter, Noteshelf's feature wall.) Framing note (2026-07-10): do not sell this as *replacing* paper — no "better than paper" or paper-simulator claims. It's a calm digital journal, full stop.
3. **Private by architecture.** Your iCloud. No accounts, no servers, no analytics on your writing. (Pricing repositioned 2026-07-10: "bought once, no subscription" is retired — there will be a free version at launch and a paid model TBD, possibly lifetime. The site markets the free version and makes no anti-subscription claims. Never reintroduce "No subscription. Ever.")

Rule for all copy: never name competitors on the site. The positioning is built from their weaknesses, but the page states it as our virtues. Reviewers and Reddit will make the comparisons for us.

## 4. The Penjo tagline problem — RESOLVED 2026-07-10

**Resolution: the web hero is simply the app name — "Paper Thoughts."** No handwriting claim in the hero at all, so the collision is moot on the web. An optional second phrase may be added later if one earns it. The tagline stays ASO-only (option B below, taken further). Original analysis kept for the record:

Penjo's live hero headline: **"Your days, in your own handwriting."**
Our tagline (PRD, `brand/`, planned ASO): **"Your thoughts, in your handwriting."**

These are functionally the same sentence. Anyone comparison-shopping handwriting journals (our exact buyer) will see both sites in the same session and register us as the copycat, since Penjo shipped first. That's a real problem for the hero even if we keep the tagline elsewhere.

Options:

- **A. Keep it everywhere.** Cheapest. Risk: reads derivative to the one audience that will notice, and Penjo is our closest comparison. Not recommended for the hero.
- **B. Keep the tagline for App Store/ASO, write a different hero headline for the web.** App Store shoppers rarely see Penjo's website next to ours; web shoppers do. Candidates that lean on our actual differentiation (calm, notebook-feel, restraint):
  - *A notebook, not an app.*
  - *The journal that feels like paper.*
  - *Write it down. By hand.*
  - *Pick up the Pencil. The page is ready.*
- **C. Replace the tagline entirely.** Most work, touches ASO plans and `brand/`. Only worth it if Cody decides the collision poisons the line everywhere.

Recommendation: **B.** The tagline is good and the ASO field is a different context; the website hero is where the collision hurts, so differentiate there. Option B candidates above are drafts — this wants a proper pass once the direction is picked.

## 5. Success measures (keep it honest and tiny)

- App Store badge clicks, once analytics exist (a simple outbound click count is enough).
- v1 ships with no analytics at all (decided 2026-07-10); add a privacy-respecting counter (Plausible/Fathom/GoatCounter) later when we start drawing traffic. Never Google Analytics — a GA tag on a privacy-first product's site is an own goal, and this audience checks.

## 6. Launch sequencing (updated 2026-07-10)

1. Site v1 deployed quietly with "Coming soon" CTA + privacy policy + support contact — unblocks the App Store submission checklist (PRD §13 pre-launch list); no traffic push
2. App Store approval → flip the CTA flag to the badge
3. Post-launch: draw traffic (Reddit, press outreach), add analytics counter, add a press kit page (icon SVGs already exist in `brand/assets/`, screenshots from #68, one-paragraph fact sheet) — cheap, and reviewers ask for it
