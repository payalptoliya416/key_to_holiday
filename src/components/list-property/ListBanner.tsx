import Image from "next/image";
import Link from "next/link"

const features = [
"No Listing Fees",
"Direct Booking Enquiries",
"Reach International Travellers",
"Easy Property Submission",
];

function ListBanner() {
  return (
      <section className="bg-white">
            <div className="container-custom">
              <div className="mb-[25px] flex items-center gap-2 text-sm text-[#64748B]">
                <Link href="/" className="hover:text-[#D69A17]">
                  Home
                </Link>
                <span>/</span>
                <span className="font-semibold text-gold">
                  List Your Property
                </span>
              </div>
    
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <span className="inline-flex items-center rounded-full border !leading-none border-gold bg-[#FFF8E7] px-[15px] py-2 text-sm font-semibold text-gold">
                    ● Property Owners
                  </span>
    
                  <h1 className="mt-[15px] text-4xl font-bold leading-tight text-[#17213C] md:text-5xl xl:text-[56px]">
                    List Your Holiday{" "}
                    <span className="gold-gradient-text">Property</span>
                  </h1>
    
                  <p className="mt-[15px] text-base text-[#64748B]">
                    Reach thousands of travellers looking for trusted holiday homes.
                    List your property for free and start receiving direct booking
                    enquiries through KeyToHolidays.
                  </p>
    
                  <div className="mt-8 grid grid-cols-1 gap-[19px] sm:grid-cols-2 ">
                    {features.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full gold-gradient">
                          <Image
                            src="/images/checkmark-right.svg"
                            alt="check"
                            width={10}
                            height={10}
                            className="object-contain"
                          />
                        </div>
    
                        <span className="text-xs font-normal text-gray-dark">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
    
                  <Link
                    href="/"
                    className="mt-[30px] common-btn"
                  >
                    Start Listing
                  </Link>
                </div>
    
                {/* Right Image */}
                <div className="flex justify-center lg:col-span-6 lg:justify-end">
                  <div className="relative h-[451px] w-full max-w-[608px] overflow-hidden rounded-[16px]">
                    <Image
                      src="/images/list-page.png"
                      alt="Offer"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default ListBanner
