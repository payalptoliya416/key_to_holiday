import Image from "next/image";

const features = [
  {
    image: "/images/book01.svg",
    title: "No middleman fees",
    desc: "Connect directly with property owners — zero platform markup on bookings.",
  },
  {
    image: "/images/book02.svg",
    title: "Better prices",
    desc: "Save up to 20% compared to traditional booking platforms.",
  },
  {
    image: "/images/book03.svg",
    title: "Direct communication",
    desc: "Chat directly with hosts for a personalised, seamless stay experience.",
  },
  {
    image: "/images/book04.svg",
    title: "Transparent booking process",
    desc: "Full pricing visibility with no hidden charges or surprise fees.",
  },
  {
    image: "/images/book05.svg",
    title: "Verified holiday homes",
    desc: "All properties are manually reviewed and verified by our team.",
  },
];

export default function WhyBookDirect() {
  return (
    <section className="bg-[#FAF8F5] py-12 lg:py-[90px]">
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="overflow-hidden rounded-[34px]">
              <Image
                src="/images/book.png"
                alt="Why Book Direct"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 right-2 md:right-6 rounded-2xl bg-[#D4A017] px-5 py-6 text-white shadow-[20px]">
              <h3 className="text-[28px] font-bold leading-none">20%</h3>
              <p className="mt-[7px] text-xs !leading-none font-medium text-[#FFFFFFCC]">
                average savings
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="section-tag">THE SMART WAY TO BOOK</span>

            <h2 className="mt-[10px] text-4xl font-bold leading-tight text-[#0F172A] lg:text-[40px]">
              Why Book Direct With Us?
            </h2>

            <p className="mt-[15px] text-base !leading-[26px] text-[#6B7280]">
              Bypass the big booking platforms and connect directly with
              verified property owners. Better experience, lower prices, every
              time.
            </p>

            <div className="mt-[35px] space-y-[30px]">
              {features.map((item, index) => {
                return (
                  <div key={index} className="flex gap-[10px]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF3D9]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm !leading-none font-semibold text-[#0F172A]">
                        {item.title}
                      </h3>

                      <p className="mt-[10px] text-sm text-[#6B7280]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
