import React, { useEffect } from "react";
import { Element } from "react-scroll";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { fetchMenus } from "../../actions/menuActions";

import "./Section.css";

import Card from "./Card/Card";

const section = props => {
  let quantity = null;

  useEffect(() => {
    props.fetchMenus();
  }, []);

  const menu = props.menus;
  const sections = [];
  const categories = Object.keys(menu);

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const menus = menu[category];

    for (let i = 0; i < menus.length; i++) {
      menus[i]["selected"] = false;
      menus[i]["quantity"] = 0;
    }

    if (menus.length > 1) {
      sections.push(
        <Element key={i} name={`test${i}`} className="element">
          <section id={props.anchor}>
            <h3>{props.sectionTitle}</h3>
            <div className="cards-container">
              {menus.map((meal, index) => {
                if (
                  props.basket.filter(check => check.id === meal.id).length > 0
                ) {
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
        </Element>
      );
    }
  }

  return sections;
};

section.propTypes = {
  fetchMenus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menus: state.menus.items
});

export default connect(
  mapStateToProps,
  { fetchMenus }
)(section);
