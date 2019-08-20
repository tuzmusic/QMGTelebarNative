import Product from "../src/models/Product";
import CardForm from "../src/models/CardForm";
import { products } from "../__mocks__/products-response";
// import expectedProduct from "../__mocks__/mock-created-object";

describe("Product", () => {
  describe("fromApi()", () => {
    const prodObj = products[0];

    it("takes an API response and returns a product", () => {
      const createdProduct = Product.fromApi(prodObj);
      expect(createdProduct).toEqual(expectedProduct());
    });
  });

  describe("collectionFromArray", () => {});
});

function expectedProduct() {
  const prod = new Product();

  const props = {
    id: 1042,
    name: "M&M",
    slug: "mm",
    description:
      "Buy a one time gift for any occasion. Each gift comes with a gift box, a candy bar, and a gift message!",
    shortDescription:
      "Select the candy of your choice, then select choose one message for your gift card. You can enter different addresses at checkout if desired",
    price: 7,
    images: [
      {
        src:
          "https://telebardelivery.com/wp-content/uploads/2019/04/Telebar-MM-1-370x370.jpg"
      }
    ],
    formInfo: products[0].form_info
  };
  return Object.assign(prod, { ...props });
}
