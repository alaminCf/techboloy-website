import { TeamMember } from '../types';

export const leadershipTeam: TeamMember[] = [
  {
    id: "lead-1",
    name: "Tariqul Islam",
    position: "Founder & Chief Executive Officer",
    category: "leadership",
    bio: "Technology strategist and entrepreneur leading Techboloy's vision of empowering businesses through digital transformation, custom software, and innovative venture building.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    specialization: ["Strategic Growth", "Product Leadership", "Venture Building"]
  },
  {
    id: "lead-2",
    name: "Sarah Rahman",
    position: "Chief Technology Officer",
    category: "leadership",
    bio: "Systems architect and engineering lead with deep expertise in cloud-native platforms, enterprise ERP architectures, and scalable API design.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    specialization: ["Cloud Architecture", "Distributed Systems", "Tech Stack Strategy"]
  },
  {
    id: "lead-3",
    name: "Tanvir Ahmed",
    position: "Head of Product & Design",
    category: "leadership",
    bio: "Passionate design thinker championing research-driven UI/UX, product design systems, and cohesive digital customer journeys.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    specialization: ["Design Systems", "UI/UX Heuristics", "Product Roadmaps"]
  },
  {
    id: "lead-4",
    name: "Nusrat Jahan",
    position: "Head of Growth & Digital Strategy",
    category: "leadership",
    bio: "Performance marketer and digital strategist specializing in inbound customer acquisition, SEO architecture, and paid conversion funnels.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    specialization: ["SEO & Content Engine", "Performance Ads", "Growth Funnels"]
  }
];

export const coreTeam: TeamMember[] = [
  {
    id: "core-1",
    name: "Mahmudul Hasan",
    position: "Senior Full Stack Engineer",
    category: "core",
    bio: "Specializes in React, Next.js, and Node.js microservices with a strong focus on frontend performance and type safety.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    specialization: ["React / TypeScript", "REST / GraphQL", "PostgreSQL"]
  },
  {
    id: "core-2",
    name: "Farzana Akter",
    position: "Senior UI/UX & Visual Designer",
    category: "core",
    bio: "Crafts intuitive mobile and web user interfaces, interactive micro-animations, and memorable corporate branding systems.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    specialization: ["Figma Systems", "Interaction Design", "Brand Identity"]
  },
  {
    id: "core-3",
    name: "Kazi Rashed",
    position: "DevOps & Cloud Infrastructure Lead",
    category: "core",
    bio: "Automates Docker CI/CD pipelines, oversees TB Host infrastructure, and guarantees zero-downtime deployments.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    specialization: ["Docker / K8s", "Linux / Nginx", "AWS & Cloudflare"]
  },
  {
    id: "core-4",
    name: "Mehedi Hasan",
    position: "ERP Solutions Specialist",
    category: "core",
    bio: "Builds custom workflow automation, database queries, and business reporting tools that eliminate operational friction.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    specialization: ["ERP Automation", "Database Schemas", "CRM Integrations"]
  }
];

export const allTeamMembers = [...leadershipTeam, ...coreTeam];
