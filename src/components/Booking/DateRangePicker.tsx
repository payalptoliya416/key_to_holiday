"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays, X } from "lucide-react";

/* ─── Constants ───────────────────────────────────────────── */
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const SHORT_MONTH = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const WEEK_DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

/* ─── Helpers ─────────────────────────────────────────────── */
function getMonthMatrix(year: number, month: number): (number | null)[] {
  const startWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(startWeekday).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function midnight(d: Date): Date {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

function fmtLong(d: Date | null): string | null {
  if (!d) return null;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

/* ─── Types ───────────────────────────────────────────────── */
export interface DateRange {
  checkIn: Date | null;
  checkOut: Date | null;
}

interface Props {
  value: DateRange;
  onChange: (r: DateRange) => void;
  variant?: "hero" | "card";
}

/* ─── Sub-component: One Calendar Month ──────────────────── */
interface CalMonthProps {
  year: number;
  month: number;
  value: DateRange;
  hovered: Date | null;
  today: Date;
  onSelect: (y: number, m: number, d: number) => void;
  onHover: (d: Date | null) => void;
}

function CalMonth({ year, month, value, hovered, today, onSelect, onHover }: CalMonthProps) {
  const cells = getMonthMatrix(year, month);

  return (
    <div className="w-full">
      {/* <p className="mb-2 text-center text-xs font-bold text-[#1A1A1A]">
        {MONTH_NAMES[month]} {year}
      </p> */}

      <div className="grid grid-cols-7 gap-y-0.5">
        {WEEK_DAYS.map((w) => (
          <div key={w} className="flex h-7 items-center justify-center text-[10px] font-medium text-[#AAAAAA]">
            {w}
          </div>
        ))}

        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`blank-${idx}`} className="h-7" />;
          }

          const date = midnight(new Date(year, month, day));
          const ci = value.checkIn ? midnight(value.checkIn) : null;
          const coRaw = value.checkOut ?? hovered;
          const co = coRaw ? midnight(coRaw) : null;

          const isPast = date < today;
          const isCI = ci ? date.getTime() === ci.getTime() : false;
          const isCO = co ? date.getTime() === co.getTime() : false;
          const inRange = ci && co && date > ci && date < co;

          const isRangeStart = isCI && co && co > ci!;
          const isRangeEnd = isCO && ci && co! > ci;

          return (
            <div
              key={`${year}-${month}-${day}`}
              className={[
                "relative h-7 flex items-center justify-center",
                inRange ? "bg-[#FEF3CD]" : "",
                isRangeStart ? "bg-gradient-to-r from-transparent to-[#FEF3CD]" : "",
                isRangeEnd ? "bg-gradient-to-l from-transparent to-[#FEF3CD]" : "",
              ].join(" ")}
            >
              <button
                type="button"
                disabled={isPast}
                onClick={() => onSelect(year, month, day)}
                onMouseEnter={() => !isPast && onHover(new Date(year, month, day))}
                onMouseLeave={() => onHover(null)}
                className={[
                  "relative z-10 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium transition-all select-none",
                  isPast
                    ? "cursor-not-allowed text-[#D0D0D0] line-through"
                    : isCI || isCO
                    ? "gold-gradient cursor-pointer text-white font-semibold shadow-xs"
                    : "cursor-pointer text-[#1A1A1A] hover:bg-[#F5F3EE]",
                ].join(" ")}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main Exported Component ─────────────────────────────── */
export default function DateRangePicker({ value, onChange, variant = "card" }: Props) {
  const today = midnight(new Date());
  const [open, setOpen] = useState(false);
  const [activeField, setActiveField] = useState<"checkIn" | "checkOut">("checkIn");
  const [hovered, setHovered] = useState<Date | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const [leftYear, setLeftYear] = useState(today.getFullYear());
  const [leftMonth, setLeftMonth] = useState(today.getMonth());

  // બહાર ક્લિક કરવાથી પૉપઅપ બંધ થશે
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function goPrev() {
    if (leftMonth === 0) {
      setLeftMonth(11);
      setLeftYear((y) => y - 1);
    } else setLeftMonth((m) => m - 1);
  }

  function goNext() {
    if (leftMonth === 11) {
      setLeftMonth(0);
      setLeftYear((y) => y + 1);
    } else setLeftMonth((m) => m + 1);
  }

  function selectDay(y: number, m: number, d: number) {
    const clicked = midnight(new Date(y, m, d));
    if (activeField === "checkIn" || !value.checkIn) {
      onChange({ checkIn: clicked, checkOut: null });
      setActiveField("checkOut");
    } else {
      const range =
        clicked < value.checkIn
          ? { checkIn: clicked, checkOut: value.checkIn }
          : { checkIn: value.checkIn, checkOut: clicked };
      onChange(range);
      setActiveField("checkIn");
      setOpen(false);
    }
  }

  function clear() {
    onChange({ checkIn: null, checkOut: null });
    setActiveField("checkIn");
  }

  const checkInLabel = fmtLong(value.checkIn);
  const checkOutLabel = fmtLong(value.checkOut);

  const nights =
    value.checkIn && value.checkOut
      ? Math.round((value.checkOut.getTime() - value.checkIn.getTime()) / 86400000)
      : null;

  /* ── Compact Popover View ───────────────────────── */
  const renderPopover = () => {
    if (!open) return null;

    return (
      <div className="absolute top-[calc(100%+8px)] left-0 z-50 w-[280px] rounded-2xl border border-[#E3E3E3] bg-white p-3.5 shadow-xl">
        {/* Top Header */}
        <div className="mb-2 flex items-center justify-between border-b border-[#F0F0F0] pb-2">
          <span className="text-xs font-semibold text-[#1A1A1A]">
            {activeField === "checkIn" ? "Select Check-in" : "Select Check-out"}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
          >
            <X size={14} />
          </button>
        </div>

        {/* Month Nav */}
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E3E3E3] text-[#555] hover:border-[#F2B62D] hover:text-[#F2B62D]"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="text-xs font-medium text-[#888888]">
            {SHORT_MONTH[leftMonth]} {leftYear}
          </span>
          <button
            type="button"
            onClick={goNext}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E3E3E3] text-[#555] hover:border-[#F2B62D] hover:text-[#F2B62D]"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Calendar Grid (Single Month) */}
        <CalMonth
          year={leftYear}
          month={leftMonth}
          value={value}
          hovered={hovered}
          today={today}
          onSelect={selectDay}
          onHover={setHovered}
        />

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between border-t border-[#F0F0F0] pt-2">
          <span className="text-[10px] text-[#AAAAAA]">
            {nights != null && nights > 0 ? `${nights} night(s)` : "Select dates"}
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={clear}
              className="rounded-full border border-[#E3E3E3] px-2.5 py-1 text-[11px] font-medium text-[#1A1A1A] hover:border-[#F2B62D]"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="gold-gradient rounded-full px-3 py-1 text-[11px] font-semibold text-white"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  };

  /* ── Hero Variant ─────────────────────────────────── */
  if (variant === "hero") {
    return (
      <div ref={containerRef} className="relative flex items-center gap-2 sm:gap-5 xl:gap-[46px] flex-wrap sm:flex-nowrap">
        <div className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]">
          <p className="mb-[10px] text-sm font-semibold text-gray-dark">Check-in</p>
          <div
            onClick={() => {
              setActiveField("checkIn");
              setOpen(true);
            }}
            className={`flex h-10 sm:h-12 items-center gap-3 rounded-full border px-4 sm:px-5 cursor-pointer transition xl:min-w-[156px]  ${
              open && activeField === "checkIn" ? "border-[#F2B62D]" : "border-border-color"
            }`}
          >
            <CalendarDays size={16} className="shrink-0 text-[#9DA4B1]" />
            <span className={`w-full truncate text-xs sm:text-sm ${checkInLabel ? "text-gray-dark font-medium" : "text-[#9DA4B1]"}`}>
              {checkInLabel ?? "Add date"}
            </span>
          </div>
        </div>

        <div className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]">
          <p className="mb-[10px] text-sm font-semibold text-gray-dark">Check-out</p>
          <div
            onClick={() => {
              setActiveField("checkOut");
              setOpen(true);
            }}
            className={`flex h-10 sm:h-12 items-center gap-3 rounded-full border px-4 sm:px-5 cursor-pointer transition w-full xl:min-w-[156px] ${
              open && activeField === "checkOut" ? "border-[#F2B62D]" : "border-border-color"
            }`}
          >
            <CalendarDays size={16} className="shrink-0 text-[#9DA4B1]" />
            <span className={`w-full truncate text-xs sm:text-sm ${checkOutLabel ? "text-gray-dark font-medium" : "text-[#9DA4B1]"}`}>
              {checkOutLabel ?? "Add date"}
            </span>
          </div>
        </div>

        {renderPopover()}
      </div>
    );
  }

  /* ── Card Variant (Default Widget) ─────────────────────── */
  return (
    <div ref={containerRef} className="relative inline-block w-full">
      <div className="grid grid-cols-2 overflow-hidden rounded-[160px] border border-[#E3E3E3] divide-x divide-[#E3E3E3]">
        <button
          type="button"
          onClick={() => {
            setActiveField("checkIn");
            setOpen((v) => !v);
          }}
          className={`flex flex-col gap-[9px] px-4 sm:px-5 py-3 sm:py-[13px] text-left transition ${
            open && activeField === "checkIn" ? "bg-[#FFFBF0]" : ""
          }`}
        >
          <span className="text-xs font-semibold text-[#1A1A1A]">Check In</span>
          <span className={`flex items-center gap-2 text-xs truncate ${checkInLabel ? "text-[#1A1A1A] font-medium" : "text-[#AAAAAA]"}`}>
            <CalendarDays size={13} className="shrink-0 text-[#AAAAAA]" />
            {checkInLabel ?? "Add date"}
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveField("checkOut");
            setOpen((v) => !v);
          }}
          className={`flex flex-col gap-[9px] px-4 sm:px-5 py-3 sm:py-[13px] text-left transition ${
            open && activeField === "checkOut" ? "bg-[#FFFBF0]" : ""
          }`}
        >
          <span className="text-xs font-semibold text-[#1A1A1A]">Check Out</span>
          <span className={`flex items-center gap-2 text-xs truncate ${checkOutLabel ? "text-[#1A1A1A] font-medium" : "text-[#AAAAAA]"}`}>
            <CalendarDays size={13} className="shrink-0 text-[#AAAAAA]" />
            {checkOutLabel ?? "Add date"}
          </span>
        </button>
      </div>

      {renderPopover()}
    </div>
  );
}