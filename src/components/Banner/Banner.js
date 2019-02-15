import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

import "./Banner.css";

const banner = props => {
  // console.log(props);
  const { restaurant } = props;
  return (
    <div className="banner-container">
      <div className="container banner">
        <div className="banner-content">
          <h3>{restaurant.name}</h3>
          <LinesEllipsis
            className="banner-description"
            text={restaurant.description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <span className="banner-price">{restaurant.price}</span>
        </div>
        <div
          className="banner-img"
          style={{ backgroundImage: `url(${restaurant.picture})` }}
        />
      </div>
    </div>
  );
};

export default banner;
