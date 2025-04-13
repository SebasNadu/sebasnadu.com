import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSansVariable-Bold.woff2',
      weight: '200 700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSansVariable-BoldItalic.woff2',
      weight: '200 700',
      style: 'italic',
    },
  ],
  display: 'block',
  variable: '--font-general-sans',
});

const sourceSerif = localFont({
  src: [
    {
      path: '../public/fonts/subset-SourceSerif4Roman-Regular.woff2',
      weight: '200 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/subset-SourceSerif4Italic-Italic.woff2',
      weight: '200 900',
      style: 'italic',
    },
  ],
  display: 'block',
  variable: '--font-source-serif',
});

const jetBrainsMono = localFont({
  src: [
    {
      path: '../public/fonts/subset-JetBrainsMono-Regular.woff2',
      weight: '100 800',
      style: 'normal',
    },
    {
      path: '../public/fonts/subset-JetBrainsMono-Italic.woff2',
      weight: '100 800',
      style: 'italic',
    },
  ],
  display: 'block',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Sebastián Navarro – Software Engineer',
  description:
    'Sebastián Navarro is a creative and detail-oriented software engineer specializing in modern web technologies, performance optimization, and user-focused design.',
  keywords: [
    'Sebastián Navarro',
    'software engineer',
    'full-stack developer',
    'frontend developer',
    'backend developer',
    'web developer',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'UI/UX',
    'performance',
    'portfolio',
  ],
  authors: [{ name: 'Sebastián Navarro' }],
  creator: 'Sebastián Navarro',
  metadataBase: new URL('https://sebasnadu.com'),
  openGraph: {
    title: 'Sebastián Navarro – Software Engineer',
    description:
      'Turning ideas into interactive realities. Explore my journey through code and creativity.',
    url: 'https://sebasnadu.com',
    siteName: 'Sebastián Navarro',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sebastián Navarro – Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastián Navarro – Software Engineer',
    description:
      'Turning ideas into interactive realities. Explore my journey through code and creativity.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${generalSans.variable} ${sourceSerif.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
