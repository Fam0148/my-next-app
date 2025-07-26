import { HeroBanner } from '@/components/HeroBanner';
import { Testimonial } from '@/components/Testimonial';
import { DistributionHero } from '@/components/DistributionHero';
import { SmartDistribution } from '@/components/SmartDistribution';
import { OurServices } from '@/components/OurServices';
import { BlogSection } from '@/components/BlogSection';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <DistributionHero />
      <SmartDistribution />
      <OurServices />
      <BlogSection />
      <Testimonial />
    </>
  );
}