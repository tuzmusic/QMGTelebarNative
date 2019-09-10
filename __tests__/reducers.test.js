// @flow
import productsReducer from "../src/redux/reducers/productsReducer";
import { products as productsResponse } from "../__mocks__/products-response";
import { subscriptionProducts as subscriptionProductsResponse } from "../__mocks__/subscription-products-response";
import Product from "../src/models/Product";
import * as Types from "../src/redux/ProductTypes";
import ProductFactory from "../src/models/ProductFactory";

const response = [...productsResponse, ...subscriptionProductsResponse];

describe("Products reducer", () => {
  const products = ProductFactory.collectionFromApiArray(response);
  const initialState = {
    products: {},
    error: "",
    isLoading: false
  };
  const startedState = {
    products: {},
    error: "",
    isLoading: true
  };
  it("sets the isLoading flag when a fetch is started", () => {
    expect(
      productsReducer(initialState, { type: "FETCH_PRODUCTS_START" })
    ).toEqual(startedState);
  });
  it("populates the products from a FETCH_PRODUCTS_SUCCESS action", () => {
    expect(
      productsReducer(startedState, {
        type: "FETCH_PRODUCTS_SUCCESS",
        products
      })
    ).toEqual({ isLoading: false, products, error: "" });
  });
  it("sets the error on failure", () => {
    expect(
      productsReducer(startedState, {
        type: "FETCH_PRODUCTS_FAILURE",
        error: Error("An error message"),
        products: {}
      })
    ).toEqual({
      isLoading: false,
      error: "An error message",
      products: {}
    });
  });
});
