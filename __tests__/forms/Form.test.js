// @flow
import Form from "../../src/models/forms/Form";
import { products } from "../../__mocks__/products-response";

describe("Form", () => {
  describe("fromApiProduct", () => {
    const product = products[0];
    it("takes an Api Product object and returns a form with some basic information", () => {
      expect(Form.fromApiProduct(product)).toEqual(expectedBasicForm());
    });
  });
});

function expectedBasicForm(): Form {
  const form = new Form();

  form.title =
    "Pick one of the following gift card messages or write your own custom message!";
  form.type = "card";

  return form;
}
