// @flow
import * as Types from "../CartTypes";
import LineItem from "../../models/LineItem";

const initialState: Types.CartState = { lineItems: {} };

export default function cartReducer(
  state: Types.CartState = initialState,
  action: Types.CartAction
) {
  switch (action.type) {
    case "ADD_LINE_ITEM":
      return {
        ...state,
        lineItems: { ...state.lineItems, [action.item.product.id]: action.item }
      };
    case "UPDATE_LINE_ITEM":
      const mutableItems = { ...state.lineItems };
      mutableItems[action.item.product.id] = action.item;
      return { ...state, lineItems: mutableItems };
    case "DELETE_LINE_ITEM":
      const lineItems = { ...state.lineItems };
      debugger;
      delete lineItems[action.item.product.id];
      return { ...state, lineItems };
    default:
      return state;
  }
}
