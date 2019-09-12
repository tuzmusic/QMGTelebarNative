// @flow

import * as Types from "../../src/redux/FormTypes";
import ShopWorker from "../../src/models/ShopWorker";

describe("calculation methods", () => {
  describe("quantifiedItemList", () => {
    const items: Types.OrderItem[] = [
      { name: "Butterfinger", price: null },
      { name: "Twix", price: 5 },
      { name: "Snickers", price: 5 }
    ];
    const quantities = [1, 2, 0];
    const expectedItems: Types.QuantifiedOrderItem[] = [
      { name: "Butterfinger", quantity: 1, price: null },
      { name: "Twix", quantity: 2, price: 5 }
    ];

    it("reduces an array of items from quantities and", () => {
      expect(ShopWorker.quantifiedItemList({ quantities, items })).toEqual(
        expectedItems
      );
    });
  });

  describe("totalPrice", () => {
    const items: Types.QuantifiedOrderItem[] = [
      { name: "Butterfinger", quantity: 1, price: null },
      { name: "Twix", quantity: 2, price: 5 },
      { name: "Snickers", quantity: 1, price: 10 }
    ];
    it("calculates the total price from an array of objects with prices", () => {
      expect(ShopWorker.totalPrice(items)).toEqual(20);
    });
  });
});
