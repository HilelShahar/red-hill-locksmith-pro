import { SERVICE_AREA_NAMES, SUBURB_PAGES } from "@/data/suburbs";
import { SERVICES } from "@/components/site/Services";
import {
  ABN,
  EMAIL,
  GOOGLE_PROFILE_URL,
  HERO_IMAGE,
  HOME_DESCRIPTION,
  HOME_TITLE,
  LOGO_IMAGE,
  PHONE_TEL,
  SITE_URL,
} from "@/lib/site";

export const HOME_FAQS = [
  {
    q: "What areas do you cover?",
    a: "We're based in Red Hill and cover the inner north and inner west, the CBD and surrounding suburbs — including Paddington, Ashgrove, Kelvin Grove, Milton and more. If your suburb isn't listed, give us a call and chances are we can still help.",
  },
  {
    q: "How quickly can you get here?",
    a: "We typically reach inner-Brisbane addresses in 15–20 minutes. Arrival times can vary with traffic and current demand, so we'll give you an honest estimate when you call.",
  },
  {
    q: "How much do call-outs cost?",
    a: "Call-outs start from $35. We quote honest, up-front pricing before we start, so there are no hidden surprises. The final price depends on the job and the hardware involved.",
  },
  {
    q: "Do I need to come to you?",
    a: "No — we're a mobile service and come to you. Our Red Hill address is a base of operations, not open to the public.",
  },
  {
    q: "Can you open my lock without damaging it?",
    a: "Wherever possible we use non-destructive entry techniques so your existing locks keep working afterwards. If a lock does need to be replaced, we'll explain why before proceeding.",
  },
  {
    q: "What hours are you available?",
    a: "We're available 24/7 — day, night, weekends and public holidays.",
  },
];

const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Red Hill",
  addressRegion: "QLD",
  postalCode: "4059",
  addressCountry: "AU",
};

function openingHours() {
  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: WEEK,
    opens: "00:00",
    closes: "23:59",
  };
}

function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function canonicalUrl(pathname = "/") {
  const path = normalisePath(pathname);
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function suburbJsonLd(suburb) {
  const url = canonicalUrl(`/locksmith-${suburb.slug}`);
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Locksmith",
      name: "Red Hill Security & Locksmith",
      url,
      telephone: PHONE_TEL,
      email: EMAIL,
      image: `${SITE_URL}${HERO_IMAGE}`,
      priceRange: "$$",
      areaServed: {
        "@type": "Place",
        name: `${suburb.name}, QLD ${suburb.postcode}`,
      },
      address: BUSINESS_ADDRESS,
      openingHoursSpecification: openingHours(),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Mobile locksmith in ${suburb.name}`,
      serviceType: "Locksmith",
      url,
      areaServed: {
        "@type": "Place",
        name: `${suburb.name}, QLD ${suburb.postcode}`,
      },
      provider: {
        "@type": "Locksmith",
        name: "Red Hill Security & Locksmith",
        telephone: PHONE_TEL,
        address: BUSINESS_ADDRESS,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: canonicalUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: suburb.h1,
          item: url,
        },
      ],
    },
  ];

  if (suburb.faqs?.length) data.push(faqSchema(suburb.faqs));
  return data;
}

function homeJsonLd() {
  const id = `${SITE_URL}/#business`;
  return [
    {
      "@context": "https://schema.org",
      "@type": ["Locksmith", "LocalBusiness"],
      "@id": id,
      name: "Red Hill Security & Locksmith",
      url: canonicalUrl("/"),
      telephone: PHONE_TEL,
      email: EMAIL,
      taxID: ABN,
      image: `${SITE_URL}${HERO_IMAGE}`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${LOGO_IMAGE}`,
      },
      description: HOME_DESCRIPTION,
      sameAs: [GOOGLE_PROFILE_URL],
      hasMap: GOOGLE_PROFILE_URL,
      openingHoursSpecification: openingHours(),
      areaServed: [
        {
          "@type": "City",
          name: "Brisbane",
          containedInPlace: {
            "@type": "State",
            name: "Queensland",
          },
        },
        ...SERVICE_AREA_NAMES.map((name) => ({
          "@type": "Place",
          name: `${name}, Brisbane, Queensland`,
        })),
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Locksmith services",
        url: `${SITE_URL}/#services`,
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            serviceType: "Locksmith",
            areaServed: "Brisbane, Queensland",
            provider: { "@id": id },
          },
        })),
      },
    },
    faqSchema(HOME_FAQS),
  ];
}

export function normalisePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  const path = pathname.split("?")[0].split("#")[0].replace(/\/+$/, "");
  return path || "/";
}

export function getPageMeta(pathname) {
  const path = normalisePath(pathname);
  if (path === "/") {
    return {
      path,
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      url: canonicalUrl("/"),
      image: `${SITE_URL}${HERO_IMAGE}`,
      jsonLd: homeJsonLd(),
    };
  }

  const slug = path.replace(/^\/locksmith-/, "");
  const suburb = SUBURB_PAGES[slug];
  if (!suburb || path !== `/locksmith-${slug}`) return null;

  return {
    path,
    title: suburb.title,
    description: suburb.description,
    url: canonicalUrl(path),
    image: `${SITE_URL}${HERO_IMAGE}`,
    jsonLd: suburbJsonLd(suburb),
  };
}

export const PRERENDER_ROUTES = [
  "/",
  ...Object.keys(SUBURB_PAGES).map((slug) => `/locksmith-${slug}`),
];
