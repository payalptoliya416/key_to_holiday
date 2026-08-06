"use client";

import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  BadgeDollarSign,
  Headphones,
  LockKeyhole,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import EventBanner from "@/components/events/EventBanner";
import CoomingSoon from "@/components/events/CoomingSoon";
import PerfectEvents from "@/components/events/PerfectEvnts";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: MapPin,
    title: "Stay Close To The Venue",
    description: "Handpicked properties, walking or short drive away.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Direct Prices",
    description: "Book directly from property owners and save on booking fees.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Marketplace",
    description:
      "Every property is personally verified for quality and accuracy.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Booking",
    description:
      "Your payment is protected with bank-level encryption technology.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Stay Options",
    description:
      "Choose your own check-in/check-out dates around event schedules.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist.",
  },
];

function Events() {
  return (
    <>
      {/* --eventBanner start */}
      <EventBanner />
      {/* --eventBanner end */}

      {/* --comming soon start */}
      <CoomingSoon />
      {/* --comming soon end */}

      <section className="py-12 lg:py-[90px] bg-[#F8F6F2]">
        <div className="container-custom">
          <div className="grid items-center gap-[30px] lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative overflow-hidden rounded-[24px] h-[415px]">
              <Image
                src="/images/spotlight.png"
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
              <p className="section-tag">Spotlight</p>

              <h2 className="section-title">Tomorrowland Belgium</h2>

              <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <p className="text-xs text-gray">Location</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-text-primary">
                    Boom, Belgium
                  </h5>
                </div>

                <div>
                  <p className="text-xs text-gray">Dates</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-text-primary">
                    Aug 14-16, 2025
                  </h5>
                </div>
              </div>

              <p className="text-gray mt-5 text-sm sm:text-base">
                Experience the world's most iconic electronic dance music
                festival. Tomorrowland brings together 400,000+ attendees from
                across the globe for an unforgettable weekend of music, art, and
                celebration. Stay in nearby luxury villas and enjoy direct
                access to the festival grounds.
              </p>

              {/* Stats */}

              <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                <div>
                  <p className="text-xs text-gray">Property Price</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-text-primary">
                    £240
                  </h5>
                </div>

                <div>
                  <p className="text-xs text-gray">Nearby Holiday Homes</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-text-primary">
                    124 properties
                  </h5>
                </div>

                <div>
                  <p className="text-xs text-gray">Distance from Venue</p>
                  <h5 className="font-semibold text-sm md:leading-none mt-[5px] text-text-primary">
                    3-8 km average
                  </h5>
                </div>
              </div>

              {/* Button */}

              <Link href="/" className="mt-[30px] common-btn">
                Explore Nearby Stays
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --perfectEvvents--start */}
      <PerfectEvents />
      {/* --perfectEvvents--end */}

      <section className="section-bottom">
        <div className="container-custom">
          {/* Heading */}
          <div className="mb-[30px] text-center">
            <p className="section-tag">Why Choose Us</p>

            <h2 className="section-title">
              Why Book Event Stays With KeyToHolidays?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-[15px] rounded-[18px] border border-border-dark bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D69A17] hover:shadow-lg"
                >
                  {/* Icon */}

                  <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[18px] bg-[#FDF3E0] transition-all duration-300 group-hover:bg-[#D69A17]">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-[#E8A020] transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Content */}

                  <div>
                    <h3 className="text-base font-semibold leading-none text-text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-[10px] text-sm text-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
