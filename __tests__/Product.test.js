import Product from "../src/models/Product";
import { products } from "../__mocks__/api-index-response";
import expectedProduct from "../__mocks__/mock-created-object";

describe("Product", () => {
  describe("fromApi()", () => {
    const apiJson = products[0];

    it("takes an API response and returns a product", () => {
      const createdProduct = Product.fromApi(apiJson);
      expect(createdProduct).toEqual(expectedProduct);
    });
  });

  describe("collectionFromArray", () => {});
});
