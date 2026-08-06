
import Image from "next/image";
import Link from "next/link";

export default function PropertyOwnerCTA() {
  return (
    <section className="section-space">
      <div className="container-custom">
        <div
          className="relative overflow-hidden rounded-[32px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/income.jpg')",
          }}
        >
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.88) 100%)",
            }}
          />
          {/* Content */}
          <div className="relative z-10 px-5 py-5 sm:py-14 sm:px-12 lg:px-[60px] lg:py-[60px]">
            <div className="max-w-xl">
              <span className="section-tag">FOR PROPERTY OWNERS</span>

              <h2 className="mt-[18px] text-4xl font-bold leading-tight text-white md:text-[44px]">
                Turn Your Property
                <br />
                Into Income
              </h2>

              <p className="mt-[14px] text-base leading-[26px] text-[#FFFFFFB2] w-full max-w-[454px]">
                List your holiday home and reach travellers worldwide. No
                middleman fees – you keep more of every booking.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/list-property"
                  className="inline-flex px-[25px] common-btn"
                >
                  List Your Property
                </Link>

                <Link
                  href="/"
                  className="h-10 sm:h-12 inline-flex items-center justify-center rounded-full border border-[#FFFFFF4D] px-[25px] py-4 font-semibold text-white transition hover:bg-white hover:text-[#131A2E] w-max"
                >
                  Learn More
                </Link>
              </div>

              {/* Features */}
              <div className="mt-[30px] flex flex-wrap gap-x-5 gap-y-4">
                <div className="flex items-center gap-2 text-[#FFFFFFB2] text-sm">
                  <Image
                    src="/images/checkmark.svg"
                    alt="check"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <span>Free to list</span>
                </div>

                <div className="flex items-center gap-2 text-[#FFFFFFB2] text-sm">
                  <Image
                    src="/images/checkmark.svg"
                    alt="check"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <span>You set the price</span>
                </div>

                <div className="flex items-center gap-2 text-[#FFFFFFB2] text-sm">
                  <Image
                    src="/images/checkmark.svg"
                    alt="check"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <span>Full calendar control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
