import MockAdapter from "axios-mock-adapter";
import { products } from "./products-response";
import { subscriptionProducts } from "./subscription-products-response";
import axios from "axios";
import { ApiUrls } from "../src/constants/urls";

export function productFetchMock() {
  const mock = new MockAdapter(axios);
  // console.log(products.concat(subscriptionProducts));

  // mock.onGet(ApiUrls.getProducts).reply(200, products);
  mock
    .onGet(ApiUrls.getProducts)
    .reply(200, products.concat(subscriptionProducts));
  return mock;
}
