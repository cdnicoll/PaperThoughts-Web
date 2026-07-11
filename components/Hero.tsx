import { hero, site } from '@/content/copy';
import { Cta } from './Cta';
import { Nav } from './Nav';

export function Hero() {
  return (
    <header className="chrome hero">
      <Nav />
      <div className="hero__inner">
        <div className="hero__text" data-reveal>
          {/* The headline is the wordmark (04 §2): icon glyph only up top */}
          <div className="hero__brandmark">
            <img src="/icon-tile.svg" alt={site.name} width={52} height={52} />
          </div>
          <h1>{hero.headline}</h1>
          <p className="hero__sub">{hero.sub}</p>
          <Cta />
        </div>
        <div className="hero__device" data-reveal style={{ transitionDelay: '90ms' }}>
          <div className="ipad">
            <img src="/img/hero-full.png" alt={hero.sheetAlt} />
          </div>
        </div>
      </div>
    </header>
  );
}
