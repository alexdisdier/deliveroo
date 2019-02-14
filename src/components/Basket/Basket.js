import React from "react";

import "./Basket.css";

const basket = props => {
  return (
    <div className="basket-panel">
      <div class="btn-basket">Valider mon panier</div>
      <div>
        <p>Votre panier est vide</p>
      </div>
    </div>
  );
};

export default basket;
