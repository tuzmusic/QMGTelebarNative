import Product from "../src/models/Product";
import Subscription from "../src/models/SubscriptionProduct";
import {
  products,
  subscription_products
} from "../__mocks__/api-index-response";
import expectedProduct from "../__mocks__/mock-created-object";

describe("Product", () => {
  describe("fromApi()", () => {
    const prodObj = products[0];

    it("takes an API response and returns a product", () => {
      const createdProduct = Product.fromApi(prodObj);
      expect(createdProduct).toEqual(expectedProduct);
    });
  });

  describe("collectionFromArray", () => {});
});

describe("Subscription", () => {
  const subsObj = subscription_products[0];
  describe("constructor", () => {
    const createdSub = Subscription.fromApi(subsObj);
    it("inherits properties from Product", () => {
      expect(createdSub.price).toEqual(5);
    });
    it("also sets its own properties", () => {
      expect(createdSub.subscription.period).toEqual("month");
      expect(createdSub.subscription.periodInterval).toEqual(1);
      expect(createdSub.subscription.price).toEqual(5);
    });
  });
});
