import React from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./contactIcon.css";

export default function ContactIcon({ contactType = "linkedIn" }) {
  return (
    <div className="icon">
      {contactType == "phone" && <BsFillPhoneVibrateFill />}
      {contactType == "linkedIn" && <BsLinkedin />}
      {contactType == "email" && <HiOutlineMail />}
    </div>
  );
}
