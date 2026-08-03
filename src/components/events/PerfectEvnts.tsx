import { BedDouble, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const homesDetails = [
  {
    id: 1,
    slug: "villa-sol-dorrado",
    title: "Villa Sol Dorrado",
    location: "Marbella, Spain",
    image: "/images/feature1.png",
    rating: 4.97,
    guests: 8,
    bedrooms: 4,
    reviews: 124,
    price: 420,
  },
  {
    id: 2,
    slug: "aegean-dream-villa",
    title: "Aegean Dream Villa",
    location: "Santorini, Greece",
    image: "/images/feature2.png",
    rating: 4.95,
    guests: 6,
    bedrooms: 3,
    reviews: 89,
    price: 580,
  },
  {
    id: 3,
    slug: "quinta-da-serra",
    title: "Quinta da Serra",
    location: "Algarve, Portugal",
    image: "/images/feature3.png",
    rating: 4.92,
    guests: 10,
    bedrooms: 5,
    reviews: 68,
    price: 390,
  },
  {
    id: 4,
    slug: "the-coastal-retreat",
    title: "The Coastal Retreat",
    location: "Paphos, Cyprus",
    image: "/images/feature4.png",
    rating: 4.88,
    guests: 6,
    bedrooms: 3,
    reviews: 102,
    price: 310,
  },
  {
    id: 5,
    slug: "tuscany-stone-farmhouse",
    title: "Tuscany Stone Farmhouse",
    location: "Tuscany, Italy",
    image: "/images/feat-1.jpg",
    rating: 4.93,
    guests: 12,
    bedrooms: 6,
    reviews: 156,
    price: 680,
  },
  {
    id: 6,
    slug: "cotswold-manor-house",
    title: "Cotswold Manor House",
    location: "Cotswolds, UK",
    image: "/images/feat-2.jpg",
    rating: 4.9,
    guests: 14,
    bedrooms: 7,
    reviews: 78,
    price: 750,
  },
];


function PerfectEvents() {
     const router = useRouter();
  return (
    <section className="section-space">
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="section-tag">Perfect for Events</p>

              <h2 className="section-title">Stay Near Your Favourite Event</h2>
            </div>

            <Link href="/" className="section-link">
              <span>View all properties</span>
               <Image
                          src="/images/right-errow.svg"
                          alt="Right Arrow"
                          width={18}
                          height={18}
                         className="transition-transform duration-300 group-hover:translate-x-1"
                        />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {homesDetails.map((home) => (
              <div
                key={home.id}
                onClick={() => router.push(`/`)}
                className="group cursor-pointer overflow-hidden rounded-[22px] border border-border-color bg-white transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-[230px] overflow-hidden rounded-t-[22px]">
                  <Image
                    src={home.image}
                    alt={home.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-md">
                    <Star size={13} className="text-gray-dark" />
                    <span className="text-xs font-semibold">{home.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-[23px]">
                  <h3 className="text-lg] font-semibold text-gray-dark">
                    {home.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1 text-base text-light-dark">
                    <MapPin size={14} />
                    <span>{home.location}</span>
                  </div>

                  <div className="mt-[23px] flex flex-wrap items-center gap-3 text-sm text-light-dark">
                    <div className="flex items-center gap-1">
                      <Users size={13} />
                      {home.guests} guests
                    </div>

                    <div className="flex items-center gap-1">
                      <BedDouble size={13} />
                      {home.bedrooms} bedrooms
                    </div>

                    <div className="flex items-center gap-1">
                      <Star size={13} />
                      {home.reviews} reviews
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between flex-wrap">
                    <div className="flex items-end gap-1">
                      <span className="text-[24px] font-bold text-gray-dark">
                        £{home.price}
                      </span>

                      <span className="mb-1 text-sm text-light-dark">
                        / night
                      </span>
                    </div>

                    <Link
                    href="/"
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-full bg-gray-dark px-[24px] py-[9px] text-xs font-semibold text-white transition-all hover:bg-[#C99700] inline"
                  >
                    View Details
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PerfectEvents
