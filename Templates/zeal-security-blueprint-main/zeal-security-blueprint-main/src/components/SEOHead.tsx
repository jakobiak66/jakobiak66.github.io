import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
}

const BASE_URL = 'https://www.zeal-security.de';
const DEFAULT_OG_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/1wUa3NgFdFS5vmwrlaJ9OttZWnm2/social-images/social-1761594972503-Design ohne Titel (62)-min.png';

export const SEOHead = ({
  title,
  description,
  canonicalPath,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  structuredData
}: SEOHeadProps) => {
  const fullUrl = `${BASE_URL}${canonicalPath}`;
  const fullTitle = `${title} | ZEAL Security`;

  // LocalBusiness Schema - immer vorhanden
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    "name": "ZEAL Security",
    "description": "Professioneller Sicherheitsdienst in Berlin – Personenschutz, Objektschutz, Veranstaltungsschutz und mehr.",
    "url": BASE_URL,
    "logo": DEFAULT_OG_IMAGE,
    "image": DEFAULT_OG_IMAGE,
    "telephone": "+49 30 12345678",
    "email": "info@zeal-security.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 1",
      "addressLocality": "Berlin",
      "postalCode": "10115",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.52,
      "longitude": 13.405
    },
    "areaServed": {
      "@type": "City",
      "name": "Berlin"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": []
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": BASE_URL
      },
      ...(canonicalPath !== '/' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": fullUrl
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Basis Meta-Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="ZEAL Security" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Strukturierte Daten */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Service Schema Generator
export const createServiceSchema = (serviceName: string, serviceDescription: string, serviceUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "LocalBusiness",
    "name": "ZEAL Security",
    "url": "https://zeal-security.de"
  },
  "description": serviceDescription,
  "url": serviceUrl,
  "areaServed": {
    "@type": "City",
    "name": "Berlin"
  }
});

// FAQ Schema Generator
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
