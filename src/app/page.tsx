import MinimalHeader from '@/components/sections/MinimalHeader';
import MinimalHero from '@/components/sections/MinimalHero';
import KeyFeatures from '@/components/sections/KeyFeatures';
import StudentsSection from '@/components/sections/StudentsSection';
import TeachersSection from '@/components/sections/TeachersSection';
import ParentsSection from '@/components/sections/ParentsSection';
import SchoolsSection from '@/components/sections/SchoolsSection';
import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';
import MinimalFooter from '@/components/sections/MinimalFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <MinimalHeader />
      <MinimalHero />
      <KeyFeatures />
      <StudentsSection />
      <TeachersSection />
      <ParentsSection />
      <SchoolsSection />
      <AboutSection />
      <CTASection />
      <MinimalFooter />
    </main>
  );
}
