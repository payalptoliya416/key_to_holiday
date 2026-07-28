import { Search } from "lucide-react";
import Image from "next/image";

function HeroBanner() {
  return (
    <>
      <div className="px-[30px]">
        <div className="relative min-h-[765px] w-full flex flex-col justify-between p-4 md:p-8 text-white overflow-hidden rounded-[22px]">
          <div className="absolute inset-0 -z-10 bg-[url('/images/home-hero-bg.jpg')] bg-[length:100%_100%] bg-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172ABF] via-[#0F172A8C] to-[#0F172ABF]" />
          <div className="flex flex-col items-center mx-auto my-auto px-4">
            <div className="inline-flex items-center gap-2 backdrop-blur-md text-sm text-[#FFFFFFE5] border border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-[999px] py-[10px] px-[15px] mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              Book direct. Pay less.
            </div>
            <h1 className="text-4xl md:text-[64px] font-bold tracking-tight mb-5 !leading-[64px] font-tiktok">
              Unlock Your Perfect{" "}
              <span className="gold-gradient-text">Holiday</span>
            </h1>

            <p className="text-[#FFFFFFCC] text-sm md:text-lg max-w-2xl font-normal mb-[35px] text-center">
              Discover handpicked holiday homes, villas, cottages and unique
              stays. Book direct with trusted hosts and pay less.
            </p>
            <div className="w-full rounded-[20px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-[#ECE7DF] py-[25px] px-[35px]">
              <div className="flex flex-col lg:flex-row lg:items-center">
                {/* Destination */}
                <div className="flex-1 lg:pe-5 border-b lg:border-b-0 lg:border-r border-[#E8E4DC]">
                  <p className="text-sm font-semibold text-[#0F172A] mb-[10px]">
                    Destination
                  </p>

                  <div className="flex items-center gap-3 h-[48px] rounded-full border border-[#E8E4DC] px-5">
                    <Image
                      src="/images/location01.svg"
                      alt="KeyToHolidays"
                      width={18}
                      height={18}
                      priority
                    />

                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="flex-1 bg-transparent outline-none text-[16px] placeholder:text-[#9DA4B1]"
                    />
                  </div>
                </div>

                {/* Check In */}
                <div className="flex-1 lg:px-[23px] py-2 border-b lg:border-b-0 lg:border-r border-[#E8E4DC]">
                  <p className="text-sm font-semibold text-[#0F172A] mb-[10px]">
                    Check-in
                  </p>

                  <div className="flex items-center gap-3 h-[48px] rounded-full border border-[#E8E4DC] px-5">
                    <Image
                      src="/images/date01.svg"
                      alt="KeyToHolidays"
                      width={18}
                      height={18}
                      priority
                    />

                    <input
                      placeholder="Add date"
                      className="flex-1 bg-transparent outline-none text-[16px] placeholder:text-[#9DA4B1]"
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div className="flex-1 lg:px-[23px] py-2 border-b lg:border-b-0 lg:border-r border-[#E8E4DC]">
                  <p className="text-sm font-semibold text-[#0F172A] mb-[10px]">
                    Check-out
                  </p>

                  <div className="flex items-center gap-3 h-[48px] rounded-full border border-[#E8E4DC] px-5">
                    <Image
                      src="/images/date01.svg"
                      alt="KeyToHolidays"
                      width={18}
                      height={18}
                      priority
                    />

                    <input
                      placeholder="Add date"
                      className="flex-1 bg-transparent outline-none text-[16px] placeholder:text-[#9DA4B1]"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="flex-1 lg:px-6 py-2">
                  <p className="text-sm font-semibold text-[#0F172A] mb-[10px]">
                    Guests
                  </p>

                  <div className="flex items-center gap-3 h-[48px] rounded-full border border-[#E8E4DC] px-5">
                    <Image
                      src="/images/user.svg"
                      alt="KeyToHolidays"
                      width={18}
                      height={18}
                      priority
                    />

                    <input
                      placeholder="Add guests"
                      className="flex-1 bg-transparent outline-none text-[16px] placeholder:text-[#9DA4B1]"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="mt-5 lg:mt-0 lg:ml-6">
                  <button className="h-[48px] rounded-full gold-gradient transition flex items-center justify-center gap-2 text-white font-semibold text-[18px] px-[25px] py-[16px] text-base !leading-none">
                    <Search className="w-5 h-5" />
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap pb-4 mt-5">
              <button className="px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-white/20 backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-[15px]">
                🏖️ <span>Beachfront</span>
              </button>
              <button className="px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-1.5">
                🏡 <span>Private Pool</span>
              </button>
              <button className="px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-1.5">
                🌿 <span>Countryside</span>
              </button>
              <button className="px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-1.5">
                ⚡ <span>Mountain</span>
              </button>
              <button className="px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-1.5">
                🌊 <span>Seafront</span>
              </button>
              <button className="px-5 py-2 rounded-full bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] backdrop-blur-md border border-[#FFFFFF33] text-xs md:text-sm font-light transition flex items-center gap-1.5">
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
