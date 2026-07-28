"use client";

import Image from "next/image";
import { Star, MapPin, Users, BedDouble, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
];

export default function FeaturedHolidayHomes() {
  const router = useRouter();

  return (
    <section className="py-20">
      {/* Heading */}
      <div className="container-custom">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="section-tag">Handpicked For You</p>

            <h2 className="section-title">Featured Holiday Homes</h2>
          </div>

          <Link href="/holiday-homes" className="section-link">
            <span>Explore all destinations</span>
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
              onClick={() => router.push(`/holiday-homes/${home.slug}`)}
              className="group overflow-hidden rounded-[22px] border border-[#E8E4DC] bg-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
                  <Star size={14} className="fill-[#0F172A] text-[#0F172A]" />

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

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/holiday-homes/${home.slug}`);
                    }}
                    className="rounded-full bg-[#0F172A] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#C99700]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </div>
    </section>
  );
}
