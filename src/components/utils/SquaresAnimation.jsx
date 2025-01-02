import React, { useEffect, useState } from "react";
import "../../assets/scss/utils/squaresAnimation.scss";

export const SquaresAnimation = () => {
  const totalSquares = 30 * 6;
  const squares = Array.from({ length: totalSquares }, (_, i) => (
    <div key={i} className={`square square-${i + 1}`}></div>
  ));

  const [activeSquares, setActiveSquares] = useState([]);

  useEffect(() => {
    const changeBackgroundSquare = () => {
      const randomSquares = Array.from({ length: 20 }, () =>
        Math.floor(Math.random() * totalSquares)
      );
      setActiveSquares(randomSquares);
      setTimeout(() => {
        setActiveSquares([]);
      }, 1900);
    };
    const interval = setInterval(changeBackgroundSquare, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="hero__squares">
      <div className="squares">
        {squares.map((square, index) => (
          <div
            key={index}
            className={`square ${
              activeSquares.includes(index) ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
