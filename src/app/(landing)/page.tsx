import type { Metadata } from 'next';
import LandingHero from "@/components/mains/landing/landing-hero/landing-hero";
import LandingInfoContent from "@/components/mains/landing/landing-info-content/landing-info-content";
import LandingIntroContent from "@/components/mains/landing/landing-intro-content/landing-intro-content";

export const metadata: Metadata = {
  title: 'Stay Ahead - Elite Tech Talent',
  description: 'Your partner of choice for transformative IT staffing solutions. Connect with top-tier technology professionals who meet your unique business needs and align with your company\'s values and culture.',
};

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <LandingIntroContent />
      <LandingInfoContent />
    </>
  );
}
