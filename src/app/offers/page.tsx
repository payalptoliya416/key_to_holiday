"use client";

import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  BedDouble,
  Headphones,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Users,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { LucideIcon } from "lucide-react";

const categories = [
  "Last Minute Deals",
  "Early Bird Offers",
  "Summer Deals",
  "Family Offers",
  "Luxury Villas",
  "Beachfront Villas",
  "Pet Friendly",
  "Long Stay Discounts",
];
export const homes = [
  {
    id: 1,
    slug: "villa-sol-dorrado",
    title: "Villa Sol Dorrado",
    location: "Marbella, Spain",
    image: "/images/feature1.png",
    rating: 4.97,
    guests: 8,
    bedrooms: 4,
    reviews: 124,
    price: 420,
  },
  {
    id: 2,
    slug: "aegean-dream-villa",
    title: "Aegean Dream Villa",
    location: "Santorini, Greece",
    image: "/images/feature2.png",
    rating: 4.95,
    guests: 6,
    bedrooms: 3,
    reviews: 89,
    price: 580,
  },
  {
    id: 3,
    slug: "quinta-da-serra",
    title: "Quinta da Serra",
    location: "Algarve, Portugal",
    image: "/images/feature3.png",
    rating: 4.92,
    guests: 10,
    bedrooms: 5,
    reviews: 68,
    price: 390,
  },
  {
    id: 4,
    slug: "the-coastal-retreat",
    title: "The Coastal Retreat",
    location: "Paphos, Cyprus",
    image: "/images/feature4.png",
    rating: 4.88,
    guests: 6,
    bedrooms: 3,
    reviews: 102,
    price: 310,
  },
  {
    id: 5,
    slug: "tuscany-stone-farmhouse",
    title: "Tuscany Stone Farmhouse",
    location: "Tuscany, Italy",
    image: "/images/feat-1.jpg",
    rating: 4.93,
    guests: 12,
    bedrooms: 6,
    reviews: 156,
    price: 680,
  },
  {
    id: 6,
    slug: "cotswold-manor-house",
    title: "Cotswold Manor House",
    location: "Cotswolds, UK",
    image: "/images/feat-2.jpg",
    rating: 4.9,
    guests: 14,
    bedrooms: 7,
    reviews: 78,
    price: 750,
  },
];

export const lastMinuteDeals = [
  {
    id: 1,
    title: "The Coastal Retreat",
    location: "Paphos, Cyprus",
    image: "/images/minute-1.png",
    discount: "Save up to 35%",
    description:
      "Stunning hilltop villa with panoramic sea views, private heated pool and outdoor kitchen. Perfect for groups seeking luxury in paradise.",
    guests: 6,
    bedrooms: 3,
    reviews: 4.9,
    price: 780,
  },
  {
    id: 2,
    title: "Dubrovnik Pearl",
    location: "Dubrovnik, Croatia",
    image: "/images/minute-2.png",
    discount: "Save up to 30%",
    description:
      "Exclusive villa perched above the historic old town with breathtaking Adriatic views, infinity pool and private terrace.",
    guests: 8,
    bedrooms: 4,
    reviews: 4.8,
    price: 693,
  },
  {
    id: 3,
    title: "Cretan Sanctuary",
    location: "Paphos, Cyprus",
    image: "/images/minute-3.png",
    discount: "Save up to 25%",
    description:
      "Serene hilltop retreat surrounded by olive groves with private pool, modern interiors and sweeping sea views.",
    guests: 6,
    bedrooms: 3,
    reviews: 4.7,
    price: 562,
  },
];

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every property is personally verified by our team for quality and accuracy.",
  },
  {
    icon: BadgeDollarSign,
    title: "No Hidden Fees",
    description: "What you see is what you pay. Transparent pricing, always.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Bank-level encryption keeps your payment information safe.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our team is always available to help you before, during and after your stay.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Talk directly to property owners for a personal experience.",
  },
  {
    icon: BadgeCheck,
    title: "Best Prices",
    description:
      "Book direct and always get the best available rate for every property.",
  },
];

export default function OffersPage() {
  const router = useRouter();
  return (
    <>
      <section className="bg-white">
        <div className="container-custom">
          <div className="mb-[25px] flex items-center gap-2 text-sm text-[#64748B]">
            <Link href="/" className="hover:text-[#D69A17]">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#D4A017]">Offers</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center rounded-full border !leading-none border-[#D4A017] bg-[#FFF8E7] px-[15px] py-2 text-sm font-semibold text-[#D4A017]">
                ● EXCLUSIVE SAVINGS
              </span>

              <h1 className="mt-[15px] text-4xl font-bold leading-tight text-[#17213C] md:text-5xl xl:text-[56px]">
                Best Holiday Deals &{" "}
                <span className="gold-gradient-text">Exclusive Offers</span>
              </h1>

              <p className="mt-[15px] text-base text-[#64748B]">
                Save more on your next holiday with handpicked villas,
                beachfront homes and luxury escapes. Discover limited-time
                deals, last-minute offers and seasonal discounts when you book
                directly with property owners.
              </p>

              <div className="mt-[15px] flex items-center gap-3">
                <div className="text-[#FFC107] flex gap-2">
                  <Star fill="#FFC107" size={14} />
                  <Star fill="#FFC107" size={14} />
                  <Star fill="#FFC107" size={14} />
                  <Star fill="#FFC107" size={14} />
                  <Star fill="#FFC107" size={14} />
                </div>
                <span className="font-semibold text-[#0F172A] text-sm">
                  Rated Excellent
                </span>
              </div>

              <div className="mt-[25px] flex flex-wrap gap-6">
                {[
                  "Verified Properties",
                  "Best Price Guarantee",
                  "Book Direct",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full gold-gradient text-xs text-white">
                      <Image
                        src="/images/checkmark-right.svg"
                        alt="check"
                        width={10}
                        height={10}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-[#0F172A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:col-span-6 lg:justify-end">
              <Image
                src="/images/offer-right.png"
                alt="Offer"
                width={585}
                height={443}
                priority
                className="h-auto w-full max-w-[585px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-[60px] pb-[21px] border-t border-[#E8E8E8]"></div>
        <div className="container-custom">
          <div className="overflow-x-auto scrollbar-thin">
            <div className="flex w-max gap-4 pb-2">
              {categories.map((item, index) => (
                <button
                  key={item}
                  className={`h-[42px] rounded-full border px-[18px] py-[15px] text-xs !leading-none font-medium transition-all cursor-pointer ${
                    index === 1
                      ? "border-[#D69A17] bg-[#D69A17] text-white"
                      : "border-[#E8E8E8] bg-white hover:border-[#D69A17] hover:text-[#D69A17]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 border-t border-[#E8E8E8]"></div>
      </section>

      <section className="section-space">
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="section-tag">Handpicked For You</p>

              <h2 className="section-title">Featured Holiday Homes</h2>
            </div>

            <Link href="/holiday-homes" className="section-link">
              <span>View all properties</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {homes.map((home) => (
              <div
                key={home.id}
                onClick={() => router.push(`/holiday-homes/${home.slug}`)}
                className="group cursor-pointer overflow-hidden rounded-[22px] border border-[#E8E4DC] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-[230px] overflow-hidden rounded-t-[22px]">
                  <Image
                    src={home.image}
                    alt={home.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-md">
                    <Star size={13} className="text-[#0F172A]" />
                    <span className="text-xs font-semibold">{home.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-[23px]">
                  <h3 className="text-lg] font-semibold text-[#0F172A]">
                    {home.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1 text-base text-[#6B7280]">
                    <MapPin size={14} />
                    <span>{home.location}</span>
                  </div>

                  <div className="mt-[23px] flex flex-wrap items-center gap-3 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-1">
                      <Users size={13} />
                      {home.guests} guests
                    </div>

                    <div className="flex items-center gap-1">
                      <BedDouble size={13} />
                      {home.bedrooms} bedrooms
                    </div>

                    <div className="flex items-center gap-1">
                      <Star size={13} />
                      {home.reviews} reviews
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-end gap-1">
                      <span className="text-[24px] font-bold text-[#0F172A]">
                        £{home.price}
                      </span>

                      <span className="mb-1 text-sm text-[#6B7280]">
                        / night
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/holiday-homes/${home.slug}`);
                      }}
                      className="rounded-full bg-[#0F172A] px-[24px] py-[9px] text-xs font-semibold text-white transition-all hover:bg-[#C99700]"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] py-[90px]">
        <div className="container-custom">
          <div className="mb-[30px] text-center">
            <p className="section-tag">
              LIMITED AVAILABILITY
            </p>

            <h2 className="section-title !text-white">
              Last Minute Deals
            </h2>

            <p className="mt-[10px] text-[#FFFFFFB2] text-base !leading-[16px]">
              Book your perfect escape before it's gone.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {lastMinuteDeals.map((item) => (
              <div
                key={item.id}
                className="group rounded-[16px] border border-white/20 bg-[#1B2438] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A017] hover:shadow-2xl"
              >

                <div className="relative h-[230px] overflow-hidden rounded-[16px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-[10px] top-[10px] rounded-full bg-white px-[15px] py-2 text-sm font-medium text-[#111827] !leading-none h-[31px]">
                    {item.discount}
                  </div>
                </div>

                {/* Content */}

                <div className="mt-5">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1 text-base text-[#ADB3BD]">
                    <MapPin size={14} />
                    {item.location}
                  </div>

                  <p className="mt-[15px] text-sm text-[#808794]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#ADB3BD]">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {item.guests} guests
                    </div>

                    <div className="flex items-center gap-1">
                      <BedDouble size={14} />
                      {item.bedrooms} bedrooms
                    </div>

                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      {item.reviews} reviews
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-semibold text-white">
                        £{item.price}
                      </span>

                      <span className="mb-1 text-sm text-[#808794]">
                        / night
                      </span>
                    </div>

                    <button className="rounded-full gold-gradient px-[24px] py-[9px] text-sm font-semibold text-white transition hover:bg-[#bf8f12]">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-custom">
          {/* Heading */}
          <div className="mb-[30px] text-center">
            <p className="section-tag">The Smart Way to Book</p>

            <h2 className="section-title">Why Book With Us?</h2>
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-[15px] rounded-[18px] border border-[#EBEBEB] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D69A17] hover:shadow-lg"
                >
                  {/* Icon */}

                  <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[18px] bg-[#FDF3E0] transition-all duration-300 group-hover:bg-[#D69A17]">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-[#E8A020] transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Content */}

                  <div>
                    <h3 className="text-base font-semibold leading-none text-[#1A1A1A]">
                      {item.title}
                    </h3>

                    <p className="mt-[10px] text-sm text-[#888888]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-bottom">
        <div className="container-custom">
          <div
            className="relative overflow-hidden rounded-[32px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/iconme-01.png')",
            }}
          >
            {/* Left Gradient Overlay */}
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(19,26,46,.92) 0%, rgba(19,26,46,.75) 35%, rgba(19,26,46,.30) 60%, rgba(19,26,46,0) 100%)",
              }}
            />

            <div className="relative z-10 flex min-h-[441px] items-center px-6 py-12 sm:px-10 lg:px-16">
              <div className="max-w-[500px]">
                <p className="section-tag">
                  THE SMART WAY TO BOOK
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-[44px]">
                  Save More When
                  <br />
                  You Book Direct
                </h2>

              <div className="mt-5 space-y-3 md:space-y-4">
                    {[
                      "No hidden booking fees.",
                      "Best prices guaranteed.",
                      "Direct communication with property owners.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-base text-white"
                      >
                        <div className="mt-1 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#D4A017] text-xs">
                          ✓
                        </div>

                        <span className="leading-7">{item}</span>
                      </div>
                    ))}
                  </div>

                <Link href="/" className="mt-[25px] rounded-full gold-gradient px-[25px] py-4 text-base  font-semibold text-white transition hover:bg-[#C48708] inline-block">
                  Explore Offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
