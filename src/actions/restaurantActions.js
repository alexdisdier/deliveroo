import { FETCH_RESTAURANTS } from "./types";

export const fetchRestaurants = () => dispatch => {
  fetch("https://deliveroo-api.now.sh/menu")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: data.restaurant
      })
    );
};
