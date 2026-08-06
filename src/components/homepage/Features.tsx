
import Image from "next/image";

const features = [
  {
    icon: "/images/f1.svg",
    title: "Verified Properties",
    desc: "Every home is personally verified for quality and accuracy.",
  },
  {
    icon: "/images/f2.svg",
    title: "Best Direct Prices",
    desc: "No booking fees. Pay the host directly and save more.",
  },
  {
    icon: "/images/f3.svg",
    title: "Secure Booking",
    desc: "Protected payments with encrypted, secure transactions.",
  },
  {
    icon: "/images/f4.svg",
    title: "24/7 Support",
    desc: "Expert travel support around the clock, whenever you need.",
  },
];

export default function Features() {
  return (
    <section className="pt-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[22px]">
          {features.map((item, index) => {

            return (
              <div
                key={index}
                className="rounded-[18px] border border-border-color py-4 sm:py-[25px] px-4 sm:px-5 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F6F2]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px]"
                  />
                </div>

                <h3 className="mb-[10px] text-base !leading-none font-semibold text-gray-dark">
                  {item.title}
                </h3>

                <p className="text-sm !leading-[24px] text-light-dark">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
