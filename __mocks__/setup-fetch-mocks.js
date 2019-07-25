import MockAdapter from "axios-mock-adapter";
import apiResponse from "./api-index-response";
import axios from "axios";
import { ApiUrls } from "../src/constants/urls";

export function productFetchMock() {
  const mock = new MockAdapter(axios);
  mock.onGet(ApiUrls.getProducts).reply(200, apiResponse);
  return mock;
}
