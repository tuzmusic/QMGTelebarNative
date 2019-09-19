// @flow
import * as Types from "../../src/redux/CartTypes";
import cartReducer, * as Selectors from "../../src/redux/reducers/cartReducer";
import LineItem from "../../src/models/LineItem";
import Product from "../../src/models/Product";

let product1: Product;
let product2: Product;
let item1: LineItem;
let item2: LineItem;

beforeEach(() => {
  product1 = Product.create({
    id: 1,
    name: "A Product"
  });
  product2 = Product.create({
    id: 2,
    name: "Another Product"
  });
  item1 = LineItem.create({
    product: product1,
    quantity: 1
  });
  item2 = LineItem.create({
    product: product2,
    quantity: 10
  });
});
describe("Cart reducer", () => {
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

    const newItem = LineItem.create(item1);
    newItem.quantity = 12;
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

    expect(Object.keys(result.lineItems).length).toEqual(1);
    expect(result.lineItems[item2.product.id].quantity).toEqual(20);
  });
});

describe("cart selectors", () => {
  let cart: Types.CartState;
  let state: Object;
  beforeAll(() => {
    cart = {
      lineItems: {
        "1": item1,
        "2": item2
      }
    };
    state = { cart };
  });
  describe("selectCartState", () => {
    it("returns the cart state", () => {
      expect(Selectors.selectCartState(state)).toEqual(cart);
    });
  });
  describe("selectCartItemsObject", () => {
    it("returns the lineItems object", () => {
      expect(Selectors.selectCartItemsObject(state)).toEqual(cart.lineItems);
    });
  });
  describe("selectCartItems", () => {
    it("returns the line items as an array", () => {
      expect(Selectors.selectCartItems(state)).toEqual([item1, item2]);
    });
  });
  describe("selectCartSize", () => {
    it("returns the number of items in the cart", () => {
      expect(Selectors.selectCartSize(state)).toEqual(2);
    });
  });
});
