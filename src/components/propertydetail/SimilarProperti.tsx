"use client";

import Image from "next/image";
import { Star, MapPin, Users, BedDouble } from "lucide-react";
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

export default function SimilarProperti() {
  const router = useRouter();

  return (
    <section className="section-bottom">
      <div className="container-custom">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="section-tag">Handpicked for you</p>

            <h2 className="section-title">Similar Properties</h2>
          </div>

          <Link href="/" className="section-link">
            <span>View all properties</span>
            <Image
              src="/images/right-errow.svg"
              alt="Right Arrow"
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
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
                  onClick={() => router.push(`/property-details`)}
                  className="group overflow-hidden rounded-[22px] border border-border-color bg-white cursor-pointer transition-all duration-300 "
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
                      <Star
                        size={14}
                        className="text-gray-dark"
                      />

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
                        href="/property-details"
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
