"use client";

import PhoneNumberField from "./PhoneNumberField";
import Select from "react-select";

const countries = [
  { value: "uk", label: "United Kingdom" },
  { value: "spain", label: "Spain" },
  { value: "italy", label: "Italy" },
  { value: "france", label: "France" },
];

function ListForm() {
  return (
    <section className="section-space">
      <div className="container-custom max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="section-title !mt-0">Submit Your Property</h2>

          <p className="mt-[10px] text-light-dark">
            Complete the form below and our team will review your property.
          </p>
        </div>

        <form className="mt-[30px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-[10px] block text-lg text-text-primary">
                Full Name<span className="text-[#DB0505]">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="input-style"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-[10px] block text-lg text-text-primary">
                Email Address<span className="text-[#DB0505]">*</span>
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="input-style"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-[10px] block text-lg text-text-primary">
                Phone Number<span className="text-[#DB0505]">*</span>
              </label>

              <PhoneNumberField />
            </div>

            {/* Property Name */}
            <div>
              <label className="mb-[10px] block text-lg text-text-primary">
                Property Name
              </label>

              <input
                type="text"
                placeholder="e.g. Villa del Mar"
                className="input-style"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <label className="mb-[10px] block text-lg text-text-primary">
                City<span className="text-[#DB0505]">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Santorini"
                className="input-style"
              />
            </div>

            <div className="lg:col-span-3">
              <label className="mb-[10px] block text-lg text-text-primary">
                Country<span className="text-[#DB0505]">*</span>
              </label>

              <Select
                options={countries}
                placeholder="Select country"
                classNamePrefix="react-select"
                components={{
                  DropdownIndicator: null,
                  IndicatorSeparator: null,
                }}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    minHeight: "60px",
                    height: "60px",
                    borderRadius: "9999px",
                    border: state.isFocused
                      ? "1px solid #D69A17"
                      : "1px solid #E6E8EC",
                    boxShadow: "none",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    "&:hover": {
                      borderColor: "#D69A17",
                    },
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#9CA3AF",
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: "0 12px",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    color: "#17213C",
                  }),
                }}
              />
            </div>

            <div className="lg:col-span-6">
              <label className="mb-[10px] block text-lg text-text-primary">
                Website or Airbnb/Booking.com Listing URL
              </label>

              <input
                type="url"
                placeholder="https://..."
                className="input-style"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="mb-[10px] block text-lg text-text-primary">
              Property Description<span className="text-[#DB0505]">*</span>
            </label>

            <textarea
              rows={5}
              placeholder="Tell us about your property: location, amenities, unique features, number of bedrooms/bathrooms..."
              className="w-full rounded-[18px] border border-[#E6E8EC] px-5 py-4 outline-none transition focus:border-[#D69A17]"
            />
          </div>

          {/* Checkbox */}
          <div className="mt-6 flex items-center gap-3">
            <input
              id="agree"
              type="checkbox"
              className="h-5 w-5 cursor-pointer appearance-none rounded-[8px] border border-[#D9D9D9] bg-white transition checked:border-[#D89A12] checked:bg-[#D89A12] checked:bg-[url('/images/checkmark-right.svg')] checked:bg-center checked:bg-no-repeat"
            />

            <label
              htmlFor="agree"
              className="cursor-pointer text-[16px] font-normal text-[#282828]"
            >
              I agree to be contacted regarding my property listing.
            </label>
          </div>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <button type="submit" className="sm:min-w-[400px] common-btn">
              Submit Property
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ListForm;
