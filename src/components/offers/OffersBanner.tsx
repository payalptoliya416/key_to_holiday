import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

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

function OffersBanner() {
    const [activeCategory, setActiveCategory] = useState(1);
  return (
      <section className="bg-white">
        <div className="container-custom">
          <div className="mb-[25px] flex items-center gap-2 text-sm text-[#64748B]">
            <Link href="/" className="hover:text-[#D69A17]">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-gold">Offers</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center rounded-full border !leading-none border-gold bg-[#FFF8E7] px-[15px] py-2 text-sm font-semibold text-gold">
                ● EXCLUSIVE SAVINGS
              </span>

              <h1 className="mt-[15px] text-4xl font-bold leading-tight text-[#17213C] md:text-5xl xl:text-[56px]">
                Best Holiday Deals &{" "}
                <span className="gold-gradient-text">Exclusive Offers</span>
              </h1>

              <p className="mt-[15px] text-base text-[#64748B]">
                Save more on your next holiday with handpicked villas,
                beachfront homes and luxury escapes. Discover limited-time
                deals, last-minute offers and seasonal discounts when you book
                directly with property owners.
              </p>

              <div className="mt-[15px] flex items-center gap-3">
                <div className="text-[#FFC107] flex gap-2">
                  <Star fill="#FFC107" size={14} />
                  <Star fill="#FFC107" size={14} />
                  <Star fill="#FFC107" size={14} />
                  <Star fill="#FFC107" size={14} />
                  <Star fill="#FFC107" size={14} />
                </div>
                <span className="font-semibold text-gray-dark text-sm">
                  Rated Excellent
                </span>
              </div>

              <div className="mt-[25px] flex flex-wrap gap-6">
                {[
                  "Verified Properties",
                  "Best Price Guarantee",
                  "Book Direct",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full gold-gradient text-xs text-white">
                      <Image
                        src="/images/checkmark-right.svg"
                        alt="check"
                        width={10}
                        height={10}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-gray-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:col-span-6 lg:justify-end">
              <Image
                src="/images/offer-right.png"
                alt="Offer"
                width={585}
                height={443}
                priority
                className="h-auto w-full max-w-[585px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-[60px] pb-[21px] border-t border-[#E8E8E8]"></div>
        <div className="container-custom">
          <div className="overflow-x-auto scrollbar-thin">
            <div className="flex w-max gap-4">
            {categories.map((item, index) => (
              <button
                key={item}
                onClick={() => setActiveCategory(index)}
                className={`h-9 sm:h-[42px] rounded-full border px-[18px] py-3 sm:py-[15px] text-xs !leading-none font-medium transition-all cursor-pointer flex items-center justify-center ${
                  activeCategory === index
                    ? "border-[#D69A17] bg-[#D69A17] text-white"
                    : "border-[#E8E8E8] bg-white hover:border-[#D69A17] hover:text-[#D69A17]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          </div>
        </div>
        <div className="mt-5 border-t border-[#E8E8E8]"></div>
      </section>
  )
}

export default OffersBanner
