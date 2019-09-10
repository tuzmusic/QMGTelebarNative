// @flow
import Product from "../src/models/Product";
import SubscriptionProduct from "../src/models/SubscriptionProduct";
import ProductFactory from "../src/models/ProductFactory";

const array = [
  {
    id: 1042,
    name: "M&M",
    slug: "mm",
    type: "simple",
    description:
      "Buy a one time gift for any occasion. Each gift comes with a gift box, a candy bar, and a gift message!",
    shortDescription:
      "Select the candy of your choice, then select choose one message for your gift card.  You can enter different addresses at checkout if desired",
    price: 7,
    images: [
      {
        src:
          "https://telebardelivery.com/wp-content/uploads/2019/04/Telebar-MM-1-370x370.jpg"
      }
    ],
    formInfo: {}
  },
  {
    id: 938,
    name: "4 Deliveries a Month for only $20",
    slug: "weekly-subscription",
    description: "Get your chocolate every week!",
    price: 20,
    type: "subscription",
    images: [
      {
        src:
          "https://telebardelivery.com/wp-content/uploads/2019/04/weekly-1-370x231.png"
      }
    ],
    subscriptionInfo: {
      price: 20,
      period: "month",
      interval: 1
    },
    formInfo: {}
  }
];

const collection = {
  "1042": Object.assign(new Product(), array[0]),
  "938": Object.assign(new SubscriptionProduct(), array[1])
};

describe("ProductFactory.collectionFromArray", () => {
  it("creates an object with correctly typed/constructed values", () => {
    expect(ProductFactory.collectionFromArray(array)).toEqual(collection);
  });
});
