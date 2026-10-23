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
 * Unique copy for live suburb pages. Red Hill stays on the list without
 * its own page. Ashgrove and Paddington keep their existing copy.
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
  },
  "kelvin-grove": {
    slug: "kelvin-grove",
    name: "Kelvin Grove",
    postcode: "4059",
    h1: "Locksmith Kelvin Grove for units, houses and lockouts",
    eyebrow: "Kelvin Grove · 4059",
    title: "Locksmith Kelvin Grove | Mobile Emergency Service | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Kelvin Grove for emergency lockouts, rekeying, lock replacement and smart locks. Mobile locksmith from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Kelvin Grove sits on our side of inner Brisbane, and the visit comes to the unit, house or shop. We do not have a counter there. You hear the price before a lock is opened, rekeyed or changed.",
    introHeading: "When to ring a Kelvin Grove locksmith",
    intro: [
      "The useful call is the one that names the problem. Locked out of a unit. Keys from the last occupant that should no longer work. A handle or deadlock that has stopped doing its job. Say which, and the street, and we will tell you if it is a come-now job or one to book.",
      "Red Hill, Herston and Newmarket are the neighbours already on our service list, with Bowen Hills a little further east. Kelvin Grove itself is covered as a mobile locksmith run from Red Hill, not from a local office.",
      `For an emergency locksmith in Kelvin Grove, use ${PHONE_DISPLAY}. For rekey locks, a repair, lock replacement or a smart lock upgrade, Contact us is enough, as long as Kelvin Grove is in the suburb field.`
    ],
    servicesHeading: "Work we can do at a Kelvin Grove address",
    servicesIntro:
      "Same services as the homepage. The wording here is for the houses, units and small businesses in Kelvin Grove.",
    services: [
      {
        title: "Lockouts at a Kelvin Grove door",
        text: "An emergency locksmith in Kelvin Grove covers a house, unit, shop or car when you cannot get in. We are available 24/7 and aim to open the lock without damaging it. Call-outs start from $35, and the full price is quoted before we start."
      },
      {
        title: "Rekeying after the keys change",
        text: "Rekey locks in Kelvin Grove when you have just moved, lost a key, or want older keys retired. The lock stays on the door. The old keys stop opening it. That is often enough when the hardware itself is still sound."
      },
      {
        title: "Fitting a replacement lock",
        text: "Lock replacement in Kelvin Grove is for hardware that is worn, damaged, or a poor match for the door. We supply and fit a quality lock, then check the latch. Nothing is swapped until you have heard the option and the cost."
      },
      {
        title: "Repairs for a lock that still works",
        text: "A dragging barrel, a spinning handle or a deadlock that will not throw can be a repair rather than a new lock. We will say which, and we will quote a replacement if the lock is past saving."
      },
      {
        title: "Smart locks suited to the door",
        text: "Smart lock installation and upgrades mean a keypad, fingerprint or app-controlled lock, fitted and set up before we leave. Unit doors and older house doors are not the same, so we look at the door first."
      },
      {
        title: "Safe opening and installation",
        text: "Forgotten combination or a safe that is jammed? We open and service domestic and commercial safes, and we supply and bolt down new ones, at the Kelvin Grove address."
      }
    ],
    residentialHeading: "Houses and units in Kelvin Grove",
    residential:
      "Home visits are about getting you inside, changing who holds a working key, or dealing with a night latch or deadlock that has worn out. Where the door can take a smart lock, we fit it and leave the codes set. We work with the door that is there.",
    commercialHeading: "Shops and small workplaces nearby",
    commercial:
      "Kelvin Grove's businesses are mixed through the suburb rather than set on one estate. We help with lockouts, rekeying when a tenant changes, and lock replacement on doors that are used all day. Phone if you are stuck outside. Use the form if the job can wait.",
    nearbyHeading: "Suburbs beside Kelvin Grove",
    nearbyIntro:
      "Our base is in Red Hill, which borders Kelvin Grove. The names below are already on the website. Ashgrove and Paddington have their own pages.",
    nearby: ["Red Hill", "Herston", "Newmarket", "Bowen Hills", "Spring Hill", "Ashgrove"],
    faqs: [
      {
        q: "Do you have a shop in Kelvin Grove?",
        a: "No. This is a mobile locksmith service. We are based in Red Hill and we come to the Kelvin Grove address."
      },
      {
        q: "Are cars included in a lockout?",
        a: "Yes. Emergency lockouts cover a house, unit, shop or car. Tell us which it is when you call so we bring the right gear."
      },
      {
        q: "Can you rekey without replacing the lock?",
        a: "Yes, when the lock is still worth keeping. Rekeying stops the old keys. If the lock is worn or damaged, we quote a replacement before any work starts."
      },
      {
        q: "What should I put on the quote form?",
        a: "Kelvin Grove, the street, and whether you need rekeying, a repair, lock replacement or a smart lock. For a lockout, calling is faster."
      }
    ],
    ctaHeading: "Need a locksmith in Kelvin Grove?",
    ctaBody: `Call now on ${PHONE_DISPLAY} if you are locked out. Contact us through the form for rekeying, repairs or a lock replacement you can schedule, and keep Kelvin Grove in the suburb field.`
  },
  bardon: {
    slug: "bardon",
    name: "Bardon",
    postcode: "4065",
    h1: "Bardon locksmith, at the house rather than a shop",
    eyebrow: "Mobile service · Bardon 4065",
    title: "Locksmith Bardon | Rekeying & Emergency Lockouts | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Bardon for emergency lockouts, rekey locks, repairs and lock replacement. Mobile locksmith from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Bardon is west of our Red Hill base, and the locksmith comes to you. There is no Bardon shop to visit. Whether you are locked out or planning new keys, the price is agreed before the work begins.",
    introHeading: "A practical way to book locksmith help in Bardon",
    intro: [
      "Most Bardon enquiries are residential: a house or unit that will not open, keys that should be changed after a move, or a lock that sticks, rattles, or no longer lines up. Tell us the street and what the door is doing. We will say whether to come now or pick a time.",
      "Ashgrove and Paddington sit on the Bardon side of Red Hill, and both already have pages on this site. Auchenflower is the other neighbour on our list. We cover Bardon as part of that same mobile run."
    ],
    servicesHeading: "Locksmith jobs for Bardon homes and small businesses",
    servicesIntro:
      "Everything here is a service we already offer. None of it depends on you coming to us.",
    services: [
      {
        title: "Opening a Bardon lockout",
        text: "Need an emergency locksmith in Bardon? We answer day and night for a house, unit, shop or car. The aim is non-destructive entry, so the lock can still be used once you are in. You get the full price before we start."
      },
      {
        title: "Rekeying instead of swapping hardware",
        text: "Rekey locks in Bardon after a move or a lost key. The existing lock remains. Previous keys no longer work. It is the straightforward option when the lock itself does not need replacing."
      },
      {
        title: "Repairs on stiff or loose locks",
        text: "Bring us a barrel that drags, a handle that turns freely, or a deadlock that stops short. A repair is the right job when the lock can be saved. If it cannot, we quote lock replacement before taking anything off."
      },
      {
        title: "Replacement when the lock is finished",
        text: "Lock replacement in Bardon is for hardware that is damaged or no longer suited to the door. We supply a quality lock, fit it, and check that it latches. You approve the choice first."
      },
      {
        title: "A smart lock, if the door allows",
        text: "Smart lock installation covers keypad, fingerprint and app-controlled locks. We check the door, fit a lock that suits it, and set the codes before we go."
      }
    ],
    residentialHeading: "Residential locksmith work in Bardon",
    residential:
      "At a house or unit we can get you back inside, rekey after the household changes, repair a tired night latch, or replace a deadlock that has failed. Smart locks are fitted only where the door will support them. If a safe combination has been forgotten, or a safe is jammed, that opening and installation work is part of the same mobile service.",
    commercialHeading: "Small shops and offices in Bardon",
    commercial:
      "Where a business is locked out, or a tenant has left and the keys should change, we come to that address. Lock replacement is there for doors in daily use. Call for anything urgent. Write if you are booking ahead.",
    nearbyHeading: "Neighbours of Bardon we also cover",
    nearbyIntro:
      "Bardon sits with Ashgrove, Paddington and Red Hill. Those places are on our service list. Ashgrove and Paddington already have their own pages.",
    nearby: ["Ashgrove", "Paddington", "Red Hill", "Auchenflower", "Milton"],
    faqs: [
      {
        q: "Is the locksmith based in Bardon?",
        a: "No. The base is in Red Hill. Bardon is a mobile service area, so we travel to you."
      },
      {
        q: "I have moved in. Do I need new locks?",
        a: "Not always. Rekeying keeps the current locks and stops the old keys. Replacement is for locks that are worn or damaged. We will tell you which applies before we start."
      },
      {
        q: "How do I reach you after hours?",
        a: "Call. Emergency locksmith help is available 24/7, including nights, weekends and public holidays."
      },
      {
        q: "Can you open or fit a safe?",
        a: "Yes. We open and service domestic and commercial safes, and we supply and bolt down new ones."
      },
      {
        q: "What does the call-out include?",
        a: "Call-outs start from $35. The rest of the price depends on the job and is quoted before any work begins."
      }
    ],
    ctaHeading: "Locked out in Bardon, or planning a lock change?",
    ctaBody: `Call now on ${PHONE_DISPLAY} for a lockout. Contact us if you want locks rekeyed, repaired or replaced on a booked visit, and name Bardon plus the street.`
  },
  "petrie-terrace": {
    slug: "petrie-terrace",
    name: "Petrie Terrace",
    postcode: "4000",
    h1: "Locksmith Petrie Terrace, Brisbane",
    eyebrow: "Petrie Terrace · Brisbane 4000",
    title: "Locksmith Petrie Terrace | Emergency & Mobile Locksmith | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Petrie Terrace, Brisbane for lockouts, rekeying, lock replacement and repairs. Mobile service from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Petrie Terrace is a short inner-city run from Red Hill, and we come to the door. There is no locksmith office of ours in the suburb. You are told the price before we open, repair or change a lock.",
    introHeading: "Locksmith help for a compact inner suburb",
    intro: [
      "Petrie Terrace sits between Paddington, Red Hill, Spring Hill and Brisbane City. People ring because a unit entry will not open, because keys need to change with a new household, or because a lock on an older door has given up.",
      "We treat it as a mobile locksmith area. You do not come to a workshop. If the job is urgent, the phone is the right tool. If it can be planned, the form is enough."
    ],
    servicesHeading: "What we handle in Petrie Terrace",
    servicesIntro:
      "These are the field services from our homepage, described for this part of Brisbane.",
    services: [
      {
        title: "Petrie Terrace lockouts",
        text: "An emergency locksmith in Petrie Terrace is for a house, unit, shop or car you cannot enter. We work 24/7 and prefer non-destructive entry so the lock still functions afterwards. The full price is given before we begin."
      },
      {
        title: "Rekeying a lock you want to keep",
        text: "Rekey locks in Petrie Terrace when old keys should stop working and the lock is still in good order. The hardware stays. The keying changes. That suits a move, a lost key, or a set of keys you no longer trust."
      },
      {
        title: "Smaller repairs, quoted first",
        text: "If the barrel sticks, the handle spins, or the deadlock will not throw, ask about a repair first. We will repair it when that is sensible, and quote lock replacement when it is not."
      },
      {
        title: "A full lock replacement",
        text: "Lock replacement in Petrie Terrace means supplying and fitting a quality lock, then checking the latch. You hear the options before the old lock comes off the door."
      },
      {
        title: "Smart lock fitting and setup",
        text: "Smart lock installation and upgrades cover keypad, fingerprint and app-controlled locks. We inspect the door, fit a suitable lock, and set access before leaving."
      }
    ],
    residentialHeading: "Units and houses around Petrie Terrace",
    residential:
      "Residential calls cover lockouts, rekeying after a move, and night latches or deadlocks that need repair or replacement. A smart lock is an option when the door will take it. Safe opening and installation, for a forgotten combination or a new safe, is available on the same visit.",
    commercialHeading: "A shop or office that will not open",
    commercial:
      "Small businesses here sit among the housing. We attend lockouts, rekey when a tenant moves on, and replace locks on doors that see constant use. Call if you are outside. Use Contact us if you are organising the work ahead of time.",
    nearbyHeading: "Petrie Terrace and the suburbs around it",
    nearbyIntro:
      "Paddington and Red Hill are immediately beside Petrie Terrace. Spring Hill, Brisbane City and Milton are the other neighbours on our list.",
    nearby: ["Paddington", "Red Hill", "Spring Hill", "Brisbane City", "Milton"],
    faqs: [
      {
        q: "Will I need to drive to Red Hill?",
        a: "No. We are mobile. The Red Hill address is our base, not a public counter, and we come to Petrie Terrace."
      },
      {
        q: "Is a car lockout the same phone number?",
        a: `Yes. Call ${PHONE_DISPLAY} for a house, unit, shop or car. Say which one it is.`
      },
      {
        q: "How do I ask for rekeying rather than a new lock?",
        a: "Say so when you call or on the form. If the lock is too worn to rekey, we explain that and quote a replacement first."
      },
      {
        q: "Are you open on public holidays?",
        a: "Emergency locksmith help is available 24/7, including public holidays."
      }
    ],
    ctaHeading: "Talk to a locksmith about Petrie Terrace",
    ctaBody: `Call now on ${PHONE_DISPLAY} for a lockout. Contact us to line up rekeying, a repair or lock replacement, and include Petrie Terrace in the message.`
  },
  "spring-hill": {
    slug: "spring-hill",
    name: "Spring Hill",
    postcode: "4000",
    h1: "Mobile locksmith for Spring Hill",
    eyebrow: "Spring Hill, Brisbane · 4000",
    title: "Locksmith Spring Hill | Lockouts, Rekeying & Repairs | Red Hill Security & Locksmith",
    metaDescription:
      `Mobile locksmith in Spring Hill for emergency lockouts, rekey locks and lock replacement. Based in Red Hill, not in Spring Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Spring Hill is inner-city, and we still come to the building. There is no Spring Hill branch. Lockouts and planned lock work are both quoted before anything starts.",
    introHeading: "Spring Hill calls are usually about access",
    intro: [
      "Apartments, older houses and small offices sit close together here, beside Brisbane City, Fortitude Valley and Petrie Terrace. The job is often simple to describe: the door will not open, the keys need to change, or the lock should be repaired or replaced.",
      "Herston is the other neighbour on our list. We reach Spring Hill from Red Hill as a mobile locksmith. If you are locked out, phone. If you are arranging rekeying or a smart lock for a later day, the form is the better note."
    ],
    servicesHeading: "Services available on a Spring Hill visit",
    servicesIntro:
      "Only the work we already do in the field. The notes are specific to Spring Hill customers.",
    services: [
      {
        title: "Spring Hill lockouts, any hour",
        text: "Emergency locksmith help in Spring Hill covers a unit, house, shop or car. We are on call 24/7 and try to get you in without wrecking the lock. You approve the price first. Call-outs start from $35."
      },
      {
        title: "Rekeying keys that should retire",
        text: "Rekey locks in Spring Hill to retire keys after a move or a loss. The lock you have stays fitted. Old keys no longer open it. Choose this when the lock is still serviceable."
      },
      {
        title: "A replacement if the lock no longer fits",
        text: "Lock replacement in Spring Hill is the path for a damaged or unsuitable lock. We bring a quality replacement, fit it, and test the latch. The decision is yours before we remove the old one."
      },
      {
        title: "Repairs before a new lock",
        text: "Repairs suit a sticky barrel, a loose handle, or a deadlock that no longer throws cleanly. We repair when we can, and we say so when replacement is the honest recommendation."
      },
      {
        title: "Smart locks on units and houses",
        text: "For keypad, fingerprint or app-controlled locks, we check the door, then supply, fit and configure the lock. Apartment doors and timber house doors need different products, so the check comes first."
      }
    ],
    residentialHeading: "Apartments and houses in Spring Hill",
    residential:
      "We get residents back inside, rekey when the household changes, and repair or replace night latches and deadlocks. Smart locks are set up on doors that can carry them. Safe opening and bolting down a new safe are available if that is the job instead.",
    commercialHeading: "Offices and shops around Spring Hill",
    commercial:
      "A locked office after hours, a tenancy that needs rekeying, or a front door ready for lock replacement: we come to the address. Urgent jobs belong on the phone. Booked jobs belong on the form.",
    nearbyHeading: "Spring Hill's neighbours on this site",
    nearbyIntro:
      "Brisbane City, Fortitude Valley, Herston and Petrie Terrace are the closest suburbs we already list. Bowen Hills is a little further north.",
    nearby: ["Brisbane City", "Fortitude Valley", "Herston", "Petrie Terrace", "Bowen Hills"],
    faqs: [
      {
        q: "Do you work in apartment buildings?",
        a: "Yes. Tell us it is a unit, and whether the problem is the apartment door or another lock. We come to the Spring Hill address."
      },
      {
        q: "Can the work wait until tomorrow?",
        a: "If you are not locked out, yes. Use Contact us for rekeying, repairs, lock replacement or a smart lock upgrade and we will arrange a time."
      },
      {
        q: "Where are you actually based?",
        a: "In Red Hill. Spring Hill is a service area. We do not have a shop there."
      },
      {
        q: "Do you attend at night?",
        a: "Yes. Emergency calls are taken 24/7, including weekends and public holidays."
      }
    ],
    ctaHeading: "Call now for a Spring Hill lockout",
    ctaBody: `Phone ${PHONE_DISPLAY} if you cannot get in. Contact us when the Spring Hill job is a rekey, a repair or a replacement that can be planned.`
  },
  herston: {
    slug: "herston",
    name: "Herston",
    postcode: "4006",
    h1: "Locksmith in Herston for lockouts and lock changes",
    eyebrow: "Herston QLD 4006",
    title: "Locksmith Herston | Mobile Locksmith & Rekeying | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Herston for emergency lockouts, rekey locks, repairs and smart locks. Mobile locksmith from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Herston is on the inner-north side of our Red Hill base. We drive to the house, unit or workplace. There is no Herston office to drop into, and no work starts before the price is clear.",
    introHeading: "Tell us the Herston job in one sentence",
    intro: [
      "Locked out. Need the old keys to stop working. Lock is worn and should be repaired or replaced. Those three cover most calls. Add the street and we can tell you whether to expect us now or book a visit.",
      "Kelvin Grove and Bowen Hills border Herston, with Spring Hill and Fortitude Valley close by. All four are on our service list. The locksmith covering Herston is mobile."
    ],
    servicesHeading: "Herston locksmith services",
    servicesIntro:
      "The same field work as the rest of inner Brisbane, written for Herston rather than copied from another suburb page.",
    services: [
      {
        title: "Herston lockouts",
        text: "Use this when a Herston house, unit, shop or car is shut and you are outside. Emergency locksmith cover is 24/7. We aim to open the lock without damage. The quoted price comes before the work."
      },
      {
        title: "Rekeying to cancel older keys",
        text: "Rekey locks in Herston to keep the current lock and cancel older keys. It suits a move or a missing key, provided the lock is still in decent shape."
      },
      {
        title: "Repairs to barrels and deadlocks",
        text: "A repair is the lighter job: free a stiff barrel, sort a handle that does not catch, or get a deadlock throwing again. If the lock is finished, we quote replacement instead of pretending a repair will last."
      },
      {
        title: "A replacement lock, supplied and fitted",
        text: "Lock replacement in Herston means a quality lock, supplied and fitted, with the latch checked. You agree to it before the old lock is removed."
      },
      {
        title: "Smart locks checked against the door",
        text: "Keypad, fingerprint and app-controlled locks are supplied, installed and set up. We look at the door first so the lock we recommend will actually fit."
      },
      {
        title: "Safes opened or supplied",
        text: "We open and service domestic and commercial safes when a combination is lost or the safe is stuck, and we bolt down new safes at the Herston property."
      }
    ],
    residentialHeading: "Home locksmith visits in Herston",
    residential:
      "Getting you in, rekeying for a new household, and repairing or replacing a night latch or deadlock are the usual home jobs. Smart locks are added when the door is suitable. We do not force a product onto a frame that will not hold it.",
    commercialHeading: "Workplaces that need access sorted",
    commercial:
      "If staff are locked out, or a tenancy has ended and the keys should change, call or write with the Herston address. Lock replacement is there for doors that are opened constantly. Urgent means phone. Planned means the form.",
    nearbyHeading: "Around Herston",
    nearbyIntro:
      "Kelvin Grove is on one side, Bowen Hills on another. Spring Hill and Fortitude Valley are the inner-city neighbours on our list.",
    nearby: ["Kelvin Grove", "Bowen Hills", "Spring Hill", "Fortitude Valley", "Newmarket"],
    faqs: [
      {
        q: "Is Herston a separate locksmith business?",
        a: "No. It is a service area for Red Hill Security & Locksmith. We travel from Red Hill."
      },
      {
        q: "What if I only want the locks rekeyed?",
        a: "Say that. Rekeying is a normal job when the lock is sound. Replacement is quoted separately if the lock is not."
      },
      {
        q: "How much is the call-out?",
        a: "Call-outs start from $35. The total depends on the work and is quoted before we start."
      },
      {
        q: "Can you come on a Sunday?",
        a: "Yes. We are available 24/7, including Sundays and public holidays."
      }
    ],
    ctaHeading: "Need a locksmith in Herston?",
    ctaBody: `Call now on ${PHONE_DISPLAY} for a lockout or a failed lock. Contact us to book rekeying, a repair or lock replacement in Herston.`
  },
  newmarket: {
    slug: "newmarket",
    name: "Newmarket",
    postcode: "4051",
    h1: "Newmarket locksmith for houses and small businesses",
    eyebrow: "Newmarket · 4051",
    title: "Locksmith Newmarket | Emergency Lockouts & Lock Replacement | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Newmarket for emergency lockouts, rekeying, lock repairs and replacement. Mobile locksmith from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Newmarket is north of Kelvin Grove, and we travel there from Red Hill. You will not find a shop of ours in the suburb. The visit, and the price, happen at your address.",
    introHeading: "House locks, unit locks, and the odd shop door",
    intro: [
      "Newmarket calls tend to be about a front door at a house: someone is locked out, a key has gone missing, or the deadlock has started to fail. Units and small businesses need the same work, just on a different door.",
      "Kelvin Grove, Ashgrove and Herston are the neighbours on our website. Bowen Hills is the other inner suburb we list nearby. None of this is a Newmarket branch. It is a mobile locksmith service."
    ],
    servicesHeading: "How the Newmarket jobs break down",
    servicesIntro:
      "Use the phone for anything that cannot wait. Use the form when you already know the lock needs attention on another day.",
    services: [
      {
        title: "Newmarket lockouts",
        text: "An emergency locksmith in Newmarket opens a house, unit, shop or car when you are shut out. Cover is 24/7. We try to leave the lock usable. The price is quoted before we start."
      },
      {
        title: "Rekeying a house or unit",
        text: "Rekey locks in Newmarket so a move or a lost key does not leave old keys in circulation. The lock stays. The keys change. Ask for this when the hardware is still good."
      },
      {
        title: "Repairs when replacement can wait",
        text: "Stiff barrels, handles that spin, and deadlocks that stop halfway are repair jobs when the lock has life left. We will not dress up a dead lock as a repair. If it needs replacing, that quote comes first."
      },
      {
        title: "Replacement locks, fitted on site",
        text: "Lock replacement in Newmarket is a supplied-and-fitted quality lock, checked so it latches. You sign off on the choice before the old lock is taken off."
      },
      {
        title: "Adding a smart lock",
        text: "Smart lock installation adds a keypad, fingerprint or app-controlled lock after we have looked at the door. Codes are set before we leave."
      }
    ],
    residentialHeading: "Residential work through Newmarket",
    residential:
      "We get people back into houses and units, rekey when the keys should change, and repair or replace night latches and deadlocks. A smart lock is fitted only if the door will take it. Forgotten safe combinations and jammed safes are handled on the same kind of visit, including bolting down a new safe.",
    commercialHeading: "A Newmarket shop or office",
    commercial:
      "Lockouts after close, rekeying between tenants, and lock replacement on a busy door are the business jobs. Call if the door is shut now. Contact us if you are planning the change.",
    nearbyHeading: "Newmarket and nearby suburbs",
    nearbyIntro:
      "Kelvin Grove is the inner neighbour. Ashgrove and Herston are on the list as well. Paddington has its own page if you are further in.",
    nearby: ["Kelvin Grove", "Ashgrove", "Herston", "Bowen Hills", "Red Hill"],
    faqs: [
      {
        q: "Can you rekey a house after settlement?",
        a: "Yes. Rekeying keeps the existing locks and stops previous keys. If a lock is worn, we quote a replacement before doing that instead."
      },
      {
        q: "Do you only do houses?",
        a: "No. Units, shops and cars are part of the same mobile service in Newmarket."
      },
      {
        q: "Is there a workshop I should bring the lock to?",
        a: "No. We come to the Newmarket address. The business is based in Red Hill."
      },
      {
        q: "What hours can I call?",
        a: "Any hour. Emergency locksmith help is available 24/7."
      },
      {
        q: "Do you install safes?",
        a: "Yes. We open and service domestic and commercial safes, and we supply and bolt down new ones."
      }
    ],
    ctaHeading: "Ready for a locksmith in Newmarket?",
    ctaBody: `Call now on ${PHONE_DISPLAY} if the door will not open. Contact us to arrange rekeying, a repair or lock replacement, and put Newmarket on the form.`
  },
  milton: {
    slug: "milton",
    name: "Milton",
    postcode: "4064",
    h1: "Locksmith Milton for houses, units and shops",
    eyebrow: "Milton · 4064",
    title: "Locksmith Milton Brisbane | Mobile Emergency Locksmith | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Milton, Brisbane for emergency lockouts, rekey locks, repairs and smart locks. Mobile service from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Milton shares postcode 4064 with Paddington, and we cover it from Red Hill rather than from a Milton shop. Lockouts and booked lock work are both priced before we begin.",
    introHeading: "Between Paddington and Auchenflower",
    intro: [
      "If you are in Milton, the neighbours on our list are Paddington, Auchenflower and Petrie Terrace, with Brisbane City just beyond. The locksmith request is still local and mobile: we come to the street you name.",
      "Describe the door. Locked out, keys to retire, or a lock to repair or replace. We will tell you if it is a now call or a booked visit. There is no Milton counter."
    ],
    servicesHeading: "Milton visits, job by job",
    servicesIntro:
      "The homepage lists what we actually do. Here it is applied to Milton.",
    services: [
      {
        title: "Milton lockouts for home or vehicle",
        text: "Emergency locksmith work in Milton includes a house, unit, shop or car. We are available 24/7 and aim for entry that leaves the lock working. Across inner Brisbane we typically allow 15–20 minutes, then give you a time for your street when you call, because traffic changes it. Call-outs start from $35."
      },
      {
        title: "Rekeying between households",
        text: "Rekey locks in Milton when a household changes or a key is lost. Old keys stop working. The lock remains on the door if it is still worth keeping."
      },
      {
        title: "Lock replacement if the old one has failed",
        text: "Lock replacement in Milton is for a lock that is damaged or a poor fit. We supply it, fit it, and check the latch, after you have agreed the price."
      },
      {
        title: "Repairs to handles and deadlocks",
        text: "Ask for a repair when the barrel drags, the handle fails to catch, or the deadlock stops short. We repair that, or we recommend replacement if the lock is done."
      },
      {
        title: "Smart lock upgrades for Milton doors",
        text: "Smart lock installation and upgrades are keypad, fingerprint or app-controlled locks, chosen after we see the door, then set up on the day."
      }
    ],
    residentialHeading: "Milton homes and units",
    residential:
      "Home jobs are lockouts, rekeying, and night latches or deadlocks that need repair or replacement. Smart locks go on doors that can hold them. If the problem is a safe rather than a door, we open and service domestic safes and bolt down new ones.",
    commercialHeading: "Milton shops and workplaces",
    commercial:
      "We come to a shop or office for a lockout, for rekeying when a tenant leaves, and for lock replacement on a door that is used hard. Phone for the urgent one. The form is for the one that can wait.",
    nearbyHeading: "Suburbs next to Milton",
    nearbyIntro:
      "Paddington has its own page. Auchenflower, Petrie Terrace and Brisbane City are the other neighbours we list. Red Hill, where we are based, is just beyond Paddington.",
    nearby: ["Paddington", "Auchenflower", "Petrie Terrace", "Brisbane City", "Red Hill"],
    faqs: [
      {
        q: "Are you the Paddington locksmith as well?",
        a: "Same business, different page. We are based in Red Hill and travel to both Milton and Paddington. Milton does not have its own shop of ours."
      },
      {
        q: "Can you do the car as well as the house?",
        a: "Yes. Say it is a car lockout when you ring so we know what to bring."
      },
      {
        q: "I want a keypad lock. Will any door take one?",
        a: "Not every door. We check thickness and condition first, then recommend a smart lock that will fit."
      },
      {
        q: "When should I use the form?",
        a: "For rekeying, repairs, lock replacement and smart lock upgrades that are not an emergency. Lockouts are quicker by phone."
      }
    ],
    ctaHeading: "Need a locksmith in Milton?",
    ctaBody: `Call now on ${PHONE_DISPLAY} if you are locked out in Milton. Contact us to book rekey locks, a repair or a replacement.`
  },
  auchenflower: {
    slug: "auchenflower",
    name: "Auchenflower",
    postcode: "4066",
    h1: "Locksmith in Auchenflower, Brisbane",
    eyebrow: "Auchenflower 4066 · mobile",
    title: "Locksmith Auchenflower | Rekeying & Emergency Service | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Auchenflower for emergency lockouts, rekeying, lock replacement and repairs. Mobile locksmith from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Auchenflower is west of Milton, and the locksmith trip starts in Red Hill. We do not keep an Auchenflower office. You get a price before a lock is opened or changed.",
    introHeading: "What people in Auchenflower ask us to do",
    intro: [
      "Get them inside. Make yesterday's keys useless. Fix a lock that sticks, or replace one that will not. Those are the requests, whether the door belongs to a house, a unit, or a small business.",
      "Milton, Paddington and Bardon are the neighbouring suburbs already on this website. We cover Auchenflower on that mobile run. If the matter is urgent, call. If you can choose the day, write."
    ],
    servicesHeading: "Auchenflower locksmith work",
    servicesIntro:
      "No extra services are added for this page. These are the ones the business already offers.",
    services: [
      {
        title: "Auchenflower lockouts",
        text: "Call an emergency locksmith in Auchenflower when a house, unit, shop or car will not open. We work 24/7 and prefer non-destructive entry. The full price is agreed before we start."
      },
      {
        title: "Rekeying sound locks",
        text: "Rekey locks in Auchenflower after a move or a lost key. The lock stays put. Previous keys no longer open it. It is the right request when the lock itself is fine."
      },
      {
        title: "A replacement for hardware that has failed",
        text: "Lock replacement in Auchenflower fits a quality lock in place of one that is worn or damaged. We explain the option and the cost, then fit it and check the latch."
      },
      {
        title: "Repairs that save the existing lock",
        text: "Repairs cover a barrel that drags, a handle that spins without catching, and a deadlock that will not finish its throw. We repair if that will hold, and we quote a new lock if it will not."
      },
      {
        title: "Smart locks chosen on the day",
        text: "Smart lock upgrades are keypad, fingerprint or app-controlled locks, supplied and configured after we have seen the door."
      },
      {
        title: "Opening and fitting safes",
        text: "A forgotten combination or a jammed safe can be opened and serviced. New safes can be supplied and bolted down at the Auchenflower address."
      }
    ],
    residentialHeading: "Houses and units in Auchenflower",
    residential:
      "Residential visits deal with lockouts, rekeying, and night latches or deadlocks that need repair or replacement. Where a smart lock suits the door, we fit it and leave the access working. The frame is not asked to hold hardware it cannot.",
    commercialHeading: "Local businesses",
    commercial:
      "Shops and small offices get the same mobile visit: lockouts, rekeying when a tenant changes, and lock replacement on hard-worked doors. Urgent work is a phone call. Booked work is the contact form.",
    nearbyHeading: "Auchenflower's neighbours on our list",
    nearbyIntro:
      "Milton and Paddington are toward the city. Bardon is toward the ridge. Paddington has its own page, and so does Ashgrove, a little further north.",
    nearby: ["Milton", "Paddington", "Bardon", "Ashgrove", "Petrie Terrace"],
    faqs: [
      {
        q: "Do I come to you, or do you come to Auchenflower?",
        a: "We come to you. The base in Red Hill is not a public shop, and we do not have one in Auchenflower either."
      },
      {
        q: "Is rekeying cheaper to ask about than a full replacement?",
        a: "It is a different job. Rekeying keeps a sound lock. Replacement is quoted when the lock is worn or damaged. We tell you which one applies before starting."
      },
      {
        q: "Can you help if the keys are locked in the car?",
        a: "Yes. Car lockouts are part of the emergency service. Say that it is a car when you call."
      },
      {
        q: "Are weekends included?",
        a: "Yes. We are available 24/7, weekends included."
      }
    ],
    ctaHeading: "Get a locksmith to an Auchenflower address",
    ctaBody: `Call now on ${PHONE_DISPLAY} for a lockout. Contact us about rekeying, repairs or lock replacement and leave Auchenflower as the suburb.`
  },
  "brisbane-city": {
    slug: "brisbane-city",
    name: "Brisbane City",
    postcode: "4000",
    h1: "Locksmith Brisbane City for apartments, offices and lockouts",
    eyebrow: "Brisbane City · 4000",
    title: "Locksmith Brisbane City | Emergency & Mobile Locksmith | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Brisbane City for emergency lockouts, rekeying, lock replacement and smart locks. Mobile from Red Hill, not a CBD shop. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Brisbane City is on our mobile run from Red Hill. We do not operate a CBD shopfront. Apartments, offices and lockouts are attended at the address, with the price set before work starts.",
    introHeading: "City addresses, same mobile locksmith",
    intro: [
      "A Brisbane City job might be an apartment door, an office after hours, or keys that should be changed before new people move through. It might also be a car. The first detail we need is which of those it is, plus the street.",
      "Spring Hill, Fortitude Valley and Petrie Terrace sit on the city edge. South Brisbane and West End are across the river. We cover the CBD as a service area, not as a second business address.",
      `Emergency locksmith calls go to ${PHONE_DISPLAY}. Rekey locks, repairs, lock replacement and smart lock upgrades that can be scheduled go on the contact form.`
    ],
    servicesHeading: "What a Brisbane City call can include",
    servicesIntro:
      "The services match the homepage. The setting is apartments and workplaces in the CBD.",
    services: [
      {
        title: "CBD and apartment lockouts",
        text: "An emergency locksmith in Brisbane City attends a unit, house, office, shop or car, 24/7. We aim to open the lock without damaging it. Inner-Brisbane trips are typically 15–20 minutes, and we still give you a time for that address when you call. Call-outs start from $35, quoted in full before we start."
      },
      {
        title: "Rekeying an apartment or office",
        text: "Rekey locks in Brisbane City when access has to change and the lock is still sound. Old keys stop working. The hardware stays on the door."
      },
      {
        title: "Replacement locks for city doors",
        text: "Lock replacement in Brisbane City supplies and fits a quality lock where the current one is worn, damaged, or wrong for the door. You approve it before removal."
      },
      {
        title: "Repairs on locks still worth keeping",
        text: "Repairs are for barrels that stick, handles that spin, and deadlocks that do not throw. We repair when it will last, and we quote a replacement when it will not."
      },
      {
        title: "Smart locks for apartment doors",
        text: "Smart lock installation covers keypad, fingerprint and app-controlled locks on doors that can take them. We check the door, fit the lock, and set the codes."
      },
      {
        title: "Safe opening and supply",
        text: "Domestic and commercial safes can be opened and serviced if a combination is forgotten or the safe is jammed. New safes are supplied and bolted down."
      }
    ],
    residentialHeading: "Apartments and the occasional house",
    residential:
      "In the city, residential work is often a unit door: lockout, rekey, repair, or a smart lock. Houses are handled the same way when that is the property. We fit hardware the door can support.",
    commercialHeading: "Offices and shopfronts in the CBD",
    commercial:
      "After-hours lockouts, rekeying when staff or tenants change, and lock replacement on doors in daily use are the workplace jobs. Call if nobody can get in. Use the form if you are organising access ahead of time.",
    nearbyHeading: "Suburbs around Brisbane City",
    nearbyIntro:
      "Spring Hill, Fortitude Valley, Petrie Terrace, South Brisbane, West End and Milton are the neighbours on our service list.",
    nearby: ["Spring Hill", "Fortitude Valley", "Petrie Terrace", "South Brisbane", "West End", "Milton"],
    faqs: [
      {
        q: "Do you have a CBD office?",
        a: "No. Red Hill Security & Locksmith is based in Red Hill. Brisbane City is a mobile service area."
      },
      {
        q: "Can you meet us at an apartment tower?",
        a: "Yes. Give the street, the tower and the door that is the problem when you call or write."
      },
      {
        q: "Is the call-out the whole bill?",
        a: "No. Call-outs start from $35. The rest depends on the job and is quoted before we start."
      },
      {
        q: "Who do I call if the office is locked and it is late?",
        a: `Call ${PHONE_DISPLAY}. Emergency help is available 24/7.`
      }
    ],
    ctaHeading: "Need a locksmith in Brisbane City?",
    ctaBody: `Call now on ${PHONE_DISPLAY} for a lockout. Contact us to arrange rekeying, a repair, lock replacement or a smart lock in Brisbane City.`
  },
  "fortitude-valley": {
    slug: "fortitude-valley",
    name: "Fortitude Valley",
    postcode: "4006",
    h1: "Locksmith Fortitude Valley",
    eyebrow: "Fortitude Valley · 4006",
    title: "Locksmith Fortitude Valley | 24/7 Mobile Locksmith | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in Fortitude Valley for emergency lockouts, rekey locks, repairs and lock replacement. Mobile from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Fortitude Valley is a mobile locksmith area for us, not a shop address. We come from Red Hill to the apartment, shop or office, and we agree the price before the lock is touched.",
    introHeading: "Valley lockouts and planned lock changes",
    intro: [
      "The Valley mixes apartments with shops and small businesses, between Brisbane City, Spring Hill and Bowen Hills. A call might be someone locked out at night, or a business that wants keys changed before the next tenant.",
      "Herston is the other neighbour on our list. We do not ask you to travel to Red Hill. If you cannot get in, phone. If the lock work can be dated, send the form and write Fortitude Valley on it."
    ],
    servicesHeading: "Locksmith services in Fortitude Valley",
    servicesIntro:
      "Emergency and booked work use the same set of services as the rest of the site.",
    services: [
      {
        title: "Valley lockouts, day or night",
        text: "An emergency locksmith in Fortitude Valley covers a unit, house, shop or car at any hour. Non-destructive entry is the aim, so you are not replacing a lock just to get through the door. The price is quoted first."
      },
      {
        title: "Rekeying when access must change",
        text: "Rekey locks in Fortitude Valley when keys have to stop working and the lock is still good. The hardware stays. The old keys do not."
      },
      {
        title: "Repairs on shop and home locks",
        text: "A dragging barrel, a useless handle or a deadlock that stops short can be repaired. We say if a repair is enough. If the lock is finished, lock replacement is quoted before we proceed."
      },
      {
        title: "A replacement for a tired lock",
        text: "Lock replacement in Fortitude Valley is a quality lock, fitted and checked, chosen with you before the old one comes off."
      },
      {
        title: "Smart locks for Valley doors",
        text: "Smart lock installation is a keypad, fingerprint or app-controlled lock, selected after we see the door, then set up before we leave."
      }
    ],
    residentialHeading: "Apartments and homes in the Valley",
    residential:
      "Residents call for lockouts, rekeying, and repairs or replacements on night latches and deadlocks. Smart locks are fitted where the door allows. Safe opening, servicing, and bolting down a new safe are available when that is the request.",
    commercialHeading: "Shops and small offices",
    commercial:
      "We attend shop and office lockouts, rekey when access needs to change, and replace locks on doors that cop heavy use. Night and weekend emergencies are phone calls. Daytime planning can be the form.",
    nearbyHeading: "Around Fortitude Valley",
    nearbyIntro:
      "Brisbane City and Spring Hill are toward the CBD. Bowen Hills and Herston are the inner-north neighbours on our list.",
    nearby: ["Brisbane City", "Spring Hill", "Bowen Hills", "Herston", "Newmarket"],
    faqs: [
      {
        q: "Can you come late at night?",
        a: "Yes. Emergency locksmith cover in Fortitude Valley is 24/7, including late nights."
      },
      {
        q: "We are changing tenants. Is that a rekey or a new lock?",
        a: "Rekey if the lock is sound. Replacement if it is worn or damaged. We look, then quote, before either job starts."
      },
      {
        q: "Is your Fortitude Valley address a shop?",
        a: "We do not have one. The business is based in Red Hill and travels to the Valley."
      },
      {
        q: "What is the starting call-out?",
        a: "Call-outs start from $35. The job itself is priced up front."
      },
      {
        q: "Do you open safes?",
        a: "Yes. We open and service domestic and commercial safes, and we can supply and bolt down a new one."
      }
    ],
    ctaHeading: "Call a locksmith for Fortitude Valley",
    ctaBody: `Call now on ${PHONE_DISPLAY} if you are locked out. Contact us to book rekey locks, repairs or lock replacement in Fortitude Valley.`
  },
  "bowen-hills": {
    slug: "bowen-hills",
    name: "Bowen Hills",
    postcode: "4006",
    h1: "Mobile locksmith in Bowen Hills",
    eyebrow: "Bowen Hills 4006",
    title: "Locksmith Bowen Hills | Emergency Lockouts & Rekeying | Red Hill Security & Locksmith",
    metaDescription:
      `Mobile locksmith in Bowen Hills for emergency lockouts, rekey locks, repairs and smart locks. From Red Hill, not a local shop. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "Bowen Hills sits between the Valley and Herston, and we cover it from Red Hill. There is no Bowen Hills branch. You are quoted before a lock is opened, repaired or replaced.",
    introHeading: "A short brief is enough",
    intro: [
      "Tell us if the problem is a lockout, keys that should be cancelled, or a lock that needs repair or replacement. Add whether it is a house, a unit, a workplace or a car. That is enough to decide if we should come now.",
      "Fortitude Valley, Herston, Kelvin Grove and Newmarket are the neighbours already listed on the site. Bowen Hills is part of that mobile area, not a separate locksmith premises."
    ],
    servicesHeading: "Bowen Hills jobs we will travel for",
    servicesIntro:
      "Each item below is work we already do. The place changes. The service list does not.",
    services: [
      {
        title: "Bowen Hills lockouts",
        text: "Emergency locksmith help in Bowen Hills is for a house, unit, shop or car you cannot enter. It is available 24/7. We try to keep the lock intact. The price is set before we start."
      },
      {
        title: "Rekeying after a move or a loss",
        text: "Rekey locks in Bowen Hills to retire old keys without throwing away a sound lock. Typical after a move or a lost key."
      },
      {
        title: "Fitting replacement hardware",
        text: "Lock replacement in Bowen Hills supplies and fits a quality lock when the current one is damaged or unsuitable. The latch is checked. You agree first."
      },
      {
        title: "Repairs for locks that can be saved",
        text: "We repair sticky barrels, spinning handles and deadlocks that stop short, when a repair will actually solve it. Otherwise we quote a replacement."
      },
      {
        title: "Smart lock setup before we leave",
        text: "Keypad, fingerprint and app-controlled locks are installed after a look at the door, then configured before we leave."
      }
    ],
    residentialHeading: "Homes in Bowen Hills",
    residential:
      "Home visits cover getting you in, rekeying, and repairing or replacing a night latch or deadlock. Smart locks are an upgrade where the door can carry them. Safes, if the combination is forgotten or the safe is jammed, can be opened, serviced, or supplied and bolted down.",
    commercialHeading: "Workplaces in Bowen Hills",
    commercial:
      "Lockouts, rekeying after a tenancy change, and lock replacement on busy doors are the commercial jobs. Call when access has failed. Write when you are choosing a day.",
    nearbyHeading: "Bowen Hills and the next suburb",
    nearbyIntro:
      "Fortitude Valley is toward the city. Herston, Kelvin Grove and Newmarket are the other neighbours on our list.",
    nearby: ["Fortitude Valley", "Herston", "Kelvin Grove", "Newmarket", "Spring Hill"],
    faqs: [
      {
        q: "Are you located in Bowen Hills?",
        a: "No. We are a mobile locksmith based in Red Hill. Bowen Hills is a suburb we travel to."
      },
      {
        q: "What do you need to know before you come?",
        a: "The street, whether it is a house, unit, shop or car, and whether you are locked out or booking a rekey, repair or replacement."
      },
      {
        q: "Can a smart lock go on any door?",
        a: "No. We check the door first and only recommend a lock that will fit it."
      },
      {
        q: "Is after-hours more complicated to book?",
        a: "For a lockout, just call. The service is available 24/7. Planned work can go through the form."
      }
    ],
    ctaHeading: "Need a locksmith in Bowen Hills?",
    ctaBody: `Call now on ${PHONE_DISPLAY} when you are locked out. Contact us for rekeying, a repair or lock replacement at a Bowen Hills address.`
  },
  "west-end": {
    slug: "west-end",
    name: "West End",
    postcode: "4101",
    h1: "Locksmith West End for homes and shopfronts",
    eyebrow: "West End · Southside 4101",
    title: "Locksmith West End Brisbane | Mobile Locksmith & Repairs | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in West End, Brisbane for emergency lockouts, rekeying, lock repairs and replacement. Mobile from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "West End is south of the river, and we still come to you from Red Hill. There is no West End shop of ours. The price is agreed at the door, before any lock is opened or changed.",
    introHeading: "Southside visits, arranged from Red Hill",
    intro: [
      "West End sits beside South Brisbane. People ask us to open a house or unit, to rekey after a move, or to repair or replace a lock that has stopped behaving. Shops need the same things, often after hours.",
      "Brisbane City is the neighbour across the river on our list. We cover West End as a mobile locksmith service area. Phone if you are stuck. Use the form if you are choosing a time."
    ],
    servicesHeading: "West End locksmith services",
    servicesIntro:
      "Written for West End, limited to services already offered on the homepage.",
    services: [
      {
        title: "West End lockouts",
        text: "An emergency locksmith in West End handles a house, unit, shop or car, 24/7. The preference is to get you in without damaging the lock. You hear the full price before we start."
      },
      {
        title: "Rekeying West End doors",
        text: "Rekey locks in West End to stop old keys without replacing hardware that is still good. It is the usual request after a move or a lost key."
      },
      {
        title: "Repairs on doors that still latch",
        text: "We repair a sticky barrel, a handle that does not catch, or a deadlock that will not throw, when repair is the sound choice. A worn-out lock is quoted as a replacement instead."
      },
      {
        title: "A replacement if the lock is finished",
        text: "Lock replacement in West End means we supply a quality lock, fit it, and check the latch. Nothing comes off the door until you agree."
      },
      {
        title: "Smart locks after a door check",
        text: "Smart lock installation adds keypad, fingerprint or app-controlled access after we check that the door can take it. Setup is done before we leave."
      },
      {
        title: "Safes opened or fitted",
        text: "Forgotten combinations and jammed safes are opened and serviced. New safes are supplied and bolted down at the West End property."
      }
    ],
    residentialHeading: "West End houses and units",
    residential:
      "Home calls are lockouts, rekeying, and night latches or deadlocks that need repair or replacement. Smart locks are fitted on suitable doors. We work with the door in front of us rather than forcing a standard product onto it.",
    commercialHeading: "Shopfronts and small workplaces",
    commercial:
      "A shop lockout, a rekey between tenants, or a lock replacement on a door that is opened all day: we come to that West End address. Call for the lockout. Contact us for the booked work.",
    nearbyHeading: "Near West End",
    nearbyIntro:
      "South Brisbane is the immediate neighbour on our list. Brisbane City is across the river. Both are service areas, not extra offices.",
    nearby: ["South Brisbane", "Brisbane City", "Milton", "Petrie Terrace"],
    faqs: [
      {
        q: "Do you cross the river for West End?",
        a: "Yes. We are based in Red Hill and West End is one of the suburbs we travel to. We do not have a workshop there."
      },
      {
        q: "Can you rekey and repair on the same visit?",
        a: "If that is what the doors need, yes. We quote each part before starting, so a repair and a rekey are not a surprise on the invoice."
      },
      {
        q: "What if it is the car, not the house?",
        a: "Call and say it is a car lockout. That is part of the emergency service."
      },
      {
        q: "Are public holidays covered?",
        a: "Yes. Emergency help is available 24/7, including public holidays."
      }
    ],
    ctaHeading: "A locksmith for your West End address",
    ctaBody: `Call now on ${PHONE_DISPLAY} if you cannot get in. Contact us to organise rekeying, repairs or lock replacement in West End.`
  },
  "south-brisbane": {
    slug: "south-brisbane",
    name: "South Brisbane",
    postcode: "4101",
    h1: "Locksmith in South Brisbane",
    eyebrow: "South Brisbane · 4101",
    title: "Locksmith South Brisbane | Emergency & Rekeying Service | Red Hill Security & Locksmith",
    metaDescription:
      `Locksmith in South Brisbane for emergency lockouts, rekey locks, lock replacement and smart locks. Mobile from Red Hill. Call ${PHONE_DISPLAY}.`,
    heroLead:
      "South Brisbane is covered from our Red Hill base, on the other side of the river. We do not have a South Brisbane office. Lockouts and planned lock work are priced before they begin.",
    introHeading: "Apartments, houses and the doors between",
    intro: [
      "South Brisbane sits with West End and looks across to Brisbane City. The locksmith jobs are familiar: a lockout, keys that should be retired, a repair, or a lock that should be replaced. The address is what changes.",
      "Treat this as a mobile service. You stay where you are. We come to the street. Urgent problems belong on the phone. Rekeying and upgrades that can wait belong on the form."
    ],
    servicesHeading: "Services for a South Brisbane visit",
    servicesIntro:
      "Limited to the work Red Hill Security & Locksmith already offers, and explained for this suburb.",
    services: [
      {
        title: "South Brisbane lockouts",
        text: "Need an emergency locksmith in South Brisbane? We attend a house, unit, shop or car at any hour and try to open the lock without damage. Call-outs start from $35. The rest of the price is quoted before we start."
      },
      {
        title: "Rekeying without a workshop visit",
        text: "Rekey locks in South Brisbane when you want the current lock to stay and the old keys to stop. It suits a move or a key you can no longer account for."
      },
      {
        title: "On-site lock replacement",
        text: "Lock replacement in South Brisbane is the job when the lock is worn, damaged, or wrong for the door. We supply, fit and test it after you approve the quote."
      },
      {
        title: "Repairs quoted before any parts",
        text: "Repairs deal with a sticky barrel, a spinning handle, or a deadlock that will not throw. We repair if that is enough, and we tell you plainly if it is not."
      },
      {
        title: "Smart locks set up on site",
        text: "Smart lock installation and upgrades cover keypad, fingerprint and app-controlled locks. The door is checked first. Codes are set before we go."
      }
    ],
    residentialHeading: "South Brisbane homes",
    residential:
      "We unlock homes, rekey them when the household changes, and repair or replace night latches and deadlocks. A smart lock is fitted if the door will support it. If you need a safe opened, serviced, or bolted down, say so. That work is part of the same mobile service.",
    commercialHeading: "Offices and shops in South Brisbane",
    commercial:
      "Workplace visits cover lockouts, rekeying when people or tenants change, and lock replacement on doors in daily use. Call if the door is shut and you need it open. Use Contact us if you are booking the rest.",
    nearbyHeading: "South Brisbane's listed neighbours",
    nearbyIntro:
      "West End is alongside. Brisbane City is across the river. Milton and Petrie Terrace are the inner-west suburbs we also list.",
    nearby: ["West End", "Brisbane City", "Milton", "Petrie Terrace", "Spring Hill"],
    faqs: [
      {
        q: "Is South Brisbane too far from Red Hill?",
        a: "It is one of the suburbs on our service list. We travel there. We do not have a local branch."
      },
      {
        q: "How should I ask for a rekey?",
        a: "Call or use the form, say South Brisbane, and say you want the locks rekeyed rather than replaced. If a lock is too worn, we quote replacement first."
      },
      {
        q: "Do you work on commercial safes?",
        a: "Yes. We open and service domestic and commercial safes, and we supply and bolt down new safes."
      },
      {
        q: "What if I am locked out on a weeknight?",
        a: `Call ${PHONE_DISPLAY}. Emergency locksmith help is available 24/7.`
      }
    ],
    ctaHeading: "Need a locksmith in South Brisbane?",
    ctaBody: `Call now on ${PHONE_DISPLAY} for a lockout. Contact us to book rekey locks, a repair, lock replacement or a smart lock in South Brisbane.`
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
