import SubscriptionProduct from "../src/models/SubscriptionProduct";
import { response as apiResponse } from "../__mocks__/subscription-products-response";

xdescribe("SubscriptionProduct", () => {
  const obj = apiResponse[0];
  describe("fromApi", () => {
    it("creates an object from an api response", () => {
      expect(SubscriptionProduct.fromApi(obj)).toEqual(expectedProduct());
    });
  });
});

function expectedProduct() {
  const prod = new SubscriptionProduct();
  prod.id = 938;
  prod.name = "4 Deliveries a Month for only $20";
  prod.slug = "weekly-subscription";
  prod.description = "Get your chocolate every week!";
  prod.price = 20;
  prod.shortDescription = "";
  prod.images = [
    {
      src:
        "https://telebardelivery.com/wp-content/uploads/2019/04/weekly-1-370x231.png"
    }
  ];
  prod.subscriptionInfo = {
    price: 20,
    period: "month",
    interval: 1
  };
  return prod;
}
