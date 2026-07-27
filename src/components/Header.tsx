"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Destinations", href: "#" },
  { name: "Offers", href: "#" },
  { name: "Event", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white px-[30px] py-[25px]">
      <div className="">
        <div className="flex items-center justify-between pb-5 lg:pb-0">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" alt="KeyToHolidays" width={251} height={58} priority className="" />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-base font-normal text-[#0F172A] transition hover:text-[#E39A16]">
                {item.name}
              </Link>
            ))}
          </nav>

         <div className="hidden items-center gap-[15px] lg:flex">
        <Link
          href="/sign-in"
          className="flex h-12 items-center justify-center rounded-full border border-[#E8E4DC] px-8 text-base !leading-[16px] font-medium transition hover:border-[#E39A16] hover:text-[#E39A16] text-[#0F172A]"
        >
          Sign In
        </Link>

        <Link
          href="/list-your-property"
          className="gold-gradient flex h-12 items-center justify-center rounded-full px-8 text-base !leading-[16px]  font-semibold text-white transition hover:opacity-90"
        >
          List Your Property
        </Link>
      </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="border-t bg-white px-5 py-6">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="text-lg font-medium text-gray-700 hover:text-[#D89216]">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <button className="h-12 rounded-full border border-gray-300 font-medium">Sign In</button>
            <button className="h-12 rounded-full bg-[#D89216] font-semibold text-white">List Your Property</button>
          </div>
        </div>
      </div>
    </header>
  );
}