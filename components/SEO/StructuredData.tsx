export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Big Butt Association",
    "alternateName": "BBA",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://bekkywithabigbutt.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://bekkywithabigbutt.com"}/logo/bekky-no-background.png`,
    "description": "Festival clothing for the trippy & bootylicious. EDM apparel, rave wear, and exclusive member rewards with BekkyBucks.",
    "sameAs": [
      "https://www.instagram.com/bekkywithabigbutt/",
      // Add other social media links when available
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Big Butt Association",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://bekkywithabigbutt.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://bekkywithabigbutt.com"}/shop?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Big Butt Association",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://bekkywithabigbutt.com"}/logo/bekky-no-background.png`,
    "description": "Festival clothing brand for the trippy & bootylicious",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
    </>
  );
}

