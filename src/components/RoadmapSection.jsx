import React from "react";
import "../assets/scss/RoadmapSection.scss";

const RoadmapSection = () => {
  return (
    <section className="roadmap-section">
      <h1>Roadmap</h1>
      <div className="roadmap-content">
        <div className="roadmap-item" data-aos="zoom-out">
          <h2>Phase 1</h2>
          <p>Concept Development and Research</p>
        </div>
        <div className="roadmap-item" data-aos="zoom-out">
          <h2>Phase 2</h2>
          <p>Prototyping and Testing</p>
        </div>
        <div className="roadmap-item" data-aos="zoom-out">
          <h2>Phase 3</h2>
          <p>Public Launch and Expansion</p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;