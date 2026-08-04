"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const startWeekday = (new Date(year, month, 1).getDay() + 6) % 7; // Mon = 0
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

/* ─── Sub-component: one calendar month ──────────────────── */
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
    <div className="flex-1 w-full min-w-[260px] max-w-[320px] mx-auto">
      {/* Month title */}
      <p className="mb-3 text-center text-sm sm:text-[15px] font-bold text-[#1A1A1A]">
        {MONTH_NAMES[month]} {year}
      </p>

      {/* 7-column grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {WEEK_DAYS.map((w) => (
          <div key={w} className="flex h-8 items-center justify-center text-[11px] font-medium text-[#AAAAAA]">
            {w}
          </div>
        ))}

        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`blank-${idx}`} className="h-8 sm:h-9" />;
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
                "relative h-8 sm:h-9 flex items-center justify-center",
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
                  "relative z-10 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full text-xs sm:text-[13px] font-medium transition-all select-none",
                  isPast
                    ? "cursor-not-allowed text-[#D0D0D0] line-through"
                    : isCI || isCO
                    ? "gold-gradient cursor-pointer text-white font-semibold shadow-sm"
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

/* ─── Shared Calendar Panel ───────────────────────────────── */
interface PanelProps {
  value: DateRange;
  activeField: "checkIn" | "checkOut";
  leftYear: number;
  leftMonth: number;
  rightYear: number;
  rightMonth: number;
  onFieldChange: (f: "checkIn" | "checkOut") => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (y: number, m: number, d: number) => void;
  onClear: () => void;
  onClose: () => void;
}

function CalendarPanel({
  value,
  activeField,
  leftYear,
  leftMonth,
  rightYear,
  rightMonth,
  onFieldChange,
  onPrev,
  onNext,
  onSelect,
  onClear,
  onClose,
}: PanelProps) {
  const today = midnight(new Date());
  const [hovered, setHovered] = useState<Date | null>(null);

  const nights =
    value.checkIn && value.checkOut
      ? Math.round((value.checkOut.getTime() - value.checkIn.getTime()) / 86400000)
      : null;

  return (
    <div className="w-full relative">
      <button
        type="button"
        onClick={onClose}
        className="absolute -top-2 -right-2 p-1 text-gray-400 hover:text-gray-600 sm:hidden"
      >
        <X size={20} />
      </button>

      {/* Field selector tabs */}
      <div className="mb-4 sm:mb-5 grid grid-cols-2 gap-2 sm:gap-3">
        {(["checkIn", "checkOut"] as const).map((f) => {
          const isActive = activeField === f;
          const date = f === "checkIn" ? value.checkIn : value.checkOut;
          return (
            <button
              key={f}
              type="button"
              onClick={() => onFieldChange(f)}
              className={[
                "flex flex-col items-center rounded-[12px] border py-2 sm:py-[10px] px-2 sm:px-3 transition text-center",
                isActive
                  ? "border-[#F2B62D] bg-[#FFFBF0]"
                  : "border-[#E8E4DC] bg-white hover:bg-[#FAFAFA]",
              ].join(" ")}
            >
              <span className="text-[10px] font-normal text-[#AAAAAA] mb-1 sm:mb-[5px]">
                {f === "checkIn" ? "Check-in" : "Check-out"}
              </span>
              <span className={`text-xs sm:text-sm font-semibold truncate w-full ${isActive ? "text-[#1A1A1A]" : "text-[#888888]"}`}>
                {date ? fmtLong(date) : "Select date"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Month navigation */}
      <div className="mb-3 sm:mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3E3E3] text-[#555] transition hover:border-[#F2B62D] hover:text-[#F2B62D]"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs sm:text-sm font-medium text-[#888888]">
          <span className="sm:hidden">
            {SHORT_MONTH[leftMonth]} {leftYear}
          </span>
          <span className="hidden sm:inline">
            {SHORT_MONTH[leftMonth]} {leftYear} — {SHORT_MONTH[rightMonth]} {rightYear}
          </span>
        </span>
        <button
          type="button"
          onClick={onNext}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3E3E3] text-[#555] transition hover:border-[#F2B62D] hover:text-[#F2B62D]"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Months Grid */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6">
        <CalMonth
          year={leftYear}
          month={leftMonth}
          value={value}
          hovered={hovered}
          today={today}
          onSelect={onSelect}
          onHover={setHovered}
        />
        <div className="hidden sm:block w-px shrink-0 bg-[#EBEBEB] self-stretch" />
        <div className="hidden sm:block flex-1">
          <CalMonth
            year={rightYear}
            month={rightMonth}
            value={value}
            hovered={hovered}
            today={today}
            onSelect={onSelect}
            onHover={setHovered}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-[#F0F0F0] pt-3 sm:pt-4">
        <span className="text-[11px] sm:text-xs text-[#AAAAAA]">
          {nights != null && nights > 0
            ? `${nights} night${nights > 1 ? "s" : ""} selected`
            : "Select check-in & check-out"}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClear}
            className="rounded-full border border-[#E3E3E3] px-3 sm:px-4 py-1.5 sm:py-[7px] text-xs font-medium text-[#1A1A1A] transition hover:border-[#F2B62D] hover:text-[#F2B62D]"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={onClose}
            className="gold-gradient rounded-full px-4 sm:px-5 py-1.5 sm:py-[7px] text-xs font-semibold text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main exported component ─────────────────────────────── */
export default function DateRangePicker({ value, onChange, variant = "card" }: Props) {
  const today = midnight(new Date());
  const [open, setOpen] = useState(false);
  const [activeField, setActiveField] = useState<"checkIn" | "checkOut">("checkIn");
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [leftYear, setLeftYear] = useState(today.getFullYear());
  const [leftMonth, setLeftMonth] = useState(today.getMonth());

  const rightMonth = leftMonth === 11 ? 0 : leftMonth + 1;
  const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

  // Mount check for Next.js SSR Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
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

  const panelProps: Omit<PanelProps, "onClose"> = {
    value,
    activeField,
    leftYear,
    leftMonth,
    rightYear,
    rightMonth,
    onFieldChange: setActiveField,
    onPrev: goPrev,
    onNext: goNext,
    onSelect: selectDay,
    onClear: clear,
  };

  /* ── React Portal Modal Renderer ───────────────────────── */
  const renderModal = () => {
    if (!open || !mounted) return null;

    return createPortal(
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
        <div 
          ref={ref}
          className="w-full max-w-[340px] sm:max-w-none sm:w-[650px] lg:w-[700px] rounded-[24px] border border-[#E3E3E3] bg-white p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-h-[90vh] overflow-y-auto"
        >
          <CalendarPanel {...panelProps} onClose={() => setOpen(false)} />
        </div>
      </div>,
      document.body
    );
  };

  /* ── Hero variant ─────────────────────────────────── */
  if (variant === "hero") {
    return (
      <>
        <div className="contents">
          {/* Check-In field */}
          <div className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]">
            <p className="mb-[10px] text-sm font-semibold text-gray-dark">Check-in</p>
            <div
              onClick={() => {
                setActiveField("checkIn");
                setOpen(true);
              }}
              className={`flex h-10 sm:h-12 items-center gap-3 rounded-full border px-4 sm:px-5 cursor-pointer transition ${
                open && activeField === "checkIn" ? "border-[#F2B62D]" : "border-border-color"
              }`}
            >
              <CalendarDays size={16} className="shrink-0 text-[#9DA4B1]" />
              <span className={`w-full truncate text-sm ${checkInLabel ? "text-gray-dark font-medium" : "text-[#9DA4B1]"}`}>
                {checkInLabel ?? "Add date"}
              </span>
            </div>
          </div>

          {/* Check-Out field */}
          <div className="relative xl:after:absolute xl:after:right-[-23px] xl:after:top-1/2 xl:after:h-[55px] xl:after:w-px xl:after:-translate-y-1/2 xl:after:bg-[#DFDFDF]">
            <p className="mb-[10px] text-sm font-semibold text-gray-dark">Check-out</p>
            <div
              onClick={() => {
                setActiveField("checkOut");
                setOpen(true);
              }}
              className={`flex h-10 sm:h-12 items-center gap-3 rounded-full border px-4 sm:px-5 cursor-pointer transition ${
                open && activeField === "checkOut" ? "border-[#F2B62D]" : "border-border-color"
              }`}
            >
              <CalendarDays size={16} className="shrink-0 text-[#9DA4B1]" />
              <span className={`w-full truncate text-sm ${checkOutLabel ? "text-gray-dark font-medium" : "text-[#9DA4B1]"}`}>
                {checkOutLabel ?? "Add date"}
              </span>
            </div>
          </div>
        </div>

        {renderModal()}
      </>
    );
  }

  /* ── Card variant ─────────────────────────────────────── */
  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-2 overflow-hidden rounded-[160px] border border-[#E3E3E3] bg-white divide-x divide-[#E3E3E3]">
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
      </div>

      {renderModal()}
    </>
  );
}