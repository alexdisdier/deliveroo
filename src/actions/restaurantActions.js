import { FETCH_RESTAURANTS } from "./types";

export const fetchRestaurants = () => dispatch => {
  console.log("fetching restaurants");
  fetch("https://deliveroo-api.now.sh/menu")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: data.restaurant
      })
    );
};
