import { FETCH_MENUS } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENUS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
