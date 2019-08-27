// @flow
import Product from "../../models/Product";
import * as Types from "../../redux/ProductTypes";

const initialState = {
  products: {},
  error: "",
  isLoading: false
};

export default function productsReducer(
  state: Types.ProductState = initialState,
  action: Types.ProductAction
): Types.ProductState {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return { ...state, isLoading: true };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, isLoading: false, products: action.products };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, isLoading: false, error: action.error.message };
    default:
      return state;
  }
}

export function selectProducts(
  state: Types.ProductState
): Types.ProductCollection {
  const filtered: Types.ProductCollection = {};

  for (let key in state.products) {
    if (state.products[key].type == "simple")
      filtered[key] = state.products[key];
  }

  return filtered;
}
