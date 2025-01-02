import React from "react";
import "../assets/scss/fundHoldingsSection.scss";

const FundHoldingsSection = () => {
  return (
    <section
      className="fund-holdings-section"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1>Fund Holdings Distribution</h1>
      <div className="fund-holdings-content">
        <div className="chart">
          <p>Insert visualization here (e.g., pie chart or bar graph).</p>
        </div>
        <div className="details">
          <p>50% invested in bonds</p>
          <p>30% invested in equities</p>
          <p>20% reserved for alternative assets</p>
        </div>
      </div>
    </section>
  );
};

export default FundHoldingsSection;
