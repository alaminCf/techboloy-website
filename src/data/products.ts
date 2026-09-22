import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: "estatepilot",
    slug: "estatepilot",
    name: "EstatePilot",
    tagline: "Smart Real Estate CRM & Property Management Platform",
    shortDescription: "EstatePilot is a cloud-based real estate management platform developed by Techboloy to help real estate businesses digitize, automate and streamline their daily operations.",
    fullDescription: "Built specifically for modern real estate developers, property agencies, and asset managers, EstatePilot consolidates lead pipelines, property inventory, sales contracts, tenant payments, and project progress tracking into one unified digital ecosystem.",
    badge: "Flagship SaaS",
    features: [
      "Property Management",
      "CRM",
      "Sales Management",
      "Lead Management",
      "Project Management",
      "Reports & Analytics"
    ],
    modules: [
      {
        title: "Lead & Inquiry Pipeline",
        description: "Capture leads from social ads, website portals, and walk-ins. Automatically assign to sales agents and track lead temperatures.",
        bullets: [
          "Omnichannel lead capture with automatic deduplication",
          "Automated follow-up reminders and WhatsApp notifications",
          "Agent performance and call log tracking"
        ]
      },
      {
        title: "Property & Unit Inventory",
        description: "Interactive visual floorplans and real-time inventory availability across all residential and commercial buildings.",
        bullets: [
          "Real-time unit availability (Available, Booked, Sold)",
          "Dynamic pricing, installment plans, and discount approvals",
          "Document vault for deeds, plans, and architectural approvals"
        ]
      },
      {
        title: "Sales & Payment Installments",
        description: "Automate booking money collection, monthly installment schedules, digital receipts, and overdue payment alerts.",
        bullets: [
          "Automated payment schedule generation",
          "SMS & Email payment reminders with payment gateway links",
          "Commission tracking and sales executive payouts"
        ]
      },
      {
        title: "Construction & Project Milestones",
        description: "Track project building progress, contractor milestones, and site photos visible to executive stakeholders and buyers.",
        bullets: [
          "Milestone-based progress checklists and photo logs",
          "Vendor invoice tracking and material requisition logs",
          "Client transparency portal for project updates"
        ]
      },
      {
        title: "Executive Business Intelligence",
        description: "Gain 360-degree clarity on projected revenues, cash flow forecasts, inventory aging, and marketing channel ROI.",
        bullets: [
          "One-click financial summaries and exportable Excel reports",
          "Lead conversion rates by advertising channel",
          "Audit trail and compliance logging"
        ]
      }
    ],
    metrics: [
      { label: "Deployment", value: "Cloud-Based / Multi-Tenant" },
      { label: "Security", value: "Role-Based Encryption" },
      { label: "Integrations", value: "SMS, Email & WhatsApp" },
      { label: "Platform", value: "Web & Mobile Friendly" }
    ],
    externalUrl: "https://techboloy.com/estate-pilot-smart-real-estate-management-platform/"
  }
];
