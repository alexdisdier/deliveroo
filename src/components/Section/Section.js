import React from "react";

import "./Section.css";

import Card from "./Card/Card";

const section = props => {
  let selected = false;

  return (
    <section id={props.anchor}>
      <h3>{props.sectionTitle}</h3>
      <div className="cards-container">
        {props.menus.map((meal, index) => {
          if (props.basket.filter(check => check.id === meal.id).length > 0) {
            selected = true;
          } else {
            selected = false;
          }

          return (
            <Card
              key={index}
              {...meal}
              selected={selected}
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
