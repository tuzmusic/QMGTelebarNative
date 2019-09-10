// @flow
import Product from "../../models/Product";
import SubscriptionProduct from "../../models/SubscriptionProduct";
import * as Types from "../../redux/ProductTypes";
import { createSelector } from "reselect";

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

export const selectProductState = (state: Object): Types.ProductState =>
  state.productsReducer;

export const selectAllProducts: Types.AllProductCollection = createSelector(
  selectProductState,
  (state: Types.ProductState) => state.products
);

export const selectProducts: Types.ProductCollection = createSelector(
  selectAllProducts,
  products => filterCollectionObjectByType(products, Product)
);

export const selectSubscriptionProducts: Types.SubscriptionProductCollection = createSelector(
  selectAllProducts,
  products => filterCollectionObjectByType(products, SubscriptionProduct)
);

export function filterCollectionObjectByType<T, U>(
  obj: { string: T },
  type: U
): Object {
  const filtered: Object = {};
  for (let key in obj) {
    if (obj[key].constructor == type) filtered[key] = obj[key];
  }

  return filtered;
}

export function filterCollectionObjectByKey<T>(
  obj: { string: T },
  predicateObj: Object
): Object {
  const filtered: Object = {};
  const predKey = Object.keys(predicateObj)[0];
  const predVal = Object.values(predicateObj)[0];
  for (let key in obj) {
    if (obj[key][predKey] == predVal) filtered[key] = obj[key];
  }

  return filtered;
}
