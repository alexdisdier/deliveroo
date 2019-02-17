import React from "react";

import "./Section.css";

import Card from "./Card/Card";

const section = props => {
  let quantity = null;

  return (
    <section id={props.anchor}>
      <h3>{props.sectionTitle}</h3>
      <div className="cards-container">
        {props.menus.map((meal, index) => {
          if (props.basket.filter(check => check.id === meal.id).length > 0) {
            quantity = props.basket.find(entry => entry.id === meal.id)
              .quantity;
          } else {
            quantity = null;
          }

          return (
            <Card
              key={index}
              {...meal}
              quantity={quantity}
              addMeal={props.addMeal}
              basket={props.basket}
            />
          );
        })}
      </div>
    </section>
  );
};

export default section;
