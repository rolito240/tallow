import { HeroSectionImproved } from '@/components/sections/HeroSectionImproved';
import { BenefitsSectionImproved } from '@/components/sections/BenefitsSectionImproved';
import { FeaturedProductsSectionImproved } from '@/components/sections/FeaturedProductsSectionImproved';
import { HowToUseSection } from '@/components/sections/HowToUseSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSectionImproved } from '@/components/sections/FAQSectionImproved';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSectionImproved />
      <BenefitsSectionImproved />
      <FeaturedProductsSectionImproved />
      <HowToUseSection />
      <TestimonialsSection />
      <FAQSectionImproved />
      <ContactSection />
    </main>
  );
}
