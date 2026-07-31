import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="bg-[#F1F5F9] py-12 lg:py-[90px]">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          {/* Small Heading */}
          <p className="section-tag">
            Stay Inspired
          </p>

          {/* Main Heading */}
          <h2 className="section-title !mt-5">
            Subscribe & Win 10% Off Your Next Booking
          </h2>

          {/* Description */}
          <p className="mx-auto mt-[15px] max-w-[568px] text-base leading-8 text-[#6B7280]">
            Join our newsletter to receive exclusive travel deals, hidden gems,
            and a 10% discount coupon for your next trip.
          </p>

          {/* Subscribe Form */}
          <div className="mx-auto mt-10 flex w-full sm:max-w-2xl flex-col overflow-hidden rounded-3xl sm:rounded-full sm:border border-[#E8E4DC] sm:bg-white sm:flex-row">
            <div className="flex flex-1 items-center px-6 py-4 bg-white sm:bg-transparent rounded-full sm:rounded mb-3 sm:mb-0">
              <Mail size={20} className="mr-3 text-black" />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-[#182033] placeholder:text-[#6B7280] focus:outline-none text-xs sm:text-sm sm:placeholder:text-sm placeholder:text-xs"
              />
            </div>

            {/* Button */}
            <button className="gold-gradient sm:m-1 rounded-3xl sm:rounded-full px-8 py-4 font-semibold text-white transition hover:opacity-90 sm:px-10 text-sm">
              Subscribe
            </button>
          </div>

          {/* Bottom Text */}
          <p className="mt-4 text-xs text-[#6B7280]">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  );
}