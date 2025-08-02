import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jukiya Nakazawa | Portfolio',
  description:
    'フリーランスエンジニア 中澤樹希也のポートフォリオサイト。フルスタック開発、モダンなWebアプリケーション開発の実績をご紹介します。',
  keywords: [
    'フリーランスエンジニア',
    'フルスタック開発',
    'Next.js',
    'React',
    'TypeScript',
    'AWS',
    '中澤樹希也',
  ],
  authors: [{ name: 'Jukiya Nakazawa' }],
  creator: 'Jukiya Nakazawa',
  publisher: 'Jukiya Nakazawa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jukiya-nakazawa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jukiya Nakazawa | フリーランスエンジニア ポートフォリオ',
    description:
      'フリーランスエンジニア 中澤樹希也のポートフォリオサイト。フルスタック開発、モダンなWebアプリケーション開発の実績をご紹介します。',
    url: 'https://jukiya-nakazawa.com',
    siteName: 'Jukiya Nakazawa Portfolio',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jukiya Nakazawa | フリーランスエンジニア ポートフォリオ',
    description: 'フリーランスエンジニア 中澤樹希也のポートフォリオサイト',
    creator: '@jukiya_nakazawa',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E97624' },
    { media: '(prefers-color-scheme: dark)', color: '#E97624' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
