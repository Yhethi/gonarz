import React, { useRef } from "react";
import "../assets/scss/roadmapSection.scss";
import { roadmapRef } from "./utils/refs";

const RoadmapSection = () => {
  return (
    <section ref={roadmapRef} className="roadmap-section">
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
