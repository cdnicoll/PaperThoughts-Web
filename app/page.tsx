import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { BetaSignup } from '@/components/BetaSignup';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import {
  Faq,
  FeatureTable,
  FeedbackInvite,
  PaperStyles,
  Pencil,
  PhotosPlaces,
  Pricing,
  Privacy,
} from '@/components/Sections';
import { faq, site } from '@/content/copy';
import { appStoreUrl, isLive, siteUrl } from '@/content/config';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// Structured data, generated from copy.ts so it can't drift from the page.
// MobileApplication describes the app for search and AI assistants;
// FAQPage makes the questions machine-readable. Prices mirror app issue
// #92 defaults — update alongside copy.ts when App Store Connect is set.
const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: site.name,
  operatingSystem: 'iPadOS',
  applicationCategory: 'LifestyleApplication',
  description: site.description,
  url: siteUrl,
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '0',
    highPrice: '59.99',
    priceCurrency: 'USD',
  },
  // Once live, point search and assistants at the store listing too.
  ...(isLive && appStoreUrl ? { installUrl: appStoreUrl } : {}),
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <main>
        {/* The beta invite retires at launch: "testing with a small group
            first" stops being true the moment the badge goes up. */}
        {!isLive && <BetaSignup />}
        <Pencil />
        <PaperStyles />
        <PhotosPlaces />
        <Gallery />
        <Privacy />
        <Pricing />
        <FeatureTable />
        <Faq />
        <FeedbackInvite />
      </main>
      <Footer />
    </>
  );
}
