"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumberField() {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"gb"}
      value={phone}
      onChange={(value) => setPhone(value)}
      enableSearch
      countryCodeEditable={false}
      inputStyle={{
        width: "100%",
        height: "56px",
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
  );
}