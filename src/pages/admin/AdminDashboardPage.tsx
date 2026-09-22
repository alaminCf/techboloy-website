import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/common/SEOHead';
import { AdminLayout, AdminTab } from '../../components/admin/AdminLayout';
import { OverviewTab } from '../../components/admin/OverviewTab';
import { CompanyManagerTab } from '../../components/admin/CompanyManagerTab';
import { TeamManagerTab } from '../../components/admin/TeamManagerTab';
import { PortfolioManagerTab } from '../../components/admin/PortfolioManagerTab';
import { InsightsManagerTab } from '../../components/admin/InsightsManagerTab';
import { ServicesManagerTab } from '../../components/admin/ServicesManagerTab';
import { ProductsManagerTab } from '../../components/admin/ProductsManagerTab';
import { InquiriesInboxTab } from '../../components/admin/InquiriesInboxTab';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  useEffect(() => {
    // Check authentication
    const isAuth = sessionStorage.getItem('techboloy_admin_auth');
    if (!isAuth) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <>
      <SEOHead title="Admin Dashboard | Techboloy CMS" />

      <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === 'overview' && <OverviewTab setActiveTab={setActiveTab} />}
        {activeTab === 'company' && <CompanyManagerTab />}
        {activeTab === 'team' && <TeamManagerTab />}
        {activeTab === 'portfolio' && <PortfolioManagerTab />}
        {activeTab === 'insights' && <InsightsManagerTab />}
        {activeTab === 'services' && <ServicesManagerTab />}
        {activeTab === 'products' && <ProductsManagerTab />}
        {activeTab === 'inquiries' && <InquiriesInboxTab />}
      </AdminLayout>
    </>
  );
};
