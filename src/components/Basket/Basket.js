import React from "react";

import "./Basket.css";

const basket = props => {
  // btn-disabled
  // btn-enabled
  const emptyBasket = <div className="basket-empty">Votre panier est vide</div>;
  const increase = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.0.0"
    >
      <g
        className="icon"
        fill="#00CCBC"
        data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.0.0.0"
      >
        <rect
          width="1.091"
          height="8.727"
          x="7.455"
          y="3.636"
          rx=".545"
          data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.0.0.0.0"
        />
        <rect
          width="1.091"
          height="8.727"
          x="7.455"
          y="3.636"
          transform="rotate(90 8 8)"
          rx=".545"
          data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.0.0.0.1"
        />
        <path
          d="M1.35,8 C1.35,11.6725489 4.32745108,14.65 8,14.65 C11.6725489,14.65 14.65,11.6725489 14.65,8 C14.65,4.32745108 11.6725489,1.35 8,1.35 C4.32745108,1.35 1.35,4.32745108 1.35,8 Z M0,8 C0,3.58186667 3.58186667,0 8,0 C12.4181333,0 16,3.58186667 16,8 C16,12.4181333 12.4181333,16 8,16 C3.58186667,16 0,12.4181333 0,8 Z"
          data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.0.0.0.2"
        />
      </g>
    </svg>
  );
  const decrease = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.2.0"
    >
      <g
        className="icon"
        fill="#00CCBC"
        data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.2.0.0"
      >
        <rect
          width="1.091"
          height="8.727"
          x="7.455"
          y="3.636"
          transform="rotate(90 8 8)"
          rx=".545"
          data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.2.0.0.0"
        />
        <path
          d="M1.35,8 C1.35,11.6725489 4.32745108,14.65 8,14.65 C11.6725489,14.65 14.65,11.6725489 14.65,8 C14.65,4.32745108 11.6725489,1.35 8,1.35 C4.32745108,1.35 1.35,4.32745108 1.35,8 Z M0,8 C0,3.58186667 3.58186667,0 8,0 C12.4181333,0 16,3.58186667 16,8 C16,12.4181333 12.4181333,16 8,16 C3.58186667,16 0,12.4181333 0,8 Z"
          data-reactid=".muh1srf4lc.3.6.0.0.0.1.0.1.0.0.1.0.0.$1583350-84bb119ce3456ef1c10049d923b27f7c.0.2.0.0.1"
        />
      </g>
    </svg>
  );

  let total = 0;

  return (
    <div className="basket-wrapper">
      <div className="basket">
        <div className="basket-panel">
          <div className="btn-basket btn-enabled">Valider mon panier</div>
        </div>
        <div className="basket-content">
          <ul className="basket-content-list">
            {props.basket.map((e, index) => {
              let price = Number(e.price) * e.quantity;
              total += price;
              return (
                <li key={index} className="basket-item">
                  <div className="quantity-control">
                    <div
                      className="quantity-decrease"
                      onClick={() => {
                        props.incQuantity(e.id);
                      }}
                    >
                      {increase}
                    </div>
                    <span>{e.quantity}</span>
                    <div
                      className="quantity-increase"
                      onClick={() => {
                        props.decQuantity(e.id);
                      }}
                    >
                      {decrease}
                    </div>
                  </div>
                  <span className="basket-item-name">{e.name}</span>
                  <span className="basket-item-price">{price}&nbsp;€</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="basket-footer">
          <ul>
            <li className="basket-item total">
              <span>Total</span>
              <span className="basket-total-price">{total}&nbsp;€</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default basket;
