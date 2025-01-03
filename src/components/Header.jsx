import React, { useRef } from "react";
import "../assets/scss/header.scss";
import logo from "../assets/imgs/logo.jpg";
import { heroRef, partnersRef, roadmapRef, tokenRef } from "./utils/refs";

export const Header = () => {
  const handleGoTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div data-aos="fade-down" className="global__header">
      <div className="header__logo">
        <img src={logo} alt={logo} />
      </div>
      <div className="header__menus">
        <div className="menu">
          <a onClick={scrollToTop}>HOME</a>
        </div>
        <div className="menu">
          <a onClick={() => handleGoTo(roadmapRef)}>ROADMAP</a>
        </div>
        <div className="menu">
          <a onClick={() => handleGoTo(partnersRef)}>PARTNERS</a>
        </div>
        <div className="menu">
          <a onClick={() => handleGoTo(tokenRef)}>TOKEN</a>
        </div>
      </div>
    </div>
  );
};
