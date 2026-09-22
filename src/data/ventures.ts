import { Venture } from '../types';

export const venturesData: Venture[] = [
  {
    id: "estatepilot",
    name: "EstatePilot",
    category: "PropTech SaaS",
    tagline: "Smart Real Estate CRM & Property Management Platform",
    description: "Cloud-based operational platform for real estate builders, agencies, and asset managers to streamline leads, sales, and property operations.",
    websiteUrl: "/products/estatepilot",
    status: "Live",
    logoPlaceholder: "EP",
    highlights: [
      "End-to-end sales & installment automation",
      "Interactive unit inventory tracking",
      "Built-in client CRM and payment reminders"
    ]
  },
  {
    id: "caremate",
    name: "CareMate",
    category: "HealthTech & Care Services",
    tagline: "Technology-Enabled Care Companion Service",
    description: "A digital care platform connecting families with vetted caregivers, nurses, and home healthcare assistance with real-time health updates.",
    websiteUrl: "https://caremate.com.bd",
    status: "Scaling",
    logoPlaceholder: "CM",
    highlights: [
      "Vetted caregiver verification system",
      "Real-time patient vitals logging",
      "On-demand emergency home visit scheduling"
    ]
  },
  {
    id: "tbhost",
    name: "TB Host",
    category: "Cloud & Infrastructure",
    tagline: "Domain, Hosting and Cloud Technology Services",
    description: "High-speed NVMe cloud hosting, local and international domain registration, dedicated servers, and managed infrastructure services for businesses.",
    websiteUrl: "https://tbhost.com.bd",
    status: "Live",
    logoPlaceholder: "TBH",
    highlights: [
      "High-speed Tier-4 datacenter routing",
      "Free SSL, DDoS protection & automated backups",
      "Local BDIX high-speed bandwidth in Bangladesh"
    ]
  },
  {
    id: "feminity",
    name: "Feminity",
    category: "E-Commerce & Social Enterprise",
    tagline: "Multi-Vendor Handicraft Marketplace Supporting Artisans",
    description: "An empowering digital marketplace bringing authentic traditional handicrafts, artisan apparel, and boutique creations directly from women entrepreneurs to global buyers.",
    websiteUrl: "https://feminity.com.bd",
    status: "Scaling",
    logoPlaceholder: "FM",
    highlights: [
      "Direct artisan-to-consumer marketplace",
      "Seamless digital wallet & mobile payments",
      "Sustainable supply chain tracking"
    ]
  }
];
