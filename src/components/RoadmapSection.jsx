import React, { useRef } from "react";
import "../assets/scss/roadmapSection.scss";
import { roadmapRef } from "./utils/refs";
import { Card3D } from "./utils/Card3D";
import girl1 from "../assets/imgs/girl1.jpg";
import girl2 from "../assets/imgs/girl2.jpg";
import girl3 from "../assets/imgs/girl3.jpg";

const RoadmapSection = () => {
  return (
    <section className="roadmap-section">
      <div className="refPosition" ref={roadmapRef}></div>
      <h1>Roadmap</h1>
      <div className="roadmap-content">
        <Card3D
          title="Road 1"
          prompt="First Roadmap"
          subtitle="Interactive 3D Card Effect, and some other text."
          type="pound"
          symbol="x"
          img={girl1}
          aosDelay="100"
        />
        <Card3D
          title="Road 2"
          prompt="Second Roadmap"
          subtitle="Interactive 3D Card Effect, and some other text."
          type="dollar"
          symbol="x"
          img={girl2}
          aosDelay="200"
        />
        <Card3D
          title="Road 3"
          prompt="Third Roadmap"
          subtitle="Interactive 3D Card Effect, and some other text."
          type="euro"
          symbol="x"
          img={girl3}
          aosDelay="300"
        />
        {/* <div className="roadmap-item" data-aos="zoom-out">
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
        </div> */}
      </div>
    </section>
  );
};

export default RoadmapSection;
