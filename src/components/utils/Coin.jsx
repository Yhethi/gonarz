import React from "react";
import "../../assets/scss/utils/coin.scss";

export const Coin = ({ type, symbol, img }) => {
  const sides = Array.from({ length: 20 });

  return (
    <div className="coin_container" data-aos="flip-right">
      <div className={`coin ${type}`}>
        <div className="face front">
          {/* <div className="symbol">{symbol}</div> */}
          <div className="symbol">
            <img src={img} alt="" />
          </div>
          <div className="circle"></div>
        </div>
        <div className="face back">
          {/* <div className="symbol">{symbol}</div> */}
          <div className="symbol">
            <img src={img} alt="" />
          </div>
          <div className="circle"></div>
        </div>
        {sides.map((_, index) => (
          <figure key={index} className="side"></figure>
        ))}
      </div>
    </div>
  );
};
