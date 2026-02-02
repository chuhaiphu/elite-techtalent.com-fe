import type { Metadata } from 'next';
import ContactUsHero from "@/components/mains/contact-us/contact-us-hero/contact-us-hero";
import ContactUsFormSection from "@/components/mains/contact-us/contact-us-form-section/contact-us-form-section";

export const metadata: Metadata = {
  title: 'Contact Us - Elite Tech Talent',
  description: 'Ready to transform your IT workforce? Whether scaling up for a new project or looking for ongoing support, we deliver skilled professionals tailored to your business needs with competitive costs and tight timelines.',
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUsHero />
      <ContactUsFormSection />
    </>
  );
}

