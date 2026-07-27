import Image from "next/image";
import Link from "next/link";

const features = [
  {
    image: "/images/earn01.svg",
    title: "Refer Travelers",
    desc: "Invite friends to book via your link and earn commission on their first stay.",
  },
  {
    image: "/images/earn02.svg",
    title: "Refer Property Owners",
    desc: "Real-time dashboard to monitor your referrals, clicks, and commission earned.",
  },
  {
    image: "/images/earn03.svg",
    title: "Track Earnings",
    desc: "Real-time dashboard to monitor your referrals, clicks, and commission earned.",
  },
  {
    image: "/images/earn04.svg",
    title: "Fast Payouts",
    desc: "Get paid fast via bank transfer or PayPal — no long wait times.",
  },
];

export default function ReferralSection() {
  return (
    <section className="bg-[#131A2E] py-20 lg:py-[90px]">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">
            Earn With Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl md:leading-[46px]">
            Earn Rewards With Our Referral Program
          </h2>

          <p className="mx-auto mt-[15px] max-w-[600px] text-[#FFFFFFB2]">
           Refer guests or property owners and earn commission for successful
bookings. Build a passive income stream with KeyToHolidays.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-[22px] sm:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#FFFFFF1A] bg-[#FFFFFF0D] py-[25px] px-5 transition duration-300 hover:-translate-y-2 hover:border-[#D89A12]/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFFFFF1A]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={22}
                  height={22}
                />
              </div>

              <h3 className="mt-5 text-base !leading-none font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-[10px] text-sm !leading-[24px] text-[#FFFFFF80]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-[50px] flex flex-col items-center justify-center gap-10 md:flex-row md:divide-x md:divide-white/10">
          <div className="px-10 text-center">
            <h3 className="text-4xl !leading-none font-semibold text-white">£45</h3>
            <p className="mt-2 text-[#FFFFFF80] text-sm">
              avg. per traveller referral
            </p>
          </div>

          <div className="px-10 text-center">
            <h3 className="text-4xl !leading-none font-semibold text-white">£120</h3>
            <p className="mt-2 text-[#FFFFFF80] text-sm">
              avg. per host referral
            </p>
          </div>

          <div className="px-10 text-center">
            <h3 className="text-4xl !leading-none font-semibold text-white">2,400+</h3>
            <p className="mt-2 text-[#FFFFFF80] text-sm">
              active partners
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-14 flex justify-center">
         <Link
            href="/become-a-partner"
            className="inline-flex h-12 items-center justify-center rounded-full gold-gradient px-[25px] text-base font-semibold text-white transition hover:bg-[#c48b15]"
            >
            Become A Partner
            </Link>
        </div>
      </div>
    </section>
  );
}