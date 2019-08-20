import MockAdapter from "axios-mock-adapter";
import { products } from "./products-response";
import axios from "axios";
import { ApiUrls } from "../src/constants/urls";

export function productFetchMock() {
  const mock = new MockAdapter(axios);
  mock.onGet(ApiUrls.getProducts).reply(200, products);
  return mock;
}
