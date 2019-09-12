// @flow
import * as Types from "../../src/redux/ProductTypes";
import ProductFactory from "../../src/models/ProductFactory";
import {
  selectProducts,
  selectSubscriptionProducts,
  selectProductState,
  selectAllProducts
} from "../../src/redux/reducers/productsReducer";

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
const products = ProductFactory.collectionFromApiArray(productsArray);
// console.log(products);

const productState = {
  products,
  error: "",
  isLoading: false
};

const state: { productsReducer: Types.ProductState } = {
  productsReducer: productState
};

describe("selectProductsState", () => {
  it("returns the product state", () => {
    expect(selectProductState(state)).toEqual(productState);
  });
});

describe("selectAllProducts", () => {
  it("returns all the products and subscription products", () => {
    expect(selectAllProducts(state)).toEqual(products);
  });
});

describe("selectProducts", () => {
  it("selects only products, from the full application state", () => {
    const selected = selectProducts(state);
    const selectedKeys = Object.keys(selected);
    expect(selectedKeys).toEqual(["1", "2"]);
  });
});

describe("selectSubscriptionProducts", () => {
  it("selects only subscription products, from the full application state", () => {
    const selected = selectSubscriptionProducts(state);
    const selectedKeys = Object.keys(selected);
    expect(selectedKeys).toEqual(["3", "4"]);
  });
});
