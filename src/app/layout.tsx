import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OZ Tallow Skincare | 100% Grass-Fed Natural Tallow Cream',
  description:
    'Discover Australia\'s purest skincare secret. 100% grass-fed tallow, halal-certified, and chemical-free. Bio-compatible nutrition for your skin.',
  keywords: [
    'tallow skincare',
    'grass-fed tallow',
    'natural skincare',
    'halal skincare',
    'eczema relief',
    'psoriasis treatment',
    'australian skincare',
  ],
  openGraph: {
    title: 'OZ Tallow Skincare | 100% Grass-Fed Natural Tallow Cream',
    description:
      'Bio-compatible skincare that your skin recognizes. Made in Australia with 100% grass-fed tallow.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="${playfair.variable} ${montserrat.variable}">
      <body className="font-montserrat antialiased">{children}</body>
    </html>
  );
}
