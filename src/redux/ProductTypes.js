import Product from "../models/Product";
import SubscriptionProduct from "../models/SubscriptionProduct";

export type AllProductCollection = { [number]: Product | SubscriptionProduct };
export type ProductCollection = { [number]: Product };
export type SubscriptionProductProductCollection = {
  [number]: SubscriptionProduct
};

export type ProductState = {
  +products: AllProductCollection,
  +error: string,
  +isLoading: boolean
};

/* ACTION TYPES */
export type FETCH_PRODUCTS_START = { type: "FETCH_PRODUCTS_START" };
export type FETCH_PRODUCTS_SUCCESS = {
  type: "FETCH_PRODUCTS_SUCCESS",
  products: AllProductCollection
};
export type FETCH_PRODUCTS_FAILURE = {
  type: "FETCH_PRODUCTS_FAILURE",
  error: Error
};

export type ProductAction =
  | FETCH_PRODUCTS_START
  | FETCH_PRODUCTS_SUCCESS
  | FETCH_PRODUCTS_FAILURE;
