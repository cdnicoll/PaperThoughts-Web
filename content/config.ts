// The launch flip (07 Phase 4): one flag, two CTA states.
// Pre-approval the site shows a quiet "Coming soon" line; on App Store
// approval, set appStoreUrl and the badge renders everywhere the CTA does.
export const appStoreUrl: string | null = null;

export const isLive = appStoreUrl !== null;
