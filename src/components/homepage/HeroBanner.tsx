import { Search } from "lucide-react";
import Image from "next/image";

const categories = [
  { icon: "🏖️", label: "Beachfront" },
  { icon: "🏡", label: "Private Pool" },
  { icon: "🌿", label: "Countryside" },
  { icon: "⚡", label: "Mountain" },
  { icon: "🌊", label: "Seafront" },
  { icon: "📅", label: "Events" },
];

function HeroBanner() {
  return (
    /* outer wrapper: side padding so the card has breathing room on large screens */
    <div className="px-3 sm:px-5 lg:px-[30px]">
      <div className="relative w-full flex flex-col justify-center items-center text-white overflow-hidden rounded-[22px] min-h-[560px] sm:min-h-[650px] lg:min-h-[765px] py-14 sm:py-16 lg:py-20">

        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[url('/images/home-hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172ABF] via-[#0F172A8C] to-[#0F172ABF]" />

        {/* Content wrapper — max-width keeps it readable on ultrawide */}
        <div className="relative z-10 w-full max-w-[960px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-md text-sm text-[#FFFFFFE5] border border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-full py-2.5 px-4 mb-5">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
            Book direct. Pay less.
          </div>

          {/* Headline */}
          <h1 className="font-tiktok font-bold tracking-tight mb-4
            text-[32px] leading-[1.15]
            sm:text-[46px]
            lg:text-[64px] lg:leading-[1.1]">
            Unlock Your Perfect{" "}
            <span className="gold-gradient-text">Holiday</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-[#FFFFFFCC] font-normal mb-8 max-w-[600px]
            text-sm leading-[1.7]
            md:text-base lg:text-lg">
            Discover handpicked holiday homes, villas, cottages and unique
            stays. Book direct with trusted hosts and pay less.
          </p>

          {/* Search Box */}
          <div className="w-full rounded-[20px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-[#ECE7DF]
            py-4 px-4
            sm:py-5 sm:px-6
            lg:py-[25px] lg:px-[30px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-0">

              {/* Destination */}
              <div className="flex-1 pb-3 lg:pb-0 lg:pr-5 border-b lg:border-b-0 lg:border-r border-[#E8E4DC]">
                <p className="text-xs sm:text-sm font-semibold text-[#0F172A] mb-2">Destination</p>
                <div className="flex items-center gap-3 h-11 rounded-full border border-[#E8E4DC] px-4">
                  <Image src="/images/location01.svg" alt="" width={16} height={16} priority />
                  <input type="text" placeholder="Where are you going?"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#9DA4B1] min-w-0" />
                </div>
              </div>

              {/* Check-in */}
              <div className="flex-1 py-3 lg:py-0 lg:px-5 border-b lg:border-b-0 lg:border-r border-[#E8E4DC]">
                <p className="text-xs sm:text-sm font-semibold text-[#0F172A] mb-2">Check-in</p>
                <div className="flex items-center gap-3 h-11 rounded-full border border-[#E8E4DC] px-4">
                  <Image src="/images/date01.svg" alt="" width={16} height={16} priority />
                  <input placeholder="Add date"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#9DA4B1] min-w-0" />
                </div>
              </div>

              {/* Check-out */}
              <div className="flex-1 py-3 lg:py-0 lg:px-5 border-b lg:border-b-0 lg:border-r border-[#E8E4DC]">
                <p className="text-xs sm:text-sm font-semibold text-[#0F172A] mb-2">Check-out</p>
                <div className="flex items-center gap-3 h-11 rounded-full border border-[#E8E4DC] px-4">
                  <Image src="/images/date01.svg" alt="" width={16} height={16} priority />
                  <input placeholder="Add date"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#9DA4B1] min-w-0" />
                </div>
              </div>

              {/* Guests */}
              <div className="flex-1 pt-3 lg:pt-0 lg:pl-5">
                <p className="text-xs sm:text-sm font-semibold text-[#0F172A] mb-2">Guests</p>
                <div className="flex items-center gap-3 h-11 rounded-full border border-[#E8E4DC] px-4">
                  <Image src="/images/user.svg" alt="" width={16} height={16} priority />
                  <input placeholder="Add guests"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#9DA4B1] min-w-0" />
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-4 lg:mt-0 lg:ml-4 shrink-0">
                <button className="w-full lg:w-auto h-11 rounded-full gold-gradient flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 transition hover:opacity-90 active:scale-95">
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>

            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-5 w-full">
            {categories.map(({ icon, label }) => (
              <button
                key={label}
                className="px-4 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs sm:text-sm font-light transition flex items-center gap-1.5 whitespace-nowrap"
              >
                {icon} <span>{label}</span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
