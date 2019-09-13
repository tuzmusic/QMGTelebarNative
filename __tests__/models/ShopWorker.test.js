// @flow

import * as Types from "../../src/redux/FormTypes";
import ShopWorker from "../../src/models/ShopWorker";
import Field from "../../src/models/fields/Field";
import CheckboxesField from "../../src/models/fields/CheckboxesField";

describe("quantity mapping functions", () => {
  describe("quantifiedItemList", () => {
    it("reduces an array of items from quantities and OrderItems", () => {
      const items: Types.OrderItem[] = [
        { name: "Butterfinger", price: null },
        { name: "Twix", price: 5 }
      ];
      const quantities = [1, 2, 0];
      const expectedItems: Types.QuantifiedOrderItem[] = [
        { name: "Butterfinger", quantity: 1, price: null },
        { name: "Twix", quantity: 2, price: 5 }
      ];

      expect(ShopWorker.quantifiedItemList(quantities, items)).toEqual(
        expectedItems
      );
    });
  });
});

describe("mappedQuantifiedItemsFromArrayOfLists", () => {
  it("maps multiple list arrays into a nested array", () => {
    const freeItems: Types.OrderItem[] = [
      { name: "Butterfinger", price: null },
      { name: "Twix", price: null }
    ];
    const extraItems: Types.OrderItem[] = [
      { name: "Butterfinger", price: 5 },
      { name: "Twix", price: 5 }
    ];
    const quantitiesLists: Array<number[]> = [[1, 2], [3, 4]];
    const itemsLists: Array<Types.OrderItem[]> = [freeItems, extraItems];
    const expectedItems: Array<Types.QuantifiedOrderItem[]> = [
      [
        { name: "Butterfinger", quantity: 1, price: null },
        { name: "Twix", quantity: 2, price: null }
      ],
      [
        { name: "Butterfinger", quantity: 3, price: 5 },
        { name: "Twix", quantity: 4, price: 5 }
      ]
    ];

    expect(
      ShopWorker.mappedQuantifiedItemsFromArrayOfLists(
        quantitiesLists,
        itemsLists
      )
    ).toEqual(expectedItems);
  });
});
describe("naming functions", () => {
  let quantifiedList: Types.QuantifiedOrderItem[] = [
    {
      name: "Something",
      price: 10,
      quantity: 5
    },
    {
      name: "Something else",
      price: 10,
      quantity: 2
    }
  ];
  let field: CheckboxesField = Object.assign(new CheckboxesField(), {
    title: "Awesome field",
    type: "header"
  });
  let expectedItem: Types.CheckboxesSelection = {
    selections: quantifiedList,
    fieldName: "Awesome field"
  };

  describe("namedItem", () => {
    it("maps a list of items into an object with their fieldName", () => {
      expect(ShopWorker.namedItem(quantifiedList, field)).toEqual(expectedItem);
    });
  });

  describe("mappedNamedItemsFromArrayOfLists", () => {
    let anotherQuantifiedList: Types.QuantifiedOrderItem[] = [
      {
        name: "Awesomeness",
        price: 0,
        quantity: 1
      },
      {
        name: "Sadness",
        price: 0,
        quantity: 3
      }
    ];
    let anotherField: CheckboxesField = Object.assign(new CheckboxesField(), {
      title: "Crappy field",
      type: "header"
    });

    let expected: Types.CheckboxesSelection[] = [
      { selections: quantifiedList, fieldName: "Awesome field" },
      { selections: anotherQuantifiedList, fieldName: "Crappy field" }
    ];

    it("maps a list of items with fieldNames", () => {
      const lists = [quantifiedList, anotherQuantifiedList];
      const fields = [field, anotherField];
      expect(
        ShopWorker.mappedNamedItemsFromArrayOfLists(lists, fields)
      ).toEqual(expected);
    });
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
