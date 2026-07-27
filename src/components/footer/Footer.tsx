import NewsletterSection from "./NewsletterSection";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, Lock } from "lucide-react";

const company = [
  "About Us",
  "How It Works",
  "Press & Media",
  "Careers",
  "Blog",
];

const homes = [
  "Beachfront Villas",
  "Luxury Escapes",
  "Family Holidays",
  "Pet Friendly",
  "Private Pools",
];

const destinations = [
  "Spain",
  "Cyprus",
  "Portugal",
  "Greece",
  "Italy",
  "United Kingdom",
];

const support = [
  "Help Centre",
  "Contact Us",
  "Privacy Policy",
  "Terms & Conditions",
  "Cookie Policy",
];

function Footer() {
  return (
    <>
      <NewsletterSection />
      <footer className="bg-[#11182C] text-white">
        <div className="mx-auto max-w-7xl px-6 pt-[70px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={210}
                height={60}
                className="mb-[30px]"
              />

              <p className="max-w-[287px] text-[14px] leading-[22px] text-[#FFFFFFCC]">
                Your trusted holiday rental marketplace. Book direct with
                property owners and pay less.
              </p>

              <div className="mt-5 flex gap-[10px]">
                <Link
                  href="#"
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/10 transition hover:bg-[#F2B62D]"
                >
                  <Image
                    src="/images/facebook.svg"
                    alt="facebook"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link
                  href="#"
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/10 transition hover:bg-[#F2B62D]"
                >
                  <Image
                    src="/images/insta.svg"
                    alt="facebook"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link
                  href="#"
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/10 transition hover:bg-[#F2B62D]"
                >
                  <Image
                    src="/images/linkdin.svg"
                    alt="facebook"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>

              <ul className="space-y-[10px]">
                {company.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[#FFFFFF80] transition hover:text-[#F2B62D] text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Holiday Homes */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Holiday Homes</h3>

              <ul className="space-y-[10px]">
                {homes.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[#FFFFFF80] transition hover:text-[#F2B62D] text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Destinations</h3>

              <ul className="space-y-[10px]">
                {destinations.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[#FFFFFF80] transition hover:text-[#F2B62D] text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Support</h3>

              <ul className="space-y-[10px]">
                {support.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[#FFFFFF80] transition hover:text-[#F2B62D] text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}

          <div className="mt-12 flex flex-col gap-6 pt-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:items-center">
              {/* Email */}
              <Link
                href="mailto:hello@keytoholidays.com"
                className="flex items-center gap-2 text-sm transition hover:text-[#F4B223]"
              >
                <Mail size={15} className="text-white" />
                <span className="text-[#FFFFFF80] hover:text-white">
                  hello@keytoholidays.com
                </span>
              </Link>

              {/* Phone */}
              <Link
                href="tel:+442012345678"
                className="flex items-center gap-2 text-sm transition hover:text-[#F4B223]"
              >
                <Phone size={15} className="text-white" />
                <span className="text-[#FFFFFF80] hover:text-white">
                  +44 (0) 20 1234 5678
                </span>
              </Link>

              {/* Address */}
              <Link
                href="https://maps.google.com/?q=London,United+Kingdom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition hover:text-[#F4B223]"
              >
                <MapPin size={15} className="text-white" />
                <span className="text-[#FFFFFF80] hover:text-white">
                  London, United Kingdom
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck size={15} className="text-white" />
                <span className="text-[#FFFFFF80]">SSL Secured</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Lock size={15} className="text-white" />
                <span className="text-[#FFFFFF80]">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-[39px] border-t border-white/10 py-5 text-center text-sm text-[#FFFFFF80]">
           © {new Date().getFullYear()} KeyToHolidays Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
