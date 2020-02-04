import React, { useState } from 'react';
import PropType from 'prop-types';
import { ReactComponent as Increase } from '../../assets/img/increase.svg';
import { ReactComponent as Decrease } from '../../assets/img/decrease.svg';

import './Basket.css';

const CLEAR_SUBMIT_TIMER = 3000;

function Basket({ basket, incTip, decTip, tip, incQuantity, decQuantity }) {
  const [showBasket, showBasketHandler] = useState(false);
  const [submit, setSubmit] = useState(false);

  let timer;

  const toggleBasket = () => {
    window.clearTimeout(timer);
    showBasketHandler(!showBasket);
  }

  const submitHandler = () => {
    window.clearTimeout(timer);
    setSubmit(true);

    timer = window.setTimeout(() => {
      setSubmit(false);
      alert('Up to you to get your basket delivered, 😉')
    }, CLEAR_SUBMIT_TIMER);
  }

  // Calculation Variables.
  const deliveryFee = 2.5;
  let afterFee = 0;
  let beforeFee = 0;

  // Animation Variables
  let totalDiv;

  if (basket.length === 0) totalDiv = <span>Votre panier est vide</span>;

  return (
    <div
      className={`basket-wrapper ${basket.length === 0 ? 'hide-mobile' : ''}`}
    >
      <div className="basket">
        <div className="basket-panel">
          <div
            className="summary-container hide-desktop"
            onClick={toggleBasket}
          >
            <div className="summary">
              <span>voir le panier et les frais</span>
            </div>
          </div>
          <div
            data-testid="submit-basket"
            onClick={submitHandler}
            className={`btn-basket ${
              basket.length === 0 || submit ? 'btn-disabled' : 'btn-enabled'
            }`}
          >
            Valider mon panier
          </div>
        </div>
        <div className={`basket-extend ${!showBasket && 'hide-mobile'}`}>
          <div className="basket-content">
            <ul className="basket-content-list">
              {basket.map((e, index) => {
                const price = (Number(e.price) * e.quantity).toFixed(2);
                beforeFee += Number(price);
                afterFee = beforeFee + deliveryFee + tip;
                return (
                  <li key={index} className="basket-item">
                    <div className="quantity-control">
                      <div
                        data-testid="meal-quantity-increase"
                        className="quantity-increase"
                        onClick={() => {
                          incQuantity(e.id);
                        }}
                      >
                        <Increase />
                      </div>
                      <span data-testid="meal-quantity">{e.quantity}</span>
                      <div
                        data-testid="meal-quantity-decrease"
                        className="quantity-decrease"
                        onClick={() => {
                          decQuantity(e.id);
                        }}
                      >
                        <Decrease />
                      </div>
                    </div>
                    <span className="basket-item-name">{e.name}</span>
                    <span className="basket-item-price">{price}&nbsp;€</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`basket-fees-container  ${
              basket.length === 0 ? 'hide' : ''
            }`}
          >
            <ul className="basket-fees-content">
              <li className="basket-net-fees-item">
                <span>Sous-total</span>
                <span>{beforeFee.toFixed(2)}&nbsp;€</span>
              </li>
              <li className="basket-delivery-fees-item">
                <span>Frais de livraison</span>
                <span>{deliveryFee.toFixed(2)}&nbsp;€</span>
              </li>
            </ul>
          </div>

          <div className={basket.length === 0 ? 'basket-empty' : ''}>
            {totalDiv}
          </div>
          <div
            className={`basket-footer  ${basket.length === 0 ? 'hide' : ''}`}
          >
            <ul>
              <li className="basket-net-fees-item">
                <span className="tip-text">Pourboire livreur</span>
                <div className="quantity-control tip">
                  <div
                    data-testid="increase-tip"
                    className="quantity-increase"
                    onClick={() => incTip()}
                  >
                    {<Increase />}
                  </div>
                  <div
                    data-testid="decrease-tip"
                    className="quantity-decrease"
                    onClick={() => decTip()}
                  >
                    {<Decrease />}
                  </div>
                </div>
                <span className="tip-total">{tip.toFixed(2)}&nbsp;€</span>
              </li>
              <li className="basket-item total">
                <span>Total</span>
                <span className="basket-total-price">
                  {afterFee.toFixed(2)}&nbsp;€
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Basket.propTypes = {
  basket: PropType.array.isRequired,
  incTip: PropType.func.isRequired,
  decTip: PropType.func.isRequired,
  incQuantity: PropType.func.isRequired,
  decQuantity: PropType.func.isRequired,
  tip: PropType.number.isRequired
};

export default React.memo(Basket);
