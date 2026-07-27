"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Beachfront Villas",
    properties: "340 properties",
    image: "/images/collection01.png",
    large: true,
    slug: "beachfront-villas",
  },
  {
    id: 2,
    title: "Luxury Escapes",
    properties: "280 properties",
    image: "/images/collection.png",
    slug: "luxury-escapes",
  },
  {
    id: 3,
    title: "Pet Friendly",
    properties: "520 properties",
    image: "/images/collection03.png",
    slug: "pet-friendly",
  },
  {
    id: 4,
    title: "Family Holidays",
    properties: "760 properties",
    image: "/images/collection04.png",
    slug: "family-holidays",
  },
  {
    id: 5,
    title: "Private Pools",
    properties: "440 properties",
    image: "/images/collection05.png",
    slug: "private-pools",
  },
];

export default function HolidayCollections() {
  return (
    <section className="py-20">
      <div className="container-custom">

        {/* Heading */}

        <div className="mb-10 flex items-end justify-between">

          <div>
            <p className="section-tag">
              Curated For Every Traveller
            </p>

            <h2 className="section-title">
              Holiday Collections
            </h2>
          </div>

          <Link
            href="/collections"
            className="section-link"
          >
            Browse all collections
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Layout */}

        <div className="grid gap-6 lg:grid-cols-[370px_1fr]">

          {/* Left */}

          <Link
            href={`/collections/${collections[0].slug}`}
            className="group relative h-[460px] overflow-hidden rounded-2xl"
          >
            <Image
              src={collections[0].image}
              alt={collections[0].title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6">
             <h3 className="text-xl leading-none font-semibold text-white">
                {collections[0].title}
              </h3>

               <p className="text-sm text-[#FFFFFFB2] mt-[10px]">
                {collections[0].properties}
              </p>
            </div>
          </Link>

          {/* Right */}

          <div className="grid gap-6 sm:grid-cols-2">

            {collections.slice(1).map((item) => (

              <Link
                key={item.id}
                href={`/collections/${item.slug}`}
                className="group relative h-[222px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-xl leading-none font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#FFFFFFB2] mt-[10px]">
                    {item.properties}
                  </p>
                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}