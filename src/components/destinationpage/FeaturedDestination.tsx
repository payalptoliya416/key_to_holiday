"use client";

import Image from "next/image";
import { Sunset, Landmark, Waves, Utensils } from "lucide-react";
import Link from "next/link";

export default function FeaturedDestination() {
  return (
    <section className="py-12 lg:py-[90px] bg-[#F8F6F2]">
      <div className="container-custom">
        <div className="grid items-center gap-[30px] lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-[24px] h-[415px]">
            <Image
              src="/images/santori.jpg"
              alt="Santorini"
              width={700}
              height={415}
              className="h-full w-full object-cover"
            />

            <span className="absolute left-4 top-4 rounded-full bg-[#E8A020] px-5 py-[10px] text-sm !leading-[14px] font-semibold text-white">
              Featured
            </span>
          </div>

          {/* Right Content */}
          <div>
            <p className="section-tag">
              Must-Visit Destination
            </p>

            <h2 className="section-title">
              Santorini, Greece
            </h2>

            <p className="text-gray mt-5 text-base">
              Perched on volcanic cliffs overlooking the Mediterranean,
              Santorini is the epitome of luxury. Experience stunning sunsets,
              pristine beaches and world-class hospitality in this iconic Greek
              island destination.
            </p>

            {/* Highlights */}

            <div className="mt-[30px]">
              <h4 className="mb-[15px] font-semibold text-text-primary text-sm leading-none">
                Highlights
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 sm:gap-y-[11px] text-sm text-[#6D6D6D]">
                <div className="flex items-center gap-[10px]">
                  <Sunset size={14} className="text-[#E8A020]" />
                  Stunning sunsets
                </div>

                <div className="flex items-center gap-[10px]">
                  <Waves size={14} className="text-[#E8A020]" />
                  Crystal-clear waters
                </div>

                <div className="flex items-center gap-[10px]">
                  <Landmark size={14} className="text-[#E8A020]" />
                  Iconic architecture
                </div>

                <div className="flex items-center gap-[10px]">
                  <Utensils size={14} className="text-[#E8A020]" />
                  World-class dining
                </div>
              </div>
            </div>

            {/* Stats */}

            <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
              <div>
                <p className="text-xs text-gray">Best Time</p>
                <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-text-primary">Apr – Oct</h5>
              </div>

              <div>
                <p className="text-xs text-gray">Avg. Nightly</p>
                <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-text-primary">£420+</h5>
              </div>

              <div>
                <p className="text-xs text-gray">Properties</p>
                <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-text-primary">680+</h5>
              </div>
            </div>

            {/* Button */}

            <Link href="/" className="mt-[30px] common-btn">
              View Properties In Santorini
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}