import { FETCH_RESTAURANTS } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
