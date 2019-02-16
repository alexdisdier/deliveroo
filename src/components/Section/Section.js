import React from "react";

import "./Section.css";

import Card from "./Card/Card";

const section = props => {
  let selected = false;

  return (
    <section id={props.anchor}>
      <h3>{props.sectionTitle}</h3>
      <div className="cards-container">
        {props.menus.map((e, index) => {
          if (props.basket.filter(check => check.id === e.id).length > 0) {
            selected = true;
          } else {
            selected = false;
          }

          return (
            <Card
              key={index}
              id={e.id}
              title={e.title}
              description={e.description}
              price={e.price}
              picture={e.picture}
              popular={e.popular}
              selected={selected}
              quantity={e.quantity}
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
