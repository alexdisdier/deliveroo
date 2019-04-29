import React from "react";
import { Link } from "react-scroll";
// source for smooth scroll: https://www.npmjs.com/package/react-scroll

import "./Menu.css";

import Basket from "../Basket/Basket";

const menu = props => {
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
              onSetActive={props.handleSetActive}
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
              onSetActive={props.handleSetActive}
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
              onSetActive={props.handleSetActive}
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
              onSetActive={props.handleSetActive}
            >
              Salades
            </Link>
          </div>
          <div className="link-bar-grouped">
            <a href="#4">Plus</a>
          </div>
        </nav>
        <Basket
          basket={props.basket}
          incQuantity={props.incQuantity}
          decQuantity={props.decQuantity}
          incTip={props.incTip}
          decTip={props.decTip}
          tip={props.tip}
        />
      </div>
    </div>
  );
};

export default menu;
