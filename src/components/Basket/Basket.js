import React from "react";

import "./Basket.css";

const basket = props => {
  return (
    <div className="basket-wrapper">
      <div className="basket">
        <div className="basket-panel">
          <div class="btn-basket btn-disabled">Valider mon panier</div>
        </div>
        <div className="basket-content">
          <div className="basket-empty">Votre panier est vide</div>
        </div>
      </div>
    </div>
  );
};

export default basket;
