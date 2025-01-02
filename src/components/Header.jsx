import React from "react";
import "../assets/scss/header.scss";
import logo from "../assets/imgs/logo.jpg";

export const Header = () => {
  return (
    <div data-aos="fade-down" className="global__header">
      <div className="header__logo">
        <img src={logo} alt={logo} />
      </div>
      <div className="header__menus">
        <div className="menu">
          <a href="#">Index</a>
        </div>
        <div className="menu">
          <a href="#">roadmap</a>
        </div>
        <div className="menu">
          <a href="#">fund holdings distribution</a>
        </div>
        <div className="menu">
          <a href="#">partners</a>
        </div>
      </div>
    </div>
  );
};
