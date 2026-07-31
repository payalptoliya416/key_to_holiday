"use client";

import { ShieldCheck, Lock, Headphones, EyeOff, Handshake, TrendingDown } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every property is vetted and verified for quality and authenticity.",
  },
  {
    icon: Handshake,
    title: "Book Direct",
    description:
      "No middlemen. Direct communication with property owners for best deals.",
  },
  {
    icon: TrendingDown,
    title: "Best Prices",
    description:
      "Save money by booking direct with no hidden commissions.",
  },
  {
    icon: Lock,
    title: "Secure Booking",
    description:
      "Your bookings and payments are protected with SSL encryption.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our team is always available to help you before, during and after your stay.",
  },
  {
    icon: EyeOff,
    title: "No Hidden Fees",
    description:
      "Transparent pricing. All fees are shown upfront before you book.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-bottom">
      <div className="container-custom">
        <div className="mb-[30px] text-center">
          <p className="section-tag">
            WHY CHOOSE US
          </p>

          <h2 className="section-title">
            Why Book With KeyToHolidays
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-[15px] rounded-[14px] border border-border-dark bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#D69A17]"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[#FDF3E0]">
                  <Icon
                    size={20}
                    className="text-[#E39A16]"
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base !leading-none font-semibold text-text-primary">
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
  );
}