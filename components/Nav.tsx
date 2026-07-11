import { nav, site } from '@/content/copy';
import { ThemeToggle } from './ThemeToggle';

// Whisper-quiet nav: three links + the theme toggle, right-aligned.
// On the home page (brand=false) the 52px hero icon is the mark, so the
// nav needs no left element. On utility pages (brand=true) there is no
// hero, so the nav carries a small brand that links home — replacing the
// old back link. Colors adapt to the chrome vs cream ground via CSS.
export function Nav({ brand = false }: { brand?: boolean }) {
  return (
    <nav className="nav" aria-label="Primary">
      {brand && (
        <a className="nav__brand" href="/">
          <img src="/icon-tile.svg" alt="" width={28} height={28} />
          <span>{site.name}</span>
        </a>
      )}
      <a href="/#features">{nav.features}</a>
      <a href="/roadmap/">{nav.roadmap}</a>
      <a href="/support/">{nav.support}</a>
      <ThemeToggle />
    </nav>
  );
}
