'use client';

import { HeaderImproved } from '@/components/HeaderImproved';
import { FooterImproved } from '@/components/FooterImproved';
import { LanguageProvider } from '@/context/LanguageContext';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <HeaderImproved />
      {children}
      <FooterImproved />
    </LanguageProvider>
  );
}
