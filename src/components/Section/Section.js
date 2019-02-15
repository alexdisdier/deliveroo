import React, { Component } from "react";

import "./Section.css";

import Card from "./Card/Card";

class Section extends Component {
  state = {
    default: null
  };

  render() {
    return (
      <section id={this.props.anchor}>
        <h3>{this.props.sectionTitle}</h3>
        <div className="cards-container">
          {this.props.menus.map((e, index) => {
            return (
              <Card
                key={index}
                id={e.id}
                title={e.title}
                description={e.description}
                price={e.price}
                picture={e.picture}
                addMeal={this.props.addMeal}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Section;
