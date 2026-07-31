import { Search } from "lucide-react";
import Image from "next/image";
import BookingSearch from "../Booking/BookingSearch";

function DestinationBanner() {
  return (
    <>
      <div className="px-4 md:px-[30px]">
        <div className="relative min-h-[765px] w-full flex flex-col justify-between p-4 md:p-8 text-white rounded-[22px]">
          <div className="absolute inset-0 -z-10 bg-[url('/images/destination-banner.png')] bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172ABF] via-[#0F172A8C] to-[#0F172ABF]" />
          <div className="flex flex-col items-center mx-auto my-auto">
            <div className="inline-flex items-center gap-2 backdrop-blur-md text-sm text-[#FFFFFFE5] border border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-[999px] py-[10px] px-[15px] mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
             Explore the World
            </div>
            <h1 className="text-4xl md:text-[64px] font-bold tracking-tight mb-5 md:!leading-[64px] font-tiktok text-center">
              Explore Amazingt{" "}
              <span className="gold-gradient-text">Destinations</span>
            </h1>

            <p className="text-[#FFFFFFCC] text-sm md:text-lg max-w-[820px] font-normal mb-[35px] text-center">
            Discover handpicked holiday homes in the world's most beautiful destinations. From beach
            escapes to mountain retreats, find your perfect holiday.
            </p>
             <BookingSearch />
            <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap pb-4 mt-5">
              <button className="hero-basic-btn">
                 <span>Spain</span>
              </button>
              <button className="hero-basic-btn">
                 <span>Portugal</span>
              </button>
              <button className="hero-basic-btn">
                 <span>Italy</span>
              </button>
              <button className="hero-basic-btn">
                <span>Greece</span>
              </button>
              <button className="hero-basic-btn">
                <span>Cyprus</span>
              </button>
              <button className="hero-basic-btn">
                 <span>France</span>
              </button>
              <button className="hero-basic-btn">
                 <span>Croatia</span>
              </button>
              <button className="hero-basic-btn">
                 <span>United Kingdom</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationBanner;
