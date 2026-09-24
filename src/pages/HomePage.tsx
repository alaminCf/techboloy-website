import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { useCMS, SectionItem } from '../context/CMSContext';

// Core Section Components
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

// Builder & Edit Mode Controls
import { EditableSectionWrapper } from '../components/home/EditableSectionWrapper';
import { CustomSectionRenderer } from '../components/home/CustomSectionRenderer';
import { AdminLiveBar } from '../components/common/AdminLiveBar';

export const HomePage: React.FC = () => {
  const { sections } = useCMS();

  // Sort and filter only enabled sections
  const visibleSections = [...sections]
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  // Helper to render appropriate component based on section ID
  const renderSectionComponent = (sec: SectionItem) => {
    switch (sec.id) {
      case 'hero':
        return <Hero section={sec} />;
      case 'stats':
        return <QuickStats />;
      case 'about':
        return <AboutShort section={sec} />;
      case 'services':
        return <ServicesGrid />;
      case 'estatepilot':
        return <FeaturedProduct section={sec} />;
      case 'why':
        return <WhyTechboloy />;
      case 'process':
        return <ProcessTimeline />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'ventures':
        return <VenturesSection />;
      case 'academy':
        return <AcademySection />;
      case 'team':
        return <TeamSection />;
      case 'partners':
        return <PartnerMarquee />;
      case 'testimonials':
        return <TestimonialsSection />;
      case 'blog':
        return <BlogPreview />;
      case 'cta':
        return <CtaBanner section={sec} />;
      default:
        // User created custom section
        return <CustomSectionRenderer section={sec} />;
    }
  };

  return (
    <>
      <SEOHead
        title="Techboloy | Technology & Digital Solutions Partner"
        description="Techboloy is a Bangladesh-based technology and digital solutions company helping businesses turn ideas into practical digital experiences through custom software, ERP, digital marketing, UI/UX, and cloud infrastructure."
      />

      <main className="relative">
        {visibleSections.map((sec, idx) => (
          <EditableSectionWrapper
            key={sec.id}
            section={sec}
            isFirst={idx === 0}
            isLast={idx === visibleSections.length - 1}
          >
            {renderSectionComponent(sec)}
          </EditableSectionWrapper>
        ))}
      </main>

      {/* Floating Live Edit Mode Toolbar */}
      <AdminLiveBar />
    </>
  );
};

export default HomePage;
