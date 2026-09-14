// Centralized configuration and structured factual data for Rodrigues & Rodrigues Advocacia
// Strict real-world facts only (no invented metrics, years, cases, or fake testimonials)

export const SITE_CONFIG = {
  name: "Rodrigues & Rodrigues Advocacia",
  shortName: "Rodrigues & Rodrigues",
  legalCategory: "Escritório de Advocacia",
  tagline: "Advocacia e Consultoria",
  headline: "Segurança jurídica para tomar decisões com mais confiança.",
  primaryService: "Assessoria Jurídica e Empresarial",
  
  // Base domain - easily configurable via environment variable or default
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://rodrigueserodriguesadvocacia.com.br",
  
  contact: {
    phoneDisplay: "(19) 99194-3728",
    phoneRaw: "+5519991943728",
    whatsappNumber: "5519991943728",
    whatsappUrl: "https://wa.me/5519991943728",
    whatsappUrlWithMessage: (msg: string) =>
      `https://wa.me/5519991943728?text=${encodeURIComponent(msg)}`,
    emailFallback: "", // Not provided by client; do not invent email
  },

  location: {
    street: "R. Tuiuti, 629",
    neighborhood: "Cidade Nova I",
    city: "Indaiatuba",
    state: "SP",
    stateFull: "São Paulo",
    postalCode: "13334-000",
    country: "Brasil",
    countryCode: "BR",
    fullAddress: "R. Tuiuti, 629 - Cidade Nova I, Indaiatuba - SP, 13334-000, Brasil",
    geo: {
      latitude: -23.0903,
      longitude: -47.2181,
    },
    googleMapsUrl:
      "https://maps.google.com/?q=R.+Tuiuti,+629+-+Cidade+Nova+I,+Indaiatuba+-+SP,+13334-000",
  },

  social: {
    facebook: {
      name: "Facebook",
      // Connected presence noted without inventing an unverified handle
      url: "https://facebook.com",
    },
  },

  theme: {
    colors: {
      black: "#000000",
      gold: "#D4AF37",
      white: "#FFFFFF",
      silver: "#E5E5E5",
      darkSurface: "#080808",
      borderDark: "#222222",
    },
  },
};

// JSON-LD LocalBusiness / LegalService Structured Data
export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_CONFIG.siteUrl}/#legalservice`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
    telephone: SITE_CONFIG.contact.phoneRaw,
    image: `${SITE_CONFIG.siteUrl}/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.location.street,
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.state,
      postalCode: SITE_CONFIG.location.postalCode,
      addressCountry: SITE_CONFIG.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.location.geo.latitude,
      longitude: SITE_CONFIG.location.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Indaiatuba",
      },
      {
        "@type": "AdministrativeArea",
        name: "Região Metropolitana de Campinas",
      },
      {
        "@type": "AdministrativeArea",
        name: "Estado de São Paulo",
      },
    ],
    sameAs: [SITE_CONFIG.social.facebook.url],
  };
}

// JSON-LD Breadcrumb Generator
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.siteUrl}${item.url}`,
    })),
  };
}

// JSON-LD FAQ Generator
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
