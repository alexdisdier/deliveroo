import React, { useEffect } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchRestaurants } from "../../actions/restaurantActions";

import "./Banner.css";

const banner = props => {
  useEffect(() => {
    props.fetchRestaurants();
  }, []);

  const { name, description, picture } = props.restaurants;

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
};

banner.propTypes = {
  fetchRestaurants: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.items
});

export default connect(
  mapStateToProps,
  { fetchRestaurants }
)(banner);
