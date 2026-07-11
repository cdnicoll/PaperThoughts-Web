import type { Metadata } from 'next';
import { faq, site } from '@/content/copy';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: `Support — ${site.name}`,
};

export default function Support() {
  return (
    <main className="page">
      <div className="page__top">
        <a className="page__back" href="/">
          ← {site.name}
        </a>
        <ThemeToggle />
      </div>
      <h1>Support</h1>
      <p>
        Write to <a href={`mailto:${site.email}`}>{site.email}</a> and a human
        (the one who made the app) will reply.
      </p>
      {faq.items.map((item) => (
        <div key={item.q}>
          <h2>{item.q}</h2>
          <p>{item.a}</p>
        </div>
      ))}
    </main>
  );
}
