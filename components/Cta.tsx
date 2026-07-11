import { appStoreUrl, isLive } from '@/content/config';
import { cta } from '@/content/copy';

export function Cta() {
  if (isLive && appStoreUrl) {
    return (
      <a className="cta--badge" href={appStoreUrl}>
        {cta.badge}
      </a>
    );
  }
  return <span className="cta--coming-soon">{cta.comingSoon}</span>;
}
