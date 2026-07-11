import { footer, site } from '@/content/copy';
import { Cta } from './Cta';

export function Footer() {
  return (
    <footer className="chrome footer">
      <Cta />
      <div className="footer__links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href="/roadmap/">{footer.roadmapLink}</a>
        <a href="/privacy/">{footer.privacyLink}</a>
        <a href="/support/">{footer.supportLink}</a>
      </div>
      <p className="footer__note">
        {footer.note} © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
