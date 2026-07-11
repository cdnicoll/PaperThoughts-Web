import type { Metadata } from 'next';
import { roadmap, site } from '@/content/copy';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: `Roadmap — ${site.name}`,
};

export default function Roadmap() {
  return (
    <main className="page">
      <div className="page__top">
        <a className="page__back" href="/">
          ← {site.name}
        </a>
        <ThemeToggle />
      </div>
      <h1>{roadmap.heading}</h1>
      <p>{roadmap.intro}</p>

      {roadmap.groups.map((group) => (
        <section key={group.title} className="roadmap__group">
          <h2>{group.title}</h2>
          <dl className="roadmap__list">
            {group.items.map((item) => (
              <div key={item.name}>
                <dt>{item.name}</dt>
                <dd>{item.line}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <p className="roadmap__outro">{roadmap.outro}</p>
    </main>
  );
}
