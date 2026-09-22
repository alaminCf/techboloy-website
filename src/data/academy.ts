import { AcademyTrack } from '../types';

export const academyInfo = {
  headline: "Learn. Build. Grow.",
  tagline: "Empowering the Next Generation of Tech Leaders",
  description: "Techboloy Academy helps individuals build practical technology and digital skills through industry-focused learning, mentorship and real-world projects.",
  externalUrl: "https://academy.techboloy.com/",
  stats: [
    { label: "Graduated Learners", value: "1,200+" },
    { label: "Industry Mentors", value: "15+" },
    { label: "Hands-on Projects", value: "50+" },
    { label: "Job Placement Support", value: "Dedicated" }
  ]
};

export const academyTracks: AcademyTrack[] = [
  {
    id: "web-software",
    title: "Web & Software",
    description: "Master full-stack web development, modern frontend frameworks, backend architecture, and cloud deployment.",
    modulesCount: 24,
    duration: "4 - 6 Months",
    level: "Beginner to Advanced",
    topics: ["HTML5 / CSS3 / JavaScript", "React & Next.js", "Node.js & Express", "Database Architecture", "Git & CI/CD"],
    icon: "Code"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Branding",
    description: "Learn practical SEO, data-driven paid advertising on Meta & Google, content strategy, and brand building.",
    modulesCount: 18,
    duration: "3 Months",
    level: "All Levels",
    topics: ["Search Engine Optimization", "Meta & Google Ads", "Content Marketing", "Social Media Management", "Analytics & CRO"],
    icon: "TrendingUp"
  },
  {
    id: "graphic-multimedia",
    title: "Graphic & Multimedia",
    description: "Create brand identities, high-impact marketing visuals, UI/UX prototypes, motion graphics, and video production.",
    modulesCount: 20,
    duration: "3 - 4 Months",
    level: "Beginner to Pro",
    topics: ["Figma UI/UX Design", "Adobe Photoshop & Illustrator", "Motion Graphics & After Effects", "Video Editing", "Visual Storytelling"],
    icon: "Palette"
  },
  {
    id: "business-corporate",
    title: "Business & Corporate",
    description: "Corporate digital literacy, business automation tools, ERP workflows, and digital transformation strategy.",
    modulesCount: 12,
    duration: "2 Months",
    level: "Executive & Professional",
    topics: ["Business Automation", "Spreadsheets to ERP", "Project Management", "Digital Leadership", "Corporate Communication"],
    icon: "Briefcase"
  },
  {
    id: "basic-programs",
    title: "Basic Programs",
    description: "Foundational computer science, internet essentials, productivity suites, and modern digital office skills.",
    modulesCount: 10,
    duration: "1.5 Months",
    level: "Foundational",
    topics: ["Computer Fundamentals", "Office Productivity", "Cloud Tools & Google Suite", "Cybersecurity Basics", "Online Safety"],
    icon: "Compass"
  },
  {
    id: "tech-junior",
    title: "Tech Junior",
    description: "Fun, hands-on coding, logic building, creative graphics, and robotics fundamentals designed for young minds.",
    modulesCount: 12,
    duration: "2 Months",
    level: "Ages 9 - 16",
    topics: ["Scratch & Visual Coding", "Python for Kids", "Creative Digital Art", "Logical Thinking", "Intro to Web Design"],
    icon: "Sparkles"
  }
];
