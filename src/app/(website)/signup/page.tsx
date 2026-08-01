"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Check, Eye, EyeOff, User, Mail, Lock } from "lucide-react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("44");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agree, setAgree] = useState(false);

  const getStrength = () => {
    if (password.length < 6)
      return {
        label: "Weak",
        width: "33%",
      };

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password)
    )
      return {
        label: "Strong",
        width: "100%",
      };

    return {
      label: "Fair",
      width: "66%",
    };
  };

  const strength = getStrength();

  return (
    <main className="section-space">
      <div className="container-custom flex justify-center">
        <div className="w-full max-w-[560px] rounded-[32px] border border-border-color bg-white px-5 sm:px-10 py-[45px]">

          {/* Heading */}

          <div className="text-center mb-10">
            <h1 className="text-[28px] font-semibold text-text-primary">
              Create Your Account
            </h1>

            <p className="mt-[15px] text-sm text-gray md:!leading-[14px]">
              Join KeyToHolidays and book directly with trusted property owners.
            </p>
          </div>

          <form>

            {/* Full Name */}

            <div className="mb-5">
              <label className="block text-sm !leading-[14px] font-semibold text-text-primary mb-[10px]">
                Full Name
              </label>

              <div className="h-[44px] flex items-center gap-3 rounded-full border border-border-dark px-5 py-4">
                <User size={18} color="#888" />
    
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 text-sm text-gray-dark placeholder-gray outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Email */}

            <div className="mb-5">
              <label className="block text-sm !leading-[14px] font-semibold text-text-primary mb-[10px]">
                Email Address
              </label>

              <div className="h-[44px] flex items-center gap-3 rounded-full border border-border-dark px-5 py-4">
                <Mail size={18} color="#888" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-sm text-gray-dark placeholder-gray outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Phone */}

            <div className="mb-5">
              <label className="block text-sm !leading-[14px] font-semibold text-text-primary mb-[10px]">
                Phone Number
              </label>

              <PhoneInput
                country={"gb"}
                value={phone}
                onChange={(value) => setPhone(value)}
                 inputStyle={{
                width: "100%",
                height: "44px",
                borderRadius: "9999px",
                border: "1px solid #E6E8EC",
                paddingLeft: "70px",
                fontSize: "16px",
            }}
            buttonStyle={{
                borderRadius: "9999px 0 0 9999px",
                background: "transparent",
                paddingLeft: "12px",
                border: "none",
                borderRight: "1px solid #EBEBEB",
            }}
            dropdownStyle={{
                borderRadius: "16px",
            }}
            searchStyle={{
                width: "90%",
                margin: "10px auto",
            }}
              />
            </div>
                        {/* Password */}

            <div className="mb-3">
              <label className="block text-sm !leading-[14px] font-semibold text-text-primary mb-[10px]">
                Password
              </label>

              <div className="h-[44px] flex items-center gap-3 rounded-full border border-border-dark px-5 py-4">
                <Lock size={18} color="#888" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 text-sm text-gray-dark placeholder-gray outline-none bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} color="#888" />
                  ) : (
                    <Eye size={18} color="#888" />
                  )}
                </button>
              </div>

              {/* Password Strength */}

              <div className="mt-3">
                <div className="flex gap-2">
                  <div
                    className={`h-1 flex-1 rounded-full ${
                      password.length >= 1
                        ? "bg-gold"
                        : "bg-[#E2E8F0]"
                    }`}
                  />

                  <div
                    className={`h-1 flex-1 rounded-full ${
                      password.length >= 6
                        ? "bg-[#E8A020]"
                        : "bg-gray-200"
                    }`}
                  />

                  <div
                    className={`h-1 flex-1 rounded-full ${
                      password.length >= 8 &&
                      /[A-Z]/.test(password) &&
                      /\d/.test(password)
                        ? "bg-[#E8A020]"
                        : "bg-gray-200"
                    }`}
                  />
                </div>

                <p className="text-xs text-[#888] mt-2">
                  Password strength:{" "}
                  <span className="font-medium">
                    {strength.label}
                  </span>
                </p>
              </div>
            </div>

            {/* Confirm Password */}

            <div className="mb-6">
              <label className="block text-sm !leading-[14px] font-semibold text-text-primary mb-[10px]">
                Confirm Password
              </label>

              <div className="h-[44px] flex items-center gap-3 rounded-full border border-border-dark px-5 py-4">
                <Lock size={18} color="#888" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  className="flex-1 text-sm text-gray-dark placeholder-gray outline-none bg-transparent"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} color="#888" />
                  ) : (
                    <Eye size={18} color="#888" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}

            <label className="flex items-start gap-3 cursor-pointer mb-8">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="hidden"
              />

              <div
                className={`mt-1 flex h-5 w-5 items-center justify-center rounded border ${
                  agree
                    ? "bg-[#E8A020] border-[#E8A020]"
                    : "border-[#ddd]"
                }`}
              >
                {agree && (
                  <Check
                    size={14}
                    strokeWidth={3}
                    className="text-white"
                  />
                )}
              </div>

              <span className="text-sm text-[#666] leading-6">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-[#E8A020] font-medium"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#E8A020] font-medium"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Create Account Button */}

            <button
              type="submit"
              className="gold-gradient w-full rounded-full py-4 text-white font-semibold transition hover:opacity-95 text-base !leading-[16px]"
            >
              Create Account
            </button>
                        {/* Divider */}

            <div className="flex items-center gap-3 my-[25px]">
              <div className="h-px flex-1 bg-border-dark" />

              <span className="text-xs text-gray whitespace-nowrap">
                or continue with
              </span>

              <div className="h-px flex-1 bg-border-dark" />
            </div>

            {/* Google Button */}

              <button
          type="button"
          className="flex items-center justify-center gap-3 border border-border-dark rounded-full py-3 text-sm font-normal hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 w-full max-w-[315px] mx-auto cursor-pointer"
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

            {/* Bottom */}

            <p className="text-center text-sm mt-[15px]">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold text-[#E8A020] transition"
              >
                Sign In
              </Link>
            </p>

          </form>

        </div>
      </div>
    </main>
  );
}

export default SignUp;