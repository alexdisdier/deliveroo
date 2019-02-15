import React, { Component } from "react";

import "./Section.css";

import Card from "./Card/Card";

class Section extends Component {
  state = {
    default: null
  };

  render() {
    let selected = false;
    // let quantity = null;

    return (
      <section id={this.props.anchor}>
        <h3>{this.props.sectionTitle}</h3>
        <div className="cards-container">
          {this.props.menus.map((e, index) => {
            // console.log(index);
            if (
              this.props.basket.filter(check => check.id === e.id).length > 0
            ) {
              selected = true;
              // quantity = this.props.basket[0].quantity;
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
