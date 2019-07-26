// @flow
import MockAdapter from "axios-mock-adapter";
import productsSaga, {
  fetchProductsApi,
  fetchProductsSaga
} from "../src/redux/actions/productActions";
import apiResponse from "../__mocks__/api-index-response";
import { productFetchMock } from "../__mocks__/setup-fetch-mocks";
import axios from "axios";
import type {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../src/redux/reducers/productsReducer";
import Product from "../src/models/Product";
import type { ProductCollection } from "../src/models/Product";
import recordSaga from "../recordSaga";

const mock = productFetchMock();
afterEach(() => mock.reset());

describe("fetchProductsApi", () => {
  it("fetches the products", async () => {
    const products: Object[] = await fetchProductsApi();
    expect(products).toEqual(apiResponse);
  });
});

fdescribe("fetchProductsSaga", () => {
  const products: ProductCollection = Product.collectionFromApiArray(
    apiResponse
  );
  const startAction: FETCH_PRODUCTS_START = { type: "FETCH_PRODUCTS_START" };
  const successAction: FETCH_PRODUCTS_SUCCESS = {
    type: "FETCH_PRODUCTS_SUCCESS",
    products
  };
  it("dispatches the products", async () => {
    // using fetchProductsSaga goes through the whole action/saga but recordSaga isn't catching it
    const dispatched = await recordSaga(fetchProductsSaga, startAction);
    expect(dispatched).toContainEqual(successAction);
  });
});
