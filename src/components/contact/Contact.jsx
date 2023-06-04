import React from "react";
import "./contact.css";
import ContactIcon from "../contactIcon/ContactIcon";
import ProjectBrd from "../../img/brainstorm_sessionmeet.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <h2>Let's discuss your latest project.</h2>
          <div className="c-info">
            <div className="c-info-item">
              <ContactIcon contactType="email" />
              <h3>liliethbetancourt1@gmail.com</h3>
            </div>
            <div className="c-info-item">
              <ContactIcon contactType="linkedIn" />
              <a href="www.linkedin.com/in/liliethbetancourt" target="_blank">
                www.linkedin.com/in/liliethbetancourt
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-description">
            <b>What's your story?</b>
            <br />
            Get in touch. I am always available for freelancing if the right
            project comes along.
          </p>

          <div className="cowork">
            <img src={ProjectBrd} alt="" className="cowork-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
