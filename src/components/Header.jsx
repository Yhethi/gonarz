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
          <a href="#">ROADMAP</a>
        </div>
        <div className="menu">
          <a href="#">PARTNERS</a>
        </div>
        <div className="menu">
          <a href="#">TOKEN</a>
        </div>
        <div className="menu">
          <a href="#">DISTRIBUTION</a>
        </div>
      </div>
    </div>
  );
};
