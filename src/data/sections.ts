export type SectionType = 'system' | 'custom';
export type CustomSectionLayout = 'banner' | 'media-text' | 'cards' | 'callout';

export interface SectionItem {
  id: string;
  name: string;
  type: SectionType;
  enabled: boolean;
  order: number;
  badge?: string;
  title?: string;
  highlightWord?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  layout?: CustomSectionLayout;
  customHtml?: string;
}

export const initialSectionsData: SectionItem[] = [
  {
    id: 'hero',
    name: 'Hero Banner',
    type: 'system',
    enabled: true,
    order: 1,
    badge: 'Next-Generation Digital Transformation & Venture Studio',
    title: 'Technology That Moves Your Business Forward.',
    highlightWord: 'Business Forward.',
    subtitle: 'We build digital products, custom software solutions and growth systems that help businesses innovate, scale and succeed.',
    ctaText: 'Start a Project',
    ctaLink: '/contact',
    secondaryCtaText: 'Explore Our Services',
    secondaryCtaLink: '/services',
    imageUrl: '/assets/tb-icon.png',
    imageAlt: 'Techboloy Fingerprint Cloud System'
  },
  {
    id: 'stats',
    name: 'Trust & Quick Stats',
    type: 'system',
    enabled: true,
    order: 2,
    badge: 'Impact In Numbers',
    title: 'Delivering Measured Results for 150+ Enterprises',
    highlightWord: 'Measured Results',
    subtitle: 'From startups to high-volume commercial enterprises, our systems power core digital operations.'
  },
  {
    id: 'about',
    name: 'About Techboloy Showcase',
    type: 'system',
    enabled: true,
    order: 3,
    badge: 'About Techboloy',
    title: 'Built to Turn Technology Into Growth',
    highlightWord: 'Growth',
    subtitle: 'Headquartered at ICT Tower, Agargaon, Dhaka, Techboloy combines strategic foresight with high-performance software engineering to solve high-stakes business challenges.',
    imageUrl: '/assets/award-photo.jpg',
    imageAlt: 'Techboloy Leadership Team Receiving Innovation Award',
    ctaText: 'Learn More About Us',
    ctaLink: '/about'
  },
  {
    id: 'services',
    name: 'Core Services Grid',
    type: 'system',
    enabled: true,
    order: 4,
    badge: 'Our Capabilities',
    title: 'Solutions Built Around Your Goals',
    highlightWord: 'Your Goals',
    subtitle: 'Explore our full spectrum of enterprise engineering, custom software, digital marketing, and venture incubation services.',
    ctaText: 'View All Services',
    ctaLink: '/services'
  },
  {
    id: 'estatepilot',
    name: 'Featured Product (EstatePilot)',
    type: 'system',
    enabled: true,
    order: 5,
    badge: 'Flagship PropTech Platform',
    title: 'EstatePilot — The Modern Real Estate Operating System',
    highlightWord: 'EstatePilot',
    subtitle: 'An end-to-end cloud ERP and CRM platform built by Techboloy to automate lead pipelines, property sales, and building progress.',
    ctaText: 'Explore EstatePilot Platform',
    ctaLink: '/products/estatepilot',
    secondaryCtaText: 'Request Private Demo',
    secondaryCtaLink: '/products/estatepilot',
    imageUrl: '/assets/award-photo.jpg'
  },
  {
    id: 'why',
    name: 'Why Techboloy Value Pillars',
    type: 'system',
    enabled: true,
    order: 6,
    badge: 'The Techboloy Advantage',
    title: 'Why Global Businesses Partner With Us',
    highlightWord: 'Partner With Us',
    subtitle: 'We eliminate technical debt, align engineering with business profit, and deliver with radical transparency.'
  },
  {
    id: 'process',
    name: 'Our 6-Stage Process Roadmap',
    type: 'system',
    enabled: true,
    order: 7,
    badge: 'How We Work',
    title: 'From Concept to Scaled Deployment',
    highlightWord: 'Scaled Deployment',
    subtitle: 'Our proven agile delivery framework ensures predictable timelines, clear milestones, and zero surprises.'
  },
  {
    id: 'portfolio',
    name: 'Featured Work & Case Studies',
    type: 'system',
    enabled: true,
    order: 8,
    badge: 'Proven Track Record',
    title: 'Engineered for Impact, Scaled for Growth',
    highlightWord: 'Scaled for Growth',
    subtitle: 'Explore real-world case studies demonstrating how we helped clients scale revenue, efficiency, and customer satisfaction.',
    ctaText: 'Browse All Case Studies',
    ctaLink: '/portfolio'
  },
  {
    id: 'ventures',
    name: 'Techboloy Ventures Studio',
    type: 'system',
    enabled: true,
    order: 9,
    badge: 'Innovation Lab',
    title: 'We Do Not Just Build for Clients. We Build the Future.',
    highlightWord: 'Build the Future.',
    subtitle: 'Through our internal venture incubator, we co-found and scale proprietary software solutions that solve real market challenges.',
    ctaText: 'Explore Venture Portfolio',
    ctaLink: '/ventures'
  },
  {
    id: 'academy',
    name: 'Techboloy Academy Banner',
    type: 'system',
    enabled: true,
    order: 10,
    badge: 'Techboloy Academy',
    title: 'Empowering the Next Generation of Tech Leaders',
    highlightWord: 'Tech Leaders',
    subtitle: 'Industry-guided curriculums in full-stack development, modern UI/UX, AI workflows, and digital marketing.',
    ctaText: 'Visit Academy Portal',
    ctaLink: '/academy'
  },
  {
    id: 'team',
    name: 'Leadership & Engineering Team',
    type: 'system',
    enabled: true,
    order: 11,
    badge: 'People Behind The Code',
    title: 'World-Class Talent, Local Commitment',
    highlightWord: 'World-Class Talent',
    subtitle: 'Meet our senior software architects, product designers, and growth strategists headquartered at ICT Tower, Dhaka.'
  },
  {
    id: 'partners',
    name: 'Client & Partner Logo Marquee',
    type: 'system',
    enabled: true,
    order: 12,
    badge: 'Trusted By Industry Leaders',
    title: 'Empowering Brands Across Sectors',
    highlightWord: 'Across Sectors'
  },
  {
    id: 'testimonials',
    name: 'Client Testimonials & Google Reviews',
    type: 'system',
    enabled: true,
    order: 13,
    badge: 'Client Endorsements',
    title: 'Real Words from Real Partners',
    highlightWord: 'Real Partners',
    subtitle: 'See what founders, directors, and enterprise managers say about collaborating with Techboloy.'
  },
  {
    id: 'blog',
    name: 'Tech Insights & Articles',
    type: 'system',
    enabled: true,
    order: 14,
    badge: 'Thought Leadership',
    title: 'Insights, Perspectives & Engineering Notes',
    highlightWord: 'Insights',
    subtitle: 'Read our latest articles on software architecture, AI integration, business automation, and growth systems.',
    ctaText: 'View All Insights',
    ctaLink: '/insights'
  },
  {
    id: 'cta',
    name: 'Call To Action Banner',
    type: 'system',
    enabled: true,
    order: 15,
    badge: 'Start Your Journey',
    title: 'Have an Idea? Let’s Build Something Remarkable Together.',
    highlightWord: 'Something Remarkable',
    subtitle: 'Book a discovery session with our technical directors at ICT Tower, Agargaon or online.',
    ctaText: 'Schedule a Consultation',
    ctaLink: '/contact',
    secondaryCtaText: 'Chat on WhatsApp',
    secondaryCtaLink: 'https://wa.me/8801700000000'
  }
];
