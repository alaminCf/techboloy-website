import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CMSProvider } from './context/CMSContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/services/ServiceDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { EstatePilotPage } from './pages/products/EstatePilotPage';
import { VenturesPage } from './pages/VenturesPage';
import { AcademyPage } from './pages/AcademyPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PortfolioDetailPage } from './pages/PortfolioDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

// Admin CMS pages
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-purple/20 selection:text-brand-purple">
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Services routes */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          
          {/* Products routes */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/estatepilot" element={<EstatePilotPage />} />
          
          {/* Ventures & Academy */}
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          
          {/* Portfolio routes */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
          
          {/* Insights routes */}
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage />} />
          
          {/* Contact & Legal */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* Admin CMS routes */}
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Fallback route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CMSProvider>
      <AppContent />
    </CMSProvider>
  );
};

export default App;
