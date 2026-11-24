export interface ClubZone {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  badge: string;
  accent: "emerald" | "walnut" | "gold";
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  span: "wide" | "tall" | "standard";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Snooker Hall" | "Pool & VIP" | "Gaming Arena" | "Emerald Café & Sheesha";
  caption: string;
  image: string;
  aspect: "landscape" | "portrait" | "wide";
}

export const siteConfig = {
  brandName: "DR Snooker & Gaming Zone Cafe",
  brandFullName: "DR Snooker & Gaming Zone Cafe",
  city: "Ajman, United Arab Emirates",
  grandOpeningDate: "2026-11-28T00:00:00+04:00",
  grandOpeningLabel: "GRAND OPENING NOV 28 • 24/7",
  whatsappDisplay: "+971 52 9104075",
  whatsappNumber: "971529104075",
  whatsappBaseUrl: "https://wa.me/971529104075",
  coordinates: {
    lat: 25.398750,
    lng: 55.443139,
    dms: "25°23'55.5\"N 55°26'35.3\"E",
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=25.398750,55.443139",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=25.398750,55.443139&z=16&output=embed",
  hours: "Open 24/7 (Launching November 28, 2026)",
  showPricing: false as const,

  hero: {
    videoSrc: "/media/hero-loop.mp4",
    posterSrc: "/media/hero-poster.webp",
    headline: "AJMAN'S PREMIER 24/7 SNOOKER, GAMING & LOUNGE DESTINATION",
    subheadline:
      "7 Championship Snooker Tables • 4 Pro Pool Tables • Private VIP Suite • Next-Gen Gaming Arena • Emerald Lounge Restaurant & Sheesha Café",
    primaryCta: "Book Opening Week via WhatsApp",
    secondaryCta: "Explore the Club",
  },

  navLinks: [
    { label: "Arenas", href: "#arenas" },
    { label: "VIP Suite", href: "#vip-suite" },
    { label: "Café & Gaming", href: "#cafe-gaming" },
    { label: "Gallery", href: "#gallery" },
    { label: "24/7 Location", href: "#location" },
  ],

  zones: [
    {
      id: "snooker-hall",
      code: "01 / CHAMPIONSHIP HALL",
      title: "Championship Snooker Hall",
      subtitle: "7 Full-Size 12ft Tournament Tables",
      badge: "7 MATCH TABLES",
      accent: "emerald",
      description:
        "Precision-leveled slate beds, tournament-grade emerald baize, and glare-free linear canopies engineered for break-building clarity around the clock.",
      highlights: [
        "7 tournament-spec Xing Pai championship tables",
        "Precision overhead daylight canopies & cue racks",
        "Pro-grade one-piece & house cues ready 24/7",
      ],
      image: "/images/snooker-table-closeup.webp",
      imageAlt: "Championship 12-foot snooker table inside DR Snooker & Gaming Zone Cafe Ajman",
      span: "wide",
    },
    {
      id: "pool-arena",
      code: "02 / PRO BILLIARDS",
      title: "Pro Pool Arena",
      subtitle: "4 Precision 9-Foot American Tables",
      badge: "4 PRO TABLES",
      accent: "walnut",
      description:
        "Four tournament 9-foot American pool tables framed in smoked walnut rails and flanked by cognac leather lounge banquettes for late-night sessions.",
      highlights: [
        "4 competition 9-foot slate American pool tables",
        "Warm walnut-brown wood & tufted leather seating",
        "Dedicated matte-black & brass pendant lighting",
      ],
      image: "/images/zone-pool-arena.webp",
      imageAlt: "DR Snooker & Gaming Zone Cafe Pro Pool Arena with 4 American pool tables",
      span: "standard",
    },
    {
      id: "vip-suite",
      code: "03 / PRIVATE SANCTUARY",
      title: "Private VIP Snooker Room",
      subtitle: "Sound-Insulated Championship Suite",
      badge: "PRIVATE SUITE",
      accent: "gold",
      description:
        "An acoustic-isolated private room anchored by a single 12-foot championship table, cognac Chesterfield lounge seating, and discreet tableside service.",
      highlights: [
        "Dedicated 12ft private match table & walnut cue cabinet",
        "Plush cognac leather seating for private groups",
        "Direct tableside café & sheesha hospitality",
      ],
      image: "/images/zone-vip-suite.webp",
      imageAlt: "DR Snooker & Gaming Zone Cafe Private VIP Snooker Suite",
      span: "tall",
    },
    {
      id: "gaming-arena",
      code: "04 / ESPORTS & CONSOLE",
      title: "Next-Gen Gaming Arena",
      subtitle: "High-Refresh PC & PS5 Pro Lounges",
      badge: "PS5 PRO & PC",
      accent: "walnut",
      description:
        "Curved high-refresh esports rigs and 4K OLED console bays paired with warm walnut-brown ergonomic seating and restrained emerald-and-gold ambient glow.",
      highlights: [
        "Competitive PC rigs & private PS5 Pro sofa bays",
        "Ergonomic warm-brown leather seating & acoustic slats",
        "Zero-glare ambient emerald & gold backlighting",
      ],
      image: "/images/zone-gaming-arena.webp",
      imageAlt: "DR Snooker & Gaming Zone Cafe Next-Gen Gaming Arena",
      span: "standard",
    },
    {
      id: "cafe-sheesha",
      code: "05 / HOSPITALITY LOUNGE",
      title: "Emerald Restaurant & Sheesha Café",
      subtitle: "24/7 Artisanal Sheesha, Coffee & Late-Night Dining",
      badge: "OPEN 24/7",
      accent: "emerald",
      description:
        "Sink into plush emerald-green velvet booths beneath warm amber pendants. Crafted specialty coffee, signature mocktails, late-night gourmet bites, and premium sheesha.",
      highlights: [
        "Signature emerald-green velvet booths & walnut tables",
        "Handcrafted crystal & brass sheesha blends",
        "24/7 specialty espresso, mocktails & kitchen service",
      ],
      image: "/images/zone-cafe-sheesha.webp",
      imageAlt: "DR Snooker & Gaming Zone Cafe luxury emerald green velvet restaurant and sheesha lounge",
      span: "wide",
    },
  ] satisfies ClubZone[],

  gallery: [
    {
      id: "gal-snooker-live",
      title: "Championship Play Floor",
      category: "Snooker Hall",
      caption: "Live championship hall view inside DR Snooker & Gaming Zone Cafe — crisp emerald baize and overhead match lighting in Ajman.",
      image: "/images/snooker-hall-players.webp",
      aspect: "portrait",
    },
    {
      id: "gal-table-detail",
      title: "Xing Pai Tournament Table",
      category: "Snooker Hall",
      caption: "Full-size 12-foot tournament bed with hand-finished walnut rails and brass pockets.",
      image: "/images/snooker-table-closeup.webp",
      aspect: "landscape",
    },
    {
      id: "gal-baize-balls",
      title: "Precision Match Setup",
      category: "Snooker Hall",
      caption: "Tight close-up of our tournament emerald baize, snooker pyramid, walnut cue rest, and overhead canopy lighting.",
      image: "/images/snooker-baize-balls.webp",
      aspect: "landscape",
    },
    {
      id: "gal-entrance",
      title: "Ajman Storefront Arrival",
      category: "Snooker Hall",
      caption: "DR Snooker & Gaming Zone Cafe illuminated dark-bronze flagship facade in Ajman — Open 24/7 from November 28.",
      image: "/images/club-entrance.webp",
      aspect: "landscape",
    },
    {
      id: "gal-pool-arena",
      title: "4-Table Pro Pool Arena",
      category: "Pool & VIP",
      caption: "Four 9-foot American pool tables surrounded by cognac leather banquette seating.",
      image: "/images/zone-pool-arena.webp",
      aspect: "wide",
    },
    {
      id: "gal-vip-suite",
      title: "Private VIP Snooker Sanctuary",
      category: "Pool & VIP",
      caption: "Sound-insulated private suite with custom brass canopy and tableside hospitality.",
      image: "/images/zone-vip-suite.webp",
      aspect: "wide",
    },
    {
      id: "gal-gaming-arena",
      title: "Esports & Console Lounge",
      category: "Gaming Arena",
      caption: "Curved ultrawide PC stations and OLED console bays in warm walnut & emerald.",
      image: "/images/zone-gaming-arena.webp",
      aspect: "wide",
    },
    {
      id: "gal-emerald-cafe",
      title: "Emerald Café & Sheesha Lounge",
      category: "Emerald Café & Sheesha",
      caption: "Plush emerald velvet booths, warm amber lighting, specialty coffee & handcrafted sheesha.",
      image: "/images/zone-cafe-sheesha.webp",
      aspect: "wide",
    },
  ] satisfies GalleryItem[],

  reservation: {
    zones: [
      { id: "Championship Snooker", label: "Championship Snooker", detail: "7 Tournament 12ft Tables" },
      { id: "Pro Pool", label: "Pro Pool Arena", detail: "4 American 9ft Tables" },
      { id: "Private VIP Room", label: "Private VIP Room", detail: "Sound-Insulated Suite" },
      { id: "Gaming Arena", label: "Next-Gen Gaming Arena", detail: "PS5 Pro & PC Stations" },
      { id: "Restaurant & Sheesha Café", label: "Restaurant & Sheesha Café", detail: "Emerald Velvet Lounge" },
    ],
    groupSizes: ["1–2 Players", "3–4 Players", "5+ Group / VIP"],
    defaultDate: "2026-11-28",
    defaultTime: "21:00",
    quickTimeSlots: ["18:00", "21:00", "23:30", "02:00"],
  },
};
