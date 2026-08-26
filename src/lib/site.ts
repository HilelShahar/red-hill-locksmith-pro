export const business = {
  name: "Red Hill Security & Locksmith",
  shortName: "Red Hill Security",
  phoneDisplay: "0416 807 444",
  phoneHref: "tel:+61416807444",
  email: "info@redhillsecuritylocksmith.com.au",
  address: "26 Glenrosa Rd, Red Hill QLD 4059",
  hours: "24/7 Emergency Service",
  abn: "12 693 068 457",
  googleProfileUrl: "https://www.google.com/search?q=Red+Hill+Security+%26+Locksmith+Brisbane",
} as const;

export const sellingPoints = [
  { icon: "clock", title: "24/7 Emergency Service", text: "Day, night, weekends and public holidays." },
  { icon: "timer", title: "15–20 Minute Arrival", text: "Average arrival time across inner Brisbane." },
  { icon: "badge", title: "Fully Licensed", text: "Trusted locksmith services provided by a licensed Queensland security professional." },
  { icon: "shield", title: "All Work Guaranteed", text: "Every job backed by our workmanship guarantee." },
  { icon: "dollar", title: "Call-outs From $35", text: "Honest, transparent pricing quoted up front." },
  { icon: "smile", title: "Friendly & Professional", text: "Respectful service and clean, tidy workmanship." },
] as const;

export type ServiceSlug =
  | "emergency-lockout"
  | "rekeying-replacement"
  | "smart-locks"
  | "commercial-security"
  | "safes";

export const services: {
  slug: ServiceSlug;
  name: string;
  tagline: string;
  description: string;
  points: string[];
  badge?: string;
}[] = [
  {
    slug: "emergency-lockout",
    name: "Emergency Lockout Service",
    tagline: "Home, car or business — 24/7",
    description:
      "Locked out of your house, car or shop? We're on the road around the clock and typically reach inner-Brisbane addresses in 15–20 minutes. Non-destructive entry wherever possible, so your locks keep working afterwards.",
    points: [
      "Residential, automotive and commercial lockouts",
      "Non-destructive entry techniques",
      "Broken key extraction and lost key replacement",
      "Available every hour of every day",
    ],
    badge: "Available 24/7",
  },
  {
    slug: "rekeying-replacement",
    name: "Lock Rekeying & Lock Replacement",
    tagline: "New keys without new hardware",
    description:
      "Moved house, lost a key or had a tenant change? Rekeying makes old keys useless while keeping your existing hardware. Where locks are worn or insecure, we supply and fit quality replacements.",
    points: [
      "Rekey existing locks to one new key",
      "Master keying and keyed-alike systems",
      "Deadbolt, entry set and window lock upgrades",
      "Insurance-compliant hardware options",
    ],
  },
  {
    slug: "smart-locks",
    name: "Smart Lock Installation",
    tagline: "Keyless convenience, done properly",
    description:
      "Keypad, fingerprint and app-controlled locks supplied, installed and configured. We advise on the right model for your door type, then set up codes and access for your household or team.",
    points: [
      "Keypad, fingerprint and Bluetooth/Wi-Fi locks",
      "Door prep and correct hardware fitting",
      "Code, user and access setup with a walkthrough",
      "Airbnb and short-stay keyless entry",
    ],
  },
  {
    slug: "safes",
    name: "Safe Opening & Safe Installation",
    tagline: "Locked, jammed or brand new",
    description:
      "Forgotten combination or a jammed safe? We open and service domestic and commercial safes, then supply and bolt down new safes in the right spot for security and insurance.",
    points: [
      "Safe opening and combination changes",
      "Servicing of jammed or faulty safes",
      "Supply and installation of home/office safes",
      "Secure floor and wall anchoring",
    ],
  },
];

export const suburbs = [
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
  "South Brisbane",
  "Toowong",
  "Enoggera",
  "Alderley",
  "Wilston",
  "Windsor",
  "Grange",
  "Lutwyche",
  "Albion",
  "Newstead",
  "Teneriffe",
  "New Farm",
  "Highgate Hill",
  "St Lucia",
  "Taringa",
  "The Gap",
  "Stafford",
  "Gordon Park",
  "Wooloowin",
  "Kangaroo Point",
  "Dutton Park",
];

export const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Paddington",
    rating: 5,
    text: "Locked myself out at 11pm with a baby in the car. Called and he was there in about 15 minutes, had the door open without any damage. Absolute lifesaver and very reasonably priced.",
  },
  {
    name: "James T.",
    suburb: "Ashgrove",
    rating: 5,
    text: "Rekeyed every lock in our house after settlement. Turned up on time, explained the options clearly and charged exactly what he quoted. Would recommend to anyone in the inner west.",
  },
  {
    name: "Priya K.",
    suburb: "Brisbane City",
    rating: 5,
    text: "Our office keypad failed on a Monday morning. He rearranged his run to get us open before staff arrived, then upgraded the whole access system that week. Excellent to deal with.",
  },
  {
    name: "Dan R.",
    suburb: "Newstead",
    rating: 5,
    text: "Smart lock installed on a tricky old timber door. Neat job, no fuss, and he walked me through setting up codes for the cleaner. Really friendly bloke.",
  },
  {
    name: "Megan L.",
    suburb: "The Gap",
    rating: 5,
    text: "Inherited a safe with no combination. He opened it carefully, reset the code and gave it a service. Honest pricing and great communication throughout.",
  },
  {
    name: "Tony V.",
    suburb: "Milton",
    rating: 5,
    text: "Car keys locked inside on Coronation Drive. Quick call, quick arrival, no scratches on the car. Saved me a very expensive dealership trip.",
  },
];

export const navLinks = [
  { to: "/", hash: "", label: "Home" },
  { to: "/services", hash: "", label: "Services" },
  { to: "/about", hash: "", label: "About Us" },
  { to: "/service-areas", hash: "", label: "Service Areas" },
  { to: "/reviews", hash: "", label: "Reviews" },
  { to: "/", hash: "quote", label: "Contact" },
] as const;
