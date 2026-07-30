import { Search } from "lucide-react";
import Image from "next/image";
import BookingSearch from "../Booking/BookingSearch";

function HeroBanner() {
  return (
    <>
      <div className="px-[30px]">
        <div className="relative min-h-[765px] w-full flex flex-col justify-between p-4 md:p-8 text-white rounded-[22px]">
          <div className="absolute inset-0 -z-10 bg-[url('/images/home-hero-bg.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172ABF] via-[#0F172A8C] to-[#0F172ABF]" />
          <div className="flex flex-col items-center mx-auto my-auto">
            <div className="inline-flex items-center gap-2 backdrop-blur-md text-sm text-[#FFFFFFE5] border border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-[999px] py-[10px] px-[15px] mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              Book direct. Pay less.
            </div>
            <h1 className="text-4xl md:text-[64px] font-bold tracking-tight mb-5 md:!leading-[64px] font-tiktok text-center">
              Unlock Your Perfect{" "}
              <span className="gold-gradient-text">Holiday</span>
            </h1>

            <p className="text-[#FFFFFFCC] text-sm md:text-lg max-w-2xl font-normal mb-[35px] text-center">
              Discover handpicked holiday homes, villas, cottages and unique
              stays. Book direct with trusted hosts and pay less.
            </p>
            <BookingSearch/>
            <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap flex-col sm:flex-row pb-4 mt-5">
              <button className="px-3 sm:px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-white/20 backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-[15px]">
                🏖️ <span>Beachfront</span>
              </button>
              <button className="px-3 sm:px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-[15px]">
                🏡 <span>Private Pool</span>
              </button>
              <button className="px-3 sm:px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-[15px]">
                🌿 <span>Countryside</span>
              </button>
              <button className="px-3 sm:px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-[15px]">
                ⚡ <span>Mountain</span>
              </button>
              <button className="px-3 sm:px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-[15px]">
                🌊 <span>Seafront</span>
              </button>
              <button className="px-3 sm:px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-[15px]">
                📅 <span>Events</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
