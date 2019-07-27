import React from "react";
import PropType from "prop-types";

import { Link } from "react-scroll";
// source for smooth scroll: https://www.npmjs.com/package/react-scroll

import "./Menu.css";

import Basket from "../Basket/Basket";

function Menu(props) {
  const {
    basket,
    incQuantity,
    decQuantity,
    incTip,
    decTip,
    tip,
    handleSetActive
  } = props;

  console.log("render Menu");

  return (
    <div className="menu-nav">
      <div className="menu-nav-container container">
        <nav>
          <div className="link-bar">
            <Link
              className="link"
              activeClass="active"
              to="test0"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onSetActive={handleSetActive}
            >
              Brunchs
            </Link>
            <Link
              className="link"
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onSetActive={handleSetActive}
            >
              Petit Dejeuner
            </Link>
            <Link
              className="link"
              activeClass="active"
              to="test2"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onSetActive={handleSetActive}
            >
              Viennoiseries et Pains
            </Link>
            <Link
              className="link"
              activeClass="active"
              to="test3"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onSetActive={handleSetActive}
            >
              Salades
            </Link>
          </div>
          <div className="link-bar-grouped">
            <a href="#4">Plus</a>
          </div>
        </nav>
        <Basket
          basket={basket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
          incTip={incTip}
          decTip={decTip}
          tip={tip}
        />
      </div>
    </div>
  );
}

Menu.propTypes = {
  basket: PropType.array.isRequired,
  incQuantity: PropType.func.isRequired,
  decQuantity: PropType.func.isRequired,
  incTip: PropType.func.isRequired,
  decTip: PropType.func.isRequired,
  handleSetActive: PropType.func,
  tip: PropType.number.isRequired
};

export default React.memo(Menu);
