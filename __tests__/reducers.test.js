// @flow
import productsReducer from "../src/redux/reducers/productsReducer";
import apiResponse from "../__mocks__/api-index-response";
import Product from "../src/models/Product";
import type {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../src/redux/reducers/productsReducer";

describe("Products reducer", () => {
  const products = Product.collectionFromApiArray(apiResponse);
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
