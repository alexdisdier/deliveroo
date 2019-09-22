import React from "react";
import { shallow } from "enzyme";

import Basket from "./Basket";

describe("Basket", () => {
  let props;

  beforeEach(() => {
    props = {
      basket: [
        {
          id: "id1",
          quantity: 1,
          price: 10,
          name: "item1"
        },
        {
          id: "id2",
          quantity: 1,
          price: 10,
          name: "item2"
        }
      ],
      incTip: jest.fn(),
      decTip: jest.fn(),
      tip: 1,
      incQuantity: jest.fn(),
      decQuantity: jest.fn()
    };
  });

  describe("actions", () => {
    it("increments a meal by 1", () => {
      const wrapper = shallow(<Basket {...props} />);

      wrapper
        .find(".quantity-increase")
        .at(0)
        .simulate("click");

      expect(props.incQuantity).toHaveBeenCalledTimes(1);
      expect(props.incQuantity).toHaveBeenCalledWith("id1");
    });

    it("decrements a meal by 1 if number of meals > 0", () => {
      const wrapper = shallow(<Basket {...props} />);

      wrapper
        .find(".quantity-decrease")
        .at(0)
        .simulate("click");

      expect(props.decQuantity).toHaveBeenCalledTimes(1);
      expect(props.decQuantity).toHaveBeenCalledWith("id1");
    });

    it("removes a meal from basket if number of meals === 1", () => {
      const wrapper = shallow(<Basket {...props} />);

      wrapper
        .find(".quantity-decrease")
        .at(0)
        .simulate("click");

      expect(props.decQuantity).toHaveBeenCalledTimes(1);
      expect(props.decQuantity).toHaveBeenCalledWith("id1");
    });

    it("increments tipping by 1", () => {
      const wrapper = shallow(<Basket {...props} />);

      wrapper
        .find(".tip")
        .at(0)
        .find(".quantity-increase")
        .simulate("click");

      expect(props.incTip).toHaveBeenCalledTimes(1);
    });

    it("decrements tipping by 1", () => {
      const wrapper = shallow(<Basket {...props} />);

      wrapper
        .find(".tip")
        .at(0)
        .find(".quantity-decrease")
        .simulate("click");

      expect(props.decTip).toHaveBeenCalledTimes(1);
    });

    it("cannot decrement tipping by 1 if tipping is 0", () => {
      props.tip = 0;

      const wrapper = shallow(<Basket {...props} />);

      wrapper
        .find(".tip")
        .at(0)
        .find(".quantity-decrease")
        .simulate("click");

      expect(props.decTip).toHaveBeenCalledTimes(1);
      expect(
        wrapper.containsMatchingElement(
          <span className="tip-total">0.00&nbsp;€</span>
        )
      ).toBeTruthy();
    });
  });

  describe("renders", () => {
    it("the validate my basket button is disabled", () => {
      props.basket = [];
      const wrapper = shallow(<Basket {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <div
          className="basket-wrapper hide-mobile"
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
                className="btn-basket btn-disabled"
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
                />
              </div>
              <div
                className="basket-fees-container  hide"
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
                      0.00
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
                className="basket-empty"
              >
                <span>
                  Votre panier est vide
                </span>
              </div>
              <div
                className="basket-footer  hide"
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
                    <span
                      className="tip-total"
                    >
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
                      0.00
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

    it("the Basket", () => {
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
                        className="quantity-increase"
                        onClick={[Function]}
                      >
                        <ForwardRef(SvgIncrease) />
                      </div>
                      <span>
                        1
                      </span>
                      <div
                        className="quantity-decrease"
                        onClick={[Function]}
                      >
                        <ForwardRef(SvgDecrease) />
                      </div>
                    </div>
                    <span
                      className="basket-item-name"
                    >
                      item1
                    </span>
                    <span
                      className="basket-item-price"
                    >
                      10.00
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
                        className="quantity-increase"
                        onClick={[Function]}
                      >
                        <ForwardRef(SvgIncrease) />
                      </div>
                      <span>
                        1
                      </span>
                      <div
                        className="quantity-decrease"
                        onClick={[Function]}
                      >
                        <ForwardRef(SvgDecrease) />
                      </div>
                    </div>
                    <span
                      className="basket-item-name"
                    >
                      item2
                    </span>
                    <span
                      className="basket-item-price"
                    >
                      10.00
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
                      20.00
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
                    <span
                      className="tip-total"
                    >
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
                      23.50
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
});
