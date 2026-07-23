/**
 * ============================================================
 * SITE CONFIG — single source of truth
 * ============================================================
 * Every page, component, and metadata block reads from this file.
 * To re-skin this template for a new café/restaurant client,
 * change the values below — nothing else needs to change.
 */

export type DietaryTag = "V" | "VG" | "GF" | "DF" | "NF";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  dietary: DietaryTag[];
  image?: string;
  featured?: boolean;
  popular?: boolean;
}

export type MenuCategoryId =
  | "coffee"
  | "cold-drinks"
  | "breakfast"
  | "lunch"
  | "kids"
  | "desserts";

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  description: string;
}

export interface CafeEvent {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date
  endDate?: string; // ISO date, for multi-day / end-time schema
  time: string;
  price: string;
  image: string;
  bookingRequired: boolean;
  spotsLeft?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  source: "Google" | "Instagram" | "Walk-in";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface OpeningHoursEntry {
  day: string;
  hours: string;
  isToday?: boolean;
}

export const siteConfig = {
  // ------------------------------------------------------------------
  // BUSINESS IDENTITY
  // ------------------------------------------------------------------
  business: {
    name: "Farmgate Café & Co. | Demo",
    shortName: "Farmgate Café | Demo",
    tagline: "Slow mornings, honest food.",
    description:
      "A boutique neighbourhood café in Clyde, Victoria, serving specialty coffee, seasonal brunch, and community warmth since day one. Farmgate Café & Co. | Demo is a gathering place for locals — where the coffee is roasted with care and every plate is made from scratch.",
    type: "Café",
    foundedYear: 2021,
    priceRange: "$$",
    cuisine: ["Café", "Brunch", "Coffee", "Australian"],
  },

  // ------------------------------------------------------------------
  // CONTACT
  // ------------------------------------------------------------------
  contact: {
    phone: "+61 3 9021 4477",
    phoneDisplay: "(03) 9021 4477",
    email: "hello@farmgatecafe.com.au",
    address: {
      line1: "7/5 Riverland Road",
      suburb: "Clyde",
      state: "VIC",
      postcode: "3978",
      country: "Australia",
      full: "7/5 Riverland Road, Clyde VIC 3978, Australia",
    },
    geo: {
      latitude: -38.1167,
      longitude: 145.3333,
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7%2F5+Riverland+Road+Clyde+VIC+3978",
    googleMapsEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835!2d145.3333!3d-38.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzAwLjEiUyAxNDXCsDIwJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1700000000000",
  },

  // ------------------------------------------------------------------
  // OPENING HOURS
  // ------------------------------------------------------------------
  openingHours: [
    { day: "Monday", hours: "7:00 AM – 3:00 PM" },
    { day: "Tuesday", hours: "7:00 AM – 3:00 PM" },
    { day: "Wednesday", hours: "7:00 AM – 3:00 PM" },
    { day: "Thursday", hours: "7:00 AM – 3:00 PM" },
    { day: "Friday", hours: "7:00 AM – 4:00 PM" },
    { day: "Saturday", hours: "7:30 AM – 4:00 PM" },
    { day: "Sunday", hours: "7:30 AM – 3:00 PM" },
  ] satisfies OpeningHoursEntry[],

  // Schema.org / structured-data friendly format (24hr, Mon–Sun)
  openingHoursSpecification: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:00", closes: "15:00" },
    { days: ["Friday"], opens: "07:00", closes: "16:00" },
    { days: ["Saturday"], opens: "07:30", closes: "16:00" },
    { days: ["Sunday"], opens: "07:30", closes: "15:00" },
  ],

  // ------------------------------------------------------------------
  // SOCIAL
  // ------------------------------------------------------------------
  social: {
    instagram: "https://www.instagram.com/farmgatecafe",
    facebook: "https://www.facebook.com/farmgatecafe",
    tiktok: "https://www.tiktok.com/@farmgatecafe",
  },

  // ------------------------------------------------------------------
  // BRAND
  // ------------------------------------------------------------------
  brand: {
    colors: {
      linen: "#FAF6F0",
      espresso: "#1B1816",
      strawberry: "#FF8A9A",
      matcha: "#6E8E59",
    },
    fonts: {
      display: "Playfair Display",
      body: "Inter",
    },
    logoText: "Farmgate",
  },

  // ------------------------------------------------------------------
  // SEO
  // ------------------------------------------------------------------
  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.farmgatecafe.com.au",
    defaultTitle: "Farmgate Café & Co. | Demo | Boutique Café in Clyde, VIC",
    titleTemplate: "%s | Farmgate Café & Co. | Demo",
    defaultDescription:
      "Specialty coffee, seasonal brunch, and a warm neighbourhood welcome in Clyde, VIC. Order click & collect, browse the menu, or drop by 7/5 Riverland Road.",
    keywords: [
      "cafe Clyde VIC",
      "coffee Clyde",
      "brunch Clyde Victoria",
      "best cafe near Clyde",
      "click and collect coffee Clyde",
      "Farmgate Cafe",
    ],
    ogImage: "/images/og-cover.jpg",
    twitterHandle: "@farmgatecafe",
    locale: "en_AU",
  },

  // ------------------------------------------------------------------
  // NAVIGATION
  // ------------------------------------------------------------------
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Menu", href: "/menu" },
      { label: "Events", href: "/events" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavLink[],
    footer: [
      { label: "Menu", href: "/menu" },
      { label: "Events", href: "/events" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Website Packages", href: "/packages" },
    ] satisfies NavLink[],
  },

  // ------------------------------------------------------------------
  // SERVICES
  // ------------------------------------------------------------------
  services: [
    {
      title: "Click & Collect",
      description: "Order ahead and skip the queue — ready when you walk in.",
    },
    {
      title: "Dine In",
      description: "Sun-drenched indoor seating and a leafy courtyard out back.",
    },
    {
      title: "Private Events",
      description: "Book the café for birthdays, baby showers, and workshops.",
    },
    {
      title: "Catering",
      description: "Grazing boards and coffee carts for your next gathering.",
    },
  ],

  // ------------------------------------------------------------------
  // MENU
  // ------------------------------------------------------------------
  menuCategories: [
    { id: "coffee", label: "Coffee", description: "Single-origin beans, roasted weekly." },
    { id: "cold-drinks", label: "Cold Drinks", description: "Iced, blended, and bottled." },
    { id: "breakfast", label: "Breakfast", description: "Served all day, every day." },
    { id: "lunch", label: "Lunch", description: "From 11:30 AM." },
    { id: "kids", label: "Kids", description: "Small plates for little ones." },
    { id: "desserts", label: "Desserts", description: "Baked fresh in-house." },
  ] satisfies MenuCategory[],

  menu: [
    // Coffee
    { id: "c-01", name: "Farmgate Espresso", description: "Our house blend — chocolate, hazelnut, brown sugar.", price: 4.5, category: "coffee", dietary: [], popular: true },
    { id: "c-02", name: "Flat White", description: "Double ristretto, silky micro-foam.", price: 5.0, category: "coffee", dietary: [], featured: true, popular: true },
    { id: "c-03", name: "Cappuccino", description: "Classic ratio, dusted with cocoa.", price: 5.0, category: "coffee", dietary: [] },
    { id: "c-04", name: "Long Black", description: "Double shot over hot water.", price: 4.5, category: "coffee", dietary: ["DF"] },
    { id: "c-05", name: "Oat Latte", description: "Made with Minor Figures oat milk.", price: 5.5, category: "coffee", dietary: ["VG", "DF"] },
    { id: "c-06", name: "Pour Over", description: "Rotating single origin, brewed to order.", price: 6.5, category: "coffee", dietary: ["VG", "DF", "GF"] },

    // Cold Drinks
    { id: "cd-01", name: "Iced Matcha Latte", description: "Ceremonial-grade matcha, oat or dairy.", price: 6.5, category: "cold-drinks", dietary: ["V", "GF"], featured: true },
    { id: "cd-02", name: "Strawberry Lemonade", description: "House-made, fresh strawberry syrup.", price: 6.0, category: "cold-drinks", dietary: ["VG", "GF", "DF"], popular: true },
    { id: "cd-03", name: "Iced Long Black", description: "Double shot poured over ice.", price: 5.0, category: "cold-drinks", dietary: ["VG", "GF", "DF"] },
    { id: "cd-04", name: "Mango Lassi", description: "Yoghurt, mango, cardamom.", price: 7.0, category: "cold-drinks", dietary: ["V", "GF"] },

    // Breakfast
    { id: "b-01", name: "Farmgate Big Breakfast", description: "Eggs, bacon, mushroom, tomato, sourdough, hash brown.", price: 24.0, category: "breakfast", dietary: [], featured: true, popular: true },
    { id: "b-02", name: "Smashed Avo", description: "Whipped feta, chilli oil, poached eggs, seeded toast.", price: 21.0, category: "breakfast", dietary: ["V"], popular: true },
    { id: "b-03", name: "Buttermilk Pancakes", description: "Berry compote, mascarpone, maple.", price: 19.0, category: "breakfast", dietary: ["V"] },
    { id: "b-04", name: "Shakshuka", description: "Baked eggs in spiced tomato, feta, herb oil.", price: 22.0, category: "breakfast", dietary: ["V", "GF"] },
    { id: "b-05", name: "Bircher Muesli", description: "Overnight oats, apple, coconut yoghurt, seeds.", price: 15.0, category: "breakfast", dietary: ["VG", "DF"] },
    { id: "b-06", name: "Acai Bowl", description: "Acai, banana, granola, fresh fruit.", price: 18.0, category: "breakfast", dietary: ["VG", "GF", "DF"] },

    // Lunch
    { id: "l-01", name: "Farmgate Club Sandwich", description: "Chicken, bacon, avocado, aioli, triple-stacked.", price: 22.0, category: "lunch", dietary: [], featured: true },
    { id: "l-02", name: "Pumpkin & Feta Salad", description: "Quinoa, rocket, pepitas, pomegranate dressing.", price: 20.0, category: "lunch", dietary: ["V", "GF"], popular: true },
    { id: "l-03", name: "Reuben Toastie", description: "Pastrami, sauerkraut, Swiss, mustard mayo.", price: 19.0, category: "lunch", dietary: [] },
    { id: "l-04", name: "Soup of the Day", description: "Ask your barista — served with sourdough.", price: 14.0, category: "lunch", dietary: ["V"] },
    { id: "l-05", name: "Mushroom Arancini", description: "Truffle aioli, parmesan, rocket.", price: 16.0, category: "lunch", dietary: ["V"] },

    // Kids
    { id: "k-01", name: "Mini Pancakes", description: "With maple and berries.", price: 9.0, category: "kids", dietary: ["V"] },
    { id: "k-02", name: "Cheesy Toastie", description: "Grilled cheese on white sourdough.", price: 8.0, category: "kids", dietary: ["V"] },
    { id: "k-03", name: "Babyccino", description: "Steamed milk and a sprinkle of chocolate.", price: 1.5, category: "kids", dietary: ["V", "GF"] },

    // Desserts
    { id: "d-01", name: "Basque Cheesecake", description: "Burnt-top, vanilla bean, seasonal fruit.", price: 9.5, category: "desserts", dietary: ["V", "GF"], featured: true, popular: true },
    { id: "d-02", name: "Sticky Date Pudding", description: "Butterscotch sauce, vanilla ice cream.", price: 11.0, category: "desserts", dietary: ["V"] },
    { id: "d-03", name: "Lemon Tart", description: "Torched meringue, shortcrust.", price: 8.5, category: "desserts", dietary: ["V"] },
    { id: "d-04", name: "Chocolate Brownie", description: "Fudgy centre, served warm.", price: 7.5, category: "desserts", dietary: ["V", "GF"] },
  ] satisfies MenuItem[],

  // ------------------------------------------------------------------
  // EVENTS
  // ------------------------------------------------------------------
  events: [
    {
      id: "e-01",
      title: "Sip & Paint: Golden Hour",
      description:
        "An evening of wine, coffee, and canvas. All materials supplied — no experience necessary. Guided step-by-step by a local artist.",
      date: "2026-08-14",
      time: "6:00 PM – 8:30 PM",
      price: "$65 per person",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=900&auto=format&fit=crop",
      bookingRequired: true,
      spotsLeft: 6,
    },
    {
      id: "e-02",
      title: "Mother's Day High Tea",
      description:
        "A three-tier high tea with sparkling wine, live acoustic music, and a native flower to take home for every mum.",
      date: "2026-09-06",
      time: "10:00 AM – 12:00 PM",
      price: "$55 per person",
      image: "https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?q=80&w=900&auto=format&fit=crop",
      bookingRequired: true,
      spotsLeft: 12,
    },
    {
      id: "e-03",
      title: "Community Trivia Night",
      description:
        "Grab a table with friends for café trivia — categories span pop culture, local history, and food & drink. Prizes for the winning table.",
      date: "2026-08-27",
      time: "7:00 PM – 9:00 PM",
      price: "Free entry",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=900&auto=format&fit=crop",
      bookingRequired: true,
      spotsLeft: 20,
    },
    {
      id: "e-04",
      title: "Barista Basics Workshop",
      description:
        "Learn to pull the perfect shot and pour latte art from our head barista. Small group, hands-on, coffee beans to take home.",
      date: "2026-09-19",
      time: "9:00 AM – 10:30 AM",
      price: "$45 per person",
      image: "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=900&auto=format&fit=crop",
      bookingRequired: true,
      spotsLeft: 4,
    },
  ] satisfies CafeEvent[],

  // ------------------------------------------------------------------
  // TESTIMONIALS
  // ------------------------------------------------------------------
  testimonials: [
    {
      id: "t-01",
      name: "Amelia R.",
      quote:
        "Hands down the best flat white in Clyde. The staff remember your order after one visit — it feels like home.",
      rating: 5,
      source: "Google",
    },
    {
      id: "t-02",
      name: "Josh T.",
      quote:
        "Brought the whole family for brunch and everyone found something they loved. The smashed avo is unreal.",
      rating: 5,
      source: "Google",
    },
    {
      id: "t-03",
      name: "Priya N.",
      quote:
        "Click & collect saves me every weekday morning. Order's always ready right on time, hot and correct.",
      rating: 5,
      source: "Walk-in",
    },
    {
      id: "t-04",
      name: "Marco D.",
      quote:
        "Went to the Sip & Paint night and it was such a lovely evening. Already booked in for the next one.",
      rating: 5,
      source: "Instagram",
    },
  ] satisfies Testimonial[],

  // ------------------------------------------------------------------
  // GOOGLE REVIEWS SUMMARY (replace with live API data when available)
  // ------------------------------------------------------------------
  googleReviews: {
    rating: 4.9,
    reviewCount: 312,
    profileUrl: "https://www.google.com/maps/search/?api=1&query=Farmgate+Cafe+Clyde+VIC",
  },

  // ------------------------------------------------------------------
  // INSTAGRAM (static preview grid — swap for live embed / API at deploy time)
  // ------------------------------------------------------------------
  instagram: {
    handle: "@farmgatecafe",
    posts: [
      { id: "ig-01", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop", alt: "Latte art flat white on marble table" },
      { id: "ig-02", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=600&auto=format&fit=crop", alt: "Smashed avocado brunch plate" },
      { id: "ig-03", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop", alt: "Café interior with morning light" },
      { id: "ig-04", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop", alt: "Basque cheesecake slice" },
      { id: "ig-05", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=600&auto=format&fit=crop", alt: "Courtyard seating area" },
      { id: "ig-06", image: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=600&auto=format&fit=crop", alt: "Pour over coffee being brewed" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
