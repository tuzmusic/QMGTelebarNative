// @flow
import productsSaga, {
  fetchProducts
} from "../../src/redux/actions/productActions";
import MockAdapter from "axios-mock-adapter";
import { call, take, put } from "redux-saga/effects";
import SagaTester from "redux-saga-tester";
import { ApiUrls } from "../../src/constants/urls";
import axios from "axios";
import { async } from "rxjs/internal/scheduler/async";
import Product from "../../src/models/Product";
import SubscriptionProduct from "../../src/models/SubscriptionProduct";

const prodObj = {
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
  ]
};

const subProdObj = {
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
  price: "20",
  period: "month",
  interval: "1"
};

const objArray = [prodObj, subProdObj];
const collection = {
  "1042": Product.fromApi(prodObj),
  "938": SubscriptionProduct.fromApi(subProdObj)
};

describe("fetchProducts action", () => {
  let sagaTester;
  let mock;
  // beforeEach(() => {
  mock = new MockAdapter(axios);
  mock.onGet(ApiUrls.getProducts).reply(200, objArray);
  const initialState = { products: {} };
  sagaTester = new SagaTester({ initialState });
  sagaTester.start(productsSaga);
  // });

  it("should return data with proper types", async () => {
    sagaTester.dispatch(fetchProducts());
    const successAction = await sagaTester.waitFor("FETCH_PRODUCTS_SUCCESS");
    expect(successAction.products).toEqual(collection);
  });
});
