"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumberField() {
  const [phone, setPhone] = useState("");

  return (
   <PhoneInput
  country="gb"
  value={phone}
  onChange={setPhone}
  enableSearch
  countryCodeEditable={false}
/>
  );
}
