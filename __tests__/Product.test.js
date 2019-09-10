import Product from "../src/models/Product";
import { products } from "../__mocks__/products-response";
import Form from "../src/models/Forms/Form";
import SelectboxField from "../src/models/fields/SelectboxField";
import TextareaField from "../src/models/fields/TextareaField";
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
    formInfo: expectedForm()
  };
  return Object.assign(prod, { ...props });
}

function expectedForm() {
  const form = {
    title:
      "Pick one of the following gift card messages or write your own custom message!",
    type: "card",
    fields: [
      {
        ...new SelectboxField(),
        ...{
          title: "Add a Birthday Gift Card",
          type: "selectbox",
          placeholder: "Choose a Card",
          options: [
            "There are two great days in a person's life - the day we are born and the day we discover why. -William Barclay",
            "Today you are you! That is truer than true! There is no one alive who is you-er than you! -Dr. Seuss",
            "When you wake up every day, it's like a new birthday: it's a new chance to be great again and make great decisions. -Poo Bear",
            "Don't just count your years, make your years count. -George Meredith",
            "You know you're getting old when you get that one candle on the cake. It's like, 'See if you can blow this out. -Jerry Seinfeld"
          ]
        }
      },
      {
        ...new SelectboxField(),
        ...{
          title: "Add a Anniversary Gift Card",
          type: "selectbox",
          placeholder: "Choose a Card",
          options: [
            "The secret of a happy marriage is finding the right person. You know they're right if you love to be with them all the time. -Julia Child",
            "A wedding anniversary is the celebration of love, trust, partnership, tolerance and tenacity. The order varies for any given year. -Paul Sweeney",
            "You were made perfectly to be loved - and surely I have loved you, in the idea of you, my whole life long. -Elizabeth Barrett Browning",
            "An anniversary is a reminder as to why you love and married this person. -Zoe Foster Blake",
            "Love me or hate me, both are in my favour. If you love me, I will always be in your heart, and if you hate me, I will be in your mind. -Qandeel Baloch"
          ]
        }
      },
      {
        ...new TextareaField(),
        ...{
          type: "textarea",
          title: "Write a custom message to display on the gift card"
        }
      }
    ]
  };
  return Object.assign(new Form(), form);
}
