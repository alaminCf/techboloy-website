import { useEffect } from 'react';
import { companyData } from '../../data/company';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  schemaType?: 'Organization' | 'Service' | 'Article';
  schemaData?: Record<string, any>;
}

export const SEOHead = ({
  title = "Techboloy | Technology & Digital Solutions Partner",
  description = "Techboloy helps businesses build, automate and grow with software, web & app development, ERP solutions, digital marketing, UI/UX and technology services.",
  schemaType = "Organization",
  schemaData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title.includes("Techboloy") ? title : `${title} | Techboloy`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Organization & LocalBusiness JSON-LD Schema
    const baseSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://techboloy.com/#organization",
          "name": companyData.name,
          "url": "https://techboloy.com",
          "logo": "https://techboloy.com/wp-content/uploads/2023/10/TB-white-logo.png",
          "description": companyData.tagline,
          "telephone": companyData.phone,
          "email": companyData.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyData.address.line1,
            "addressLocality": companyData.address.city,
            "addressCountry": companyData.address.country
          },
          "sameAs": [
            companyData.social.facebook,
            companyData.social.linkedin,
            companyData.social.whatsapp
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://techboloy.com/#localbusiness",
          "name": "Techboloy",
          "image": "https://techboloy.com/wp-content/uploads/2023/10/TB-white-logo.png",
          "telephone": companyData.phone,
          "email": companyData.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "E-14/X, ICT Tower (14th Floor), Agargaon",
            "addressLocality": "Dhaka",
            "postalCode": "1207",
            "addressCountry": "BD"
          }
        },
        schemaData ? { "@type": schemaType, ...schemaData } : null
      ].filter(Boolean)
    };

    let scriptTag = document.getElementById('jsonld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(baseSchema);
  }, [title, description, schemaType, schemaData]);

  return null;
};
