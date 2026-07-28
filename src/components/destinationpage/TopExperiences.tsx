"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Beach Holidays",
    image: "/images/experience01.jpg",
  },
  {
    title: "Wine Tours",
    image: "/images/experience02.jpg",
  },
  {
    title: "Luxury Villas",
    image: "/images/experience03.jpg",
  },
  {
    title: "Island Escapes",
    image: "/images/experience04.jpg",
  },
  {
    title: "City Breaks",
    image: "/images/experience05.jpg",
  },
  {
    title: "Adventure Trips",
    image: "/images/experience06.jpg",
  },
  {
    title: "Golf Holidays",
    image: "/images/experience07.jpg",
  },
  {
    title: "Family Resorts",
    image: "/images/experience08.jpg",
  },
];

export default function TopExperiences() {
  return (
    <section className="section-bottom">
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-[30px] text-center">
          <p className="section-tag">
            Curated Experiences
          </p>

          <h2 className="section-title">
            Top Experiences
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-[25px] sm:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="group relative h-[180px] cursor-pointer overflow-hidden rounded-[14px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-5 left-5">
                <h3 className="text-base !leading-none font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}