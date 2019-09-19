// @flow
import * as Types from "../../src/redux/CartTypes";
import LineItem from "../../src/models/LineItem";
import Product from "../../src/models/Product";
import * as Actions from "../../src/redux/actions/cartActions";

let item: LineItem;
beforeEach(() => {
  item = LineItem.create();
});
describe("addItemToCart", () => {
  it("creates an add action", () => {
    const action: Types.ADD_LINE_ITEM = { type: "ADD_LINE_ITEM", item };
    expect(Actions.addItemToCart(item)).toEqual(action);
  });
});

describe("removeItemFromCart", () => {
  it("creates a delete action", () => {
    const action: Types.DELETE_LINE_ITEM = { type: "DELETE_LINE_ITEM", item };
    expect(Actions.removeItemFromCart(item)).toEqual(action);
  });
});

describe("updateItemInCart", () => {
  it("creates an update action", () => {
    const action: Types.UPDATE_LINE_ITEM = { type: "UPDATE_LINE_ITEM", item };
    expect(Actions.updateItemInCart(item)).toEqual(action);
  });
});

describe("changeQuantityForItem", () => {
  const product = Product.create({ id: 1 });
  const item = LineItem.create({ product, quantity: 1 });
  const quantity = 2;
  const newItem = Object.assign(item, { quantity });
  it("takes the original item and a new quantity for that item, and returns an action with a new item with the same properties but an updated quantity", () => {
    const action = { type: "UPDATE_LINE_ITEM", item };
    expect(Actions.changeQuantityForItem(item, quantity)).toEqual(action);
  });
});
