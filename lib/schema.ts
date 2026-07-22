import { siteConfig, type CafeEvent } from "./site-config";

const dayMap: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

export function getLocalBusinessSchema() {
  const { business, contact, seo, openingHoursSpecification, googleReviews, social } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${seo.siteUrl}/#business`,
    name: business.name,
    description: business.description,
    image: `${seo.siteUrl}${seo.ogImage}`,
    url: seo.siteUrl,
    telephone: contact.phone,
    email: contact.email,
    priceRange: business.priceRange,
    servesCuisine: business.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.line1,
      addressLocality: contact.address.suburb,
      addressRegion: contact.address.state,
      postalCode: contact.address.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.latitude,
      longitude: contact.geo.longitude,
    },
    openingHoursSpecification: openingHoursSpecification.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days.map((d) => dayMap[d]),
      opens: spec.opens,
      closes: spec.closes,
    })),
    aggregateRating: googleReviews
      ? {
          "@type": "AggregateRating",
          ratingValue: googleReviews.rating,
          reviewCount: googleReviews.reviewCount,
        }
      : undefined,
    sameAs: [social.instagram, social.facebook, social.tiktok],
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getMenuSchema() {
  const { seo, menu, menuCategories } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.business.name} Menu`,
    url: `${seo.siteUrl}/menu`,
    hasMenuSection: menuCategories.map((category) => ({
      "@type": "MenuSection",
      name: category.label,
      description: category.description,
      hasMenuItem: menu
        .filter((item) => item.category === category.id)
        .map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          offers: {
            "@type": "Offer",
            price: item.price.toFixed(2),
            priceCurrency: "AUD",
          },
          suitableForDiet: item.dietary.map((tag) => dietaryToSchema(tag)).filter(Boolean),
        })),
    })),
  };
}

function dietaryToSchema(tag: string): string | undefined {
  const map: Record<string, string> = {
    V: "https://schema.org/VegetarianDiet",
    VG: "https://schema.org/VeganDiet",
    GF: "https://schema.org/GlutenFreeDiet",
    DF: "https://schema.org/LowLactoseDiet",
  };
  return map[tag];
}

export function getEventSchema(event: CafeEvent) {
  const { seo, contact, business } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.date,
    endDate: event.endDate || event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: `${seo.siteUrl}${event.image}`,
    location: {
      "@type": "Place",
      name: business.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address.line1,
        addressLocality: contact.address.suburb,
        addressRegion: contact.address.state,
        postalCode: contact.address.postcode,
        addressCountry: "AU",
      },
    },
    offers: {
      "@type": "Offer",
      price: event.price.replace(/[^\d.]/g, "") || "0",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      url: `${seo.siteUrl}/events#${event.id}`,
    },
    organizer: {
      "@type": "Organization",
      name: business.name,
      url: seo.siteUrl,
    },
  };
}
