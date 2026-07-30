'use client'

import { Search, ChevronLeft, ChevronRight, Minus, Plus, X, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/* ---------------- Static Data ---------------- */

const POPULAR_DESTINATIONS = [
  { name: "Cornwall", sub: "England, United Kingdom" },
  { name: "England", sub: "United Kingdom" },
  { name: "Scotland", sub: "United Kingdom" },
  { name: "Spain", sub: "" },
  { name: "France", sub: "" },
  { name: "Wales", sub: "United Kingdom" },
];

const DURATIONS = ["Weekend", "3 nights", "5 nights", "7 nights", "10 nights", "14 nights"];
const FLEXIBILITY = ["Exact dates", "+/- 1 day", "+/- 3 days", "+/- 7 days"];

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/* ---------------- Helpers ---------------- */

function getMonthMatrix(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const startWeekday = (firstDay.getDay() + 6) % 7; // Mon = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function isPastDate(year: number, month: number, day: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(year, month, day);
  return d < today;
}

function sameDate(a: Date | null, b: { y: number; m: number; d: number }) {
  if (!a) return false;
  return a.getFullYear() === b.y && a.getMonth() === b.m && a.getDate() === b.d;
}

function BookingSearch() {
  const [destOpen, setDestOpen] = useState(false);
  const [destination, setDestination] = useState("");

  const [dateOpen, setDateOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [duration, setDuration] = useState(DURATIONS[3]);
  const [flexibility, setFlexibility] = useState(FLEXIBILITY[2]);

  const [guestsOpen, setGuestsOpen] = useState(false);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const destRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const [leftMonth, setLeftMonth] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const rightMonth = (() => {
    const m = leftMonth.month + 1;
    return m > 11
      ? { year: leftMonth.year + 1, month: 0 }
      : { year: leftMonth.year, month: m };
  })();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (destRef.current && !destRef.current.contains(e.target as Node))
        setDestOpen(false);

      if (dateRef.current && !dateRef.current.contains(e.target as Node))
        setDateOpen(false);

      if (guestsRef.current && !guestsRef.current.contains(e.target as Node))
        setGuestsOpen(false);
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  const guestsLabel = `${adults + children + infants} guests - ${pets} pets`;
  const dateLabel = checkIn
    ? checkIn.toLocaleDateString("en-GB", { day: "numeric", month: "short" })
    : "";

  function goPrevMonth() {
    setLeftMonth((prev) => {
      const m = prev.month - 1;
      return m < 0 ? { year: prev.year - 1, month: 11 } : { year: prev.year, month: m };
    });
  }
  function goNextMonth() {
    setLeftMonth((prev) => {
      const m = prev.month + 1;
      return m > 11 ? { year: prev.year + 1, month: 0 } : { year: prev.year, month: m };
    });
  }

  function renderCalendar(year: number, month: number, showPrevArrow: boolean, showNextArrow: boolean) {
    const cells = getMonthMatrix(year, month);
    return (
      <div className="flex-1">
        <div className="mb-3 flex items-center justify-between">
          {showPrevArrow ? (
            <button
              type="button"
              onClick={goPrevMonth}
              className="rounded-full p-1 text-[#0F172A] hover:bg-[#F5F3EE]"
            >
              <ChevronLeft size={18} />
            </button>
          ) : (
            <span className="w-6" />
          )}
          <p className="text-sm font-semibold text-[#0F172A]">
            {MONTH_NAMES[month]} {year}
          </p>
          {showNextArrow ? (
            <button
              type="button"
              onClick={goNextMonth}
              className="rounded-full p-1 text-[#0F172A] hover:bg-[#F5F3EE]"
            >
              <ChevronRight size={18} />
            </button>
          ) : (
            <span className="w-6" />
          )}
        </div>

        <div className="grid grid-cols-7 gap-y-2 text-center">
          {WEEK_DAYS.map((wd) => (
            <span key={wd} className="text-xs font-medium text-[#9DA4B1]">
              {wd}
            </span>
          ))}

          {cells.map((day, idx) => {
            if (day === null) return <span key={idx} />;

            const past = isPastDate(year, month, day);
            const selected = sameDate(checkIn, { y: year, m: month, d: day });

            return (
              <button
                type="button"
                key={idx}
                disabled={past}
                onClick={() => setCheckIn(new Date(year, month, day))}
                className={[
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors",
                  past
                    ? "text-[#D8D8D8] line-through cursor-not-allowed"
                    : selected
                    ? "bg-[#0F172A] text-white font-semibold"
                    : "text-[#0F172A] hover:bg-[#F5F3EE]",
                ].join(" ")}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function Counter({
    label,
    sublabel,
    value,
    setValue,
    min = 0,
  }: {
    label: string;
    sublabel?: string;
    value: number;
    setValue: (v: number) => void;
    min?: number;
  }) {
    return (
      <div className="flex items-center justify-between py-3">
        <div>
          <p className="text-sm font-semibold text-[#0F172A]">{label}</p>
          {sublabel && <p className="text-xs text-[#9DA4B1]">{sublabel}</p>}
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            disabled={value <= min}
            onClick={() => setValue(Math.max(min, value - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E4DC] text-[#0F172A] disabled:cursor-not-allowed disabled:opacity-40 hover:border-[#0F172A]"
          >
            <Minus size={14} />
          </button>
          <span className="w-4 text-center text-sm font-medium text-[#0F172A]">
            {value}
          </span>
          <button
            type="button"
            onClick={() => setValue(value + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E4DC] text-[#0F172A] hover:border-[#0F172A]"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-[1193px] mx-auto rounded-[20px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-[#ECE7DF] py-5 lg:py-[25px] px-5 lg:px-[35px]">
        <div className="grid grid-cols-1 gap-5 xl:gap-[46px] md:grid-cols-2 xl:grid-cols-[2fr_1.1fr_1.1fr_1.2fr_auto]">

          {/* Destination */}
          <div
            ref={destRef}
            className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]"
          >
            <p className="mb-[10px] text-sm font-semibold text-[#0F172A]">
              Destination
            </p>

            <div
              onClick={() => setDestOpen(true)}
              className="flex h-10 sm:h-12 items-center gap-3 rounded-full border border-[#E8E4DC] px-4 sm:px-5 cursor-text"
            >
              <Image
                src="/images/location01.svg"
                alt=""
                width={18}
                height={18}
              />

              <input
                type="text"
                value={destination}
                onFocus={() => setDestOpen(true)}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where are you going?"
                className="w-full bg-transparent text-sm outline-none text-[#0F172A] placeholder:text-[#9DA4B1] placeholder:text-sm"
              />

              {destination && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDestination("");
                  }}
                  className="text-[#9DA4B1] hover:text-[#0F172A]"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {destOpen && (
              <div className="absolute left-0 top-full z-20 mt-2 w-full min-w-[280px] rounded-2xl border border-[#ECE7DF] bg-white p-4 shadow-[0_15px_45px_rgba(0,0,0,0.12)]">
                <p className="mb-2 text-xs font-semibold text-[#9DA4B1]">
                  Popular destinations
                </p>
                <div className="flex flex-col">
                  {POPULAR_DESTINATIONS.filter((d) =>
                    d.name.toLowerCase().includes(destination.toLowerCase())
                  ).map((d) => (
                    <button
                      key={d.name}
                      type="button"
                      onClick={() => {
                        setDestination(d.name);
                        setDestOpen(false);
                      }}
                      className="flex items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-[#F5F3EE]"
                    >
                      <MapPin size={16} className="text-[#0F172A] shrink-0" />
                      <span>
                        <span className="block text-sm font-medium text-[#0F172A]">
                          {d.name}
                        </span>
                        {d.sub && (
                          <span className="block text-xs text-[#9DA4B1]">{d.sub}</span>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Check In */}
          <div
            ref={dateRef}
            className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]"
          >
            <p className="mb-[10px] text-sm font-semibold text-[#0F172A]">
              Check-in
            </p>

            <div
              onClick={() => setDateOpen((v) => !v)}
              className="flex h-10 sm:h-12 items-center gap-3 rounded-full border border-[#E8E4DC] px-4 sm:px-5 cursor-pointer"
            >
              <Image
                src="/images/date01.svg"
                alt=""
                width={18}
                height={18}
              />

              <span
                className={`w-full truncate text-sm ${
                  checkIn ? "text-[#0F172A]" : "text-[#9DA4B1]"
                }`}
              >
                {dateLabel || "Add date"}
              </span>
            </div>

            {dateOpen && (
              <div className="absolute left-0 top-full z-20 mt-2 w-[320px] sm:w-[600px] rounded-2xl border border-[#ECE7DF] bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.12)]">
                <div className="mb-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold text-[#9DA4B1]">Duration</p>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full rounded-full border border-[#E8E4DC] px-4 py-2 text-sm text-[#0F172A] outline-none"
                    >
                      {DURATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold text-[#9DA4B1]">Flexibility</p>
                    <select
                      value={flexibility}
                      onChange={(e) => setFlexibility(e.target.value)}
                      className="w-full rounded-full border border-[#E8E4DC] px-4 py-2 text-sm text-[#0F172A] outline-none"
                    >
                      {FLEXIBILITY.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  {renderCalendar(leftMonth.year, leftMonth.month, true, false)}
                  <div className="hidden sm:block w-px bg-[#ECE7DF]" />
                  {renderCalendar(rightMonth.year, rightMonth.month, false, true)}
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setDateOpen(false)}
                    className="gold-gradient rounded-full px-6 py-2 text-sm font-semibold text-white"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Check Out */}
          <div className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]">
            <p className="mb-[10px] text-sm font-semibold text-[#0F172A]">
              Check-out
            </p>

            <div
              onClick={() => setDateOpen(true)}
              className="flex h-10 sm:h-12 items-center gap-3 rounded-full border border-[#E8E4DC] px-4 sm:px-5 cursor-pointer"
            >
              <Image
                src="/images/date01.svg"
                alt=""
                width={18}
                height={18}
              />

              <span className="w-full truncate text-sm text-[#9DA4B1]">
                {checkIn ? duration : "Add date"}
              </span>
            </div>
          </div>

          {/* Guests */}
          <div ref={guestsRef} className="relative">
            <p className="mb-[10px] text-sm font-semibold text-[#0F172A]">
              Guests
            </p>

            <div
              onClick={() => setGuestsOpen((v) => !v)}
              className="flex h-10 sm:h-12 items-center gap-3 rounded-full border border-[#E8E4DC] px-4 sm:px-5 cursor-pointer"
            >
              <Image
                src="/images/user.svg"
                alt=""
                width={18}
                height={18}
              />

              <span className="w-full truncate text-sm text-[#0F172A]">
                {adults + children + infants > 0 || pets > 0 ? guestsLabel : "Add guests"}
              </span>
            </div>

            {guestsOpen && (
              <div className="absolute left-0 top-full z-20 mt-2 w-full min-w-[280px] rounded-2xl border border-[#ECE7DF] bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.12)] divide-y divide-[#ECE7DF]">
                <Counter label="Adults" value={adults} setValue={setAdults} min={0} />
                <Counter
                  label="Children"
                  sublabel="Aged 3-17"
                  value={children}
                  setValue={setChildren}
                />
                <Counter
                  label="Infants"
                  sublabel="Aged up to 2"
                  value={infants}
                  setValue={setInfants}
                />
                <Counter label="Pets" value={pets} setValue={setPets} />
              </div>
            )}
          </div>

          {/* Search Button */}
          <div className="md:col-span-2 xl:col-span-1 flex items-center">
            <button className="gold-gradient flex h-10 sm:h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-white xl:w-auto">
              <Search size={20} />
              Search
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default BookingSearch