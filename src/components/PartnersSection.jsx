import React, { useRef } from "react";
import "../assets/scss/partnersSection.scss";
import { partnersRef } from "./utils/refs";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="refPosition" ref={partnersRef}></div>
      <h1>Partners</h1>
      <div className="partners-grid">
        <div
          className="partner-card"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="100"
        >
          <h2>Company A</h2>
        </div>
        <div
          className="partner-card"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="100"
        >
          <h2>Company B</h2>
        </div>
        <div
          className="partner-card"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="100"
        >
          <h2>Company C</h2>
        </div>
        <div
          className="partner-card"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-offset="100"
        >
          <h2>Company D</h2>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
