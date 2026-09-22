import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/home/Hero';
import { QuickStats } from '../components/home/QuickStats';
import { AboutShort } from '../components/home/AboutShort';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { FeaturedProduct } from '../components/home/FeaturedProduct';
import { WhyTechboloy } from '../components/home/WhyTechboloy';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { VenturesSection } from '../components/home/VenturesSection';
import { AcademySection } from '../components/home/AcademySection';
import { TeamSection } from '../components/home/TeamSection';
import { PartnerMarquee } from '../components/home/PartnerMarquee';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { BlogPreview } from '../components/home/BlogPreview';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Techboloy | Technology & Digital Solutions Partner"
        description="Techboloy is a Bangladesh-based technology and digital solutions company helping businesses turn ideas into practical digital experiences through custom software, ERP, digital marketing, UI/UX, and cloud infrastructure."
      />
      <main>
        {/* Section 3: Hero Section */}
        <Hero />

        {/* Section 4: Trust / Quick Stats */}
        <QuickStats />

        {/* Section 5: About Techboloy - Short Version */}
        <AboutShort />

        {/* Section 6: Services Section */}
        <ServicesGrid />

        {/* Section 7: Featured Product (EstatePilot) */}
        <FeaturedProduct />

        {/* Section 8: Why Techboloy */}
        <WhyTechboloy />

        {/* Section 9: Our Process */}
        <ProcessTimeline />

        {/* Section 10: Featured Work / Case Studies */}
        <PortfolioSection />

        {/* Section 11: Ventures */}
        <VenturesSection />

        {/* Section 12: Techboloy Academy */}
        <AcademySection />

        {/* Section 13: Team Section */}
        <TeamSection />

        {/* Section 14: Partners / Client Logos */}
        <PartnerMarquee />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Section 15: Insights / Blog */}
        <BlogPreview />

        {/* Section 16: CTA Section */}
        <CtaBanner />
      </main>
    </>
  );
};
