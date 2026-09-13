export type Room = {
  slug: string;
  name: string;
  image: string;
  size: string;
  capacity: string;
  price: number;
  description: string;
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "deluxe-ocean-view",
    name: "Deluxe Ocean View Room",
    image: "/images/bedroom-ocean.jpg",
    size: "62 m²",
    capacity: "2 Guests",
    price: 33000,
    description:
      "A serene retreat with floor-to-ceiling views of the bay, positioned to catch the first light over the water.",
    amenities: ["King bed", "Private balcony", "Rain shower", "Ocean view"],
  },
  {
    slug: "family-beach-suite",
    name: "Family Beach Suite",
    image: "/images/bedroom-modern.jpg",
    size: "88 m²",
    capacity: "4 Guests",
    price: 44000,
    description:
      "Two connected rooms and a shared terrace, designed for families who want the beach at their doorstep.",
    amenities: ["Two bedrooms", "Beach access", "Lounge area", "Mini bar"],
  },
  {
    slug: "premium-beach-villa",
    name: "Premium Beach Villa",
    image: "/images/villas-beach.jpg",
    size: "140 m²",
    capacity: "3 Guests",
    price: 69000,
    description:
      "A freestanding villa steps from the sand, with a private plunge pool and open-air living pavilion.",
    amenities: ["Private pool", "Outdoor shower", "Butler service", "Beachfront"],
  },
  {
    slug: "executive-ocean-suite",
    name: "Executive Ocean Suite",
    image: "/images/room-beach.jpg",
    size: "110 m²",
    capacity: "2 Guests",
    price: 81000,
    description:
      "An elevated suite with a wraparound deck, soaking tub facing the horizon, and a dedicated concierge line.",
    amenities: ["Soaking tub", "Wraparound deck", "Concierge line", "Ocean view"],
  },
  {
    slug: "presidential-villa",
    name: "Presidential Villa",
    image: "/images/villas-tropical.jpg",
    size: "310 m²",
    capacity: "6 Guests",
    price: 179000,
    description:
      "The resort's signature residence: three bedrooms, a private infinity edge, and a personal culinary team on call.",
    amenities: ["Infinity pool", "Private chef", "Three bedrooms", "24h butler"],
  },
];

export type Amenity = {
  name: string;
  image: string;
  description: string;
};

export const amenities: Amenity[] = [
  {
    name: "Infinity Pool",
    image: "/images/pool-infinity.jpg",
    description: "A horizon-edge pool suspended above the bay, open from dawn until the last light.",
  },
  {
    name: "Private Beach",
    image: "/images/villas-beach.jpg",
    description: "Half a kilometre of secluded shoreline reserved exclusively for resort guests.",
  },
  {
    name: "Fine Dining Restaurant",
    image: "/images/restaurant-ocean.jpg",
    description: "Seasonal tasting menus served on a deck suspended over the water.",
  },
  {
    name: "Luxury Spa",
    image: "/images/beach-cabana.jpg",
    description: "Treatment pavilions set among the palms, drawing on island healing traditions.",
  },
  {
    name: "Fitness Pavilion",
    image: "/images/pool-loungers.jpg",
    description: "An open-air studio with ocean views, private trainers, and sunrise sessions.",
  },
  {
    name: "Conference Hall",
    image: "/images/restaurant-tropical.jpg",
    description: "A refined venue for retreats and gatherings, with full event curation.",
  },
  {
    name: "Island Hopping Tours",
    image: "/images/aerial-resort.jpg",
    description: "Private charters to hidden coves and reefs across the surrounding archipelago.",
  },
  {
    name: "Water Sports Centre",
    image: "/images/pool-infinity.jpg",
    description: "Kayaks, paddleboards, and diving excursions launched directly from the shore.",
  },
];

export type GalleryItem = {
  src: string;
  category: "Villas" | "Dining" | "Pool" | "Beach";
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  { src: "/images/aerial-resort.jpg", category: "Beach", caption: "The bay from above" },
  { src: "/images/villas-tropical.jpg", category: "Villas", caption: "Villas among the palms" },
  { src: "/images/pool-infinity.jpg", category: "Pool", caption: "The infinity edge at dusk" },
  { src: "/images/restaurant-ocean.jpg", category: "Dining", caption: "Dinner over the water" },
  { src: "/images/room-beach.jpg", category: "Villas", caption: "Waking to the tide" },
  { src: "/images/beach-cabana.jpg", category: "Beach", caption: "Private cabana, private shore" },
  { src: "/images/villas-beach.jpg", category: "Villas", caption: "Beachfront residences" },
  { src: "/images/pool-loungers.jpg", category: "Pool", caption: "Afternoon by the water" },
  { src: "/images/restaurant-tropical.jpg", category: "Dining", caption: "Garden-side dining" },
  { src: "/images/bedroom-ocean.jpg", category: "Villas", caption: "Ocean-view suite" },
  { src: "/images/bedroom-modern.jpg", category: "Villas", caption: "Suite interiors" },
];

export type Experience = {
  name: string;
  image: string;
  description: string;
  duration: string;
};

export const experiences: Experience[] = [
  {
    name: "Sunset Cruise",
    image: "/images/aerial-resort.jpg",
    description: "A private catamaran glides along the coastline as the sky turns to amber.",
    duration: "2.5 hours",
  },
  {
    name: "Scuba Diving",
    image: "/images/pool-infinity.jpg",
    description: "Guided descents into reef systems just minutes from the private beach.",
    duration: "Half day",
  },
  {
    name: "Island Hopping",
    image: "/images/villas-beach.jpg",
    description: "Chart a course between three uninhabited islets with a private skipper.",
    duration: "Full day",
  },
  {
    name: "Romantic Dinner Setup",
    image: "/images/restaurant-ocean.jpg",
    description: "A single table on the sand, lit by lanterns, set for two.",
    duration: "By request",
  },
  {
    name: "Corporate Retreats",
    image: "/images/restaurant-tropical.jpg",
    description: "Curated offsites pairing strategy sessions with island recovery.",
    duration: "2–5 days",
  },
  {
    name: "Weddings & Events",
    image: "/images/beach-cabana.jpg",
    description: "A dedicated planner shapes every detail, from arch to final toast.",
    duration: "Bespoke",
  },
];

export const testimonials = [
  {
    name: "Isabelle Marchand",
    origin: "Paris, France",
    rating: 5,
    quote:
      "Every detail felt considered, from the villa's morning light to the quiet way the staff seemed to anticipate what we needed before we asked.",
    hasVideo: true,
  },
  {
    name: "Julian Ackerman",
    origin: "London, UK",
    rating: 5,
    quote:
      "We have stayed at resorts across three continents. The private beach here, and the calm of the place, is genuinely rare.",
    hasVideo: false,
  },
  {
    name: "Mei Lin Tan",
    origin: "Singapore",
    rating: 5,
    quote:
      "The Presidential Villa exceeded what we imagined. Our children still talk about the sunset cruise on their last evening.",
    hasVideo: true,
  },
  {
    name: "Diego Fontanez",
    origin: "Madrid, Spain",
    rating: 5,
    quote:
      "A wedding on the sand, arranged from another continent, executed without a single flaw. We are still thanking the team.",
    hasVideo: false,
  },
];

export type MapZone = {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
};

export const mapZones: MapZone[] = [
  { id: "villas", name: "Beachfront Villas", x: 22, y: 62, description: "Twelve private villas set along the shoreline." },
  { id: "pool", name: "Infinity Pool", x: 46, y: 38, description: "The horizon pool, open sunrise to midnight." },
  { id: "restaurant", name: "Fine Dining Pavilion", x: 66, y: 30, description: "Seasonal tasting menus over the water." },
  { id: "spa", name: "Serenity Spa", x: 78, y: 55, description: "Six treatment pavilions among the palms." },
  { id: "beach", name: "Private Beach", x: 32, y: 82, description: "Half a kilometre of secluded shoreline." },
  { id: "activities", name: "Water Sports Centre", x: 58, y: 78, description: "Kayaks, diving, and paddleboards." },
];

export const conciergeScript: { role: "guest" | "concierge"; text: string }[] = [
  { role: "guest", text: "We're celebrating our anniversary in June. What would you recommend?" },
  {
    role: "concierge",
    text: "Congratulations. I'd suggest the Premium Beach Villa for its private plunge pool, paired with a Romantic Dinner Setup on your first evening — I can also arrange the Sunset Cruise for the following day.",
  },
  { role: "guest", text: "That sounds perfect. What's included with the villa?" },
  {
    role: "concierge",
    text: "The villa includes butler service, a private pool, and beachfront access. I can hold three nights from June 14th and send a full itinerary for your review — shall I proceed?",
  },
];
