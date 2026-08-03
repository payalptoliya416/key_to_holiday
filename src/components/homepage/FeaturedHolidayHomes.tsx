"use client";

import Image from "next/image";
import { Star, MapPin, Users, BedDouble, ArrowRight, MoveRight } from "lucide-react";
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

export default function FeaturedHolidayHomes() {
  const router = useRouter();

  return (
    <section className="section-space">
      {/* Heading */}
      <div className="container-custom">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="section-tag">Handpicked For You</p>

            <h2 className="section-title">Featured Holiday Homes</h2>
          </div>

          <Link href="/" className="section-link">
            <span>View all properties</span>
            <MoveRight size={18} />
            
<svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2126 2.84668L13.157 2.87402C12.8242 3.03539 12.498 3.23088 12.1794 3.46094L11.863 3.70312C11.4455 4.03539 10.9433 4.52735 10.3572 5.18164L10.3279 5.21484H9.59937L9.66577 5.07324C10.0509 4.2498 10.4559 3.59209 10.8796 3.10254H0.100342V2.21289H10.9011C10.6202 1.84999 10.4168 1.57316 10.2947 1.38184C10.1549 1.1628 9.94933 0.782946 9.68042 0.245117L9.60815 0.100586H10.3337L10.363 0.132812C10.9672 0.791524 11.4876 1.29024 11.9236 1.63184L12.2458 1.86914C12.5634 2.08982 12.8655 2.26143 13.1521 2.38477L13.2126 2.41113V2.84668Z" fill="#D4A017" stroke="#D4A017" stroke-width="0.2"/>
</svg>

          </Link>
        </div>
      </div>
      {/*
        Left-indent = container-custom na same breakpoints
        Right side viewport end sudhi bleed thay (overflow visible)
      */}
      <div className="overflow-hidden">
        <div className="pl-4 sm:pl-[max(1rem,calc((100vw-540px)/2))] md:pl-[max(1rem,calc((100vw-720px)/2))] lg:pl-[max(1rem,calc((100vw-960px)/2))] xl:pl-[max(0px,calc((100vw-1170px)/2))]">
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
                  className="group overflow-hidden rounded-[22px] border border-border-color bg-white cursor-pointer transition-all duration-300"
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
                      <Star size={14} className="ext-gray-dark" />

                      <span className="text-xs font-semibold">
                        {home.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-[17px] py-5">
                    <h3 className="text-base font-semibold text-gray-dark">
                      {home.title}
                    </h3>

                    <div className="mt-[10px] flex items-center gap-1 text-sm text-light-dark">
                      <MapPin size={13} />
                      {home.location}
                    </div>

                    <div className="mt-5 flex items-center gap-[10px] text-xs text-light-dark">
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
                        <span className="text-xl font-semibold text-gray-dark">
                          £{home.price}
                        </span>

                        <span className="mb-[2px] ml-1 text-xs text-light-dark">
                          / night
                        </span>
                      </div>

                      <Link
                        href="/"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full bg-gray-dark px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#C99700]"
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
  );
}
