import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import restaurantReducer from "./restaurantReducer";

export default combineReducers({
  menus: menuReducer,
  restaurants: restaurantReducer
});
