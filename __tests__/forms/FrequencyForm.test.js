// @flow
import FrequencyForm from "../../src/models/FrequencyForm";
import { products } from "../../__mocks__/products-response";

describe("FrequencyForm", () => {
  describe("fromApiProduct", () => {
    const product = products[1];
    it("takes an Api Product object and returns a card form", () => {
      expect(FrequencyForm.fromApiProduct(product)).toEqual(
        expectedFrequencyForm()
      );
    });
  });
});

function expectedFrequencyForm(): FrequencyForm {
  const form = new FrequencyForm();
  form.title = "Select your frequency";
  form.type = "frequency";
  form.fields = [
    {
      type: "options",
      options: [
        {
          frequency: "Weekly",
          type: "option",
          price: 2
        },
        {
          frequency: "Biweekly",
          type: "option",
          price: 4.5
        },
        {
          frequency: "Monthly",
          type: "option",
          price: 10
        }
      ]
    }
  ];
  return form;
}
