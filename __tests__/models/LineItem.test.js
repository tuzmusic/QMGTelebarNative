// @flow
import CheckboxesField from "../../src/models/fields/CheckboxesField";
import SelectboxField from "../../src/models/fields/SelectboxField";
import LineItem from "../../src/models/LineItem";
import SubscriptionProduct from "../../src/models/SubscriptionProduct";
import { subscriptionProducts } from "../../__mocks__/subscription-products-response";
import * as Types from "../../src/redux/FormTypes";
import Product from "../../src/models/Product";

describe("LineItem.toOrderApi", () => {
  it("converts a LineItem object for use in POSTing an order", () => {
    expect(LineItem.toOrderApi(lineItem)).toEqual(
      subscriptionWithFreeAndExtraObj
    );
  });
});

describe("LineItem.fromProductForm", () => {
  it("creates a LineItem from a form submission", () => {
    expect(LineItem.fromProductForm(submissionObj)).toEqual(lineItem);
  });
});

const product = SubscriptionProduct.fromApi(subscriptionProducts[0]);

const submissionObj: Types.LineItemCreatorObject = {
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
  ],
  card: {
    card:
      "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake",
    fieldName: "Add a Anniversary Gift Card"
  }
};

describe("LineItem.create", () => {
  it("creates a new LineItem from a generic object", () => {
    const product = new Product();
    const obj = { product, quantity: 1 };
    const lineItem = new LineItem();
    lineItem.product = product;
    lineItem.quantity = 1;
    const created = LineItem.create(obj);
    expect(created).toEqual(lineItem);
    expect(created.constructor).toBe(LineItem);
  });
});

const lineItem = LineItem.create({
  product,
  quantity: 1,
  card: {
    card:
      "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake",
    fieldName: "Add a Anniversary Gift Card"
  },
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
  ],
});

// Base object!!!
const singleCandyObj = {
  product_id: product.id,
  quantity: 2
};

const subscriptionWithFreeAndExtraObj = {
  product_id: product.id, // can be whatever for the test. the back-end api will take it from there.
  quantity: 1, // can be whatever for the test. the api will take it from there.
  meta_data: [
    {
      key: "_tmcartepo_data",
      value: [
        /* Free candy 1 */ {
          name: "Have some free candies",
          value: "Twix",
          price: 0,
          section: "",
          quantity: 1
        },
        /* Free candy 2 */ {
          name: "Have some free candies",
          value: "Snickers",
          price: 0,
          section: "",
          quantity: 1
        },
        /* Free candy 3&4 */ {
          name: "Have some free candies",
          value: "Butterfinger",
          price: 0,
          section: "",
          quantity: 2
        },
        /* Extra candy 1 */ {
          name: "",
          value: "Twix",
          price: 5,
          section: "",
          quantity: 1
        },
        /* Extra candy 2&3 */ {
          name: "",
          value: "M&M",
          price: 10,
          section: "",
          quantity: 2
        },
        /* Selected card */ {
          name: "Add a Anniversary Gift Card",
          value:
            "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake",
          price: 0,
          section: "",
          quantity: 1
        }
      ]
    },
    /* not necessarily needed; but, for the test we'll say this subscription is $10 each */ {
      key: "_tm_epo_product_original_price",
      value: ["20"]
    }
  ]
};
