// @flow
import * as Types from "../FormTypes";

const initialState: Types.FormState = {
  card: null,
  items: []
};
export default function currentformReducer(
  state: Types.FormState = initialState,
  action: Types.FormAction
): Types.FormState {
  switch (action.type) {
    case "SET_CARD":
      return { ...state, card: action.card };
    case "SET_ITEMS":
      return { ...state, items: action.items };
    default:
      return state;
  }
}
