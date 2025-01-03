import React from "react";
import "../../assets/scss/utils/card3d.scss";
import { Coin } from "./Coin";

export const Card3D = ({
  title,
  prompt,
  subtitle,
  type,
  symbol,
  img,
  aosDelay,
}) => {
  return (
    <div
      class="container noSelect"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div class="canvas">
        <div class="tracker tr-1"></div>
        <div class="tracker tr-2"></div>
        <div class="tracker tr-3"></div>
        <div class="tracker tr-4"></div>
        <div class="tracker tr-5"></div>
        <div class="tracker tr-6"></div>
        <div class="tracker tr-7"></div>
        <div class="tracker tr-8"></div>
        <div class="tracker tr-9"></div>
        <div class="tracker tr-10"></div>
        <div class="tracker tr-11"></div>
        <div class="tracker tr-12"></div>
        <div class="tracker tr-13"></div>
        <div class="tracker tr-14"></div>
        <div class="tracker tr-15"></div>
        <div class="tracker tr-16"></div>
        <div class="tracker tr-17"></div>
        <div class="tracker tr-18"></div>
        <div class="tracker tr-19"></div>
        <div class="tracker tr-20"></div>
        <div class="tracker tr-21"></div>
        <div class="tracker tr-22"></div>
        <div class="tracker tr-23"></div>
        <div class="tracker tr-24"></div>
        <div class="tracker tr-25"></div>
        <div id="card">
          <div class="card-content">
            <Coin type={type} symbol={symbol} img={img} />
            <div class="card-glare"></div>
            <div class="cyber-lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="title">{title}</div>
            {/* <img
              className="img__card"
              src="https://framerusercontent.com/images/hoW8jD5JTDtxHnPxkNwMLvzrLM.jpg"
              alt="token"
            /> */}
            <div class="glowing-elements">
              <div class="glow-1"></div>
              <div class="glow-2"></div>
              <div class="glow-3"></div>
            </div>
            <div class="subtitle">
              <p id="prompt">{prompt}</p>
              <span class="highlight">{subtitle}</span>
            </div>
            <div class="card-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="corner-elements">
              {/* <span></span> */}
              {/* <span></span> */}
              {/* <span></span> */}
              {/* <span></span> */}
            </div>
            <div class="scan-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
