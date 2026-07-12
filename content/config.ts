// The launch flip (07 Phase 4): one flag, two CTA states.
// Pre-approval the site shows a quiet "Coming soon" line; on App Store
// approval, set appStoreUrl and the badge renders everywhere the CTA does.
export const appStoreUrl: string | null = null;

export const isLive = appStoreUrl !== null;

// Indexing was originally tied to the launch flip; decoupled 2026-07-12
// (Cody's call): index during the beta so search rankings ramp before
// launch. The beta form is the conversion goal in the meantime.
export const allowIndexing = true;

// Cloudflare Web Analytics (cookieless). The beacon only renders when a
// token is set — grab it from the Cloudflare dashboard (Web Analytics →
// Add a site) and paste it here. It's publishable, like the Firebase
// config; not a secret.
export const cloudflareAnalyticsToken: string | null = '6276b99a9d0047699a23a82f74501222';

export const siteUrl = 'https://paperthoughts.app';
