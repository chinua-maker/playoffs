import React from "react";
import partner1 from "../images/euidem-logo-1.png";
import logo2 from "../images/logo-2.png";
import logo4 from "../images/logo-4.jpg";
import "./Partners.css";

function Partners() {
  return (
    <section className="partners">
      <h3 className="partner_header"> Our Partner </h3>
      <div id="group-partner">
        <div id="logo-partner">
          <img src={partner1} alt="" />
        </div>
        <div id="logo-partner">
          <img src={logo2} alt="" id="partner-img" />
        </div>
        <div id="logo-partner">
          <img src={logo4} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Partners;
