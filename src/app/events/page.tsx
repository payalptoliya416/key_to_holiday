"use client";

import Image from "next/image";
import {
  Star,
  MapPin,
  Users,
  BedDouble,
  ArrowRight,
  Search,
  Sunset,
  Waves,
  Landmark,
  Utensils,
  ShieldCheck,
  BadgeDollarSign,
  Headphones,
  MessageCircle,
  BadgeCheck,
  Lock,
  LockKeyhole,
  CalendarDays,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { LucideIcon } from "lucide-react";
import BookingSearch from "@/components/Booking/BookingSearch";

const homes = [
  {
    id: 1,
    title: "Villa Sol Dorrado",
    location: "Marbella, Spain",
    guests: 8,
    bedrooms: 4,
    reviews: 124,
    rating: 4.97,
    price: 420,
    image: "/images/feature1.png",
    slug: "villa-sol-dorrado",
  },
  {
    id: 2,
    title: "Aegean Dream Villa",
    location: "Santorini, Greece",
    guests: 6,
    bedrooms: 3,
    reviews: 89,
    rating: 4.95,
    price: 580,
    image: "/images/feature2.png",
    slug: "aegean-dream-villa",
  },
  {
    id: 3,
    title: "Quinta da Serra",
    location: "Algarve, Portugal",
    guests: 10,
    bedrooms: 5,
    reviews: 176,
    rating: 4.96,
    price: 390,
    image: "/images/feature3.png",
    slug: "quinta-da-serra",
  },
  {
    id: 4,
    title: "The Coastal Retreat",
    location: "Paphos, Cyprus",
    guests: 6,
    bedrooms: 3,
    reviews: 102,
    rating: 4.88,
    price: 310,
    image: "/images/feature4.png",
    slug: "the-coastal-retreat",
  },
  {
    id: 5,
    title: "Villa Sol Dorrado",
    location: "Marbella, Spain",
    guests: 8,
    bedrooms: 4,
    reviews: 124,
    rating: 4.97,
    price: 420,
    image: "/images/feature1.png",
    slug: "villa-sol-dorrado",
  },
  {
    id: 6,
    title: "Aegean Dream Villa",
    location: "Santorini, Greece",
    guests: 6,
    bedrooms: 3,
    reviews: 89,
    rating: 4.95,
    price: 580,
    image: "/images/feature2.png",
    slug: "aegean-dream-villa",
  },
  {
    id: 7,
    title: "Quinta da Serra",
    location: "Algarve, Portugal",
    guests: 10,
    bedrooms: 5,
    reviews: 176,
    rating: 4.96,
    price: 390,
    image: "/images/feature3.png",
    slug: "quinta-da-serra",
  },
  {
    id: 8,
    title: "The Coastal Retreat",
    location: "Paphos, Cyprus",
    guests: 6,
    bedrooms: 3,
    reviews: 102,
    rating: 4.88,
    price: 310,
    image: "/images/feature4.png",
    slug: "the-coastal-retreat",
  },
];

export const homesDetails = [
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

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: MapPin,
    title: "Stay Close To The Venue",
    description: "Handpicked properties, walking or short drive away.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Direct Prices",
    description: "Book directly from property owners and save on booking fees.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Marketplace",
    description:
      "Every property is personally verified for quality and accuracy.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Booking",
    description:
      "Your payment is protected with bank-level encryption technology.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Stay Options",
    description:
      "Choose your own check-in/check-out dates around event schedules.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist.",
  },
];

function Events() {
  const router = useRouter();
  return (
    <>
      <div className="px-4 md:px-[30px]">
        <div className="relative min-h-[623px] w-full flex flex-col justify-between p-4 md:p-8 text-white rounded-[22px]">
          <div className="absolute inset-0 -z-10 bg-[url('/images/destination-banner.png')] bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172ABF] via-[#0F172A8C] to-[#0F172ABF]" />
          <div className="flex flex-col items-center mx-auto my-auto">
            <div className="inline-flex items-center gap-2 backdrop-blur-md text-sm text-[#FFFFFFE5] border border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-[999px] py-[10px] px-[15px] mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              Event Travel
            </div>
            <h1 className="text-4xl md:text-[64px] font-bold tracking-tight mb-5 font-tiktok text-center w-full max-w-[800px]">
              Stay Close To The{" "}
              <span className="gold-gradient-text">
                Country’s Biggest Events
              </span>
            </h1>

            <p className="text-[#FFFFFFCC] text-sm md:text-lg max-w-[820px] font-normal mb-[35px] text-center">
              Find premium holiday homes near concerts, festivals, sporting
              events and cultural celebrations. Book direct and enjoy the
              experience without paying extra booking fees.
            </p>
             <BookingSearch/>
          </div>
        </div>
      </div>

      <section className="section-space">
        {/* Heading */}
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="section-tag">Coming Soon</p>

              <h2 className="section-title">Featured Events</h2>
            </div>

            <Link href="/" className="section-link">
              <span>View all event</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        {/*
        Left-indent = container-custom na same breakpoints
        Right side viewport end sudhi bleed thay (overflow visible)
      */}
         <div className="overflow-hidden">
               <div
                 className="pl-4 sm:pl-[max(1rem,calc((100vw-540px)/2))] md:pl-[max(1rem,calc((100vw-720px)/2))] lg:pl-[max(1rem,calc((100vw-960px)/2))] xl:pl-[max(0px,calc((100vw-1170px)/2))]"
               >
             <Swiper
               modules={[Navigation]}
               slidesPerView="auto"
               spaceBetween={20}
               grabCursor
               watchOverflow
               centeredSlides={false}
               className="featuredHomesSlider !overflow-visible"
             >
               {homes.map((home) => (
                 <SwiperSlide key={home.id} className="!w-[305px]">
                   <div
                     onClick={() => router.push(`/`)}
                     className="group overflow-hidden rounded-[22px] border border-[#E8E4DC] bg-white cursor-pointer transition-all duration-300"
                   >
                     {/* Image */}
                     <div className="relative overflow-hidden">
                       <div className="relative h-[224px] w-full overflow-hidden rounded-t-[22px]">
                         <Image
                           src={home.image}
                           alt={home.title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-105"
                         />
                       </div>
       
                       <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white px-3 py-[6px] shadow-lg">
                         <Star size={14} className="ext-[#0F172A]" />
       
                         <span className="text-xs font-semibold">{home.rating}</span>
                       </div>
                     </div>
       
                     {/* Content */}
                     <div className="px-[17px] py-5">
                       <h3 className="text-base font-semibold text-[#0F172A]">
                         {home.title}
                       </h3>
       
                       <div className="mt-[10px] flex items-center gap-1 text-sm text-[#6B7280]">
                         <MapPin size={13} />
                         {home.location}
                       </div>
       
                       <div className="mt-5 flex items-center gap-[10px] text-xs text-[#6B7280]">
                         <div className="flex items-center gap-1">
                           <Users size={12} />
                           {home.guests} guests
                         </div>
       
                         <div className="flex items-center gap-1">
                           <BedDouble size={12} />
                           {home.bedrooms} bedrooms
                         </div>
       
                         <div className="flex items-center gap-1">
                           <Star size={12} />
                           {home.reviews} reviews
                         </div>
                       </div>
       
                       <div className="mt-5 flex items-center justify-between">
                         <div className="flex items-end">
                           <span className="text-xl font-semibold text-[#0F172A]">
                             £{home.price}
                           </span>
       
                           <span className="mb-[2px] ml-1 text-xs text-[#6B7280]">
                             / night
                           </span>
                         </div>
       
                         <Link
                            href="/"
                            onClick={(e) => e.stopPropagation()}

                           className="rounded-full bg-[#0F172A] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#C99700]"
                         >
                           View Details
                         </Link>
                       </div>
                     </div>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
               </div>
             </div>
      </section>

      <section className="py-12 lg:py-[90px] bg-[#F8F6F2]">
        <div className="container-custom">
          <div className="grid items-center gap-[30px] lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative overflow-hidden rounded-[24px] h-[415px]">
              <Image
                src="/images/spotlight.png"
                alt="Santorini"
                width={700}
                height={415}
                className="h-full w-full object-cover"
              />

              <span className="absolute left-4 top-4 rounded-full bg-[#E8A020] px-5 py-[10px] text-sm !leading-[14px] font-semibold text-white">
                Featured
              </span>
            </div>

            {/* Right Content */}
            <div>
              <p className="section-tag">Spotlight</p>

              <h2 className="section-title">Tomorrowland Belgium</h2>

              <div className="mt-[30px] grid grid-cols-3 gap-8">
                <div>
                  <p className="text-xs text-[#888888]">Location</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-[#1A1A1A]">
                    Boom, Belgium
                  </h5>
                </div>

                <div>
                  <p className="text-xs text-[#888888]">Dates</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-[#1A1A1A]">
                    Aug 14-16, 2025
                  </h5>
                </div>
              </div>

              <p className="text-[#888888] mt-5 text-base">
                Experience the world's most iconic electronic dance music
                festival. Tomorrowland brings together 400,000+ attendees from
                across the globe for an unforgettable weekend of music, art, and
                celebration. Stay in nearby luxury villas and enjoy direct
                access to the festival grounds.
              </p>

              {/* Stats */}

              <div className="mt-[30px] grid grid-cols-3 gap-2 md:gap-8">
                <div>
                  <p className="text-xs text-[#888888]">Property Price</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-[#1A1A1A]">
                    £240
                  </h5>
                </div>

                <div>
                  <p className="text-xs text-[#888888]">Nearby Holiday Homes</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-[#1A1A1A]">
                    124 properties
                  </h5>
                </div>

                <div>
                  <p className="text-xs text-[#888888]">Distance from Venue</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-[#1A1A1A]">
                    3-8 km average
                  </h5>
                </div>
              </div>

              {/* Button */}

              <Link href="/" className="mt-[30px] common-btn">
                Explore Nearby Stays
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="section-tag">Handpicked For You</p>

              <h2 className="section-title">Featured Holiday Homes</h2>
            </div>

            <Link href="/" className="section-link">
              <span>View all properties</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {homesDetails.map((home) => (
              <div
                key={home.id}
                onClick={() => router.push(`/`)}
                className="group cursor-pointer overflow-hidden rounded-[22px] border border-[#E8E4DC] bg-white transition-all duration-300 hover:-translate-y-2"
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
                        router.push(`/`);
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

      <section className="section-bottom">
        <div className="container-custom">
          {/* Heading */}
          <div className="mb-[30px] text-center">
            <p className="section-tag">Why Choose Us</p>

            <h2 className="section-title">
              Why Book Event Stays With KeyToHolidays?
            </h2>
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
    </>
  );
}

export default Events;
