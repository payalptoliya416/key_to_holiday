"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Beachfront Villas",
    properties: "340 properties",
    image: "/images/collection01.jpg",
    large: true,
    slug: "beachfront-villas",
  },
  {
    id: 2,
    title: "Luxury Escapes",
    properties: "280 properties",
    image: "/images/collection02.jpg",
    slug: "luxury-escapes",
  },
  {
    id: 3,
    title: "Pet Friendly",
    properties: "520 properties",
    image: "/images/collection03.jpg",
    slug: "pet-friendly",
  },
  {
    id: 4,
    title: "Family Holidays",
    properties: "760 properties",
    image: "/images/collection04.jpg",
    slug: "family-holidays",
  },
  {
    id: 5,
    title: "Private Pools",
    properties: "440 properties",
    image: "/images/collection05.jpg",
    slug: "private-pools",
  },
];

export default function HolidayCollections() {
  return (
    <section className="section-space">
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

          {/* Left — tall card */}
          <Link
            href={`/collections/${collections[0].slug}`}
            className="group relative h-[300px] sm:h-[380px] lg:h-[468px] overflow-hidden rounded-2xl"
          >
            <Image
              src={collections[0].image}
              alt={collections[0].title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

           <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.75) 100%)",
                  }}
                />

            <div className="absolute bottom-6 left-6 z-10">
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
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.75) 100%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 z-10">
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