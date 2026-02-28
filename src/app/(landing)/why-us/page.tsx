import type { Metadata } from 'next';
import Image from 'next/image';
import WhyChooseUsSection from '@/components/mains/why-us/why-choose-us-section/why-choose-us-section';
import VersusSection from '@/components/mains/why-us/versus-section/versus-section';
import WhyVietnamSection from '@/components/mains/why-us/why-vietnam-section/why-vietnam-section';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Why Choose Us - Elite Tech Talent',
  description:
    "Partnering with RECO HR Solutions, Vietnam's leading IT-focused HR ecosystem. Tap into Vietnam's largest IT talent ecosystem with award-winning expertise, scalable solutions, and proven track record.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <div className={styles.sharedBackgroundSection}>
        <div className={styles.backgroundStack}>
          <div className={styles.baseBackground}>
            <Image
              src="/images/general-background.webp"
              alt="Background"
              fill
              className={styles.backgroundImage}
            />
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <WhyChooseUsSection />
          <VersusSection />
        </div>
      </div>
      <WhyVietnamSection />
    </>
  );
}
