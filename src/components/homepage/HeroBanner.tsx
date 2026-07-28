import { Search } from "lucide-react";
import Image from "next/image";

function HeroBanner() {
  return (
    <>
      <div className="px-[30px]">
        <div className="relative min-h-[765px] w-full flex flex-col justify-between p-4 md:p-8 text-white overflow-hidden rounded-[22px]">
          <div className="absolute inset-0 -z-10 bg-[url('/images/home-hero-bg.jpg')] bg-cover md:bg-[length:100%_100%] bg-center" />
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
            <div className="w-full max-w-[1193px] mx-auto rounded-[20px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-[#ECE7DF] py-5 lg:py-[25px] px-5 lg:px-[35px]">
              <div className="grid grid-cols-1 gap-5 xl:gap-[46px] md:grid-cols-2 xl:grid-cols-[2fr_1.1fr_1.1fr_1.2fr_auto]">

                {/* Destination */}
                <div className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]">
                    <p className="mb-[10px] text-sm font-semibold text-[#0F172A]">
                    Destination
                    </p>

                    <div className="flex h-12 items-center gap-3 rounded-full border border-[#E8E4DC] px-5">
                    <Image
                        src="/images/location01.svg"
                        alt=""
                        width={18}
                        height={18}
                    />

                    <input
                        type="text"
                        placeholder="Where are you going?"
                        className="w-full bg-transparent text-base outline-none placeholder:text-[#9DA4B1]"
                    />
                    </div>
                </div>

                {/* Check In */}
                <div className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]">
                    <p className="mb-[10px] text-sm font-semibold text-[#0F172A]">
                    Check-in
                    </p>

                    <div className="flex h-12 items-center gap-3 rounded-full border border-[#E8E4DC] px-5">
                    <Image
                        src="/images/date01.svg"
                        alt=""
                        width={18}
                        height={18}
                    />

                    <input
                        type="text"
                        placeholder="Add date"
                        className="w-full bg-transparent text-base outline-none placeholder:text-[#9DA4B1]"
                    />
                    </div>
                </div>

                {/* Check Out */}
                <div className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]">
                    <p className="mb-[10px] text-sm font-semibold text-[#0F172A]">
                    Check-out
                    </p>

                    <div className="flex h-12 items-center gap-3 rounded-full border border-[#E8E4DC] px-5">
                    <Image
                        src="/images/date01.svg"
                        alt=""
                        width={18}
                        height={18}
                    />

                    <input
                        type="text"
                        placeholder="Add date"
                        className="w-full bg-transparent text-base outline-none placeholder:text-[#9DA4B1]"
                    />
                    </div>
                </div>

                {/* Guests */}
                <div className="">
                    <p className="mb-[10px] text-sm font-semibold text-[#0F172A]">
                    Guests
                    </p>

                    <div className="flex h-12 items-center gap-3 rounded-full border border-[#E8E4DC] px-5">
                    <Image
                        src="/images/user.svg"
                        alt=""
                        width={18}
                        height={18}
                    />

                    <input
                        type="text"
                        placeholder="Add guests"
                        className="w-full bg-transparent text-base outline-none placeholder:text-[#9DA4B1]"
                    />
                    </div>
                </div>

                {/* Search Button */}
                <div className="md:col-span-2 xl:col-span-1 flex items-end">
                    <button className="gold-gradient flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-white xl:w-auto">
                    <Search size={20} />
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
