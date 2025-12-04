import { HeaderImproved } from '@/components/HeaderImproved';
import { HeroSectionImproved } from '@/components/sections/HeroSectionImproved';
import { BenefitsSectionImproved } from '@/components/sections/BenefitsSectionImproved';
import { FeaturedProductsSectionImproved } from '@/components/sections/FeaturedProductsSectionImproved';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSectionImproved } from '@/components/sections/FAQSectionImproved';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterImproved } from '@/components/FooterImproved';

export default function Home() {
  return (
    <>
      <HeaderImproved />
      <main>
        <HeroSectionImproved />
        <BenefitsSectionImproved />
        <FeaturedProductsSectionImproved />
        <TestimonialsSection />
        <FAQSectionImproved />
        <ContactSection />
      </main>
      <FooterImproved />
    </>
  );
}
