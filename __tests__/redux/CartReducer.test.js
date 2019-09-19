// @flow
import * as Types from "../../src/redux/CartTypes";
import cartReducer from "../../src/redux/reducers/cartReducer";
import LineItem from "../../src/models/LineItem";
import Product from "../../src/models/Product";

let product1: Product;
let product2: Product;
let item1: LineItem;
let item2: LineItem;

describe("Cart reducer", () => {
  beforeEach(() => {
    product1 = Object.assign(new Product(), {
      id: 1,
      name: "A Product"
    });
    product2 = Object.assign(new Product(), {
      id: 2,
      name: "Another Product"
    });
    item1 = Object.assign(new LineItem(), {
      product: product1,
      quantity: 1
    });
    item2 = Object.assign(new LineItem(), {
      product: product2,
      quantity: 10
    });
  });

  it("can add an item", () => {
    const initialState: Types.CartState = { lineItems: {} };
    const action: Types.ADD_LINE_ITEM = { type: "ADD_LINE_ITEM", item: item1 };
    expect(cartReducer(initialState, action)).toEqual({
      lineItems: { [item1.product.id]: item1 }
    });
  });

  it("can delete an item", () => {
    const initialState: Types.CartState = {
      lineItems: { [item1.product.id]: item1, [item2.product.id]: item2 }
    };
    const action: Types.DELETE_LINE_ITEM = {
      type: "DELETE_LINE_ITEM",
      item: item1
    };
    expect(cartReducer(initialState, action)).toEqual({
      lineItems: { [item2.product.id]: item2 }
    });
  });

  it("can update an item", () => {
    const initialState = {
      lineItems: { [item1.product.id]: item1, [item2.product.id]: item2 }
    };
    expect(initialState.lineItems[item1.product.id].quantity).toEqual(1);
    const newItem: LineItem = Object.assign(
      new LineItem(),
      { ...item1 },
      { quantity: 12 }
    );
    expect(initialState.lineItems[item1.product.id].quantity).toEqual(1);
    const action: Types.UPDATE_LINE_ITEM = {
      type: "UPDATE_LINE_ITEM",
      item: newItem
    };
    const result = cartReducer(initialState, action);
    expect(result.lineItems[item1.product.id].quantity).toEqual(12);
  });

  test("when adding an item already in the cart, it increments the quantity.", () => {
    const initialState: Types.CartState = {
      lineItems: { [item2.product.id]: item2 }
    };
    const action: Types.ADD_LINE_ITEM = { type: "ADD_LINE_ITEM", item: item2 };
    const result: Types.CartState = cartReducer(initialState, action);
    console.log(initialState);

    console.log(result);

    expect(Object.keys(result.lineItems).length).toEqual(1);
    expect(result.lineItems[item2.product.id].quantity).toEqual(20);
  });
});
