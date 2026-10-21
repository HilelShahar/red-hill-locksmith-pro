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
    h1: "Locksmith Paddington for homes, shops and lockouts",
    eyebrow: "Paddington, Brisbane · 4064",
    title: "Locksmith Paddington Brisbane | Emergency & Rekeying | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Paddington, Brisbane for emergency lockouts, rekey locks, lock replacement and repairs. Mobile locksmith from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "If the door will not open, or the keys need to change with the household, we drive to you from Red Hill. Paddington has no shopfront of ours to visit. The price is settled before any lock is opened, repaired or changed.",
    introHeading: "Start with the job, not a trip across town",
    intro: [
      "A call from Paddington, Brisbane is usually one of three jobs. Someone is locked out. A household has changed and the old keys should no longer work. Or a lock is tired enough that it needs a repair or a replacement. Say which it is, and name the street, and we will tell you whether to come straight away or book a time.",
      "Paddington is the inner-west suburb beside our Red Hill base, in postcode 4064. Milton, Petrie Terrace, Bardon and Auchenflower sit on its other sides, and those suburbs are already on our service list. This page is for mobile locksmith work. We do not ask you to come to an office in Paddington.",
      `For an emergency locksmith in Paddington, call ${PHONE_DISPLAY}. For rekeying, a repair, a lock replacement or a smart lock upgrade that can wait for a booking, use Contact us and leave the suburb as Paddington.`
    ],
    servicesHeading: "What a visit in Paddington can cover",
    servicesIntro:
      "The list matches the services on our homepage. The notes below are for houses, units and small businesses in Paddington.",
    services: [
      {
        title: "Emergency locksmith call-outs",
        text: "Use an emergency locksmith in Paddington when a house, unit, shop or car is shut and you cannot get in. We answer 24/7 and try to open the lock without damaging it, so you are not paying for a new one just to get inside. Call-outs start from $35, and the full price is given before we begin."
      },
      {
        title: "Rekey locks",
        text: "Rekey locks in Paddington after a move, a lost key, or when earlier keys should be retired. Your current lock stays where it is. Previous keys no longer open it. That is the practical choice when the hardware itself is still sound."
      },
      {
        title: "Lock replacement",
        text: "Lock replacement in Paddington is the step when the lock is damaged, loose in the door, or simply not the right fit anymore. We supply a quality lock, fit it, and check that it latches. You approve the choice and the cost before the old one comes off."
      },
      {
        title: "Lock repairs",
        text: "A repair is enough for some doors: a barrel that drags, a handle that spins without catching, or a deadlock that stops short. We will repair that lock when it is the sensible fix, and we will quote a replacement when it is not."
      },
      {
        title: "Smart lock upgrades",
        text: "Smart lock installation and upgrades cover keypad, fingerprint and app-controlled locks. We check the door first, because a timber house door and a later unit door rarely take the same product, then we fit the lock and set the codes before leaving."
      },
      {
        title: "Safe opening and fitting",
        text: "Forgotten combination, or a safe that will not open? We open and service domestic and commercial safes, and we supply and bolt down new ones. It is the same mobile visit, at the Paddington address you give us."
      }
    ],
    residentialHeading: "Houses and units that need a locksmith",
    residential:
      "At home, the work is getting you back in, changing which keys open the door, or dealing with a night latch or deadlock that has worn out on a house or a unit. If the door can take a smart lock, we fit it and leave the access set up. The door stays as it is. We do not force hardware onto a frame that will not support it.",
    commercialHeading: "When a shop or workplace locks you out",
    commercial:
      "Paddington's shops and small offices are mixed in with housing, so a locksmith visit is to that address rather than to a big centre. We cover after-hours lockouts, rekeying when a tenant moves on, and replacement of locks on doors that are used all day. Call if you cannot get in. Write to us if the work can be booked.",
    nearbyHeading: "Neighbours of Paddington on our run",
    nearbyIntro:
      "Our base is in Red Hill, which shares a boundary with Paddington. The places below are already listed as service areas. Ashgrove has its own page. The others are suburbs we travel to.",
    nearby: [
      "Red Hill",
      "Milton",
      "Petrie Terrace",
      "Bardon",
      "Auchenflower",
      "Ashgrove",
      "Kelvin Grove"
    ],
    faqs: [
      {
        q: "Is there a locksmith office in Paddington?",
        a: "No. We are a mobile locksmith. The business is based in Red Hill and we come to the Paddington address. There is nowhere in Paddington to drop the keys in."
      },
      {
        q: "Should I call or use the contact form?",
        a: "Call if you are locked out or the job cannot wait. The form is for rekeying, repairs, lock replacement and smart lock upgrades that can be scheduled. Calling is the quicker path for anything urgent."
      },
      {
        q: "Can the locks be rekeyed instead of replaced?",
        a: "Yes, when the lock is still in good order. Rekeying keeps that lock and stops the old keys from working. If it is worn or damaged, we explain that and quote a replacement before we start."
      },
      {
        q: "What does a call-out cost?",
        a: "Call-outs start from $35. The rest depends on the job and the hardware. We quote the price up front, and the work waits until you agree."
      },
      {
        q: "How soon can you get to Paddington?",
        a: "Inner-Brisbane trips are typically 15–20 minutes. Traffic and work already booked can change that, so we give you an arrival time for your street when you call, rather than a fixed promise."
      },
      {
        q: "Do you come out at night and on weekends?",
        a: "Yes. Emergency locksmith help is available 24/7, including nights, weekends and public holidays."
      }
    ],
    ctaHeading: "Need a locksmith in Paddington?",
    ctaBody: `Call now on ${PHONE_DISPLAY} when you are locked out or a lock has failed. To contact us about rekeying, a repair or a planned lock replacement, send the form and keep Paddington in the suburb field.`
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
