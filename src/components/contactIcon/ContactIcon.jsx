import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./contactIcon.css";

export default function ContactIcon({ contactType = "linkedIn" }) {
  return (
    <div className="icon">
      {contactType == "linkedIn" && <BsLinkedin />}
      {contactType == "email" && <HiOutlineMail />}
    </div>
  );
}
