"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Star,
  MapPin,
  Users,
  BedDouble,
  Bath,
  Wifi,
  Car,
  Waves,
  Wind,
  Tv,
  ChefHat,
  Heart,
  Share2,
  ChevronRight,
  ShieldCheck,
  Umbrella,
  PawPrint,
  CalendarDays,
  ChevronDown,
  Grid2x2,
  Baby,
  Dog,
  Footprints,
  Mountain,
  Sofa,
  Zap,
  UtensilsCrossed,
  Plane,
  ShoppingBag,
  Landmark,
  Flag,
  CigaretteOff,
  PartyPopper,
  Clock3,
  ExternalLink,
} from "lucide-react";
import SimilarProperti from "./SimilarProperti";
import FaqSection from "./FaqSection";
import LightboxGallery from "./LightboxGallery";

/* ─── Static mock data ─────────────────────────────────────── */
const property = {
  title: "Villa Sol Paradise",
  location: "Marbella, Spain",
  rating: 4.97,
  reviews: 124,
  guests: 10,
  bedrooms: 5,
  bathrooms: 4,
  pricePerNight: 420,
  cleaningFee: 85,
  serviceFee: 120,
  description:
    "Nestled in the hills above Marbella, Villa Sol Paradise is a stunning Andalusian-style villa with breathtaking panoramic views of the Mediterranean Sea. This beautifully appointed villa combines traditional Spanish architecture with modern luxury, featuring a private infinity pool, lush tropical gardens, and spacious terraces perfect for al-fresco dining and entertaining.",
  images: [
    "/images/feature1.png",
    "/images/feature2.png",
    "/images/feature3.png",
    "/images/feature4.png",
    "/images/destinations-im1.jpg",
  ],
  amenities: [
    { icon: Wifi, label: "High-speed Wi-Fi" },
    { icon: Car, label: "Free parking" },
    { icon: Waves, label: "Private pool" },
    { icon: Wind, label: "Air conditioning" },
    { icon: Tv, label: "Smart TV" },
    { icon: ChefHat, label: "Fully equipped kitchen" },
    { icon: Bath, label: "4 bathrooms" },
    { icon: BedDouble, label: "5 bedrooms" },
  ],
  highlights: [
    "Entire villa – just for you",
    "Dedicated host – responds within 1 hour",
    "Free cancellation before 14 days",
    "Self check-in with smart lock",
  ],
  host: {
    name: "Carlos & Maria",
    since: "2019",
    avatar: "/images/test01.jpg",
    responseRate: "100%",
    responseTime: "Within an hour",
  },
};

/* ─── Date picker helper ───────────────────────────────────── */
function DateField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const formatted = value
    ? new Date(value).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.showPicker?.()}
      className="flex flex-col gap-2.25 px-3 md:px-5 py-3.25 text-left w-full relative"
    >
      <span className="text-xs font-semibold text-[#1A1A1A]">{label}</span>
      <span
        className={`flex items-center gap-2 text-xs sm:text-sm ${
          formatted ? "text-[#1A1A1A] font-medium" : "text-[#888888]"
        }`}
      >
        <CalendarDays size={13} className="shrink-0 text-[#888888]" />
        {formatted ?? "Add date"}
      </span>
      {/* Hidden native date input — invisible but functional */}
      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        tabIndex={-1}
      />
    </button>
  );
}

/* ─── Guest counter row ────────────────────────────────────── */
type GuestType = "adults" | "children" | "infants" | "pets";
interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}
const guestConfig: {
  key: GuestType;
  label: string;
  sub: string;
  icon: React.ReactNode;
  min: number;
}[] = [
  {
    key: "adults",
    label: "Adults",
    sub: "Age 13 or above",
    icon: <Users size={14} className="text-[#E8A020]" />,
    min: 1,
  },
  {
    key: "children",
    label: "Children",
    sub: "Ages 2 – 12",
    icon: <Baby size={14} className="text-[#E8A020]" />,
    min: 0,
  },
  {
    key: "infants",
    label: "Infants",
    sub: "Under 2",
    icon: <Baby size={14} className="text-[#E8A020]" />,
    min: 0,
  },
  {
    key: "pets",
    label: "Pets",
    sub: "Well behaved pets",
    icon: <Dog size={14} className="text-[#E8A020]" />,
    min: 0,
  },
];

const highlights = [
  {
    icon: Footprints,
    title: "Walking distance to beach",
    subtitle: "300m / 4 min walk",
  },
  {
    icon: Waves,
    title: "Private infinity pool",
    subtitle: "Heated April–October",
  },
  {
    icon: Mountain,
    title: "Mountain views",
    subtitle: "Panoramic vistas",
  },
  {
    icon: Baby,
    title: "Family friendly",
    subtitle: "Safe for all ages",
  },
  {
    icon: Sofa,
    title: "Luxury interiors",
    subtitle: "Designer furnished",
  },
  {
    icon: Zap,
    title: "High-speed WiFi",
    subtitle: "500Mbps fibre",
  },
];

const highlightsData = [
  {
    icon: Umbrella,
    title: "Playa del Cura",
    subtitle: "Beach · 300m · 4 min walk",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurante Sol",
    subtitle: "Restaurant · 500m · 6 min walk",
  },
  {
    icon: Plane,
    title: "Alicante Airport",
    subtitle: "Airport · 42km · 35 min drive",
  },
  {
    icon: ShoppingBag,
    title: "La Marina Shopping",
    subtitle: "Shopping · 2km · 5 min drive",
  },
  {
    icon: Landmark,
    title: "MARQ Museum",
    subtitle: "Museum · 44km · 38 min drive",
  },
  {
    icon: Flag,
    title: "La Zenia Golf",
    subtitle: "Golf Club · 8km · 12 min drive",
  },
];

const houseRules = [
  {
    icon: CigaretteOff,
    title: "No Smoking",
  },
  {
    icon: PartyPopper,
    title: "No Parties or Events",
  },
  {
    icon: Clock3,
    title: "Check-in after 3:00 PM",
  },
  {
    icon: Clock3,
    title: "Check-out before 11:00 AM",
  },
  {
    icon: Baby,
    title: "Children allowed",
  },
  {
    icon: PawPrint,
    title: "Pets allowed",
  },
];

const ratingBreakdown = [
  { label: "Cleanliness", value: 4.9 },
  { label: "Location", value: 5.0 },
  { label: "Value", value: 4.8 },
  { label: "Communication", value: 5.0 },
];

const reviews = [
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    date: "August 2024",
    avatar: "/images/review01.jpg",
    review:
      "An absolutely stunning villa. The pool was perfect and the views were breathtaking. We will definitely be coming back next year!",
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    date: "July 2024",
    avatar: "/images/review02.jpg",
    review:
      "Perfect location, beautiful interiors and the host was incredibly helpful. Everything was exactly as described. Highly recommend!",
  },
  {
    name: "Amelia Hassan",
    country: "UAE",
    date: "June 2024",
    avatar: "/images/review03.jpg",
    review:
      "Gorgeous villa with stunning views. The pool area is fantastic. Minor issue with WiFi speed but host sorted it quickly. Would return!",
  },
  {
    name: "James Thornton",
    country: "Australia",
    date: "May 2024",
    avatar: "/images/review04.jpg",
    review:
      "Best holiday villa we have ever stayed in. Clean, spacious, beautifully decorated and just minutes from the beach. A true gem.",
  },
];

function GuestDropdown({
  counts,
  onChange,
}: {
  counts: GuestCounts;
  onChange: (c: GuestCounts) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const totalGuests = counts.adults + counts.children;
  const label =
    totalGuests === 1
      ? "1 guest"
      : `${totalGuests} guests${counts.infants ? `, ${counts.infants} infant${counts.infants > 1 ? "s" : ""}` : ""}${counts.pets ? `, ${counts.pets} pet${counts.pets > 1 ? "s" : ""}` : ""}`;

  // Close on outside click
 useEffect(() => { 
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function adjust(key: GuestType, delta: number) {
    const cfg = guestConfig.find((c) => c.key === key)!;
    const next = Math.max(cfg.min, counts[key] + delta);
    onChange({ ...counts, [key]: next });
  }

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`flex w-full items-center justify-between gap-3 rounded-[160px] border px-5 py-[13px] text-left transition ${
          open ? "border-[#F2B62D]" : "border-[#E3E3E3]"
        }`}
      >
        <div className="flex flex-col gap-[8px]">
          <span className="text-xs font-semibold text-[#1A1A1A]">Guests</span>
          <span className="flex items-center gap-2 text-sm leading-0 text-[#888888]">
            <Users size={13} className="text-[#888888] shrink-0" />
            {label}
          </span>
        </div>
        <div
          className={`flex shrink-0 items-center justify-center rounded-full transition ${
            open ? "" : ""
          }`}
        >
          <ChevronDown
            size={16}
            className={`text-[#888888] transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-[20px] border border-[#E3E3E3] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden">
          {guestConfig.map((cfg, i) => (
            <div
              key={cfg.key}
              className={`flex items-center justify-between px-5 py-4 ${
                i < guestConfig.length - 1 ? "border-b border-[#F0F0F0]" : ""
              }`}
            >
              {/* Icon + label */}
              <div className="flex items-center gap-[11px]">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FDF3D9] shrink-0">
                  {cfg.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">
                    {cfg.label}
                  </p>
                  <p className="text-xs text-[#888888]">{cfg.sub}</p>
                </div>
              </div>

              {/* Counter */}
              <div className="flex items-center gap-[15px]">
                <button
                  onClick={() => adjust(cfg.key, -1)}
                  disabled={counts[cfg.key] <= cfg.min}
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#E3E3E3] text-base text-[#1A1A1A] transition hover:border-[#E8A020] disabled:opacity-30"
                >
                  −
                </button>
                <span className=" text-center text-base font-semibold text-[#1A1A1A]">
                  {counts[cfg.key]}
                </span>
                <button
                  onClick={() => adjust(cfg.key, 1)}
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#E3E3E3] text-base text-[#1A1A1A] transition hover:border-[#E8A020]"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Total + Done row */}
          <div className="flex items-center justify-between bg-[#FFF8EC] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#fff]">
                <Users size={18} className="text-[#E8A020]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">
                  Total Guest
                </p>
                <p className="text-xs text-[#AAAAAA]">{totalGuests} Guests</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="gold-gradient rounded-full px-5 py-2 text-xs font-semibold text-white cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


/* ─── Feature pills data ───────────────────────────────────── */
const featurePills: { Icon: React.ElementType; text: string }[] = [
  { Icon: Users, text: "8 Guests" },
  { Icon: BedDouble, text: "4 Bedrooms" },
  { Icon: Bath, text: "3 Bathrooms" },
  { Icon: Waves, text: "Private Pool" },
  { Icon: Wifi, text: "Free WiFi" },
  { Icon: Umbrella, text: "Beach 300m" },
  { Icon: Car, text: "Parking" },
  { Icon: PawPrint, text: "Pet Friendly" },
];

/* ─── Main component ───────────────────────────────────────── */
export default function PropertyDetails() {
  const [activeTab, setActiveTab] = useState("overview");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const nights = 7;
  const subtotal = property.pricePerNight * nights;
  const total = subtotal + property.cleaningFee + property.serviceFee;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "location", label: "Location" },
    { id: "reviews", label: "Reviews" },
  ];

  
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    overview: overviewRef,
    features: featuresRef,
    location: locationRef,
    reviews: reviewsRef,
  };

  useEffect(() => {
  const sections = [
    { id: "overview", ref: overviewRef },
    { id: "features", ref: featuresRef },
    { id: "location", ref: locationRef },
    { id: "reviews", ref: reviewsRef },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "-140px 0px -55% 0px", // header + sticky tabs offset
      threshold: 0.2,
    }
  );

  sections.forEach(({ ref }) => {
    if (ref.current) observer.observe(ref.current);
  });

  return () => observer.disconnect();
}, []);

  const scrollToSection = (id: keyof typeof sectionRefs) => {
  setActiveTab(id);

  sectionRefs[id].current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
    <main className="">
      {/* ── Breadcrumb ──────────────────────────────────── */}
      <div className="mx-[30px] pt-5">
        <nav className="flex items-center gap-1 text-sm text-[#6B7280]">
          <Link href="/" className="hover:text-[#E39A16] transition">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/destinations"
            className="hover:text-[#E39A16] transition"
          >
            Destinations
          </Link>
          <ChevronRight size={14} />
          <span className="cursor-pointer hover:text-[#E39A16] transition">
            Spain
          </span>
          <ChevronRight size={14} />
          <span className="font-medium text-[#0F172A]">{property.title}</span>
        </nav>
      </div>

      {/* ── Photo Gallery ───────────────────────────────── */}
      <div className="mx-[30px] mt-5">
        <div className="grid lg:gap-3 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="relative h-[260px] overflow-hidden rounded-[24px] sm:h-[380px] lg:h-[530px] mb-3 lg:mb-0">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div className="gap-3 lg:grid grid-rows-2">
            {[property.images[1], property.images[3]].map((img, i) => (
              <div
                key={i}
                className="relative h-[258px] overflow-hidden rounded-[24px] mb-3 lg:mb-0"
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="gap-3 lg:grid grid-rows-2">
            {[property.images[2], property.images[4]].map((img, i) => (
              <div
                key={i}
                className="relative h-[258px] overflow-hidden rounded-[24px] mb-3 lg:mb-0"
              >
                <Image
                
                  src={img}
                  alt=""
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
                {i === 0 && (
                  <div className="absolute right-4 top-4 flex gap-3">
                    <button className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#FFF7EA]">
                      <Heart size={16} />
                    </button>
                    <button className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#FFF7EA]">
                      <Share2 size={16} />
                    </button>
                  </div>
                )}
                {i === 1 && (
                  <button
                onClick={() => {
                  setInitialSlide(0);
                  setGalleryOpen(true);
                }}
                className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A1A1A] shadow-md transition hover:bg-[#FFF7EA] cursor-pointer"
              >
                <Grid2x2 size={14} />
                View All Photos ({property.images.length})
              </button>
                )}
              </div>
            ))}
            <LightboxGallery
              open={galleryOpen}
              images={property.images}
              initialSlide={initialSlide}
              onClose={() => setGalleryOpen(false)}
            />
          </div>
        </div>
      </div>

      {/* ── Content + Booking sidebar ──────────────────── */}
      <div className="container-custom py-[45px]">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_380px]">
          {/* ── LEFT ──────────────────────────────────── */}
          <div className="space-y-8">
            {/* Tabs */}
          <div className="sticky top-[80px] z-40 bg-white border-b border-[#E8E4DC]">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex w-max min-w-full gap-2 sm:gap-4 lg:gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id as keyof typeof sectionRefs)}
                    className={`shrink-0 whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium transition sm:text-base lg:py-5 lg:text-lg ${
                      activeTab === tab.id
                        ? "border-[#E39A16] gold-gradient-text"
                        : "border-transparent text-[#7C7C7C] hover:text-[#0F172A]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

            <div ref={overviewRef} id="overview" className="scroll-mt-[170px]">
                <div className="flex flex-col gap-[15px] lg:flex-row lg:items-start lg:justify-between mt-[30px]">
                  <h1 className="text-[28px] font-bold text-[#1A1A1A] md:text-[36px]">
                    Villa Sol Paradise
                  </h1>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#F5A623] text-[#F5A623]"
                        />
                      ))}
                      <span className="mx-2 text-base font-bold">4.9</span>
                      <span className="text-sm text-[#888888] underline">
                        120 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[#888888]">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    Costa Blanca, Spain
                  </div>
                  <span className="flex items-center gap-[6px] rounded-full bg-[#2ECC71] px-[10px] py-[6px] text-sm text-white">
                    <ShieldCheck size={16} />
                    Verified Property
                  </span>
                  <span>Property ID: KTH-29471</span>
                </div>

                <div className="flex flex-wrap gap-[10px] mt-5">
                  {featurePills.map(({ Icon, text }, i) => (
                    <div
                      key={i}
                      className="flex h-[35px] items-center gap-[10px] rounded-full bg-[#F5F5F5] px-3 text-sm font-normal text-[#1A1A1A]"
                    >
                      <Icon size={14} className="text-[#E8A020]" />
                      {text}
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#EBEBEB] my-[35px]" />

                <div>
                  <h2 className="mb-5 text-lg font-semibold text-[#1A1A1A]">
                    About Villa Sol Paradise
                  </h2>
                  <div className="space-y-[15px] text-sm leading-[24px] text-[#888888]">
                    <p>
                      Nestled along the sun-kissed shores of Costa Blanca, Villa
                      Sol Paradise is a masterpiece of Mediterranean luxury.
                      With its sweeping sea views, lush tropical gardens, and a
                      private infinity pool overlooking the sparkling waters,
                      this exceptional villa offers an unrivalled holiday
                      experience for families and groups seeking the finest.
                    </p>
                    <p>
                      The four spacious bedrooms are elegantly furnished with
                      premium linens and feature private en-suite bathrooms, air
                      conditioning, and direct garden access. The open-plan
                      living space flows seamlessly to the outdoor entertaining
                      terrace, where al fresco dining under the stars becomes an
                      every-night occasion.
                    </p>
                    <p>
                      Just a 4-minute stroll from Playa del Cura beach and
                      minutes from charming local restaurants and boutiques,
                      Villa Sol Paradise places you at the heart of the best
                      Costa Blanca has to offer — while keeping you wrapped in
                      the ultimate private luxury.
                    </p>
                  </div>
                </div>
              
            </div>
              <div className="border-t border-[#EBEBEB] my-[35px]" />

           <div ref={featuresRef} id="features" className="scroll-mt-[170px]">
              <div className="text-sm text-[#888888]">
                {/* ---start---- */}
                <h2 className="mb-5 text-lg font-semibold text-[#1A1A1A]">
                  Property Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px]">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-[10px] rounded-[14px] border border-[#EBEBEB] p-5 transition-all duration-300 hover:shadow-lg hover:border-[#D69A17] hover:-translate-y-1"
                      >
                        {/* Icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDF3E0]">
                          <Icon size={18} className="text-[#E39A16]" />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-sm font-semibold text-[#1A1A1A]">
                            {item.title}
                          </h3>

                          <p className="mt-[10px] text-xs text-[#888888]">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* ---end---- */}
              </div>
           </div>
           <div ref={locationRef} id="location" className="scroll-mt-[170px]">
              <div className="text-sm text-[#888888]">
                {/* ------start---- */}
                <h2 className="mb-5 text-lg font-semibold text-[#1A1A1A]">
                  Property Location
                </h2>
                <p className="text-[#888888] text-sm leading-0">
                  Costa Blanca, Orihuela Costa, Spain
                </p>

               <div className="relative my-5 overflow-hidden rounded-[24px]">
                  <iframe
                    title="Property Location"
                    src="https://www.google.com/maps?q=Costa+Blanca,+Orihuela+Costa,+Spain&z=15&output=embed"
                    width="100%"
                    height="360"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0"
                  />

                  {/* Open Maps Button */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Costa+Blanca,+Orihuela+Costa,+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-white px-[15px] py-[10px] font-semibold text-[#17213C] transition text-sm h-[34px]"
                  >
                    <ExternalLink size={14} />
                    Open in Maps
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px]">
                  {highlightsData.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-[10px] rounded-[14px] border border-[#EBEBEB] p-5 transition-all duration-300 hover:shadow-lg"
                      >
                        {/* Icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDF3E0]">
                          <Icon size={18} className="text-[#E39A16]" />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-sm font-semibold text-[#1A1A1A]">
                            {item.title}
                          </h3>

                          <p className="mt-[10px] text-xs text-[#888888]">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* ---------end--- */}

                {/* ----start---- */}
                <h2 className="mb-5 text-lg font-semibold text-[#1A1A1A] mt-5">
                  {" "}
                  House Rules{" "}
                </h2>

                <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
                  {houseRules.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-[10px] rounded-[16px] border border-[#EBEBEB] p-[15px] transition duration-300 hover:shadow-md"
                      >
                        {/* Icon */}
                        <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#F0F0F0]">
                          <Icon size={16} className="text-[#1A1A1A]" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xs font-medium text-[#1A1A1A]">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
                {/* -----end--- */}
              </div>
          </div>
          <div className="border-t border-[#EBEBEB] my-[35px]" />
           <div ref={reviewsRef} id="reviews" className="scroll-mt-[170px]">
              <div className="text-sm text-[#888888]">
                {/* ---start-- */}
                <div className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
                  <div>
                    <h2 className="text-lg leading-[18px] font-semibold text-[#1A1A1A]">
                      Guest Reviews
                    </h2>

                    <div className="mt-[10px] flex items-center gap-3">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#F5A623] text-[#F5A623]"
                          />
                        ))}
                      </div>

                      <span className="text-sm font-semibold text-[#1A1A1A]">
                        4.9
                      </span>

                      <span className="text-[#888888] text-xs">
                        · 120 reviews
                      </span>
                    </div>
                  </div>

                  {/* Rating Bars */}
                  <div className="w-full max-w-[380px] space-y-4">
                    {ratingBreakdown.map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <span className="w-[120px] text-[#888888] text-sm leading-[14px]">
                          {item.label}
                        </span>

                        <div className="h-[8px] flex-1 rounded-full bg-[#F3F3F3]">
                          <div
                            className="h-full rounded-full bg-[#E8A020]"
                            style={{
                              width: `${(item.value / 5) * 100}%`,
                            }}
                          />
                        </div>

                        <span className="w-8 text-right font-medium text-xs text-[#888888]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-[20px] md:grid-cols-2">
                  {reviews.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-full flex-col rounded-[18px] border border-[#E8E4DC] bg-white p-[25px] transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Stars */}
                      <div className="mb-[16px] flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="#F97316"
                            className="text-[#F5A623]"
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="flex-1 text-xs !leading-[20px] text-[#1A1A1A]">
                        "{item.review}"
                      </p>

                      <div className="mt-5 mb-[9px] border-t border-[#E8E4DC]" />

                      {/* User */}
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-[#1A1A1A]">
                            {item.name}
                          </h4>

                          <p className="text-xs text-[#888888]">
                            {item.country} · {item.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Show all button */}
                <button className="rounded-[24px] border border-[#EBEBEB] px-[18px] py-[15px] text-sm leading-[14px] font-semibold transition hover:bg-[#F8F8F8] cursor-pointer mt-[25px]">
                  Show all 120 reviews
                </button>
                {/* Review Cards */}
              </div>
            </div>
          </div>

          {/* ── RIGHT – Booking card ───────────────────── */}
          <div className="lg:sticky lg:top-[110px] h-fit">
            <div className="space-y-4 rounded-[16px] border border-[#EBEBEB] bg-[#F8F6F2] px-5 py-[30px]">
              {/* Price */}
              <div className="mb-[10px] flex items-end gap-1">
                <span className="text-[28px] font-bold leading-none text-[#1A1A1A]">
                  £{property.pricePerNight}
                </span>
                <span className="mb-[2px] text-sm text-[#888888]">
                  per night
                </span>
              </div>

              {/* Date fields — pill with divider */}
              <div className="grid grid-cols-2 overflow-hidden rounded-[160px] border border-[#E3E3E3] divide-x divide-[#E3E3E3]">
                <DateField
                  label="Check In"
                  value={checkIn}
                  onChange={setCheckIn}
                />
                <DateField
                  label="Check Out"
                  value={checkOut}
                  onChange={setCheckOut}
                />
              </div>

              {/* Guests dropdown */}
              <GuestDropdown counts={guestCounts} onChange={setGuestCounts} />

              {/* Price breakdown */}
              <div className="space-y-[12px] text-sm text-[#1A1A1A]">
                <div className="flex justify-between">
                  <span>
                    £{property.pricePerNight} × {nights} nights
                  </span>
                  <span>£{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>£{property.cleaningFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>£{property.serviceFee}</span>
                </div>
                <div className="flex justify-between text-base  pt-3 font-medium text-[#1A1A1A]">
                  <span>Total</span>
                  <span>£{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Book Now */}
              <button className="gold-gradient w-full rounded-full py-[14px] text-sm font-semibold text-white transition hover:opacity-90 mt-4 cursor-pointer">
                Book Now
              </button>

              <button className="w-full rounded-full border border-[#DBDBDB] py-[14px] text-sm font-semibold text-[#1A1A1A] transition hover:border-[#E8A020] hover:text-[#E8A020] cursor-pointer">
                Contact Host
              </button>

              {/* Trust */}
              <div className="flex items-center justify-center gap-2 text-xs text-[#888888]">
                <ShieldCheck size={13} className="text-[#2ECC71]" />
                No hidden fees · Secure payment
              </div>
            </div>
          </div>
        </div>

      </div>
         {/* ---FAQ start--- */}
         <section className="section-space">
             <FaqSection />
         </section>
             {/* ---FAQ end--- */}

             {/* ----SimilarProperti--start */}
             <SimilarProperti/>
             {/* ----SimilarProperti--end */}
    </main>
  );
}
