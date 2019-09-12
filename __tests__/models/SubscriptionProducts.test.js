// @flow
import SubscriptionProduct from "../../src/models/SubscriptionProduct";
import { subscriptionProducts as apiResponse } from "../../__mocks__/subscription-products-response";
import Form from "../../src/models/Forms/Form";
import CheckboxesField from "../../src/models/fields/CheckboxesField";
import HeaderField from "../../src/models/fields/HeaderField";
import SelectboxField from "../../src/models/fields/SelectboxField";
import TextareaField from "../../src/models/fields/TextareaField";

describe("SubscriptionProduct", () => {
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
  prod.type = "subscription";
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
  prod.form = expectedForm();

  return prod;
}

function expectedForm(): Form {
  const form = {
    title: "Placeholder title for subscription product",
    type: "Placeholder type for subscription product",
    fields: [
      Object.assign(new CheckboxesField(), {
        type: "checkboxes",
        title:
          "Choose 4 separate or mix and match candy to began placing your order",
        maximumSelections: 4,
        defaultQuantity: 1,
        options: [
          { name: "Butterfinger", price: null },
          { name: "Twix", price: null },
          { name: "M&M", price: null },
          { name: "Snickers", price: null },
          { name: "Skittles", price: null },
          { name: "Reese's", price: null },
          { name: "M&M Peanut", price: null },
          { name: "Milkyway", price: null },
          { name: "KitKat", price: null },
          { name: "Hershey's", price: null },
          { name: "3 Muskateers", price: null }
        ]
      }),
      Object.assign(new CheckboxesField(), {
        type: "checkboxes",
        title:
          "Get 4 gifts per month starting at only $20 a month. Includes a gift box, 1 candy bar per week and gift message of your choice each week. Add additional candy bars for only $5 each.",
        maximumSelections: null,
        defaultQuantity: 1,
        options: [
          { name: "Butterfinger", price: 5 },
          { name: "Twix", price: 5 },
          { name: "M&M", price: 5 },
          { name: "Snickers", price: 5 },
          { name: "Skittles", price: 5 },
          { name: "Reese's", price: 5 },
          { name: "M&M Peanut", price: 5 },
          { name: "Milkyway", price: 5 },
          { name: "KitKat", price: 5 },
          { name: "Hershey's", price: 5 },
          { name: "3 Muskateers", price: 5 }
        ]
      }),

      Object.assign(new HeaderField(), {
        type: "header",
        title:
          "Pick one of the following gift card messages or write your own custom message!"
      }),
      Object.assign(new SelectboxField(), {
        type: "selectbox",
        title: "Add a Birthday Gift Card",
        placeholder: "Choose a Card",
        options: [
          "There are two great days in a person's life - the day we are born and the day we discover why. -William Barclay",
          "Today you are you! That is truer than true! There is no one alive who is you-er than you! -Dr. Seuss",
          "When you wake up every day, it's like a new birthday: it's a new chance to be great again and make great decisions. -Poo Bear",
          "Don't just count your years, make your years count. -George Meredith",
          "You know you're getting old when you get that one candle on the cake. It's like, 'See if you can blow this out. -Jerry Seinfeld"
        ]
      }),
      Object.assign(new SelectboxField(), {
        type: "selectbox",
        title: "Add a Anniversary Gift Card",
        placeholder: "Choose a Card",
        options: [
          "The secret of a happy marriage is finding the right person. You know they're right if you love to be with them all the time. -Julia Child",
          "A wedding anniversary is the celebration of love, trust, partnership, tolerance and tenacity. The order varies for any given year. -Paul Sweeney",
          "You were made perfectly to be loved - and surely I have loved you, in the idea of you, my whole life long. -Elizabeth Barrett Browning",
          "An anniversary is a reminder as to why you love and married this person. -Zoe Foster Blake",
          "Love me or hate me, both are in my favour. If you love me, I will always be in your heart, and if you hate me, I will be in your mind. -Qandeel Baloch"
        ]
      }),
      Object.assign(new TextareaField(), {
        type: "textarea",
        title: "Write a custom message to display on the gift card"
      })
    ]
  };
  return Object.assign(new Form(), form);
}
