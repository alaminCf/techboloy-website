import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  CompanyInfo, 
  Service, 
  Product, 
  Venture, 
  PortfolioItem, 
  TeamMember, 
  InsightPost, 
  Testimonial,
  Partner
} from '../types';

import { companyData as initialCompanyData } from '../data/company';
import { servicesData as initialServicesData } from '../data/services';
import { productsData as initialProductsData } from '../data/products';
import { venturesData as initialVenturesData } from '../data/ventures';
import { portfolioData as initialPortfolioData } from '../data/portfolio';
import { allTeamMembers as initialTeamMembers } from '../data/team';
import { insightsData as initialInsightsData } from '../data/insights';
import { testimonialsData as initialTestimonialsData } from '../data/testimonials';
import { partnersData as initialPartnersData } from '../data/partners';

export interface InboundInquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budgetRange?: string;
  projectDetails: string;
  submittedAt: string;
  status: 'New' | 'In Review' | 'Contacted' | 'Closed';
}

interface CMSContextType {
  company: CompanyInfo;
  services: Service[];
  products: Product[];
  ventures: Venture[];
  portfolio: PortfolioItem[];
  team: TeamMember[];
  insights: InsightPost[];
  testimonials: Testimonial[];
  partners: Partner[];
  inquiries: InboundInquiry[];

  // Update actions
  updateCompany: (updated: CompanyInfo) => void;
  updateCompanyStat: (id: string, value: number) => void;
  
  // Team actions
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;

  // Portfolio actions
  addPortfolioItem: (item: Omit<PortfolioItem, 'id'>) => void;
  updatePortfolioItem: (id: string, item: Partial<PortfolioItem>) => void;
  deletePortfolioItem: (id: string) => void;

  // Insights actions
  addInsight: (post: Omit<InsightPost, 'id'>) => void;
  updateInsight: (id: string, post: Partial<InsightPost>) => void;
  deleteInsight: (id: string) => void;

  // Inquiries
  addInquiry: (inquiry: Omit<InboundInquiry, 'id' | 'submittedAt' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: InboundInquiry['status']) => void;
  deleteInquiry: (id: string) => void;

  // Global utilities
  resetToDefaults: () => void;
  exportDataJson: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const STORAGE_KEY = 'techboloy_cms_data_v1';
const INQUIRIES_KEY = 'techboloy_inquiries_v1';

const initialDefaultInquiries: InboundInquiry[] = [
  {
    id: "inq-1",
    name: "Kamal Hossain",
    company: "Green Delta Logistics",
    email: "kamal@greendelta.com.bd",
    phone: "+880 1711-234567",
    serviceRequired: "ERP & Software Solutions",
    budgetRange: "$7,000 - $15,000 (BDT 8L - 18L)",
    projectDetails: "Need custom multi-warehouse inventory tracking and automated billing software with mobile barcode scanner integration.",
    submittedAt: "2026-09-15T14:32:00Z",
    status: "New"
  },
  {
    id: "inq-2",
    name: "Nusrat Sharmin",
    company: "Urban Heights Real Estate",
    email: "nusrat@urbanheights.bd",
    phone: "+880 1819-876543",
    serviceRequired: "EstatePilot SaaS Inquiry",
    budgetRange: "$3,000 - $7,000 (BDT 3.5L - 8L)",
    projectDetails: "Looking for real estate CRM demo for 120 residential apartments currently under construction in Uttara.",
    submittedAt: "2026-09-16T09:15:00Z",
    status: "In Review"
  }
];

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [company, setCompany] = useState<CompanyInfo>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_company`);
    return saved ? JSON.parse(saved) : initialCompanyData;
  });

  const [team, setTeam] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_team`);
    return saved ? JSON.parse(saved) : initialTeamMembers;
  });

  const [services] = useState<Service[]>(initialServicesData);
  const [products] = useState<Product[]>(initialProductsData);
  const [ventures] = useState<Venture[]>(initialVenturesData);

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_portfolio`);
    return saved ? JSON.parse(saved) : initialPortfolioData;
  });

  const [insights, setInsights] = useState<InsightPost[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_insights`);
    return saved ? JSON.parse(saved) : initialInsightsData;
  });

  const [testimonials] = useState<Testimonial[]>(initialTestimonialsData);
  const [partners] = useState<Partner[]>(initialPartnersData);

  const [inquiries, setInquiries] = useState<InboundInquiry[]>(() => {
    const saved = localStorage.getItem(INQUIRIES_KEY);
    return saved ? JSON.parse(saved) : initialDefaultInquiries;
  });

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_company`, JSON.stringify(company));
  }, [company]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_team`, JSON.stringify(team));
  }, [team]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_portfolio`, JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_insights`, JSON.stringify(insights));
  }, [insights]);

  useEffect(() => {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
  }, [inquiries]);

  // Company Actions
  const updateCompany = (updated: CompanyInfo) => {
    setCompany(updated);
  };

  const updateCompanyStat = (id: string, value: number) => {
    setCompany(prev => ({
      ...prev,
      stats: prev.stats.map(s => s.id === id ? { ...s, value } : s)
    }));
  };

  // Team Actions
  const addTeamMember = (memberData: Omit<TeamMember, 'id'>) => {
    const newMember: TeamMember = {
      ...memberData,
      id: `team-${Date.now()}`
    };
    setTeam(prev => [newMember, ...prev]);
  };

  const updateTeamMember = (id: string, updated: Partial<TeamMember>) => {
    setTeam(prev => prev.map(m => m.id === id ? { ...m, ...updated } : m));
  };

  const deleteTeamMember = (id: string) => {
    setTeam(prev => prev.filter(m => m.id !== id));
  };

  // Portfolio Actions
  const addPortfolioItem = (itemData: Omit<PortfolioItem, 'id'>) => {
    const newItem: PortfolioItem = {
      ...itemData,
      id: `proj-${Date.now()}`
    };
    setPortfolio(prev => [newItem, ...prev]);
  };

  const updatePortfolioItem = (id: string, updated: Partial<PortfolioItem>) => {
    setPortfolio(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolio(prev => prev.filter(p => p.id !== id));
  };

  // Insights Actions
  const addInsight = (postData: Omit<InsightPost, 'id'>) => {
    const newPost: InsightPost = {
      ...postData,
      id: `post-${Date.now()}`
    };
    setInsights(prev => [newPost, ...prev]);
  };

  const updateInsight = (id: string, updated: Partial<InsightPost>) => {
    setInsights(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteInsight = (id: string) => {
    setInsights(prev => prev.filter(p => p.id !== id));
  };

  // Inquiries Actions
  const addInquiry = (inquiryData: Omit<InboundInquiry, 'id' | 'submittedAt' | 'status'>) => {
    const newInquiry: InboundInquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'New'
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: InboundInquiry['status']) => {
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(i => i.id !== id));
  };

  // Global Utilities
  const resetToDefaults = () => {
    localStorage.removeItem(`${STORAGE_KEY}_company`);
    localStorage.removeItem(`${STORAGE_KEY}_team`);
    localStorage.removeItem(`${STORAGE_KEY}_portfolio`);
    localStorage.removeItem(`${STORAGE_KEY}_insights`);
    localStorage.removeItem(INQUIRIES_KEY);

    setCompany(initialCompanyData);
    setTeam(initialTeamMembers);
    setPortfolio(initialPortfolioData);
    setInsights(initialInsightsData);
    setInquiries(initialDefaultInquiries);
  };

  const exportDataJson = () => {
    const fullData = {
      company,
      team,
      portfolio,
      insights,
      inquiries,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(fullData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `techboloy_cms_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <CMSContext.Provider
      value={{
        company,
        services,
        products,
        ventures,
        portfolio,
        team,
        insights,
        testimonials,
        partners,
        inquiries,
        updateCompany,
        updateCompanyStat,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        addPortfolioItem,
        updatePortfolioItem,
        deletePortfolioItem,
        addInsight,
        updateInsight,
        deleteInsight,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        resetToDefaults,
        exportDataJson
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
