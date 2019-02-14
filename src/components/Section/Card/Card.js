import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

import "./Card.css";

const card = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h6>{props.title}</h6>
        <LinesEllipsis
          className="card-description"
          text={props.description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <span className="card-price">{props.price}</span>
      </div>
      <div
        className="card-img"
        style={{ backgroundImage: `url(${props.picture})` }}
      />
    </div>
  );
};

export default card;
