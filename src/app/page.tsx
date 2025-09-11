import MinimalHeader from '@/components/sections/MinimalHeader';
import MinimalHero from '@/components/sections/MinimalHero';
import FeaturesSection from '@/components/sections/FeaturesSection';
import WhySection from '@/components/sections/WhySection';
import MinimalFooter from '@/components/sections/MinimalFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <MinimalHeader />
      <MinimalHero />
      <FeaturesSection />
      <WhySection />
      <MinimalFooter />
    </main>
  );
}
