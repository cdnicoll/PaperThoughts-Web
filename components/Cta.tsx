import { appStoreUrl, isLive } from '@/content/config';
import { cta } from '@/content/copy';

export function Cta() {
  if (isLive && appStoreUrl) {
    // Apple's official badge artwork (public/app-store-badge.svg). The
    // alt carries the words; the image is the whole link.
    return (
      <a className="cta--badge" href={appStoreUrl}>
        <img src="/app-store-badge.svg" alt={cta.badge} width={162} height={54} />
      </a>
    );
  }
  return <span className="cta--coming-soon">{cta.comingSoon}</span>;
}
