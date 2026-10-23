# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: the iPad + Apple Pencil owner who already journals by hand.** Often an iPad mini. They want the feeling of a paper notebook with digital benefits (sync, photos, location). They have been burned: Apple Journal drops their handwriting, Day One treats ink as a second-class "drawing", GoodNotes and Notability have no journaling model, Penjo is cluttered. They respond to handwriting, notebook, paper, ink, private, calm, yours. They are repelled by streaks, gamification, AI, "supercharge", and productivity-speak.

The site never has to explain why someone would journal by hand. The visitor already wants to. It only has to prove Paper Thoughts is the app that finally does it right.

**Secondary (confirmed 2026-10-23): Day One and Apple Journal switchers.** The largest identified audience. No import path exists yet, so the site must not imply one. Press, reviewers, and existing users are deliberately **not** target audiences for the site; support and roadmap pages exist for them but the site is not shaped around them.

## Product Purpose

Paper Thoughts is a privacy-first handwriting journal for iPad built around Apple Pencil, live on the App Store since 2026-07-28. One developer, no company. iPhone is a companion for reading and quick typed capture, with no ink input.

The marketing site (paperthoughts.app) has one job: convert the primary user into an App Store tap. Secondary duties are mechanical: host the privacy policy and support contact App Store review requires, and give feedback a place to land.

Success is measured by App Store badge clicks (Cloudflare Web Analytics, cookieless, is live). The site is explicitly not a blog, SEO content farm, docs hub, or community.

## Positioning

**The handwriting journal that actually feels like a notebook.** Three pillars, in order:

1. **Pencil-first.** Built exclusively for Apple Pencil. The pencil always draws; fingers never mark the page. Pages grow as you write past the bottom.
2. **Distraction-free.** Paper styles, serif dates, muted tags, no badges, no dashboards, no streaks. A calm digital journal, full stop. Never framed as replacing paper or being "better than paper".
3. **Private by architecture.** The user's own iCloud. No accounts, no servers, no analytics on writing. App Privacy label: "Data Not Collected". The developer never sees a word.

What a neighbouring product could not truthfully copy: a blank-canvas handwriting experience paired with location tagging, in a UI that is a notebook rather than a productivity app, with no server in the loop at all.

Copy rules that bind positioning: never name competitors on the site; the positioning is built from their weaknesses but stated as our virtues. The hero headline is the name, "Paper Thoughts." The tagline "Your thoughts, in your handwriting" is ASO-only and never appears on the web (it collides with Penjo's hero).

## Operating Context

- The visitor is comparison-shopping handwriting journals, usually on an iPad, often with Penjo, Day One, and Noteshelf sites open in the same session.
- The app runs on iPad (primary) and iPhone (companion). iOS 17 floor. Handwriting search requires iOS 27.
- The site is a Next.js 15 static export deployed to Firebase Hosting. Forms (beta signup, now dormant; feedback) write to Firestore. Firebase config is publishable, not secret.
- Indexing is on. Cloudflare Web Analytics is the only analytics and is cookieless. Google Analytics is never acceptable on this product.
- Outreach is Reddit-led, disclosed, developer-authored. Comments underperform; posts convert. No launch post has gone out since launch.
- Dark mode ships on the site and in the app.

## Capabilities and Constraints

**Shipped and true as of 2026-10-23** (confirmed by Cody; the live site copy lags on three of these):

- Pencil-first canvas; pages that grow; paper styles (blank, lined, grid, dots, three sizes); nine paper colours including auto light and dark; journaling prompts; typed entries; dark mode with ink re-rendered for dark paper.
- Photos in frames (place, tilt, crop); photo placeholders; location with one tap or a dropped pin, shown as text not a map; state of mind saved privately to Apple Health; works offline.
- Multiple journals with six muted covers; tags; bookmarks (entry or passage); a look back (calendars of writing days and places, never scores); Home Screen widgets; Recently Deleted (thirty days).
- iCloud sync across devices; Face ID / Touch ID lock; PDF and portable journal exports; iPhone companion (read, pinch into ink, jot typed thoughts).
- **Handwriting search** (v1.5, iOS 27 only). The site's FAQ and roadmap still say "not yet"; that copy is stale.
- **Markdown export** and a **daily reminder** (v1.6, live 2026-10-20). The site's roadmap still lists them as upcoming; that copy is stale.
- Also in 1.6: ink swatches, smaller PDFs, shared pen and pencil colour.

**Pricing.** Free tier has every feature, capped at 3 journals with 5 entries each. Premium removes the limits: $3.99 a month, $24.99 a year, or $59.99 once. Writing is never locked; read and export always work even if Premium lapses. Prices are the app issue #92 defaults and are **not yet confirmed against App Store Connect** on this record. "No subscription. Ever." is retired and must never return.

**Constraints**

- No import path from Day One or Apple Journal. Do not imply one.
- EU availability is blocked by a DSA trader verification case. Do not claim worldwide availability.
- Roadmap content is direction, not commitment: no dates, no versions, nothing App Store review could read as a promised feature.
- Do not name competitors. Do not use "better than paper" or paper-simulator framing.
- No emoji, no exclamation marks, no hype, no streaks or gamification language anywhere.

**Terminology.** Journal (not notebook, in product copy), entry, paper, ink, Pencil, cover, tag, bookmark, state of mind, a look back, Recently Deleted, Premium.

## Brand Commitments

- **Name:** "Paper Thoughts" on the site; "PaperThoughts" in code and repos. Email hello@paperthoughts.app. Domain paperthoughts.app.
- **Design system:** `repos/brand/` in the client hub is canonical for colour, type, spacing, and components. The app and the site both follow it. If a token is missing, add it there first; never hardcode a one-off value on the site.
- **Voice:** warm, plain, human. Contractions wanted. First person singular ("I") for anything personal, since it is one developer; second person for the reader. Sentence case everywhere. Short sentences, concrete nouns.
- **Indie is the position, not a weakness.** "Made by one person, and I read every note" is a deliberate selling point.
- **Thesis for the site:** the app's philosophy applied to the web. Every competitor site is busier than its app; this site should be exactly as calm as the app. That restraint is the differentiation.
- **Assets:** app icon as `public/icon-tile.svg` (pre-rounded) and in `repos/brand/assets/` (full-bleed master); App Store badge `public/app-store-badge.svg`; real app screenshots in `public/img/` (hero, pencil, paper swatches, photos before/after, four gallery shots, journals on iPad).

## Evidence on Hand

- Real app screenshots in `public/img/`, taken from the shipping app.
- The App Store listing at https://apps.apple.com/app/id6789969540.
- Release history and decisions in the context repo (`~/gitrepo/personal-context/context-paperthoughts`, `releases.md` and `decisions.md`).
- **No citable social proof exists** (confirmed 2026-10-23): no App Store reviews cleared for quoting, no tester quotes with permission, no press or community coverage. Future work must not fabricate testimonials, ratings, review counts, press logos, or user numbers.

## Product Principles

1. **Prove, don't persuade.** The visitor already wants to journal by hand. Show real ink on real paper and let it carry the page.
2. **As calm as the app.** Restraint is the differentiation. Anything that would feel loud inside the app is wrong on the site.
3. **Private by architecture, stated plainly.** No accounts, no servers, your iCloud. Say it as a fact in the developer's own voice, never as a fear pitch.
4. **One person, in the open.** Indie is the position. First person, honest limits, no corporate "we".
5. **Never a locked door.** Free tier is full-featured, writing is always readable and exportable, and the site never implies otherwise.

## Accessibility & Inclusion

No product-specific standard established. The brand system requires reduced-motion to be respected and the site already carries ARIA labelling on nav, forms, FAQ, and the theme toggle. Treat WCAG AA contrast as the floor, as the brand palette was tuned to it.
