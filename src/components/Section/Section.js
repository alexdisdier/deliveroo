import React from "react";
import PropType from "prop-types";

import "./Section.css";

import Card from "./Card/Card";

function Section(props) {
  const { anchor, sectionTitle, menus, basket, addMeal } = props;
  let quantity = null;

  console.log("render Section");

  return (
    <section id={anchor}>
      <h3>{sectionTitle}</h3>
      <div className="cards-container">
        {menus.map((meal, index) => {
          if (basket.filter(check => check.id === meal.id).length > 0) {
            quantity = basket.find(entry => entry.id === meal.id).quantity;
          } else {
            quantity = null;
          }

          return (
            <Card
              key={index}
              {...meal}
              quantity={quantity}
              addMeal={addMeal}
              basket={basket}
            />
          );
        })}
      </div>
    </section>
  );
}

Section.propTypes = {
  menus: PropType.array.isRequired,
  basket: PropType.array.isRequired,
  addMeal: PropType.func.isRequired,
  anchor: PropType.string,
  sectionTitle: PropType.string.isRequired
};

export default React.memo(Section);
