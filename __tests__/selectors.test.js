// @flow
import * as Types from "../src/redux/ProductTypes";
import Product from "../src/models/Product";
import { selectProducts } from "../src/redux/reducers/productsReducer";
describe("selectProducts", () => {
  const props = {
    name: "string",
    slug: "string",
    description: "string",
    shortDescription: "string",
    price: 1,
    images: [{ id: 1, src: "string", name: "string", alt: "string" }],
    formInfo: {}
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

  it("selects only products", () => {
    expect(Object.keys(state.products)).toEqual(["1", "2", "3", "4"]);
    const selected = selectProducts(state);
    const selectedKeys = Object.keys(selected);
    expect(selectedKeys).toEqual(["1", "2"]);
  });
});
