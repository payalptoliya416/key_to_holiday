"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ email, password, remember });
  }

  return (
    <main className="section-space">
      {/* Card */}
      <div className="container-custom flex-1 flex items-center justify-center ">
      <div className="w-full max-w-[560px] bg-white rounded-[32px] border border-[#E8E4DC] px-4 md:px-8 py-6 md:py-10 sm:px-10 sm:py-[45px]">
        {/* Title */}
        <div className="text-center mb-[35px]">
          <h1 className="text-[28px] font-semibold text-[#1A1A1A] mb-[15px]">
            Sign In
          </h1>
          <p className="text-sm text-[#888888] !leading-[14px]">
            Welcome back to KeyToHolidays
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-1.5 mb-5">
            <label
              htmlFor="email"
              className="block text-sm !leading-[14px] font-semibold text-[#1A1A1A] mb-[10px]"
            >
              Email Address
            </label>
            <div className="flex items-center gap-3 border border-[#EBEBEB] rounded-[80px] px-4 py-3 transition">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2667 2.3501L7.022 5.69085C6.84402 5.79422 6.64186 5.84867 6.43604 5.84867C6.23022 5.84867 6.02806 5.79422 5.85008 5.69085L0.600082 2.3501"
                  stroke="#888888"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.1001 0.600098H1.76675C1.12242 0.600098 0.600082 1.12243 0.600082 1.76676V8.76676C0.600082 9.4111 1.12242 9.93343 1.76675 9.93343H11.1001C11.7444 9.93343 12.2667 9.4111 12.2667 8.76676V1.76676C12.2667 1.12243 11.7444 0.600098 11.1001 0.600098Z"
                  stroke="#888888"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 text-sm text-[#0F172A] placeholder-[#888888] outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm !leading-[14px] font-semibold text-[#1A1A1A] mb-[10px]"
            >
              Password
            </label>
            <div className="flex items-center gap-3 border border-[#EBEBEB] rounded-[80px] px-4 py-3 transition">
              {/* Lock icon */}

              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.93334 5.8501H1.76667C1.12234 5.8501 0.600006 6.37243 0.600006 7.01676V11.1001C0.600006 11.7444 1.12234 12.2668 1.76667 12.2668H9.93334C10.5777 12.2668 11.1 11.7444 11.1 11.1001V7.01676C11.1 6.37243 10.5777 5.8501 9.93334 5.8501Z"
                  stroke="#888888"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.93333 5.8501V3.51676C2.93333 2.74322 3.24063 2.00135 3.78761 1.45437C4.33459 0.907388 5.07645 0.600098 5.85 0.600098C6.62355 0.600098 7.36541 0.907388 7.9124 1.45437C8.45938 2.00135 8.76667 2.74322 8.76667 3.51676V5.8501"
                  stroke="#888888"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex-1 text-sm text-[#0F172A] placeholder-[#888888] outline-none bg-transparent"
              />
              {/* Show / hide toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-gray-400 hover:text-gray-600 transition shrink-0"
              >
                {showPassword ? (
                  // Eye-off
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  // Eye
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <label className="flex cursor-pointer select-none items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="hidden"
              />

              <div
                className={`flex h-4 w-4 items-center justify-center rounded-md border transition-all ${
                  remember
                    ? "border-[#E8A020] bg-[#E8A020]"
                    : "border-[#E8E8E8] bg-white"
                }`}
              >
                {remember && (
                  <Check size={14} strokeWidth={3} className="text-white" />
                )}
              </div>

              <span className="text-sm !leading-[14px] text-[#888888]">
                Remember me
              </span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm !leading-[14px] font-semibold text-[#E8A020] transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In button */}
          <button
            type="submit"
            className="w-full gold-gradient active:scale-[0.98] text-white font-bold text-base !leading-[16px] py-4 rounded-full transition-all duration-200 mt-[45px] cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-[25px]">
          <div className="flex-1 h-px bg-[#EBEBEB]" />
          <span className="text-xs text-[#888888] whitespace-nowrap">
            or continue with
          </span>
          <div className="flex-1 h-px bg-[#EBEBEB]" />
        </div>

        {/* Google button */}
        <button
          type="button"
          className="flex items-center justify-center gap-3 border border-[#EBEBEB] rounded-full py-3 text-sm font-normal hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 w-full max-w-[315px] mx-auto cursor-pointer"
        >
          {/* Google G logo */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue With Google
        </button>

        {/* Create account */}
        <p className="text-center text-sm mt-[15px]">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-[#E8A020] transition"
          >
            Create Account
          </Link>
        </p>
      </div>
      </div>
    </main>
  );
}
