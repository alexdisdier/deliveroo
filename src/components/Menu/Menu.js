import React from "react";

import "./Menu.css";

import Basket from "../Basket/Basket";

const menu = props => {
  return (
    <div className="menu-nav">
      <div className="menu-nav-container container">
        <nav>
          <div className="link-bar">
            <a href="#">Brunchs</a>
            <a href="#">Petit Dejeuner</a>
            <a href="#">Viennoiseries et Pains</a>
            <a href="#">Salades</a>
          </div>
          <div className="link-bar-grouped">
            <a href="#">Plus</a>
          </div>
        </nav>
        <Basket />
      </div>
    </div>
  );
};

export default menu;
