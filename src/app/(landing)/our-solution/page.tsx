import type { Metadata } from 'next';
import OurServicesSection from "@/components/mains/our-solution/our-services-section/our-services-section";
import OurSolutionsSection from "@/components/mains/our-solution/our-solutions-section/our-solutions-section";
import OurSpecialtiesSection from "@/components/mains/our-solution/our-specialties-section/our-specialties-section";

export const metadata: Metadata = {
  title: 'Our Solutions - Elite Tech Talent',
  description: 'We don\'t just fill roles, we build partnerships. Strategic staffing support with rapid response times and personalized approach. Services include head hunting, staff augmentation, BOT, EOR, and HR outsourcing.',
};

export default function SolutionPage() {
  return (
    <>
      <OurSolutionsSection />
      <OurServicesSection />
      <OurSpecialtiesSection />
    </>
  );
}

