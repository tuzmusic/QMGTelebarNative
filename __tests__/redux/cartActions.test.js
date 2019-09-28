// @flow
import * as CartTypes from "../../src/redux/CartTypes";
import * as FormTypes from "../../src/redux/FormTypes";
import LineItem from "../../src/models/LineItem";
import Product from "../../src/models/Product";
import * as Actions from "../../src/redux/actions/cartActions";
import SubscriptionProduct from "../../src/models/SubscriptionProduct";
import { subscriptionProducts } from "../../__mocks__/subscription-products-response";

let item: LineItem;
beforeEach(() => {
  item = LineItem.create();
});
describe("addItemToCart", () => {
  it("creates an add action", () => {
    const action: CartTypes.ADD_LINE_ITEM = { type: "ADD_LINE_ITEM", item };
    expect(Actions.addItemToCart(item)).toEqual(action);
  });
});
/* 
describe('addToCart', () => {
  // LineItem.fromProductForm actually doesn't "do" anything, it just calls LineItem.create.
  // To test this action, to be really sure, we're still doing this whole business
  const submissionObj: FormTypes.LineItemCreatorObject = {
    product,
    quantity: 1,
    items: [
      {
        selections: [
          { name: "Twix", quantity: 1, price: 0 },
          { name: "Snickers", quantity: 1, price: 0 },
          { name: "Butterfinger", quantity: 2, price: 0 }
        ],
        fieldName: "Have some free candies"
      },
      {
        selections: [
          { name: "Twix", quantity: 1, price: 5 },
          { name: "M&M", quantity: 2, price: 5 }
        ],
        fieldName: ""
      },
      {
        card:
          "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake",
        fieldName: "Add a Anniversary Gift Card"
      }
    ]
  };
  const lineItem = LineItem.create(submissionObj)
  const product = SubscriptionProduct.fromApi(subscriptionProducts[0]);

  it('adds an item from a product form', () => {
    const action: CartTypes.ADD_LINE_ITEM = { type: "ADD_LINE_ITEM", item: lineItem };
    expect(Actions.addToCart())
  });
});
 */
describe("removeItemFromCart", () => {
  it("creates a delete action", () => {
    const action: CartTypes.DELETE_LINE_ITEM = { type: "DELETE_LINE_ITEM", item };
    expect(Actions.removeItemFromCart(item)).toEqual(action);
  });
});

describe("updateItemInCart", () => {
  it("creates an update action", () => {
    const action: CartTypes.UPDATE_LINE_ITEM = { type: "UPDATE_LINE_ITEM", item };
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
