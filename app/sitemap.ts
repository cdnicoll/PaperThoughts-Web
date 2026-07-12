import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/config';

export const dynamic = 'force-static';

// Generated at build time into out/sitemap.xml (static export).
// lastModified omitted on purpose: a fake per-build date is worse than none.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1 },
    { url: `${siteUrl}/roadmap/`, priority: 0.6 },
    { url: `${siteUrl}/support/`, priority: 0.6 },
    { url: `${siteUrl}/privacy/`, priority: 0.3 },
  ];
}
