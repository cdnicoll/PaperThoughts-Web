/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export is the guardrail against server creep (planning 06 §1-2).
  // No API routes, no ISR, no server components doing IO. If a change needs
  // a server, it does not belong on this site.
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
