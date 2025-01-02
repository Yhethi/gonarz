import React from "react";
import "../assets/scss/partnersSection.scss";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h1>Partners</h1>
      <div className="partners-grid">
        <div
          className="partner-card"
          data-aos="zoom-out-down"
          data-aos-offset="200"
        >
          <h2>Company A</h2>
        </div>
        <div
          className="partner-card"
          data-aos="zoom-out-down"
          data-aos-offset="200"
        >
          <h2>Company B</h2>
        </div>
        <div
          className="partner-card"
          data-aos="zoom-out-down"
          data-aos-offset="200"
        >
          <h2>Company C</h2>
        </div>
        <div
          className="partner-card"
          data-aos="zoom-out-down"
          data-aos-offset="200"
        >
          <h2>Company D</h2>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
