import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import GSAPProvider from '@/components/providers/gsap-provider';
import ThemeProvider from '@/components/providers/theme-provider';
import styles from '@/layout.module.css';

import './globals.css';

const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Variable.woff2',
      weight: '200 700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSans-VariableItalic.woff2',
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
      path: '../public/fonts/SourceSerif4-VariableFont_opsz,wght.woff2',
      weight: '200 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/SourceSerif4-Italic-VariableFont_opsz,wght.woff2',
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
      path: '../public/fonts/JetBrainsMono[wght].woff2',
      weight: '100 800',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono-Italic[wght].woff2',
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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={[
          generalSans.variable,
          sourceSerif.variable,
          jetBrainsMono.variable,
          'antialiased',
          styles.layout,
          'page-layout',
          'overflow-hidden',
        ].join(' ')}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GSAPProvider>
            <Navbar />
            <main className="content">{children}</main>
            <Footer />
          </GSAPProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
