import Image from 'next/image'
import BookingSearch from '../Booking/BookingSearch'

function EventBanner() {
  return (
    <div className="px-4 md:px-[30px]">
        <div className="relative min-h-[623px] w-full flex flex-col justify-between p-4 md:p-8 text-white rounded-[22px]">
          {/* <div className="absolute inset-0 -z-10 bg-[url('/images/destination-banner.png')] bg-cover bg-center rounded-[22px]" /> */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-[22px]">
          <Image
            src="/images/destination-banner.png"
            alt="Destination Banner"
            fill
            priority
            fetchPriority="high"
            loading="eager"
            quality={100}
            sizes="100vw"
            className="object-cover rounded-[22px]"
          />
        </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172ABF] via-[#0F172A8C] to-[#0F172ABF] rounded-[22px]" />
          <div className="flex flex-col items-center mx-auto my-auto">
            <div className="hero-tag">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              Event Travel
            </div>
            <h1 className="text-4xl md:text-[64px] font-bold tracking-tight mb-5 font-tiktok text-center w-full max-w-[800px]">
              Stay Close To The{" "}
              <span className="gold-gradient-text">
                Country’s Biggest Events
              </span>
            </h1>

            <p className="text-[#FFFFFFCC] text-sm md:text-lg max-w-[820px] font-normal mb-[35px] text-center">
              Find premium holiday homes near concerts, festivals, sporting
              events and cultural celebrations. Book direct and enjoy the
              experience without paying extra booking fees.
            </p>
             <BookingSearch/>
          </div>
        </div>
      </div>
  )
}

export default EventBanner
