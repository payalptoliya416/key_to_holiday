
import BookingSearch from "../Booking/BookingSearch";

function HeroBanner() {
  return (
    <>
      <div className="px-4 md:px-[30px]">
        <div className="relative min-h-[765px] w-full flex flex-col justify-between p-4 md:p-8 text-white
         rounded-[22px]">
          <div className="absolute inset-0 -z-10 bg-[url('/images/home-hero-bg.jpg')] bg-cover bg-center rounded-[22px]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172ABF] via-[#0F172A8C] to-[#0F172ABF]  rounded-[22px]" />
          <div className="flex flex-col items-center mx-auto my-auto">
            <div className="hero-tag">
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
            <div className="mt-5 grid grid-cols-2 gap-3 pb-4 sm:grid-cols-3 lg:grid-cols-6">
          <button className="home-hero-label">
            🏖️ <span>Beachfront</span>
          </button>

          <button className="home-hero-label">
            🏡 <span>Private Pool</span>
          </button>

          <button className="home-hero-label">
            🌿 <span>Countryside</span>
          </button>

          <button className="home-hero-label">
            ⚡ <span>Mountain</span>
          </button>

          <button className="home-hero-label">
            🌊 <span>Seafront</span>
          </button>

          <button className="home-hero-label">
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
