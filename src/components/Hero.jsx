import React from "react";
import "../assets/scss/hero.scss";
import { SquaresAnimation } from "./utils/SquaresAnimation";
export const Hero = () => {
  return (
    <div data-aos="fade-up" className="global__hero">
      <SquaresAnimation />
      <div className="hero__content">
        <div className="hero__left">
          <div className="center__hero__floor">
            <div className="hero__light__floor"></div>
          </div>
        </div>
        <div className="hero__right"></div>
      </div>
    </div>
  );
};
