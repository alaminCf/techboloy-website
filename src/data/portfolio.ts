import { PortfolioItem } from '../types';

export const portfolioData: PortfolioItem[] = [
  {
    id: "estatepilot-platform",
    slug: "estatepilot-platform",
    title: "EstatePilot Cloud ERP & Property Management",
    client: "Techboloy Ventures / Real Estate Industry",
    category: "SaaS",
    shortDescription: "Complete cloud-based operational platform for property developers to automate unit inventories, installments, and CRM pipelines.",
    fullDescription: "EstatePilot was engineered to solve the complex coordination issues that real estate development companies face when managing multi-building inventories, installment payments, agent commissions, and buyer communications. Built with a modular microservices backend and an ultra-responsive React dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    challenge: "Real estate firms in Bangladesh relied heavily on disparate spreadsheets, fragmented paper receipts, and delayed payment notifications, causing unit double-bookings and cash flow blind spots.",
    solution: "We designed a multi-tenant cloud application with dynamic floorplan visualizations, automated SMS/email payment gateways, and role-based agent dashboards.",
    results: [
      { metric: "99.9%", label: "Operational Uptime" },
      { metric: "65%", label: "Reduction in Booking Friction" },
      { metric: "3.5x", label: "Faster Installment Auditing" }
    ],
    liveUrl: "/products/estatepilot",
    featured: true
  },
  {
    id: "caremate-healthcare",
    slug: "caremate-healthcare",
    title: "CareMate On-Demand Care Companion App",
    client: "CareMate Bangladesh",
    category: "Mobile",
    shortDescription: "Cross-platform mobile application connecting families with vetted in-home health companions, nurses, and emergency visits.",
    fullDescription: "CareMate is an on-demand healthcare ecosystem that bridges the gap between busy family members and certified caregivers. The app features GPS check-in tracking, real-time vital sign charts, digital medical logs, and instant emergency alerts.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "Tailwind CSS"],
    challenge: "Families needed a reliable, transparent way to verify caregiver attendance, qualifications, and patient well-being while away at work or abroad.",
    solution: "Developed dual iOS & Android apps with biometric login, real-time check-in geofencing, daily vitals reporting, and direct family messaging.",
    results: [
      { metric: "100%", label: "Verified Caregiver Network" },
      { metric: "< 5 Min", label: "Emergency Response Initiation" },
      { metric: "4.9/5", label: "App Store User Rating" }
    ],
    liveUrl: "https://caremate.com.bd",
    featured: true
  },
  {
    id: "tbhost-infrastructure",
    slug: "tbhost-infrastructure",
    title: "TB Host Cloud Infrastructure & Domain Portal",
    client: "TB Host",
    category: "Web",
    shortDescription: "High-performance automated domain provisioning, BDIX-connected cloud VPS management, and billing portal.",
    fullDescription: "A self-service infrastructure and hosting portal allowing businesses and web agencies to register domains, spin up SSD cloud servers, manage DNS records, and configure SSL certificates instantly.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop&q=80",
    technologies: ["Next.js", "TypeScript", "WHMCS API", "Linux", "cPanel API", "Tailwind CSS"],
    challenge: "Traditional hosting management in Bangladesh suffered from slow local routing, clunky checkout portals, and delayed DNS activations.",
    solution: "Built a modern headless Next.js frontend integrated with automated domain APIs, BDIX Tier-4 high-speed routing, and local bKash/Nagad gateways.",
    results: [
      { metric: "Sub-Second", label: "Local BDIX Latency" },
      { metric: "Instant", label: "Domain Provisioning" },
      { metric: "24/7", label: "Automated Monitoring" }
    ],
    liveUrl: "https://tbhost.com.bd",
    featured: true
  },
  {
    id: "feminity-handicraft",
    slug: "feminity-handicraft",
    title: "Feminity Multi-Vendor Artisan Marketplace",
    client: "Feminity Social Enterprise",
    category: "Web",
    shortDescription: "Direct-to-consumer e-commerce marketplace empowering grassroots women artisans and traditional handicraft boutiques.",
    fullDescription: "Feminity connects independent rural artisans with national and international shoppers seeking authentic handcrafted lifestyle products, clothing, and artisanal decor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&auto=format&fit=crop&q=80",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Stripe & SSLCommerz", "PostgreSQL"],
    challenge: "Artisans lacked direct digital reach and were burdened by middleman fees, while customers lacked an authentic platform with transparent craftsmanship provenance.",
    solution: "Engineered a low-bandwidth-friendly multi-vendor marketplace with vendor mobile dashboards, simplified product listings, and digital payouts.",
    results: [
      { metric: "350+", label: "Artisans Onboarded" },
      { metric: "80%", label: "Revenue Directly to Makers" },
      { metric: "45K+", label: "Monthly Active Shoppers" }
    ],
    liveUrl: "https://feminity.com.bd",
    featured: false
  },
  {
    id: "corporate-erp-suite",
    slug: "corporate-erp-suite",
    title: "Manufacturing ERP & Supply Chain System",
    client: "Industrial Engineering Client",
    category: "Software",
    shortDescription: "Custom production scheduling, inventory reconciliation, and accounting automation for manufacturing operations.",
    fullDescription: "A comprehensive internal ERP designed for an industrial manufacturing facility, orchestrating raw material procurement, floor machine scheduling, batch quality control, and client invoice reconciliation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=80",
    technologies: ["Python", "Django", "React", "Docker", "PostgreSQL"],
    challenge: "Disjointed tracking between factory floors and corporate procurement caused inventory shortages and production delivery delays.",
    solution: "Created an end-to-end ERP pipeline with barcode scanning, automated material reorder thresholds, and dynamic assembly line scheduling.",
    results: [
      { metric: "42%", label: "Decrease in Idle Floor Time" },
      { metric: "100%", label: "Material Audit Accuracy" },
      { metric: "Zero", label: "Stockout Discrepancies" }
    ],
    featured: true
  },
  {
    id: "growth-seo-marketing",
    slug: "growth-seo-marketing",
    title: "Multi-Channel Inbound Growth & Brand Engine",
    client: "E-Commerce Enterprise",
    category: "Digital Marketing",
    shortDescription: "Data-driven SEO overhaul, high-ROAS Meta advertising funnels, and brand authority positioning.",
    fullDescription: "A full-funnel digital marketing transformation encompassing technical SEO fixes, high-intent content clusters, targeted Meta video ad testing, and automated abandoned cart recovery.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
    technologies: ["Google Analytics 4", "Meta Ads Manager", "SEMrush", "Google Search Console"],
    challenge: "High customer acquisition costs on generic paid ads and low organic search visibility resulted in diminishing marketing profit margins.",
    solution: "Implemented long-tail keyword content clusters and restructured paid advertising around retargeting funnels with custom creative angles.",
    results: [
      { metric: "+240%", label: "Organic Search Leads" },
      { metric: "4.2x", label: "Blended ROAS Return" },
      { metric: "-35%", label: "Customer Acquisition Cost" }
    ],
    featured: false
  }
];
