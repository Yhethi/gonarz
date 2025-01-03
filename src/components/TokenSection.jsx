import React, { useRef } from "react";
import "../assets/scss/tokenSection.scss";

import logo from "../assets/imgs/logo.jpg";
import { tokenRef } from "./utils/refs";

const TokenSection = () => {
  return (
    <section
      ref={tokenRef}
      className="token-section"
      data-aos-offset="50"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="300"
    >
      <div className="token-container">
        <div className="token-image-wrapper">
          <img src={logo} alt="logo" className="token-image" />
        </div>

        <div className="token-info">
          <div className="info-block">
            <h1 className="token-title">Exclusive Token</h1>
            <p className="token-description">
              This token represents ownership of an exclusive product in our
              ecosystem. It's unique, tradable, and fully decentralized.
            </p>
          </div>

          {/* <div className="info-block stats">
            <div>
              <h4>Price</h4>
              <p>1000 USDT</p>
            </div>
            <div>
              <h4>Market Cap</h4>
              <p>1,000,000 USDT</p>
            </div>
            <div>
              <h4>Holders</h4>
              <p>3,258</p>
            </div>
          </div> */}

          {/* Botones de acción */}
          <div className="info-block actions">
            <button className="action-button">Buy Token</button>
            {/* <button className="action-button secondary">Add to Wallet</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
