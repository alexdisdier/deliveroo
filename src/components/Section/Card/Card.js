import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

import "./Card.css";

const card = props => {
  const {
    title,
    description,
    price,
    picture,
    popular,
    id,
    selected,
    quantity,
    addMeal
  } = props;

  let star = (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 10.08l-3.24 1.8c-.36.2-.6.03-.54-.38l.62-3.84-2.62-2.6c-.3-.3-.2-.54.22-.54h3.82L5.76.34c.13-.38.37-.38.5 0L7.9 4.52h3.66c.42 0 .52.23.22.53l-2.62 2.6.62 3.85c.07.4-.17.58-.54.37L6 10.07z"
        fill="#FF8100"
        fillRule="evenodd"
      />
    </svg>
  );
  let quantityDiv;
  let popularDiv;
  let active;

  if (popular) {
    popularDiv = <span className="card-popular">{star} populaire</span>;
  }
  if (selected) {
    active = "card-active";
    quantityDiv = <div className="card-quantity">{quantity}x</div>;
  }

  return (
    <div
      className={`card ${active}`}
      onClick={() => {
        addMeal({
          id: id,
          name: title,
          price: price,
          quantity: 1
        });
      }}
    >
      <div className="card-content">
        {quantityDiv}
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
        <span>{popularDiv}</span>
      </div>
      <div
        className="card-img"
        style={{ backgroundImage: `url(${picture})` }}
      />
    </div>
  );
};

export default card;
