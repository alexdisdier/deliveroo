import React from "react";

import "./Card.css";
const card = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <span>{props.price}</span>
      </div>
      <img src={props.picture} alt={props.title} />
    </div>
  );
};

export default card;
