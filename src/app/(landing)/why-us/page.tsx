import type { Metadata } from 'next';
import WhyChooseUsSection from "@/components/mains/why-us/why-choose-us-section/why-choose-us-section";
import WhyUsVersusSection from "@/components/mains/why-us/why-us-versus-section/why-us-versus-section";
import WhyVietnamSection from "@/components/mains/why-us/why-vietnam-section/why-vietnam-section";

export const metadata: Metadata = {
  title: 'Why Choose Us - Elite Tech Talent',
  description: 'Partnering with RECO HR Solutions, Vietnam\'s leading IT-focused HR ecosystem. Tap into Vietnam\'s largest IT talent ecosystem with award-winning expertise, scalable solutions, and proven track record.',
};

export default function WhyChooseUsPage() {
  return (
    <>
      <WhyChooseUsSection />
      <WhyUsVersusSection />
      <WhyVietnamSection />
    </>
  );
}

