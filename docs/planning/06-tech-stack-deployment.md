<!-- Reconstructed 2026-07-10 from session context after the original
     web/website_planning/ was lost in the repo move. -->

# 06 — Tech Stack & Deployment

Cody's stated direction: Next.js + React, deployed to Firebase, domain paperthoughts.app (registered). That works — the decisions below are within that frame, with one honest flag first.

## 1. The over-engineering flag (raising it once, then moving on)

This site is a few hundred words, a handful of images, and (post-waitlist-removal) zero forms. Astro or plain HTML would also do it. Next.js is still a defensible choice — Cody knows React and the marginal cost is near zero **if** we stay in static-export mode. The flag: the failure mode isn't picking Next, it's letting Next pull us into servers, ISR, and API routes for a one-page brochure. Guardrail below.

## 2. Recommended shape: static export

- `output: 'export'` in `next.config` → pure static files, no Node server.
- Deploy to **Firebase Hosting** (classic) — free tier covers this site indefinitely, global CDN, `firebase deploy` and done.
- Explicitly **not** Firebase App Hosting (the Cloud Run-backed SSR product) — that's for apps with servers; it adds cold starts, billing surface, and ops for zero benefit here.
- Caveat to accept upfront: static export drops `next/image` optimization (needs a server). Pre-generate WebP/AVIF at 2–3 sizes at build time (sharp script or `next-export-optimize-images`) — better anyway, since we control exact quality on the ink screenshots. (Interim: `sips`/PIL crops committed as PNG; the sharp pipeline is Phase 3.)
- CI later if wanted (GitHub Action → `firebase deploy` on push to main); manual deploys are fine for v1.

## 3. Domain

paperthoughts.app on Firebase Hosting: add custom domain in console → two TXT/A record verifications at the registrar → Firebase provisions the SSL cert. Note `.app` is an HSTS-preloaded TLD, HTTPS-only always — Firebase handles this, but any temporary hosting elsewhere must also have valid TLS or the domain simply won't load. Set up `www.` → apex redirect (or the reverse) in the same step.

## 4. The waitlist — SUPERSEDED 2026-07-10: no waitlist; site launches alongside the app (see 07 Phase 0). Analysis kept for the record.

Requirement was: collect emails pre-launch, email them once at launch. Options considered:

**A. Hosted email service (was recommended):** Buttondown, MailerLite, or Kit — static form POST or tiny fetch, they handle storage, double-opt-in, unsubscribe/CASL compliance, and the actual launch send. Free tiers cover the realistic list size. Keeps the site fully static and avoids us holding subscriber PII. Buttondown the most indie-toned fit.
- CASL note (Canadian sender): a waitlist signup is express consent, but the launch email still needs an unsubscribe link and sender identification — hosted services do this by default. Hand-rolled Firestore + a script does not.

**B. Firestore + Cloud Function:** all-Firebase, no third party. But an abuse-open endpoint, spam filtering, export tooling, and compliance for a one-time send. More code than the rest of the site combined. Not recommended.

**C. Formspree/Formspark → CSV:** cheapest possible, but the launch send still needs a tool, so it converges on A with extra steps.

## 5. Analytics

Per 01 §5: none at v1 (decided 2026-07-10); later, a privacy-respecting counter (Plausible ~$9/mo, Fathom, or self-hosted-free GoatCounter). No Google Analytics, no cookie banner (none needed if we don't use cookies — which is itself an on-brand footer line: "No cookies. Obviously."). Note the theme toggle uses localStorage (a preference, not tracking) — still cookie-free.

## 6. Repo & structure

Repo: `PaperThoughts-Web` on GitHub (`github.com/cdnicoll/PaperThoughts-Web`); working tree moved into the monorepo at `PaperThoughts/web/` on 2026-07-10. Shape as built:

```
web/
├── app/                  # Next app router: page.tsx, layout.tsx (inline scripts), privacy/, support/
├── components/           # Hero, Gallery, Sections (Pencil…Faq, FeatureTable), Cta, Footer, ThemeToggle
├── content/copy.ts       # ALL page copy in one file — Cody edits words without touching JSX
├── content/config.ts     # The coming-soon ⇄ App Store badge flag
├── docs/planning/        # These docs (reconstructed; now versioned with the site)
├── public/img/           # Interim crops from demo_journals/_captures
├── styles/tokens.css     # Brand tokens as custom properties (light + dark + manual override)
└── styles/globals.css
```

Design tokens land in `tokens.css` as custom properties named after the brand roles, values copied from `brand/tokens/colors.css`. No Tailwind — `brand/` stays the single source of truth; no hexes in components.

## 7. Phase plan

1. **v1 static:** hero + all sections, privacy + support pages, deployed quietly to paperthoughts.app with the "Coming soon" CTA state. Unblocks the App Store pre-launch checklist immediately.
2. **Screenshot session (#68/#91)** → swap interim crops for final captures. The site is designed so this is a pure asset swap.
3. **Launch flip:** "Coming soon" → App Store badge (both states behind a single flag/const from the start).
4. **Post-launch:** press page, analytics counter, real quotes band.

(Updated 2026-07-10 — no waitlist, dark mode ships at v1, no analytics at v1; 07 is authoritative.)
