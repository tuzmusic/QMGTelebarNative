// @flow
import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import "@testing-library/jest-native/extend-expect";
import { products } from "../../__mocks__/products-response";
import CardFormView from "../../src/subviews/CardFormView";
import CardForm from "../../src/models/CardForm";

const product = products.find(p => p.id === 1042);
expect(product.name).toBe("M&M");

const form = CardForm.fromApiProduct(product);
expect(form.title).toBe(
  "Pick one of the following gift card messages or write your own custom message!"
);
describe("CardFormView", () => {
  const wrapper = render(
    <React.Fragment>
      <CardFormView form={form} />
    </React.Fragment>
  );

  const birthdayButton = wrapper.getByText("Add a Birthday Gift Card");

  it("shows the options for a birthday card when clicked", () => {
    const firstBdayMessage =
      "There are two great days in a person's life - the day we are born and the day we discover why. -William Barclay";
    fireEvent.press(birthdayButton);
    expect(wrapper.getByText(firstBdayMessage)).toBeDefined();
  });
});
