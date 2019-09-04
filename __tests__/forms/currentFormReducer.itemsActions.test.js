// @flow
import reducer from "../../src/redux/reducers/currentFormReducer";
import Field from "../../src/models/fields/Field";
import * as Types from "../../src/redux/FormTypes";
import * as Actions from "../../src/redux/actions/currentFormActions";

const initialState: Types.FormState = {
  card: null,
  items: []
};

const items: Types.OrderItem[] = [
  { name: "First field option 1", price: 5, quantity: 1 },
  { name: "First field option 2", price: 10, quantity: 2 },
  { name: "First field option 3", price: null, quantity: 3 }
];

describe("setItems", () => {
  it("sets all the items", () => {
    const result = reducer(initialState, Actions.setItems(items));
    expect(result.items).toEqual(items);
  });
});

describe("setItemQuantity", () => {
  const item = items[0];
  it("should set the item quantity", () => {
    const result = reducer(
      initialState,
      Actions.setItemQuantity({ ...item, quantity: 5 })
    );
    expect(result.items[0].quantity).toBe(5);
  });
});

xdescribe("incrementItemQuantity", () => {});
xdescribe("decrementItemQuantity", () => {});
xdescribe("removeItem", () => {});
