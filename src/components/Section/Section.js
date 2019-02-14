import React, { Component } from "react";

import "./Section.css";

import Card from "./Card/Card";

class Section extends Component {
  state = {
    default: null
  };

  // renderCard() {
  //   const menus = this.props.menus;

  //   menus.map((e, index) => {
  //     return (
  //       <Card
  //         key={index}
  //         title={e.title}
  //         description={e.description}
  //         price={e.price}
  //         picture={e.picture}
  //       />
  //     );
  //   });
  // }

  render() {
    return (
      <section>
        <h2>{this.props.sectionTitle}</h2>
        <div className="card-container">
          {this.props.menus.map((e, index) => {
            return (
              <Card
                key={index}
                title={e.title}
                description={e.description}
                price={e.price}
                picture={e.picture}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Section;
