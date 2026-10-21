import { PHONE_DISPLAY } from "@/lib/site";

/** Suburbs already listed on the homepage service-areas section. */
export const SERVICE_AREA_NAMES = [
  "Red Hill",
  "Paddington",
  "Kelvin Grove",
  "Ashgrove",
  "Bardon",
  "Petrie Terrace",
  "Spring Hill",
  "Herston",
  "Newmarket",
  "Milton",
  "Auchenflower",
  "Brisbane City",
  "Fortitude Valley",
  "Bowen Hills",
  "West End",
  "South Brisbane"
];

export function nameToSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function suburbPath(slug) {
  return `/locksmith-${slug}`;
}

function serviceId(title) {
  const label = title.toLowerCase();
  if (label.includes("car")) return "car-lockouts";
  if (label.includes("rekey")) return "rekeying";
  if (label.includes("smart")) return "smart-locks";
  if (label.includes("safe")) return "safes";
  if (label.includes("repair")) return "repairs";
  if (label.includes("replace")) return "replacement";
  return "lockouts";
}

/**
 * Unique copy for live suburb pages. Other suburbs stay listed on the
 * homepage but are not linked until they have their own page here.
 */
export const suburbs = {
  paddington: {
    slug: "paddington",
    name: "Paddington",
    postcode: "4064",
    h1: "Locksmith in Paddington",
    eyebrow: "Paddington QLD 4064 · Mobile locksmith",
    title: "Locksmith in Paddington | 24/7 Mobile Service | Red Hill Security & Locksmith",
    metaDescription:
      "Locksmith in Paddington for house, shop and car lockouts, rekeying, repairs and smart locks. Mobile service from nearby Red Hill. Call 0416 807 444.",
    heroLead:
      "If you're locked out in Paddington or need locks sorted on a timber Queenslander or shopfront, we come to you. We're based just over the hill in Red Hill — typically 15–20 minutes away — and we quote the price before any work starts.",
    introHeading: "A mobile locksmith for Paddington homes and shopfronts",
    intro: [
      "Paddington sits between Red Hill and Milton, with steep streets, character cottages and a busy run of cafes and shops along Given Terrace and Latrobe Terrace. We cover the suburb as a mobile service from our Red Hill base, not from a shopfront in Paddington itself.",
      "That local run means we regularly work on older front doors that have had a few lock changes over the years, unit entries off the main roads, and after-hours lockouts when the restaurants pack up. Tell us the street and the job and we'll give you a straight arrival time."
    ],
    servicesHeading: "Locksmith services available in Paddington",
    servicesIntro:
      "The same field work we do across inner Brisbane, written for the homes, rentals and small businesses we actually see in Paddington.",
    services: [
      {
        title: "Lockouts",
        text: "Locked out of a house, unit or shop in Paddington? We're available 24/7 and aim for non-destructive entry so the lock still works once you're back inside. Call-outs start from $35, with the full price quoted before we start."
      },
      {
        title: "Car lockouts",
        text: "Keys left in the car on Enoggera Terrace, Given Terrace or a side street? We handle vehicle lockouts as part of the same mobile service — useful when you're near the cafes or parked on a steep Paddington block."
      },
      {
        title: "Rekeying",
        text: "Moved into a Paddington rental, or you're not sure who still has a key? Rekeying keeps your existing locks in place and makes old keys useless. It's a common job on older timber doors around here."
      },
      {
        title: "Lock replacement",
        text: "If a lock is worn, loose in the timber, or simply not up to the door, we supply and fit a quality replacement and make sure it latches cleanly. We'll explain the options before we swap anything."
      },
      {
        title: "Lock repairs",
        text: "Sticky barrels, handles that spin, and deadbolts that no longer throw properly are all regular Paddington call-outs — especially on original or mixed hardware. Often a repair is enough; we'll say so if it is."
      },
      {
        title: "Smart lock installation",
        text: "Keypad, fingerprint and app-controlled locks fitted and set up for the household. Paddington doors vary a lot in thickness and condition, so we check the door first and recommend a lock that will actually last on it."
      }
    ],
    residentialHeading: "Help for Paddington houses and units",
    residential:
      "A lot of Paddington's housing is timber Queenslanders, workers' cottages and small blocks of units. We rekey after a move, upgrade thin or tired night latches, sort sliding-door issues and get people back inside without unnecessary damage. If the door is original, we work with what's there rather than forcing a lock that doesn't suit it.",
    commercialHeading: "Shops and workplaces around Given Terrace",
    commercial:
      "Paddington's commercial strip is mostly smaller shopfronts, hospitality venues and offices mixed in with housing. We help with lockouts after close, restricted-key systems, extra staff access and lock changes when a tenant moves on. For anything urgent, calling is faster than the quote form.",
    nearbyHeading: "Other inner-west suburbs nearby",
    nearbyIntro:
      "From Paddington we're also across the neighbouring inner-west and inner-north suburbs listed on the site. If you're just over the boundary, we can usually still help.",
    nearby: [
      "Red Hill",
      "Bardon",
      "Milton",
      "Petrie Terrace",
      "Auchenflower",
      "Kelvin Grove",
      "Ashgrove"
    ],
    ctaHeading: "Need a locksmith in Paddington now?",
    ctaBody: `For a lockout, calling ${PHONE_DISPLAY} is the quickest way through. We'll give you an arrival time for your street and the price before we start. For planned work — rekeys, replacements or smart locks — send a quote request and we'll come back to you.`
  },
  ashgrove: {
    slug: "ashgrove",
    name: "Ashgrove",
    postcode: "4060",
    h1: "Ashgrove locksmith, mobile from Red Hill",
    eyebrow: "Mobile locksmith · Ashgrove 4060",
    title: "Locksmith Ashgrove | Emergency & Mobile Service | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Ashgrove for emergency lockouts, lock replacement, rekeying and smart locks. Mobile locksmith from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Locked out near Waterworks Road, stuck at a unit, or sorting locks before the keys change hands? We come to Ashgrove from our base in neighbouring Red Hill. There is no locksmith shop of ours in Ashgrove itself, and the price is agreed before any work starts.",
    introHeading: "Locksmith help that comes to you in Ashgrove",
    intro: [
      "Ashgrove is the suburb on the western side of Red Hill, in postcode 4060. Timber houses, post-war homes, small unit blocks and newer townhouses sit along Waterworks Road and the streets that climb toward The Gap. The usual reasons people call are a lockout, a key that has gone missing, or a lock that no longer lines up with the door.",
      `This is a mobile locksmith service for Ashgrove, not a local counter you can walk into. Ring ${PHONE_DISPLAY} for an emergency locksmith in Ashgrove — house, shop or car. For rekeying, lock replacement or a smart lock upgrade, call or use the quote form and include the street.`
    ],
    servicesHeading: "Locksmith jobs we carry out in Ashgrove",
    servicesIntro:
      "Everything below is already part of our field work across inner Brisbane. Here it is written for the homes and small businesses we visit in Ashgrove.",
    services: [
      {
        title: "Emergency lockouts",
        text: "Need an emergency locksmith in Ashgrove? We are available 24/7 for house, unit, shop and car lockouts, and we aim for non-destructive entry so the lock still works once you are inside. Call-outs start from $35. The full price is quoted before we start. Across inner Brisbane we typically arrive in 15–20 minutes, and we will give you a straight time for your street when you call."
      },
      {
        title: "Rekey locks",
        text: "Rekey locks in Ashgrove after a move, a lost key, or when you are unsure who still has a copy. The existing lock stays on the door and the old keys stop working. On a timber front door that is otherwise sound, rekeying is often all the job needs."
      },
      {
        title: "Lock replacement",
        text: "Lock replacement in Ashgrove is for hardware that is worn, damaged, or simply not up to the door. We supply and fit a quality lock and check that it latches cleanly. The choices and the price are explained before the old lock comes off."
      },
      {
        title: "Lock repairs",
        text: "A sticky barrel, a handle that spins, or a deadlock that will not throw properly can often be repaired. We will tell you when a repair is enough, and we will tell you when the lock is better replaced."
      },
      {
        title: "Smart lock installation",
        text: "Smart lock installation and upgrades cover keypad, fingerprint and app-controlled locks, supplied, fitted and set up. Older Ashgrove timber doors vary in thickness, so we check the door first and recommend a lock that will sit properly on it."
      },
      {
        title: "Safes",
        text: "Forgotten combination or a jammed safe? We open and service domestic and commercial safes, and we supply and bolt down new ones. The visit comes to your Ashgrove address, the same as any other locksmith job."
      }
    ],
    residentialHeading: "Residential locksmith work for Ashgrove homes",
    residential:
      "Home visits cover getting you back inside, rekeying when the household changes, and replacing a tired night latch or deadlock on a house or unit. Where a door will take it, we also fit smart locks and set up the codes before we leave. Original timber doors are worked with as they are, rather than forcing hardware that does not suit the frame.",
    commercialHeading: "Commercial locksmith work along Waterworks Road",
    commercial:
      "Shops and small offices in Ashgrove are spread along Waterworks Road and the side streets, not gathered in one centre. We handle lockouts after hours, rekeying when a tenant moves on, and lock replacement on doors that are opened all day. Phone us if you cannot get in. The form below suits work that can be booked.",
    nearbyHeading: "Suburbs next to Ashgrove",
    nearbyIntro:
      "Red Hill shares a boundary with Ashgrove, and that is where we are based. The same mobile run includes other inner suburbs already listed on this website. If you are just over the boundary, call and we will tell you whether we can come.",
    nearby: ["Red Hill", "Bardon", "Kelvin Grove", "Newmarket", "Paddington", "Herston"],
    ctaHeading: "Need a locksmith in Ashgrove?",
    ctaBody: `Call ${PHONE_DISPLAY} for a lockout or any other urgent job. We will confirm an arrival time and the price before we start. For planned rekeying, lock replacement or a smart lock, choose Contact us and leave your Ashgrove street with the details.`
  }
};

/** Shape expected by the shared suburb page template. */
export const SUBURB_PAGES = Object.fromEntries(
  Object.entries(suburbs).map(([slug, suburb]) => [
    slug,
    {
      ...suburb,
      description: suburb.metaDescription,
      heroEyebrow: suburb.eyebrow,
      primaryCta: `Call now — ${PHONE_DISPLAY}`,
      secondaryCta: "Contact us",
      ctaText: suburb.ctaBody,
      services: suburb.services.map((service) => ({
        ...service,
        id: serviceId(service.title)
      })),
      nearby: suburb.nearby.map((name) => nameToSlug(name))
    }
  ])
);

export const SUBURB_NAME_BY_SLUG = Object.fromEntries(
  SERVICE_AREA_NAMES.map((name) => [nameToSlug(name), name])
);

export function getSuburb(slug) {
  return suburbs[slug] ?? null;
}

export function getSuburbByName(name) {
  return getSuburb(nameToSlug(name));
}
