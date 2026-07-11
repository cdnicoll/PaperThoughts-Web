<!-- Reconstructed 2026-07-10 from session context after the original
     web/website_planning/ was lost in the repo move. -->

# 02 — Feature Inventory (mined from git history + closed issues)

Every shipped feature, pulled from 139 commits and the closed-issue list, then ranked by marketing weight. Tier 1 gets its own section on the page. Tier 2 gets a line or a small grid cell. Tier 3 stays off the marketing site (it's real work, but it doesn't sell).

## Tier 1 — Hero features (each earns a full section + screenshot)

| Feature | Shipped in | Marketing angle |
|---|---|---|
| **Pencil-first ink canvas** | SPEC-05, #41, SPEC-15, #78/#79 | The core promise. Pencil always draws, finger never accidentally inks, pages append as you write and reclaim when you don't. One fixed page width so your journal looks identical on every device. This is the hero image. |
| **Paper styles** | SPEC-11, #26 | Blank, lined, grid, dots — each in three sizes, tuned spacing, per-journal defaults. "Choosing your paper" is the most notebook-feeling moment in the app; show the picker or a fan of the four papers. |
| **Photos on the page** | SPEC-10, SPEC-14, #25, #73, #75 | Polaroid-framed photos you place with your fingers and write around/over. Crop on-canvas. Placeholders: drop an empty frame now, fill the photo later — genuinely novel, nobody else has this. Fast even with lots of photos (#75). |
| **Location, one tap** | SPEC-09, #29, #35, #36, #37 | POI-level names ("Joffre Lakes, BC"), tap-to-drop pin, works offline with later geocoding. Displayed as quiet text, not a map dashboard. Day One's best feature, done with restraint. |
| **Private by architecture** | #16, #18, #49 | CloudKit sync to *your* iCloud — no accounts, no servers, nothing to sign up for. Face ID / Touch ID lock with a graceful grace period. "Your journals are stored in your iCloud. We never see them." — this exact sentence, verbatim, on the page. |
| **Multiple journals** | SPEC-07, #22, #38, #89 | Named notebooks with six brand cover colors (one per hue family, #89) and their own default paper. Move entries between them. Tags across all of them. Maps to how people actually journal (Daily / Trail Log / Kitchen — the #68 seed journals are the demo). |

## Tier 2 — Supporting features (one line each; a quiet "and more" grid)

- **Typed entries** (#52) — a second page type for when the Pencil's not in hand; serif type on the same paper, reads like a typewritten page, never mixed with ink. Also the honest answer to "what about my iPhone?"
- **iPhone companion** (#53) — read your whole journal, pinch-zoom your ink, capture a typed thought; writing with ink stays on iPad, on purpose. Frame as a feature of focus, not a limitation.
- **Bookmarks** (#44) — mark an entry or a single handwritten passage; amber ribbon, highlighter-wash colors. Very "paper" feature, photogenic in a screenshot.
- **Export & own your data** (#20, #23, #69) — PDF for entries and whole journals, portable `.paperthought` / `.paperthoughtsjournal` files. Pairs with privacy: your data leaves whenever you want.
- **A quiet look back** (#43, #58, #60–#63) — writing-days calendar, year dot grid, places you've written from. IMPORTANT: brand voice bans gamification framing. Never "streaks" on the website; say "see the days you wrote" / "the places you've written from." The insights exist to reward, not to nag.
- **State of Mind** (#50) — log how you felt with the system's own picker; belongs in a features list, not a headline (mood tracking language repels this audience if it leads).
- **Recently Deleted** (#12 spec, 30-day recovery) — quiet trust feature, one line.
- **Dark mode done properly** (#40, #72) — ink re-renders for dark paper; appearance override in settings. Earns a visual moment (see 05 — screenshot pair light/dark).
- **Works offline** (#24, #29) — write anywhere, location and sync catch up later.

## Tier 3 — Real engineering, not marketing (leave off the site)

Multi-select bulk actions (#38), sync spinners and first-launch import UX (#76/#77), settings/reorder (#72), motion/haptics pass (#46/#47), duplicate-journal healing (#19, #42), PDF Metal crash fix (#33), sidebar fixes (#57), empty-entry discard (#27). These make the app feel finished — the site shows that by *being* finished, not by listing them.

## Roadmap features — do not market yet

Open issues worth knowing about when writing copy, so we don't accidentally promise them: handwriting search (#48, iOS 27 API), shape snapping (#70), reminders (#54), Journaling Suggestions (#51), Markdown export (#21). If asked (FAQ), handwriting search is "coming when the OS supports it properly" — honest and sets up a future update announcement.

## The one-sentence version of the whole inventory

Sixty shipped issues collapse to: **a page that feels like paper, photos and places woven in, everything in your iCloud, bought once.** If a section on the site doesn't ladder up to one of those four clauses, cut it.
(Pricing note 2026-07-10: "bought once" is superseded — free at launch, paid model TBD; see 01 §3 and 07 Phase 0.)
