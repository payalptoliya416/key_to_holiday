import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Traveller · London, UK",
    image: "/images/test01.jpg",
    review:
     "Booked our Algarve villa directly through KeyToHolidays and saved over £400 compared to other platforms. The host communication was instant and everything was perfect.",
  },
  {
    name: "Marco Vitale",
    role: "Property Owner · Tuscany, Italy",
    image: "/images/test02.jpg",
    review:
      "Listing my farmhouse on KeyToHolidays was the best decision. No middleman fees means I earn more and my guests pay less. Bookings have tripled in 6 months.",
  },
  {
    name: "Amira Hassan",
    role: "Referral Partner · Dubai, UAE",
    image: "/images/test03.jpg",
    review:
     "The referral program is genuinely rewarding. I have earned over £2,000 in commissions this year simply by sharing properties with my travel community.",
  },
  {
    name: "James Thornton",
    role: "Traveller · Edinburgh, UK",
    image: "/images/test04.jpg",
    review:
     "Found the most incredible private pool villa in Cyprus. The booking was seamless, the host was wonderful, and we paid less than we ever have for a comparable property.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F6F2] py-12 lg:py-[90px]">
      <div className="container-custom">

        <div className="text-center">
          <p className="section-tag">
            What Our Community Says
          </p>

          <h2 className="section-title !mt-5">
            Trusted by Thousands
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-[19px] md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-[18px] border border-border-color bg-white p-[25px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="mb-[11px] flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#F97316"
                    className="text-[#EB5A0C]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="flex-1 text-sm !leading-[22px] text-[#737373]">
                "{item.review}"
              </p>

              <div className="mt-5 mb-[9px] border-t border-border-color" />

              {/* User */}
              <div className="flex items-center gap-[10px]">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-dark mb-1">
                    {item.name}
                  </h4>

                  <p className="text-xs text-light-dark">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}