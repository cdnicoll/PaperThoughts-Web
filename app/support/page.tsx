import type { Metadata } from 'next';
import { faq, feedbackForm, site, supportExtras } from '@/content/copy';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FaqList } from '@/components/FaqList';
import { FeedbackForm } from '@/components/FeedbackForm';

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
      <FaqList items={[...faq.items, ...supportExtras]} />
      <FeedbackForm
        source="support"
        heading={feedbackForm.supportHeading}
        sub={feedbackForm.supportSub}
      />
    </main>
  );
}
