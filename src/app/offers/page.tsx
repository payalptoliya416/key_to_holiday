"use client";

import {BadgeCheck, BadgeDollarSign, Headphones, MessageCircle, ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import OffersBanner from "@/components/offers/OffersBanner";
import HolidayHome from "@/components/offers/HolidayHome";
import Availability from "@/components/offers/Availability";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every property is personally verified by our team for quality and accuracy.",
  },
  {
    icon: BadgeDollarSign,
    title: "No Hidden Fees",
    description: "What you see is what you pay. Transparent pricing, always.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Bank-level encryption keeps your payment information safe.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our team is always available to help you before, during and after your stay.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Talk directly to property owners for a personal experience.",
  },
  {
    icon: BadgeCheck,
    title: "Best Prices",
    description:
      "Book direct and always get the best available rate for every property.",
  },
];

export default function OffersPage() {
  return (
    <>
      {/* --OffersBanner--start */}
      <OffersBanner />
      {/* --OffersBanner--end */}

      {/* ---HolidayHome--start */}
      <HolidayHome />
      {/* ---HolidayHome--end */}

      {/* --Availability--start */}
      <Availability />
      {/* --Availability--end */}

      <section className="section-space">
        <div className="container-custom">
          {/* Heading */}
          <div className="mb-[30px] text-center">
            <p className="section-tag">The Smart Way to Book</p>

            <h2 className="section-title">Why Book With Us?</h2>
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-[15px] rounded-[18px] border border-border-dark bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D69A17] hover:shadow-lg"
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

      <section className="section-bottom">
        <div className="container-custom">
          <div
            className="relative overflow-hidden rounded-[32px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/iconme-01.png')",
            }}
          >
            {/* Left Gradient Overlay */}
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(19,26,46,.92) 0%, rgba(19,26,46,.75) 35%, rgba(19,26,46,.30) 60%, rgba(19,26,46,0) 100%)",
              }}
            />

            <div className="relative z-10 flex min-h-[441px] items-center px-6 py-12 sm:px-10 lg:px-16">
              <div className="max-w-[500px]">
                <p className="section-tag">THE SMART WAY TO BOOK</p>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-[44px]">
                  Save More When
                  <br />
                  You Book Direct
                </h2>

                <div className="mt-5 space-y-3 md:space-y-4">
                  {[
                    "No hidden booking fees.",
                    "Best prices guaranteed.",
                    "Direct communication with property owners.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-base text-white"
                    >
                      <div className="mt-1 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-gold text-xs">
                        ✓
                      </div>

                      <span className="leading-7">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/" className="mt-[25px] common-btn w-max">
                  Explore Offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
