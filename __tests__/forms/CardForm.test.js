// @flow
import CardForm from "../../src/models/forms/CardForm";
import { products } from "../../__mocks__/products-response";

describe("CardForm", () => {
  describe("fromApiProduct", () => {
    const product = products[0];
    it("takes an Api Product object and returns a card form", () => {
      expect(CardForm.fromApiProduct(product)).toEqual(expectedCardForm());
    });
  });
});

function expectedCardForm(): CardForm {
  const form = new CardForm();
  form.title =
    "Pick one of the following gift card messages or write your own custom message!";
  form.type = "card";
  form.fields = [
    {
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
    },
    {
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
    },
    {
      type: "textarea",
      title: "Write a custom message to display on the gift card"
    }
  ];
  return form;
}
