import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

import "./Card.css";

const card = props => {
  const { title, description, price, picture, addMeal, id } = props;

  let quantity;
  // if ()

  return (
    <div
      className="card"
      onClick={() =>
        addMeal({
          id: id,
          name: title,
          price: price,
          quantity: 1
        })
      }
    >
      <div className="card-content">
        {quantity}
        <h6>{title}</h6>
        <LinesEllipsis
          className="card-description"
          text={description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <span className="card-price">{price}&nbsp;€</span>
      </div>
      <div
        className="card-img"
        style={{ backgroundImage: `url(${picture})` }}
      />
    </div>
  );
};

export default card;
