"use client";

import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    title: "Amalfi Coast, Italy",
    properties: "580 properties available",
    price: "From £480",
    image: "/images/trending01.jpg",
  },
  {
    title: "Algarve, Portugal",
    properties: "420 properties available",
    price: "From £350",
    image: "/images/trending02.jpg",
  },
  {
    title: "Côte d'Azur, France",
    properties: "340 properties available",
    price: "From £520",
    image: "/images/trending03.jpg",
  },
  {
    title: "Lake Como, Italy",
    properties: "290 properties available",
    price: "From £580",
    image: "/images/trending04.jpg",
  },
];

export default function TrendingDestinations() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#D89A18]">
            TRENDING NOW
          </p>

          <h2 className="text-3xl font-bold text-[#182033] sm:text-4xl lg:text-[52px] lg:leading-[60px]">
            Trending Destinations
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-[30px] lg:grid-cols-2">
          {destinations.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-border-dark bg-white transition duration-300 hover:shadow-xl sm:flex-row"
            >
              {/* Image */}
              <div className="relative h-[160px] w-full overflow-hidden sm:w-[160px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-3 top-3 rounded-full bg-[#E39A16] px-[10px] py-[6px] text-[10px] !leading-none font-semibold text-white">
                  Trending
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between px-[32px] py-[19px]">
                <div>
                  <h3 className="text-lg !leading-none font-semibold text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-[10px] text-sm text-gray">
                    {item.properties}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <h4 className="text-lg !leading-none font-medium text-text-primary">
                    {item.price}
                  </h4>

                  <Link
                    href="/"
                    className="rounded-full gold-gradient px-[14px] py-2 text-sm !leading-none font-medium text-white transition hover:bg-[#c98914]"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}