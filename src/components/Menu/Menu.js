import React from "react";

import "./Menu.css";

import Basket from "../Basket/Basket";

const menu = props => {
  // const moveTo = section => {
  //   document.querySelector(section).scrollIntoView({
  //     block: "start",
  //     behavior: "smooth"
  //   });
  // };

  // [].forEach.call(document.querySelectorAll("link"), element => {
  //   element.addEventListener("click", e => {
  //     // e.preventDefault();
  //     const section = element.querySelector("a").getAttribute("href");
  //     moveTo(section);
  //   });
  // });

  return (
    <div className="menu-nav">
      <div className="menu-nav-container container">
        <nav>
          <div className="link-bar">
            <a className="link" href="#0">
              Brunchs
            </a>
            <a className="link" href="#1">
              Petit Dejeuner
            </a>
            <a className="link" href="#2">
              Viennoiseries et Pains
            </a>
            <a className="link" href="#3">
              Salades
            </a>
          </div>
          <div className="link-bar-grouped">
            <a href="#4">Plus</a>
          </div>
        </nav>
        <Basket basket={props.basket} />
      </div>
    </div>
  );
};

export default menu;
