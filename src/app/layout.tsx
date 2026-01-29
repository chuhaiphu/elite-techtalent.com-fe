import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { MantineConfigProvider } from '@/libs/mantine/config-provider';

import './globals.scss';


export const metadata: Metadata = {
  title: 'Elite Tech Talent',
  description: 'Elite Tech Talent',
  icons: {
    icon: '/favicon.ico',
  },
};

const acherusMilitant = localFont({
  src: '../../public/fonts/Acherus Militant 1.woff2',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${acherusMilitant.className} antialiased`}>
        <MantineConfigProvider>{children}</MantineConfigProvider>
      </body>
    </html>
  );
}
