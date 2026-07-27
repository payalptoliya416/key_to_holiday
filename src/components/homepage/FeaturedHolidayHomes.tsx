"use client";

import Image from "next/image";
import { Star, MapPin, Users, BedDouble, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      <div className="container-custom">
        <div className="mb-[30px] flex items-end justify-between">
          <div>
            <p className="section-tag">
              Handpicked For You
            </p>

            <h2 className="section-title">
              Featured Holiday Homes
            </h2>
          </div>

          <Link
            href="/holiday-homes"
            className="section-link"
            >
            <span>Explore all destinations</span>
            <ArrowRight size={18} />
            </Link>
        </div>
        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {homes.map((home) => (
            <div
              key={home.id}
              onClick={() => router.push(`/holiday-homes/${home.slug}`)}
              className="group overflow-hidden rounded-[22px] border border-[#E8E4DC] bg-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative overflow-hidden">
                <div className="relative h-[224px] w-full overflow-hidden rounded-t-[22px]">
                  <Image
                    src={home.image}
                    alt={home.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 303px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority={home.id === 1}
                  />
                </div>

                {/* Rating */}

                <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-[6px] shadow-lg flex items-center gap-2">
                  <Star size={14} className="fill-white text-[#0F172A]" />

                  <span className="font-semibold text-xs text-[#0F172A]">{home.rating}</span>
                </div>
              </div>

              {/* Content */}

              <div className="py-5 px-[17px]">
                <h3 className="text-base font-semibold text-[#0F172A]">
                  {home.title}
                </h3>

                <div className="mt-[10px] flex items-center gap-1 text-sm leading-none text-[#6B7280]">
                  <MapPin size={13} />
                  {home.location}
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-[#6B7280]">
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
                    <span className="text-xl font-semibold leading-none text-[#0F172A]">
                      £{home.price}
                    </span>

                    <sub className="text-xs mb-[2px] text-[#6B7280]">
                      / night
                    </sub>
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
          ))}
        </div>
      </div>
    </section>
  );
}
