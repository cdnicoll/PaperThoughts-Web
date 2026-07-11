<!-- Reconstructed 2026-07-10 from session context after the original
     web/website_planning/ was lost in the repo move. Note: the extras
     section (§7) and word budget (§3) were later superseded by the
     carousel + feature table decision — see 07 Phase 0. -->

# 04 — Site Structure & Copy Direction

## 1. Pages

Single marketing page plus two utility pages. (PRD §13 says single page; the two extras are App Store requirements, not scope creep.)

```
paperthoughts.app/            One-page marketing site
paperthoughts.app/privacy     Privacy policy (App Store required)
paperthoughts.app/support     Support: hello@paperthoughts.app, short FAQ
```

Post-launch, cheap adds: `/press` (icon SVGs, screenshots, fact sheet). Nothing else in v1.

## 2. The page, top to bottom

Nine sections. Every competitor uses this skeleton; ours differs by density (low) and imagery (real ink). **Section grounds follow the Ink & Glow C2 decision (2026-07-10):** the hero and footer sit on the pine chrome ground (`#14211B` / `--gradient-chrome`) — the lamp-lit desk — while all content sections stay cream, alternating `#FAF7F2` and `#F2EDE4` so the middle of the page reads as sheets of paper on the desk.

### §1 Hero — the lamp-lit desk
- Wordmark small, top-left in `--on-chrome` cream. Nav is three quiet text links at most (Features · Privacy · Support) or none at all. Since the headline is now the name itself, resolve the echo at build time: either the headline *is* the wordmark treatment (drop the top-left one) or the top-left mark shrinks to the icon glyph only.
- **Headline (decided 2026-07-10): "Paper Thoughts."** The name is the headline — serif, cream, on the pine ground. No handwriting claim (kills the Penjo collision, 01 §4) and no paper-replacement framing. An optional second phrase may be added later if one earns it.
- One sentence under it in `--on-chrome-muted` sage: "A handwriting journal for iPad and Apple Pencil. Your ink, your photos, your places — in your iCloud, and nowhere else."
- **Visual: a lit sheet of real ink on the dark desk.** The clean hero capture (`02-hero-clean.png`) as a cream page floating on the chrome ground with a soft warm shadow — the lit-sheet treatment from the brand's chrome patterns. (Built 2026-07-10 as a flat CSS iPad device frame instead — see 07's presentation-system note.)
- **CTA (updated 2026-07-10, no waitlist):** one slot, two states behind a flag. Pre-approval — a quiet "Coming soon to the App Store" line in `--accent-on-chrome` amber (the hero's one lamp; no form, no button). Post-approval — the App Store badge. One CTA, once. No sage buttons on chrome.

### §2 The pencil section (pillar 1)
- Header: *"Pick up the Pencil and write."*
- Copy: pencil always draws, fingers never make marks, pages grow as you write. Zero friction from tap to ink.
- Visual: close crop of ink being laid down — the canvas with tool picker, or better, a short looping video/scroll-linked sequence of a line being written. (One tasteful motion moment max; see 05 §6.)

### §3 Paper styles (pillar 2)
- Header: *"Choose your paper."*
- Visual: the four papers (blank / lined / grid / dots) fanned or in a quiet row, same entry rendered on each. This section can carry the "notebook, not software" argument almost wordlessly.
- One line on journals here or a separate slim section: multiple notebooks, muted cover colors, each with its own paper. Use the #68 trio — Daily, Trail Log, Kitchen — as the visual.

### §4 Photos & places
- Header: *"Your photos and places, on the page."*
- Visual: the *Joffre Lakes* entry (#68 Entry 6) — polaroid-framed photo, tilt, handwriting wrapped around it, "Joffre Lakes, BC" as muted text. (Superseded in practice 2026-07-10 by the before/after placeholder→photo rotator; see 07 manifest.)
- Copy: two sentences. Photos sit in little frames you place with your fingers. Location is one tap and a quiet line of text — never a map dashboard.
- Optional sub-beat: the empty-polaroid placeholder ("Drop a frame now, add the photo tonight") — it's our most novel feature and one line does it.

### §5 Privacy (pillar 3) — the trust section
- Header, verbatim from `brand/readme.md`: *"Your journals are stored in your iCloud. We never see them."*
- Three short proof lines: No accounts. No servers of ours. Locked with Face ID.
- This section earns visual silence: text on paper, no screenshot. Maybe the smallest lock glyph. The restraint reads as confidence.

### §6 Pricing — REVISED 2026-07-10
- Old direction (retired): "No subscription. Ever." / buy-once. There WILL be a paid model (TBD, possibly lifetime) with a free version at launch, so that promise can never ship.
- Current: *"Free to write in."* — free to download and start; export everything as PDF or portable journal files anytime. Stays true under any future model.
- The anti-Day One/Penjo counter now rests on ownership (export) and privacy, not on anti-subscription claims.

### §7 The quiet extras — SUPERSEDED 2026-07-10
Originally: one compact grid, six items max, hard cap ("the moment this grid grows, we've become Penjo"). Replaced by Cody's direction: a framed-device gallery (location picker, details sidebar, dark paper, insights) plus a grouped feature table mined from all closed issues, single all-checked "Free" column, tier columns slot in when the paid model exists. See 07 Phase 0 §5.

### §8 FAQ — five questions
1. Do I need an Apple Pencil? (Yes — it's built for it. Typed entries work without.)
2. What about iPhone? (Read everything, write typed; ink lives on iPad, on purpose.)
3. Where is my data? (Your iCloud. We have no servers and no accounts.)
4. Can I get my writing out? (PDF, portable journal files, anytime.)
5. Is there handwriting search? (Not yet — coming when iPadOS supports it properly.)

### §9 Footer
App Store CTA repeated once (same two-state flag as the hero) · hello@paperthoughts.app · Privacy · Support · © year · optional @paperthoughts social link. No sitemap-style link farm.

## 3. Copy rules (from `brand/readme.md`, Content fundamentals, enforced site-wide)

- Short sentences. Concrete nouns: paper, ink, pencil, notebook, page.
- No exclamation marks, no emoji, no "supercharge/unlock/elevate," no streak language.
- No paper-replacement claims (2026-07-10): never "better than paper," "just like real paper," or paper-simulator framing. It's a simplified, distraction-free digital journal — sell the calm, not the imitation.
- Every claim demonstrable in a screenshot. If we can't show it, we don't say it.
- Word count: originally under 350; accepted at ~550 with the feature table (07 Phase 0 §5). Still a fraction of Penjo's page; the restraint now lives in tone and layout, not raw count.

## 4. Social proof plan (we have none yet — be honest about it)

Pre-launch there are no reviews, so skip fake-able sections entirely; an empty testimonial slot is worse than none. Sequence: TestFlight testers → 2–3 real quotes (with permission) post-launch → App Store ratings once they exist → press quotes if Paperlike / MacStories / iPad-focused YouTubers bite (press@ email is ready; press kit in 01 §6). The page is designed so a slim quote band can slot in between §7 and §8 later without redesign.
