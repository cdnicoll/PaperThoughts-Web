import type { Metadata } from 'next';
import { site } from '@/content/copy';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: `Privacy — ${site.name}`,
};

// DRAFT for Cody's review before App Store submission. Plain cream page
// (04 §1). Keep it as honest and short as the architecture allows.
export default function Privacy() {
  return (
    <main className="page">
      <div className="page__top">
        <a className="page__back" href="/">
          ← {site.name}
        </a>
        <ThemeToggle />
      </div>
      <h1>Privacy</h1>
      <p>
        {site.name} stores your journals in your own iCloud account. We have no
        servers, no accounts, and no way to read anything you write.
      </p>
      <h2>What we collect</h2>
      <p>
        Nothing. The app has no analytics, no tracking, and no third-party
        services. Your entries, photos, and locations sync through iCloud using
        Apple&rsquo;s infrastructure, under Apple&rsquo;s privacy policy and
        your iCloud settings.
      </p>
      <h2>This website</h2>
      <p>No cookies, no analytics, no tracking. It is a static page.</p>
      <h2>Contact</h2>
      <p>
        Questions? Write to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </main>
  );
}
