"use client";

import Image from "next/image";
import { Umbrella, Crown, Baby, Heart, Waves, Mountain, Trees, Dog } from "lucide-react";

const collections = [
  {
    title: "Beach Holidays",
    subtitle: "Sun, sand and sea",
    properties: "2,340 properties",
    image: "/images/brw01.jpg",
    icon: Umbrella,
  },
  {
    title: "Luxury Villas",
    subtitle: "Premium escapes",
    properties: "3,210 properties",
    image: "/images/brw02.jpg",
    icon: Crown,
  },
  {
    title: "Family Holidays",
    subtitle: "Fun for all ages",
    properties: "1,890 properties",
    image: "/images/brw03.jpg",
    icon: Baby,
  },
  {
    title: "Romantic Escapes",
    subtitle: "Love and luxury",
    properties: "1,620 properties",
    image: "/images/brw03.jpg",
    icon: Heart,
  },
  {
    title: "Pet Friendly",
    subtitle: "Bring your furry friends",
    properties: "980 properties",
    image: "/images/brw04.jpg",
    icon: Dog,
  },
  {
    title: "Private Pools",
    subtitle: "Swim in style",
    properties: "2,450 properties",
    image: "/images/brw05.jpg",
    icon: Waves,
  },
  {
    title: "Mountain Retreats",
    subtitle: "Alpine escapes",
    properties: "1,340 properties",
    image: "/images/brw06.jpg",
    icon: Mountain,
  },
  {
    title: "Countryside Escapes",
    subtitle: "Rural tranquillity",
    properties: "1,750 properties",
    image: "/images/brw07.jpg",
    icon: Trees,
  },
];

export default function HolidayCollections() {
  return (
    <section className="section-bottom">
      <div className="container-custom">
        {/* Heading */}

        <div className="mb-12 text-center">
          <p className="section-tag">
            Holiday Collections
          </p>

          <h2 className="section-title">
            Browse By Holiday Style
          </h2>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-[25px] sm:grid-cols-2 xl:grid-cols-4">
          {collections.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative h-[200px] overflow-hidden rounded-[24px] cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8A21A] text-white">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-lg font-semibold leading-none text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/90">
                    {item.subtitle}
                  </p>

                  <p className="mt-2 text-xs text-white/70">
                    {item.properties}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}