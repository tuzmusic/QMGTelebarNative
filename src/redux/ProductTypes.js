import Product from "../models/Product";

export type ProductCollection = { [number]: Product };

export type ProductState = {
  +products: ProductCollection,
  +error: string,
  +isLoading: boolean
};

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
