import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { MantineConfigProvider } from '@/libs/mantine/config-provider';
import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://elite-techtalent.com'),
  title: 'Elite Tech Talent',
  description: 'Your partner of choice for transformative IT staffing solutions. Connect with top-tier technology professionals who align with your business needs, values, and culture.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Elite Tech Talent',
    description: 'Your partner of choice for transformative IT staffing solutions. Connect with top-tier technology professionals who align with your business needs, values, and culture.',
    url: 'https://elite-techtalent.com',
    siteName: 'Elite Tech Talent',
    images: [
      { url: 'https://elite-techtalent.com/logo-with-text.webp' },
    ],
  },
};

const acherusMilitant = localFont({
  src: '../../public/fonts/Acherus Militant 1.woff2',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Elite Tech Talent',
    url: 'https://elite-techtalent.com',
    logo: 'https://elite-techtalent.com/logo-with-text.webp',
  };

  const videoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Elite Tech Talent Header Background',
    description: 'Hero background video on Elite Tech Talent homepage.',
    thumbnailUrl: [
      'https://elite-techtalent.com/header-background-video-thumbnail.png',
    ],
    contentUrl: 'https://elite-techtalent.com/header-background-video.mp4',
    embedUrl: 'https://elite-techtalent.com/',
    uploadDate: '2026-02-01',
  };

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />
      </head>
      <body className={`${acherusMilitant.className} antialiased`}>
        <MantineConfigProvider>{children}</MantineConfigProvider>
      </body>
    </html>
  );
}
