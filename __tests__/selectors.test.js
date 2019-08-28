// @flow
import * as Types from "../src/redux/ProductTypes";
import Product from "../src/models/Product";
import {
  selectProducts,
  selectSubscriptionProducts
} from "../src/redux/reducers/productsReducer";

const props = {
  name: "string",
  slug: "string",
  description: "string",
  shortDescription: "string",
  price: 1,
  images: [{ id: 1, src: "string", name: "string", alt: "string" }],
  form_info: {
    form_title: "whatever",
    form_type: "whatever!",
    fields: []
  }
};
const productsArray: Object[] = [
  { ...props, id: 1, type: "simple" },
  { ...props, id: 2, type: "simple" },
  { ...props, id: 3, type: "subscription" },
  { ...props, id: 4, type: "subscription" }
];

const state: Types.ProductState = {
  products: Product.collectionFromApiArray(productsArray),
  error: "",
  isLoading: false
};

describe("selectProducts", () => {
  it("selects only products", () => {
    const selected = selectProducts(state);
    const selectedKeys = Object.keys(selected);
    expect(selectedKeys).toEqual(["1", "2"]);
  });
});

describe("selectSubscriptionProducts", () => {
  it("selects only subscription products", () => {
    const selected = selectSubscriptionProducts(state);
    const selectedKeys = Object.keys(selected);
    expect(selectedKeys).toEqual(["3", "4"]);
  });
});
