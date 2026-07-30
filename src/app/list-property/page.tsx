import { BadgeCheck, BadgeDollarSign, Globe, Headphones, LucideIcon, Pencil, Rocket, ShieldCheck, Star, Tags, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const features = [
  "No Listing Fees",
  "Direct Booking Enquiries",
  "Reach International Travellers",
  "Easy Property Submission",
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
    description:
      "We verify all guests to ensure trustworthy bookings.",
  },
  {
    icon: Globe,
    title: "International Exposure",
    description:
      "Reach thousands of travellers from around the world.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is here to help you 24/7 with any questions.",
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
      <section className="bg-white">
        <div className="container-custom">
          <div className="mb-[25px] flex items-center gap-2 text-sm text-[#64748B]">
            <Link href="/" className="hover:text-[#D69A17]">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#D4A017]">
              List Your Property
            </span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center rounded-full border !leading-none border-[#D4A017] bg-[#FFF8E7] px-[15px] py-2 text-sm font-semibold text-[#D4A017]">
                ● Property Owners
              </span>

              <h1 className="mt-[15px] text-4xl font-bold leading-tight text-[#17213C] md:text-5xl xl:text-[56px]">
                List Your Holiday{" "}
                <span className="gold-gradient-text">Property</span>
              </h1>

              <p className="mt-[15px] text-base text-[#64748B]">
                Reach thousands of travellers looking for trusted holiday homes.
                List your property for free and start receiving direct booking
                enquiries through KeyToHolidays.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-[19px] sm:grid-cols-2 ">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full gold-gradient">
                      <Image
                        src="/images/checkmark-right.svg"
                        alt="check"
                        width={10}
                        height={10}
                        className="object-contain"
                      />
                    </div>

                    <span className="text-xs font-normal text-[#0F172A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/"
                className="mt-[30px] rounded-full gold-gradient px-[25px] py-4 font-semibold text-white transition hover:opacity-90 text-base !leading-none inline-block"
              >
                Start Listing
              </Link>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:col-span-6 lg:justify-end">
              <div className="relative h-[451px] w-full max-w-[608px] overflow-hidden rounded-[16px]">
                <Image
                  src="/images/list-page.png"
                  alt="Offer"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-custom max-w-5xl">
          {/* Heading */}
          <div className="text-center">
            <h2 className="section-title !mt-0">Submit Your Property</h2>

            <p className="mt-[10px] text-[#6B7280]">
              Complete the form below and our team will review your property.
            </p>
          </div>

          <form className="mt-[30px]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-[10px] block text-lg text-[#1A1A1A]">
                  Full Name<span className="text-[#DB0505]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input-style"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-[10px] block text-lg text-[#1A1A1A]">
                  Email Address<span className="text-[#DB0505]">*</span>
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input-style"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-[10px] block text-lg text-[#1A1A1A]">
                  Phone Number<span className="text-[#DB0505]">*</span>
                </label>

                <div className="flex h-[56px] items-center rounded-full border border-[#E6E8EC] px-5">
                  <span className="text-[#98A2B3]">+00</span>

                  <span className="mx-3 text-[#D0D5DD]">|</span>

                  <input
                    type="text"
                    placeholder="123 456 7890"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Property Name */}
              <div>
                <label className="mb-[10px] block text-lg text-[#1A1A1A]">
                  Property Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Villa del Mar"
                  className="input-style"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <label className="mb-[10px] block text-lg text-[#1A1A1A]">
                  City<span className="text-[#DB0505]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="e.g. Santorini"
                  className="input-style"
                />
              </div>

              <div className="lg:col-span-3">
                <label className="mb-[10px] block text-lg text-[#1A1A1A]">
                  Country<span className="text-[#DB0505]">*</span>
                </label>

                <select className="input-style appearance-none">
                  <option>Select country</option>
                  <option>United Kingdom</option>
                  <option>Spain</option>
                  <option>Italy</option>
                  <option>France</option>
                </select>
              </div>

              <div className="lg:col-span-6">
                <label className="mb-[10px] block text-lg text-[#1A1A1A]">
                  Website or Airbnb/Booking.com Listing URL
                </label>

                <input
                  type="url"
                  placeholder="https://..."
                  className="input-style"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="mb-[10px] block text-lg text-[#1A1A1A]">
                Property Description<span className="text-[#DB0505]">*</span>
              </label>

              <textarea
                rows={5}
                placeholder="Tell us about your property: location, amenities, unique features, number of bedrooms/bathrooms..."
                className="w-full rounded-[18px] border border-[#E6E8EC] px-5 py-4 outline-none transition focus:border-[#D69A17]"
              />
            </div>

            {/* Checkbox */}
            <div className="mt-6 flex items-center gap-3">
              <input
                id="agree"
                type="checkbox"
                className="h-5 w-5 cursor-pointer appearance-none rounded-[8px] border border-[#D9D9D9] bg-white transition checked:border-[#D89A12] checked:bg-[#D89A12] checked:bg-[url('/images/checkmark-right.svg')] checked:bg-center checked:bg-no-repeat"
              />

              <label
                htmlFor="agree"
                className="cursor-pointer text-[16px] font-normal text-[#282828]"
              >
                I agree to be contacted regarding my property listing.
              </label>
            </div>

            {/* Button */}
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="h-[48px] min-w-[400px] rounded-full gold-gradient px-10 text-base font-medium text-white transition hover:opacity-90"
              >
                Submit Property
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 lg:py-[90px]">
        <div className="container-custom">
          {/* Heading */}

          <div className="mb-[30px] text-center">
            <span className="section-tag">
              SIMPLE & EASY
            </span>

            <h2 className="section-title !text-white">
              How It Works
            </h2>
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

       <section className="section-bottom">
              <div className="container-custom">
                {/* Heading */}
                <div className="mb-[30px] text-center">
                  <p className="section-tag">Why Choose Us</p>
      
                  <h2 className="section-title">
                    Why List With KeyToHolidays?
                  </h2>
                </div>
      
                <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
                  {featuresData.map((item) => {
                    const Icon = item.icon;
      
                    return (
                      <div
                        key={item.title}
                        className="group flex items-start gap-[15px] rounded-[18px] border border-[#EBEBEB] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D69A17] hover:shadow-lg"
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
                          <h3 className="text-base font-semibold leading-none text-[#1A1A1A]">
                            {item.title}
                          </h3>
      
                          <p className="mt-[10px] text-sm text-[#888888]">
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

export default ListProperty;
