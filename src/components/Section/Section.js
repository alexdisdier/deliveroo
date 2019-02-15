import React, { Component } from "react";

import "./Section.css";

import Card from "./Card/Card";

class Section extends Component {
  state = {
    default: null
  };

  render() {
    let selected = false;
    let quantity = null;
    console.log(this.props.basket);

    return (
      <section id={this.props.anchor}>
        <h3>{this.props.sectionTitle}</h3>
        <div className="cards-container">
          {this.props.menus.map((e, index) => {
            if (
              this.props.basket.filter(check => check.id === e.id).length > 0
            ) {
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
                addMeal={this.props.addMeal}
                basket={this.props.basket}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Section;
