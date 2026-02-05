import type { Metadata } from 'next';
import ContactUsSection from "@/components/mains/contact-us/contact-us-section/contact-us-section";

export const metadata: Metadata = {
  title: 'Contact Us - Elite Tech Talent',
  description: 'Ready to transform your IT workforce? Whether scaling up for a new project or looking for ongoing support, we deliver skilled professionals tailored to your business needs with competitive costs and tight timelines.',
};

export default function ContactUsPage() {
  return (
    <ContactUsSection />
  );
}

