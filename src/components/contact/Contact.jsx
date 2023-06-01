import React from "react";
import "./contact.css";
import ContactIcon from "../contactIcon/ContactIcon";

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <ContactIcon contactType="linkedIn" />
      <ContactIcon contactType="email" />
    </div>
  );
}
