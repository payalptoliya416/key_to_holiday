import { BedDouble, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";

export const lastMinuteDeals = [
  {
    id: 1,
    title: "The Coastal Retreat",
    location: "Paphos, Cyprus",
    image: "/images/minute-1.png",
    discount: "Save up to 35%",
    description:
      "Stunning hilltop villa with panoramic sea views, private heated pool and outdoor kitchen. Perfect for groups seeking luxury in paradise.",
    guests: 6,
    bedrooms: 3,
    reviews: 4.9,
    price: 780,
  },
  {
    id: 2,
    title: "Dubrovnik Pearl",
    location: "Dubrovnik, Croatia",
    image: "/images/minute-2.png",
    discount: "Save up to 30%",
    description:
      "Exclusive villa perched above the historic old town with breathtaking Adriatic views, infinity pool and private terrace.",
    guests: 8,
    bedrooms: 4,
    reviews: 4.8,
    price: 693,
  },
  {
    id: 3,
    title: "Cretan Sanctuary",
    location: "Paphos, Cyprus",
    image: "/images/minute-3.png",
    discount: "Save up to 25%",
    description:
      "Serene hilltop retreat surrounded by olive groves with private pool, modern interiors and sweeping sea views.",
    guests: 6,
    bedrooms: 3,
    reviews: 4.7,
    price: 562,
  },
];

function Availability() {
  return (
     <section className="bg-gray-dark py-[90px]">
            <div className="container-custom">
              <div className="mb-[30px] text-center">
                <p className="section-tag">
                  LIMITED AVAILABILITY
                </p>
    
                <h2 className="section-title !text-white">
                  Last Minute Deals
                </h2>
    
                <p className="mt-[10px] text-[#FFFFFFB2] text-base !leading-[16px]">
                  Book your perfect escape before it's gone.
                </p>
              </div>
    
              {/* Cards */}
    
              <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3">
                {lastMinuteDeals.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-[16px] border border-white/20 bg-[#1B2438] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl"
                  >
    
                    <div className="relative h-[230px] overflow-hidden rounded-[16px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
    
                      <div className="absolute right-[10px] top-[10px] rounded-full bg-white px-[15px] py-2 text-sm font-medium text-[#111827] !leading-none h-[31px]">
                        {item.discount}
                      </div>
                    </div>
    
                    {/* Content */}
    
                    <div className="mt-5">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
    
                      <div className="mt-3 flex items-center gap-1 text-base text-[#ADB3BD]">
                        <MapPin size={14} />
                        {item.location}
                      </div>
    
                      <p className="mt-[15px] text-sm text-[#808794]">
                        {item.description}
                      </p>
    
                      <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#ADB3BD]">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          {item.guests} guests
                        </div>
    
                        <div className="flex items-center gap-1">
                          <BedDouble size={14} />
                          {item.bedrooms} bedrooms
                        </div>
    
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          {item.reviews} reviews
                        </div>
                      </div>
    
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-end gap-1">
                          <span className="text-2xl font-semibold text-white">
                            £{item.price}
                          </span>
    
                          <span className="mb-1 text-sm text-[#808794]">
                            / night
                          </span>
                        </div>
    
                        <button className="rounded-full gold-gradient px-[24px] py-[9px] text-sm font-semibold text-white transition hover:bg-[#bf8f12]">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default Availability
