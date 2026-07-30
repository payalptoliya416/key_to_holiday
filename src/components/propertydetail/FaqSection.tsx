"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

/* ─── FAQ data ─────────────────────────────────────────────── */
const faqs = [
  {
    q: "How do I book a property?",
    a: "Simply select your dates, number of guests, and click Book Now. You can pay securely online and receive instant confirmation.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Free cancellation is available up to 14 days before check-in. Cancellations within 14 days are subject to a 50% charge. Please review the full policy on your booking confirmation.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No hidden fees. The total shown at checkout includes the nightly rate, cleaning fee, and service fee — nothing extra.",
  },
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is from 3:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available on request.",
  },
  {
    q: "Are pets allowed?",
    a: "Yes, well-behaved pets are welcome at this property. Please inform the host in advance.",
  },
  {
    q: "Can children stay at the property?",
    a: "Absolutely. This villa is family-friendly and suitable for children of all ages. A travel cot and highchair can be arranged on request.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <>
        <div className="container-custom">
          {/* Heading */}
          <div className="mb-8 text-center">
            <p className="section-tag">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          {/* Accordion items */}
          <div className="space-y-3.75">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-[10px] border border-[#EBEBEB] bg-white"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`flex w-full items-center justify-between px-5 py-5.5 text-left transition cursor-pointer ${
                      isOpen ? "border-b border-[#EBEBEB]" : ""
                    }`}
                  >
                    <span className="text-sm leading-3.5 font-medium text-[#1A1A1A]">
                      {faq.q}
                    </span>
                    <span
                      className={`ml-4 flex shrink-0 items-center justify-center transition`}
                    >
                      {isOpen ? (
                        <span className="text-base font-light leading-none text-[#E8A020]">
                          <Minus size={14} />
                        </span>
                      ) : (
                        <span className="text-base font-light leading-none text-[#E8A020]">
                          <Plus size={14} />
                        </span>
                      )}
                    </span>
                  </button>

                  {/* Answer — animated */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <p className="p-5 text-sm leading-5 text-[#888888]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </>
  );
}

export default FaqSection;
