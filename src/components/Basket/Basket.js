import React from "react";

import "./Basket.css";

const basket = props => {
  // btn-disabled
  // btn-enabled
  return (
    <div className="basket-wrapper">
      <div className="basket">
        <div className="basket-panel">
          <div className="btn-basket btn-disabled">Valider mon panier</div>
        </div>
        <div className="basket-content">
          <div className="basket-empty">Votre panier est vide</div>
        </div>
      </div>
    </div>
  );
};

export default basket;

{
  /* <div className="quantity">
  <div className="btn-quantity-minus"></div>
  <span>1</span>
  <div className="btn-quantity-plus"></div>
</div> */
}
