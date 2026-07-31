import ListBanner from "@/components/list-property/ListBanner";
import ListForm from "@/components/list-property/ListForm";
import PhoneNumberField from "@/components/list-property/PhoneNumberField";
import FaqSection from "@/components/propertydetail/FaqSection";
import {
  BadgeCheck,
  BadgeDollarSign,
  Globe,
  Headphones,
  LucideIcon,
  Pencil,
  Rocket,
  ShieldCheck,
  Star,
  Tags,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const categories = [
  "Last Minute Deals",
  "Early Bird Offers",
  "Summer Deals",
  "Family Offers",
  "Luxury Villas",
  "Beachfront Villas",
  "Pet Friendly",
  "Long Stay Discounts",
];

export const steps = [
  {
    step: "Step 1",
    icon: Pencil,
    title: "Submit Your Property",
    description:
      "Fill out the short form with your property details and contact information.",
  },
  {
    step: "Step 2",
    icon: BadgeCheck,
    title: "Our Team Reviews It",
    description:
      "We verify your property and ensure it meets our quality standards.",
  },
  {
    step: "Step 3",
    icon: Rocket,
    title: "Go Live",
    description:
      "Start receiving direct booking enquiries from international travellers.",
  },
];

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const featuresData: Feature[] = [
  {
    icon: BadgeDollarSign,
    title: "Direct Bookings",
    description:
      "Connect directly with guests. No middleman, no hidden commissions.",
  },
  {
    icon: Tags,
    title: "No Hidden Fees",
    description:
      "Transparent pricing. Keep more of your earnings with fair rates.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Marketplace",
    description: "We verify all guests to ensure trustworthy bookings.",
  },
  {
    icon: Globe,
    title: "International Exposure",
    description: "Reach thousands of travellers from around the world.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our team is here to help you 24/7 with any questions.",
  },
  {
    icon: Zap,
    title: "Easy Listing Process",
    description:
      "List your property in minutes. No complicated forms or waiting.",
  },
];

function ListProperty() {
  return (
    <>
      {/* --ListBanner--start-- */}
      <ListBanner />
      {/* --ListBanner--end-- */}

      {/* ---ListForm---start */}
      <ListForm />
      {/* ---ListForm---end */}

      <section className="bg-gray-dark py-20 lg:py-[90px]">
        <div className="container-custom">
          {/* Heading */}

          <div className="mb-[30px] text-center">
            <span className="section-tag">SIMPLE & EASY</span>

            <h2 className="section-title !text-white">How It Works</h2>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
            {steps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative rounded-[24px] border border-[#494F5D] bg-[#1B2335] px-[25px] py-[45px] text-center transition-all duration-300 hover:border-[#D89A12] hover:-translate-y-2"
                >
                  {/* Step Badge */}

                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-[50px] border border-[#FFFFFF33] bg-[#1B2335] px-[20px] py-[10px] text-sm font-medium text-white">
                    {item.step}
                  </div>

                  {/* Icon */}

                  <div className="mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-[18px] bg-[#E8A0201A] transition-all duration-300 group-hover:bg-[#D89A12]">
                    <Icon
                      size={22}
                      className="text-[#E8A020] transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mx-auto mt-[15px] text-xs !leading-[20px] text-[#808794]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-custom">
          {/* Heading */}
          <div className="mb-[30px] text-center">
            <p className="section-tag">Why Choose Us</p>

            <h2 className="section-title">Why List With KeyToHolidays?</h2>
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {featuresData.map((item) => {
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
        <FaqSection />
      </section>
    </>
  );
}

export default ListProperty;
