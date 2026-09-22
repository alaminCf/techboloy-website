import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "web-app-development",
    slug: "web-app-development",
    title: "Web & App Development",
    shortDescription: "Modern websites, web applications and mobile apps designed around your business goals.",
    fullDescription: "From high-performance corporate platforms to scalable cloud-native web apps and intuitive cross-platform mobile experiences, we engineer digital products built with modern architecture, rock-solid security, and seamless user experiences.",
    icon: "Code2",
    badge: "Core Engineering",
    subOfferings: [
      "Corporate Website",
      "Web Application",
      "WordPress Development",
      "Shopify Development",
      "Android App",
      "iOS App",
      "API Development"
    ],
    deliverables: [
      "Responsive, SEO-optimized web frontends",
      "Cross-platform iOS and Android mobile apps",
      "Secure RESTful & GraphQL microservice backends",
      "High-converting headless e-commerce architectures",
      "Automated CI/CD pipelines with zero-downtime deployment"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "React Native", "Flutter", "Tailwind CSS", "Python", "PostgreSQL"],
    features: [
      {
        title: "Architecture-First Mindset",
        description: "We don't just build pages; we architect modular, component-driven systems designed for 99.9% uptime and lightning speeds."
      },
      {
        title: "Mobile-First & PWA Enabled",
        description: "All web applications are optimized for tactile mobile use with progressive web app (PWA) offline capabilities."
      },
      {
        title: "API-Driven Ecosystems",
        description: "Seamlessly integrate with third-party payment gateways, ERPs, CRM systems, and marketing analytics."
      }
    ],
    process: [
      { step: "01", title: "Requirement Mapping", description: "Deep architectural alignment, wireframing user journeys, and database entity design." },
      { step: "02", title: "Interactive Prototyping", description: "High-fidelity Figma UI/UX prototypes and responsive design systems." },
      { step: "03", title: "Agile Development", description: "Bi-weekly sprint demos, clean modular code, and automated test coverage." },
      { step: "04", title: "Deployment & Scale", description: "Automated cloud deployment, CDN caching, and continuous monitoring." }
    ],
    faqs: [
      {
        question: "How long does a typical web or mobile project take?",
        answer: "A standard corporate platform typically requires 3 to 6 weeks, while complex full-stack web applications and native mobile apps span 8 to 16 weeks depending on feature scope and integration depth."
      },
      {
        question: "Do you provide post-launch maintenance and support?",
        answer: "Yes, every deployment includes a comprehensive 30-day warranty followed by flexible SLA-backed maintenance packages for security, updates, and feature scaling."
      }
    ]
  },
  {
    id: "erp-software",
    slug: "erp-software",
    title: "ERP & Software Solutions",
    shortDescription: "Custom software and business systems that automate operations and improve efficiency.",
    fullDescription: "Replace disconnected spreadsheets and rigid legacy tools with tailored enterprise resource planning, CRM, and intelligent automation systems that give you single-pane-of-glass control over your business operations.",
    icon: "Layers",
    badge: "Enterprise Automation",
    subOfferings: [
      "ERP",
      "CRM",
      "HRM",
      "Business Automation",
      "Custom Software",
      "SaaS Development"
    ],
    deliverables: [
      "Custom ERP systems tailored to company workflow",
      "Centralized CRM with multi-channel lead tracking",
      "Automated payroll, attendance, and HRM dashboards",
      "Inventory, procurement, and billing automation",
      "Real-time business intelligence and PDF/Excel reporting"
    ],
    technologies: ["Node.js", "Python / Django", "React", "PostgreSQL", "Docker", "Redis", "REST APIs", "Tailwind CSS"],
    features: [
      {
        title: "Role-Based Access & Security",
        description: "Granular permissions, encrypted audit trails, and multi-tenant isolation keeping your company data protected."
      },
      {
        title: "Automated Workflows",
        description: "Trigger invoice generation, task assignments, notification alerts, and approval chains with zero manual intervention."
      },
      {
        title: "Real-Time Operational Analytics",
        description: "Interactive executive dashboards displaying revenue, pipeline velocity, inventory burn rates, and employee metrics."
      }
    ],
    process: [
      { step: "01", title: "Workflow Audit", description: "We analyze your existing manual bottlenecks, paperwork, and team interaction patterns." },
      { step: "02", title: "System Architecture", description: "Design relational database schemas, permission trees, and modular service flows." },
      { step: "03", title: "Incremental Rollout", description: "Deploy modules in phased milestones to allow seamless staff onboarding." },
      { step: "04", title: "Training & Adoption", description: "Comprehensive user documentation, team workshops, and 24/7 technical assistance." }
    ],
    faqs: [
      {
        question: "Can Techboloy migrate data from our existing legacy databases?",
        answer: "Yes. Our engineering team conducts automated data sanitation, schema translation, and zero-loss migration from Excel, legacy SQL databases, and disparate third-party tools."
      },
      {
        question: "Is custom ERP better than off-the-shelf software?",
        answer: "Off-the-shelf software forces you to change how you work or pay per-user license fees forever. A custom system fits your exact business logic with zero recurring per-user fees and full ownership of your data."
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Data-driven digital marketing strategies designed to build visibility, engagement and sustainable growth.",
    fullDescription: "We combine search engine dominance, high-ROI paid media campaigns, and compelling content marketing to generate qualified inbound pipelines and expand your market footprint.",
    icon: "TrendingUp",
    badge: "Growth Engine",
    subOfferings: [
      "SEO",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Meta Ads",
      "Digital Strategy"
    ],
    deliverables: [
      "Technical, on-page, and off-page SEO ranking blueprints",
      "High-converting Meta (Facebook & Instagram) ad funnels",
      "Thought-leadership content calendars and editorial production",
      "Drip email nurture campaigns and automated segmentation",
      "Weekly analytics dashboards with transparent CAC and ROAS metrics"
    ],
    technologies: ["Google Analytics 4", "Meta Ads Manager", "SEMrush", "Ahrefs", "HubSpot", "Google Search Console"],
    features: [
      {
        title: "Predictable Search Rankings",
        description: "Rank for high-intent keywords that bring purchase-ready buyers, backed by white-hat link acquisition and technical hygiene."
      },
      {
        title: "Conversion-Focused Creative",
        description: "Ad copy and video creatives crafted around psychological buyer triggers rather than generic vanity metrics."
      },
      {
        title: "Full-Funnel Attribution",
        description: "Know exactly which dollar spent generated customer inquiries, sales calls, and repeat business."
      }
    ],
    process: [
      { step: "01", title: "Market & Competitor Audit", description: "Uncover competitor keyword positions, audience gaps, and advertising angles." },
      { step: "02", title: "Funnel Strategy", description: "Map out acquisition touchpoints across search, social, and remarketing." },
      { step: "03", title: "Execution & Testing", description: "Continuous A/B split testing of ad copy, visual assets, and landing page headlines." },
      { step: "04", title: "Optimization & Scaling", description: "Double down on top-performing channels while lowering cost per customer acquisition." }
    ],
    faqs: [
      {
        question: "How soon can we expect organic SEO results?",
        answer: "Initial indexing and keyword rank improvements typically manifest within 60 to 90 days, with significant compounding organic traffic and lead volume around months 4 to 6."
      },
      {
        question: "Do you handle ad spend budget management?",
        answer: "Yes, we structure, allocate, monitor, and optimize your monthly advertising budgets directly inside your ad accounts with 100% financial transparency."
      }
    ]
  },
  {
    id: "ui-ux-creative",
    slug: "ui-ux-creative",
    title: "UI/UX & Creative Design",
    shortDescription: "Research-driven digital experiences and visual identities designed to make brands memorable.",
    fullDescription: "Great design bridges the gap between user psychology and commercial objectives. We craft immersive digital interfaces, comprehensive brand identities, and high-impact visual assets that elevate brand credibility.",
    icon: "Palette",
    badge: "Brand & Experience",
    subOfferings: [
      "UI/UX",
      "Branding",
      "Logo Design",
      "Social Media Design",
      "Motion Graphics",
      "Video Editing",
      "Marketing Materials"
    ],
    deliverables: [
      "Interactive Figma prototypes and design system tokens",
      "Complete Brand Identity Guidelines (logo, palette, typography)",
      "High-engagement social media design templates and carousel kits",
      "Motion graphics, product explainer videos, and reels",
      "Corporate pitch decks, brochures, and stationery systems"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe After Effects", "Premiere Pro", "Photoshop"],
    features: [
      {
        title: "User-Centric UX Wireframes",
        description: "Validated through UX heuristics, usability testing, and frictionless conversion architectures."
      },
      {
        title: "Design Systems & Tokenization",
        description: "Consistent typography, colors, and components that make frontend development fast and predictable."
      },
      {
        title: "Brand Storytelling",
        description: "Visual identities that resonate emotionally with audiences and position you as a market leader."
      }
    ],
    process: [
      { step: "01", title: "Discovery & Empathy", description: "Deep-dive interviews, customer journey mapping, and moodboard curation." },
      { step: "02", title: "Low-Fidelity Wireframing", description: "Iterating on structural hierarchy and content flow before visual styling." },
      { step: "03", title: "High-Fidelity Visual Design", description: "Applying micro-interactions, responsive states, and polished aesthetics." },
      { step: "04", title: "Design Handoff", description: "Complete developer-ready Figma tokens, asset exports, and style specs." }
    ],
    faqs: [
      {
        question: "Do we get full access to the source Figma files?",
        answer: "Absolutely. All design tokens, component variants, wireframes, and vector source assets belong 100% to your organization upon project completion."
      }
    ]
  },
  {
    id: "mvp-product-rnd",
    slug: "mvp-product-rnd",
    title: "MVP & Product R&D",
    shortDescription: "Turn ideas into validated products, MVPs and investor-ready presentations.",
    fullDescription: "From visionary napkin sketches to battle-tested MVPs, we help founders and corporate innovators validate market demand, build lean core architectures, and produce persuasive pitch assets for angel and VC funding.",
    icon: "Rocket",
    badge: "Startup Accelerator",
    subOfferings: [
      "Product Research",
      "MVP Development",
      "Business Validation",
      "Pitch Deck",
      "Product Strategy",
      "Startup Technology Consulting"
    ],
    deliverables: [
      "Rapid 6-8 week MVP build ready for real user traction",
      "Interactive click-through prototype for investor demos",
      "Comprehensive product roadmap and feature prioritization matrix",
      "Financial model and VC-grade visual Pitch Deck",
      "Technical architecture documentation and IP transfer"
    ],
    technologies: ["React", "Node.js", "Supabase / Firebase", "Tailwind CSS", "Vercel", "Figma", "Stripe API"],
    features: [
      {
        title: "Speed-to-Market Discipline",
        description: "Focus strictly on the core value proposition to launch in weeks rather than months."
      },
      {
        title: "Investor-Grade Storytelling",
        description: "Align your technology roadmap with market metrics, TAM/SAM/SOM sizing, and defensible moats."
      },
      {
        title: "Scalable Foundational Code",
        description: "Clean architecture that can seamlessly absorb post-funding feature growth without rewrites."
      }
    ],
    process: [
      { step: "01", title: "Value Proposition Canvas", description: "Isolate the single killer problem your product solves and define metrics for success." },
      { step: "02", title: "Rapid Clickable Prototype", description: "Validate assumptions with user interviews using high-fidelity prototypes." },
      { step: "03", title: "Sprint-Based MVP Coding", description: "Rapid backend, authentication, and core workflow development." },
      { step: "04", title: "Beta Launch & Feedback Loop", description: "Deploy to early adopters and instrument analytics to measure retention." }
    ],
    faqs: [
      {
        question: "How fast can you build a working MVP?",
        answer: "Most MVP builds are completed and launched within 4 to 8 weeks depending on the technical complexity and third-party integrations involved."
      }
    ]
  },
  {
    id: "cloud-hosting",
    slug: "cloud-hosting",
    title: "Cloud, Hosting & Technology",
    shortDescription: "Reliable infrastructure and technology services that keep your digital products fast, secure and scalable.",
    fullDescription: "Ensure uncompromising uptime, enterprise-grade cloud security, automated backup redundancies, and lightning-fast worldwide delivery with our managed cloud infrastructure and domain services.",
    icon: "Cloud",
    badge: "Infrastructure & DevOps",
    subOfferings: [
      "Domain",
      "Hosting",
      "Cloud",
      "Deployment",
      "Maintenance",
      "Technical Support"
    ],
    deliverables: [
      "Custom domain acquisition, DNS configuration, and SSL protection",
      "High-availability Cloud VPS and managed Kubernetes / Docker clusters",
      "Automated hourly/daily offsite backup and disaster recovery systems",
      "DDoS mitigation, web application firewalls (WAF), and malware defense",
      "24/7 server health monitoring and emergency SLA response"
    ],
    technologies: ["AWS", "Google Cloud", "DigitalOcean", "Cloudflare", "Docker", "Linux", "cPanel / CyberPanel", "Nginx"],
    features: [
      {
        title: "99.9% Uptime Guarantee",
        description: "Load-balanced server clusters and redundant SSD storage ensuring your systems are always online."
      },
      {
        title: "Hardened Security Architecture",
        description: "Proactive firewall filtering, automated SSL renewals, and real-time vulnerability patching."
      },
      {
        title: "TB Host Synergy",
        description: "Seamless integration with Techboloy's dedicated hosting branch for priority local and international routing."
      }
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", description: "Evaluate server utilization, traffic spikes, and security vulnerabilities." },
      { step: "02", title: "Architecture Design", description: "Setup optimal cloud tiers, caching layers, and database clusters." },
      { step: "03", title: "Zero-Downtime Migration", description: "Migrate DNS and application containers with seamless cutover." },
      { step: "04", title: "24/7 Managed Monitoring", description: "Automated alert telemetry and proactive server optimizations." }
    ],
    faqs: [
      {
        question: "Can you manage our existing AWS or Google Cloud accounts?",
        answer: "Yes. Our DevOps engineers can audit, optimize, and manage your existing cloud infrastructure on AWS, Google Cloud, Azure, or DigitalOcean."
      }
    ]
  }
];
