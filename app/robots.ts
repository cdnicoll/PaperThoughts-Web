import type { MetadataRoute } from 'next';
import { allowIndexing, siteUrl } from '@/content/config';

export const dynamic = 'force-static';

// Generated at build time into out/robots.txt (static export).
// Everyone is welcome, including AI crawlers (GPTBot, ClaudeBot,
// PerplexityBot and friends fall under *) — being readable by AI
// assistants is deliberate; see also public/llms.txt. If indexing is
// ever turned back off, this flips to disallow in the same build.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowIndexing
      ? [{ userAgent: '*', allow: '/' }]
      : [{ userAgent: '*', disallow: '/' }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
