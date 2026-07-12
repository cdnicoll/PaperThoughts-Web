import type { Metadata } from 'next';
import { roadmap, site } from '@/content/copy';
import { Nav } from '@/components/Nav';
import { FeedbackForm } from '@/components/FeedbackForm';

export const metadata: Metadata = {
  title: `Roadmap · ${site.name}`,
  description:
    'What is coming to Paper Thoughts and what is being explored, from shape snapping to handwriting search.',
  alternates: { canonical: '/roadmap/' },
};

export default function Roadmap() {
  return (
    <main className="page">
      <Nav brand />
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

      <FeedbackForm
        source="roadmap"
        heading={roadmap.formHeading}
        sub={roadmap.formSub}
      />
    </main>
  );
}
