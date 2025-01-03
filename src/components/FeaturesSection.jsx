import React from "react";
import "../assets/scss/featuresSection.scss";

const FeaturesSection = () => {
  return (
    <section
      className="features-section"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos="zoom-in-right"
    >
      <div className="features__item">
        <h2>Feature One</h2>
        <p>Highlight your first amazing feature here.</p>
      </div>
      <div className="features__item">
        <h2>Feature Two</h2>
        <p>Talk about another key point of your product.</p>
      </div>
      <div className="features__item">
        <h2>Feature Three</h2>
        <p>Explain what makes your offering unique.</p>
      </div>
      <div className="features__item">
        <h2>Feature Four</h2>
        <p>Explain what makes your offering unique.</p>
      </div>
      <div className="features__item">
        <h2>Feature Five</h2>
        <p>Explain what makes your offering unique.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
