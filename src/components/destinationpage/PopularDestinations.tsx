"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const destinations = [
  {
    title: "Spain",
    properties: "1,240 properties",
    price: "From £280",
    rating: "4.7",
    image: "/images/destinations-im1.jpg",
  },
  {
    title: "Portugal",
    properties: "980 properties",
    price: "From £240",
    rating: "4.8",
    image: "/images/destinations-im2.jpg",
  },
  {
    title: "Italy",
    properties: "1,450 properties",
    price: "From £320",
    rating: "4.9",
    image: "/images/destinations-im3.jpg",
  },
  {
    title: "Greece",
    properties: "820 properties",
    price: "From £360",
    rating: "4.8",
    image: "/images/destinations-im4.jpg",
  },
  {
    title: "Cyprus",
    properties: "580 properties",
    price: "From £220",
    rating: "4.6",
    image: "/images/destinations-im5.jpg",
  },
  {
    title: "United Kingdom",
    properties: "1,120 properties",
    price: "From £180",
    rating: "4.5",
    image: "/images/destinations-im6.jpg",
  },
];

export default function PopularDestinations() {
  return (
    <section className="section-space">
      <div className="container-custom">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="section-tag">Handpicked For You</p>

            <h2 className="section-title">Featured Holiday Homes</h2>
          </div>

          <Link href="/holiday-homes" className="section-link">
            <span>Explore all destinations</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid gap-[30px] sm:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item) => (
            <div
              key={item.title}
              className="group relative h-[280px] overflow-hidden rounded-[16px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-semibold leading-none text-white">
                  {item.title}
                </h3>

                <p className="mt-[5px] text-white/90 text-sm leading-none">
                  {item.properties}
                </p>

                <div className="mt-[15px] flex md:items-center justify-between flex-col md:flex-row gap-2">
                  <div className="flex items-center gap-[5px] text-white text-sm">
                    <span className="pr-[5px]">{item.price}</span>

                    <Star
                      size={12}
                      fill="#F8B400"
                      className="text-[#FBBF24]"
                    />

                    <span>{item.rating}</span>
                  </div>

                  <button className="rounded-full gold-gradient px-[18px] py-[10px] text-xs font-semibold text-white transition hover:scale-105">
                    Explore
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