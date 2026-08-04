'use client'

import { Search, Minus, Plus, X, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import DateRangePicker, { DateRange } from './DateRangePicker'

/* ─── Static data ──────────────────────────────────────────── */
const POPULAR_DESTINATIONS = [
  { name: "Cornwall",  sub: "England, United Kingdom" },
  { name: "England",  sub: "United Kingdom" },
  { name: "Scotland", sub: "United Kingdom" },
  { name: "Spain",    sub: "" },
  { name: "France",   sub: "" },
  { name: "Wales",    sub: "United Kingdom" },
];

/* ─── Counter helper ───────────────────────────────────────── */
function Counter({
  label, sublabel, value, setValue, min = 0,
}: {
  label: string; sublabel?: string;
  value: number; setValue: (v: number) => void; min?: number;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm font-semibold text-gray-dark">{label}</p>
        {sublabel && <p className="text-xs text-[#9DA4B1]">{sublabel}</p>}
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          disabled={value <= min}
          onClick={() => setValue(Math.max(min, value - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border-color text-gray-dark disabled:cursor-not-allowed disabled:opacity-40 hover:border-[#F2B62D] hover:text-[#F2B62D]"
        >
          <Minus size={14} />
        </button>
        <span className="w-4 text-center text-sm font-medium text-gray-dark">{value}</span>
        <button
          type="button"
          onClick={() => setValue(value + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border-color text-gray-dark hover:border-[#F2B62D] hover:text-[#F2B62D]"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────── */
function BookingSearch() {
  const [destOpen,  setDestOpen]  = useState(false);
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>({ checkIn: null, checkOut: null });
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults,   setAdults]   = useState(2);
  const [children, setChildren] = useState(0);
  const [infants,  setInfants]  = useState(0);
  const [pets,     setPets]     = useState(0);

  const destRef   = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (destRef.current   && !destRef.current.contains(e.target as Node))   setDestOpen(false);
      if (guestsRef.current && !guestsRef.current.contains(e.target as Node)) setGuestsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const guestsLabel = `${adults + children + infants} guests${pets ? ` · ${pets} pet${pets > 1 ? "s" : ""}` : ""}`;

  return (
    <div className="relative w-full max-w-[1193px] mx-auto rounded-[20px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-[#ECE7DF] py-5 lg:py-[25px] px-5 lg:px-[35px]">
      <div className="grid grid-cols-1 gap-5 xl:gap-[46px] md:grid-cols-2 xl:grid-cols-[2fr_1.1fr_1.1fr_1.2fr_auto]">

        {/* ── Destination ───────────────────────────── */}
        <div
          ref={destRef}
          className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]"
        >
          <p className="mb-[10px] text-sm font-semibold text-gray-dark">Destination</p>
          <div
            onClick={() => setDestOpen(true)}
            className="flex h-10 sm:h-12 items-center gap-3 rounded-full border border-border-color px-4 sm:px-5 cursor-text xl:min-w-[300px]"
          >
            <Image src="/images/location01.svg" alt="" width={18} height={18} />
            <input
              type="text"
              value={destination}
              onFocus={() => setDestOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where are you going?"
              className="w-full bg-transparent text-sm outline-none text-gray-dark placeholder:text-[#9DA4B1]"
            />
            {destination && (
              <button type="button" onClick={(e) => { e.stopPropagation(); setDestination(""); }} className="text-[#9DA4B1] hover:text-gray-dark">
                <X size={16} />
              </button>
            )}
          </div>

          {destOpen && (
            <div className="absolute left-0 right-0 top-full z-30 mt-2 w-full min-w-0 rounded-2xl border border-[#ECE7DF] bg-white p-4 shadow-[0_15px_45px_rgba(0,0,0,0.12)] xl:w-[350px]">
              <p className="mb-2 text-xs font-semibold text-[#9DA4B1]">Popular destinations</p>
              <div className="flex flex-col">
                {POPULAR_DESTINATIONS.filter(d => d.name.toLowerCase().includes(destination.toLowerCase())).map(d => (
                  <button
                    key={d.name}
                    type="button"
                    onClick={() => { setDestination(d.name); setDestOpen(false); }}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-[#F5F3EE]"
                  >
                    <MapPin size={16} className="text-gray-dark shrink-0" />
                    <span>
                      <span className="block text-sm font-medium text-gray-dark">{d.name}</span>
                      {d.sub && <span className="block text-xs text-[#9DA4B1]">{d.sub}</span>}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Date Range Picker (Check-in + Check-out) ── */}
        {/* Wrapping div is `relative` so the calendar panel positions correctly */}
        <div className="relative contents">
          <DateRangePicker variant="hero" value={dateRange} onChange={setDateRange} />
        </div>

        {/* ── Guests ────────────────────────────────── */}
        <div ref={guestsRef} className="relative">
          <p className="mb-[10px] text-sm font-semibold text-gray-dark">Guests</p>
          <div
            onClick={() => setGuestsOpen(v => !v)}
            className="flex h-10 sm:h-12 items-center gap-3 rounded-full border border-border-color px-4 sm:px-5 cursor-pointer xl:min-w-[183px]"
          >
            <Image src="/images/user.svg" alt="" width={18} height={18} />
            <span className="w-full truncate text-sm text-gray-dark">
              {adults + children + infants > 0 ? guestsLabel : "Add guests"}
            </span>
          </div>

          {guestsOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-full min-w-[260px] rounded-2xl border border-[#ECE7DF] bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.12)] divide-y divide-[#ECE7DF]">
              <Counter label="Adults"   value={adults}   setValue={setAdults}   min={1} />
              <Counter label="Children" sublabel="Aged 3–17"     value={children} setValue={setChildren} />
              <Counter label="Infants"  sublabel="Aged up to 2"  value={infants}  setValue={setInfants} />
              <Counter label="Pets"     value={pets}     setValue={setPets} />
              <div className="pt-3 flex justify-end">
                <button
                  onClick={() => setGuestsOpen(false)}
                  className="gold-gradient rounded-full px-5 py-2 text-xs font-semibold text-white cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Search ────────────────────────────────── */}
        <div className="md:col-span-2 xl:col-span-1 flex items-center">
          <button className="w-full gap-2 xl:w-auto common-btn">
            <Search size={20} />
            Search
          </button>
        </div>

      </div>
    </div>
  );
}

export default BookingSearch;
