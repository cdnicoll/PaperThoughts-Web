import type { Metadata } from 'next';
import { faq, feedbackForm, site, supportExtras } from '@/content/copy';
import { Nav } from '@/components/Nav';
import { FaqList } from '@/components/FaqList';
import { FeedbackForm } from '@/components/FeedbackForm';

export const metadata: Metadata = {
  title: `Support · ${site.name}`,
};

export default function Support() {
  return (
    <main className="page">
      <Nav brand />
      <h1>Support</h1>
      <p>
        Write to <a href={`mailto:${site.email}`}>{site.email}</a> and I'll
        reply. I'm the person who made the app.
      </p>
      <FaqList items={[...faq.items, ...supportExtras]} />
      <FeedbackForm
        source="support"
        heading={feedbackForm.supportHeading}
        sub={feedbackForm.supportSub}
      />
    </main>
  );
}
