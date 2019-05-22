import { FETCH_MENUS } from "./types";

export const fetchMenus = () => dispatch => {
  console.log("fetching menus");
  fetch("https://deliveroo-api.now.sh/menu")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_MENUS,
        payload: data.menu
      })
    );
};
