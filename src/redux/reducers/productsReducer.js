// @flow
import Product from "../../models/Product";
import type { ProductCollection } from "../../models/Product";
type ProductState = {
  +products: ProductCollection,
  +error: string,
  +isLoading: boolean
};

const initialState = {
  products: {},
  error: "",
  isLoading: false
};

export default function productsReducer(
  state: ProductState = initialState,
  action: ProductAction
): ProductState {
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

/* ACTION TYPES */
export type FETCH_PRODUCTS_START = { type: "FETCH_PRODUCTS_START" };
export type FETCH_PRODUCTS_SUCCESS = {
  type: "FETCH_PRODUCTS_SUCCESS",
  products: ProductCollection
};
export type FETCH_PRODUCTS_FAILURE = {
  type: "FETCH_PRODUCTS_FAILURE",
  error: Error
};

export type ProductAction =
  | FETCH_PRODUCTS_START
  | FETCH_PRODUCTS_SUCCESS
  | FETCH_PRODUCTS_FAILURE;
