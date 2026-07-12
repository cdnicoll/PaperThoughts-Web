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

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <BetaSignup />
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
