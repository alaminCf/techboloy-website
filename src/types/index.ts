export interface CompanyStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  foundedYear: number;
  phone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    country: string;
    coordinates: { lat: number; lng: number };
  };
  social: {
    facebook: string;
    linkedin: string;
    whatsapp: string;
    facebookGroup: string;
  };
  stats: CompanyStat[];
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name
  badge: string;
  subOfferings: string[];
  deliverables: string[];
  technologies: string[];
  features: ServiceFeature[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  modules: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  metrics: { label: string; value: string }[];
  externalUrl?: string;
  badge?: string;
}

export interface Venture {
  id: string;
  name: string;
  category: string;
  description: string;
  tagline: string;
  websiteUrl: string;
  status: 'Live' | 'Scaling' | 'Incubating';
  logoPlaceholder: string;
  highlights: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'Web' | 'Mobile' | 'Software' | 'Branding' | 'Digital Marketing' | 'SaaS';
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  liveUrl?: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  category: 'leadership' | 'core';
  bio: string;
  avatar: string;
  linkedin: string;
  specialization: string[];
}

export interface AcademyTrack {
  id: string;
  title: string;
  description: string;
  modulesCount: number;
  duration: string;
  level: string;
  topics: string[];
  icon: string;
}

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  category: 'Technology' | 'Business' | 'Digital Marketing' | 'AI' | 'Web Development' | 'Startup' | 'Tips & Guides';
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
  source: 'Google' | 'Direct';
  verified: boolean;
  date: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
}
