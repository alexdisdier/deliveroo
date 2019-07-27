import React from "react";
import { shallow } from "enzyme";

import Basket from "./Basket";

describe("Basket", () => {
  let props;

  beforeEach(() => {
    props = {
      basket: ["item1", "item2", "item3"],
      incTip: jest.fn(),
      decTip: jest.fn(),
      tip: 1,
      incQuantity: jest.fn(),
      decQuantity: jest.fn()
    };
  });

  it("renders the Basket correctly", () => {
    const wrapper = shallow(<Basket {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="basket-wrapper "
      >
        <div
          className="basket"
        >
          <div
            className="basket-panel"
          >
            <div
              className="summary-container hide-desktop"
              onClick={[Function]}
            >
              <div
                className="summary"
              >
                <span>
                  voir le panier et les frais
                </span>
              </div>
            </div>
            <div
              className="btn-basket btn-enabled"
            >
              Valider mon panier
            </div>
          </div>
          <div
            className="basket-extend hide-mobile"
          >
            <div
              className="basket-content"
            >
              <ul
                className="basket-content-list"
              >
                <li
                  className="basket-item"
                  key="0"
                >
                  <div
                    className="quantity-control"
                  >
                    <div
                      className="quantity-decrease"
                      onClick={[Function]}
                    >
                      <ForwardRef(SvgIncrease) />
                    </div>
                    <span />
                    <div
                      className="quantity-increase"
                      onClick={[Function]}
                    >
                      <ForwardRef(SvgDecrease) />
                    </div>
                  </div>
                  <span
                    className="basket-item-name"
                  />
                  <span
                    className="basket-item-price"
                  >
                    NaN
                     €
                  </span>
                </li>
                <li
                  className="basket-item"
                  key="1"
                >
                  <div
                    className="quantity-control"
                  >
                    <div
                      className="quantity-decrease"
                      onClick={[Function]}
                    >
                      <ForwardRef(SvgIncrease) />
                    </div>
                    <span />
                    <div
                      className="quantity-increase"
                      onClick={[Function]}
                    >
                      <ForwardRef(SvgDecrease) />
                    </div>
                  </div>
                  <span
                    className="basket-item-name"
                  />
                  <span
                    className="basket-item-price"
                  >
                    NaN
                     €
                  </span>
                </li>
                <li
                  className="basket-item"
                  key="2"
                >
                  <div
                    className="quantity-control"
                  >
                    <div
                      className="quantity-decrease"
                      onClick={[Function]}
                    >
                      <ForwardRef(SvgIncrease) />
                    </div>
                    <span />
                    <div
                      className="quantity-increase"
                      onClick={[Function]}
                    >
                      <ForwardRef(SvgDecrease) />
                    </div>
                  </div>
                  <span
                    className="basket-item-name"
                  />
                  <span
                    className="basket-item-price"
                  >
                    NaN
                     €
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="basket-fees-container  "
            >
              <ul
                className="basket-fees-content"
              >
                <li
                  className="basket-net-fees-item"
                >
                  <span>
                    Sous-total
                  </span>
                  <span>
                    NaN
                     €
                  </span>
                </li>
                <li
                  className="basket-delivery-fees-item"
                >
                  <span>
                    Frais de livraison
                  </span>
                  <span>
                    2.50
                     €
                  </span>
                </li>
              </ul>
            </div>
            <div
              className=""
            />
            <div
              className="basket-footer  "
            >
              <ul>
                <li
                  className="basket-net-fees-item"
                >
                  <span
                    className="tip-text"
                  >
                    Pourboire livreur
                  </span>
                  <div
                    className="quantity-control tip"
                  >
                    <div
                      className="quantity-increase"
                      onClick={[Function]}
                    >
                      <ForwardRef(SvgIncrease) />
                    </div>
                    <div
                      className="quantity-decrease"
                      onClick={[Function]}
                    >
                      <ForwardRef(SvgDecrease) />
                    </div>
                  </div>
                  <span>
                    1.00
                     €
                  </span>
                </li>
                <li
                  className="basket-item total"
                >
                  <span>
                    Total
                  </span>
                  <span
                    className="basket-total-price"
                  >
                    NaN
                     €
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
