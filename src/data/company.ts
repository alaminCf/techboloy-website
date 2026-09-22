import { CompanyInfo } from '../types';

export const companyData: CompanyInfo = {
  name: "Techboloy",
  tagline: "Your Technology Growth Partner",
  foundedYear: 2021,
  phone: "+880 1610-296460",
  email: "contact@techboloy.com",
  address: {
    line1: "E-14/X, ICT Tower (14th Floor)",
    line2: "Agargaon",
    city: "Dhaka-1207",
    country: "Bangladesh",
    coordinates: {
      lat: 23.7788,
      lng: 90.3753
    }
  },
  social: {
    facebook: "https://www.facebook.com/Techboloytb",
    linkedin: "https://www.linkedin.com/company/techboloy/",
    whatsapp: "https://wa.me/8801610296460",
    facebookGroup: "https://www.facebook.com/groups/1422782464993724"
  },
  stats: [
    {
      id: "projects",
      label: "Projects Completed",
      value: 200,
      suffix: "+",
      description: "Successful software, web, mobile, and digital transformation deliverables."
    },
    {
      id: "clients",
      label: "Happy Clients",
      value: 100,
      suffix: "+",
      description: "Long-term client partnerships across local and international markets."
    },
    {
      id: "team",
      label: "Team Members",
      value: 30,
      suffix: "+",
      description: "Engineers, product strategists, UI/UX designers, and growth specialists."
    },
    {
      id: "companies",
      label: "Companies Served",
      value: 150,
      suffix: "+",
      description: "From ambitious seed startups to established corporate enterprises."
    }
  ]
};
