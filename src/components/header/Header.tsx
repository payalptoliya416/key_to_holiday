"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Destinations", href: "/destinations" },
  { name: "Offers", href: "/offers" },
  { name: "Event", href: "/events" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isSignInPage = pathname === "/sign-in";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
  setOpen(false);
};
  return (
    <header className="sticky top-0 z-50 bg-white px-5 py-4 md:px-6 lg:px-[30px] lg:py-[25px]">
      <div className="">
        <div className="flex items-center justify-between pb-5 lg:pb-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="KeyToHolidays"
              width={251}
              height={58}
              priority
              className="h-10 w-auto lg:h-[58px]"
            />
          </Link>

     <nav className="hidden items-center gap-5 lg:flex">
  {navItems.map((item) => {
    const isActive =
      pathname === item.href || pathname.startsWith(`${item.href}/`);

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={handleClose}
        className={`nav-link ${
          isActive ? "nav-link-active" : ""
        }`}
      >
        {item.name}
      </Link>
    );
  })}
</nav>

          <div className="hidden items-center gap-[15px] lg:flex">
            {!isSignInPage && (
              <Link
                href="/"
                className="flex h-12 items-center justify-center rounded-full border border-border-color px-8 text-base font-medium text-gray-dark transition hover:border-[#E39A16] hover:text-[#E39A16]"
              >
                Sign In
              </Link>
            )}

            <Link href="/list-property" className="common-btn">
              List Your Property
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-7 w-7 text-gray-dark" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-[340px] bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-4 py-5">
            <Image src="/images/logo.svg" alt="logo" width={170} height={40} />

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 transition hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav */}
          <nav className="px-6 py-8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {!isSignInPage && (
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex h-10 sm:h-12 items-center justify-center rounded-full border border-border-color font-medium transition hover:border-[#E39A16] hover:text-[#E39A16] text-sm sm:text-base"
                >
                  Sign In
                </Link>
              )}

              <Link
                href="/list-property"
                onClick={() => setOpen(false)}
                className="gold-gradient flex h-10 sm:h-12 items-center justify-center rounded-full font-semibold text-white text-sm sm:text-base"
              >
                List Your Property
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
