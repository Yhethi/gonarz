import React from "react";
import "../assets/scss/hero.scss";
import { SquaresAnimation } from "./utils/SquaresAnimation";
export const Hero = () => {
  return (
    <div data-aos="fade-up" className="global__hero">
      <SquaresAnimation />
      <div className="hero__content">
        <div className="hero__left">
          <div className="hero__text">
            <h1>Discover the Future of Meme Investments</h1>
            <h4>
              A Meme Fund built to thrive on high-volatility opportunities.
            </h4>
            <h6>
              At Meme Economy Fund, we focus on low to mid-cap assets with the
              highest potential for exponential growth
            </h6>
          </div>
          <div className="center__hero__floor">
            <div className="hero__light__floor"></div>
          </div>
        </div>
        <div className="hero__right"></div>
      </div>
    </div>
  );
};
