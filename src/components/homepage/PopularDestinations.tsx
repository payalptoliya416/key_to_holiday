"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    title: "Spain",
    homes: "1,240 homes",
    image: "/images/Link-1.jpg",
  },
  {
    id: 2,
    title: "Cyprus",
    homes: "680 homes",
    image: "/images/Link-2.jpg",
  },
  {
    id: 3,
    title: "Portugal",
    homes: "920 homes",
    image: "/images/Link-3.jpg",
  },
  {
    id: 4,
    title: "Greece",
    homes: "1,560 homes",
    image: "/images/Link-4.jpg",
  },
  {
    id: 5,
    title: "Italy",
    homes: "1,840 homes",
    image: "/images/Link-5.jpg",
  },
  {
    id: 6,
    title: "United Kingdom",
    homes: "2,100 homes",
    image: "/images/Link-6.jpg",
  },
];

export default function PopularDestinations() {
  const router = useRouter();

  return (
    <section className="py-12 lg:py-[90px] bg-[#F8F6F2]">
      <div className="container-custom">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="section-tag">Top Locations</p>

            <h2 className="section-title">Popular Destinations</h2>
          </div>

          <Link href="/destinations" className="section-link">
            <span>Explore all destinations</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {destinations.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                router.push(`/destinations/${item.title.toLowerCase()}`)
              }
              className="group relative h-[196px] cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 370px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.75) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-5 left-5 z-10">
                <h3 className="text-xl font-semibold leading-none text-white">
                  {item.title}
                </h3>

                <p className="mt-[10px] text-xs text-[#FFFFFFB2]">
                  {item.homes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
