export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Groveline Advisor Services",
    "alternateName": "Groveline.ai",
    "url": "https://groveline.ai",
    "logo": "https://groveline.ai/assets/Logo_01.png",
    "image": "https://groveline.ai/assets/og-image.png",
    "description": "Expert fractional COO services for hedge funds and investment managers. Allocator-ready operations, DDQ preparation, compliance policy refresh, OMS implementation, and AI-assisted reconciliation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-903-605-6398",
      "contactType": "Sales",
      "email": "chris@groveline.ai",
      "availableLanguage": "English"
    },
    "founder": {
      "@type": "Person",
      "name": "Chris Hainlen",
      "url": "https://www.linkedin.com/in/chainlen",
      "jobTitle": "Fractional COO & Operations Consultant"
    },
    "sameAs": [
      "https://www.linkedin.com/in/chainlen",
      "https://calendly.com/chris-groveline"
    ],
    "serviceType": [
      "Fractional COO Services",
      "Fund Operations Consulting",
      "Allocator Readiness",
      "DDQ Preparation",
      "Compliance Policy Development",
      "OMS Implementation",
      "Reconciliation Automation",
      "Fund Launch Support"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fractional COO & Fund Operations Consulting",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Groveline Advisor Services"
    },
    "description": "Allocator-ready operations for emerging and mid-sized investment managers. Supporting $150M+ fund launches with institutional-grade infrastructure at realistic budgets.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://calendly.com/chris-groveline"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://groveline.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": "https://groveline.ai/case-studies"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
