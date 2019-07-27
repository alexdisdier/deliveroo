import React from "react";
import PropType from "prop-types";

import LinesEllipsis from "react-lines-ellipsis";

import "./Banner.css";

function Banner(props) {
  const {
    restaurant: { name, description, picture }
  } = props;

  console.log("render Banner");

  return (
    <div className="banner-container">
      <div className="container banner">
        <div className="banner-content">
          <h3>{name}</h3>
          <LinesEllipsis
            className="banner-description"
            text={description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <div
          className="banner-img"
          style={{ backgroundImage: `url(${picture})` }}
        />
      </div>
    </div>
  );
}

Banner.propTypes = {
  name: PropType.string,
  description: PropType.string,
  picture: PropType.string
};

export default React.memo(Banner);
