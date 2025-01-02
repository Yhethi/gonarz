import React from "react";
import "../assets/scss/tokenSection.scss";

import logo from "../assets/imgs/logo.jpg";

const TokenSection = () => {
  return (
    <section className="token-section">
      <div className="token-container">
        {/* Representación principal del token */}
        <div className="token-image-wrapper">
          <img src={logo} alt="logo" className="token-image" />
        </div>

        {/* Contenedores de información a un lado */}
        <div className="token-info">
          {/* Título principal */}
          <div className="info-block">
            <h1 className="token-title">Exclusive Token</h1>
            <p className="token-description">
              This token represents ownership of an exclusive product in our
              ecosystem. It's unique, tradable, and fully decentralized.
            </p>
          </div>

          {/* Estadísticas del token */}
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
