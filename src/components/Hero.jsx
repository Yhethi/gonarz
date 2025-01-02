import React, { useState } from "react";
import "../assets/scss/hero.scss";
import { SquaresAnimation } from "./utils/SquaresAnimation";
import { useEffect } from "react";
// PNG
// import girl1 from "../assets/imgs/girl1.png";
// import girl2 from "../assets/imgs/girl2.png";
// import girl3 from "../assets/imgs/girl3.png";
// JPG
import girl1 from "../assets/imgs/girl1.jpg";
import girl2 from "../assets/imgs/girl2.jpg";
import girl3 from "../assets/imgs/girl3.jpg";

export const Hero = () => {
  const [girl, setGirl] = useState(girl1);

  useEffect(() => {
    let index = 1;
    const changeGirlHandler = () => {
      switch (index) {
        case 1:
          setGirl(girl1);
          break;
        case 2:
          setGirl(girl2);
          break;
        case 3:
          setGirl(girl3);
          break;
        default:
          setGirl(girl1);
          break;
      }
      index++;
      if (index === 4) {
        index = 0;
      }
    };
    const interval = setInterval(changeGirlHandler, 5000);
    return () => clearInterval(interval);
  }, []);

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
          {/* <div className="center__hero__floor">
            <div className="hero__light__floor"></div>
          </div> */}
        </div>
        <div className="hero__right">
          <div className="girl__container">
            <div className="girl__card">
              <img src={girl} alt={girl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
