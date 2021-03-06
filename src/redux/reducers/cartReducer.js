// @flow
import * as Types from "../CartTypes";
import LineItem from "../../models/LineItem";
import { createSelector, OutputSelector } from "reselect";

const initialState: Types.CartState = { lineItems: {} };

export default function cartReducer(
  state: Types.CartState = initialState,
  action: Types.CartAction
) {
  switch (action.type) {
    case "ADD_LINE_ITEM":
      const id = action.item.product.id;
      const item = state.lineItems[id];
      if (item) {
        return {
          ...state,
          lineItems: {
            ...state.lineItems,
            [id]: Object.assign(new LineItem(), {
              ...item,
              quantity: item.quantity + action.item.quantity
            })
          }
        };
      } else {
        return {
          ...state,
          lineItems: {
            ...state.lineItems,
            [id]: action.item
          }
        };
      }
    case "UPDATE_LINE_ITEM":
      const mutableItems = { ...state.lineItems };
      mutableItems[action.item.product.id] = action.item;
      return { ...state, lineItems: mutableItems };
    case "DELETE_LINE_ITEM":
      const lineItems = { ...state.lineItems };
      delete lineItems[action.item.product.id];
      return { ...state, lineItems };
    default:
      return state;
  }
}

export const selectCartState: Object => Types.CartState = (state: Object) =>
  state.cart;

export const selectCartItemsObject = createSelector(
  selectCartState,
  cart => cart.lineItems
);

export const selectCartItems = createSelector(
  selectCartItemsObject,
  lineItems => Object.values(lineItems)
);

export const selectCartSize = createSelector(
  selectCartItems,
  items => items.length
);
