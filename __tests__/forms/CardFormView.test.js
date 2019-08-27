// @flow
import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import "@testing-library/jest-native/extend-expect";
import "react-test-renderer";
import { products } from "../../__mocks__/products-response";
import CardFormView from "../../src/subviews/CardFormView";
import CardForm from "../../src/models/forms/CardForm";

const product = products.find(p => p.id === 1042);
expect(product.name).toBe("M&M");

const form = CardForm.fromApiProduct(product);
expect(form.title).toBe(
  "Pick one of the following gift card messages or write your own custom message!"
);
describe("CardFormView", () => {
  let wrapper, birthdayField;

  beforeEach(() => {
    wrapper = render(
      <React.Fragment>
        <CardFormView form={form} />
      </React.Fragment>
    );
    birthdayField = wrapper.getByText("Add a Birthday Gift Card");
  });

  const message1 =
    "There are two great days in a person's life - the day we are born and the day we discover why. -William Barclay";
  const message2 =
    "Today you are you! That is truer than true! There is no one alive who is you-er than you! -Dr. Seuss";

  it("shows the options for a birthday card when clicked", () => {
    fireEvent.press(birthdayField);
    expect(wrapper.getByText(message1)).toBeDefined();
  });

  it("sets an option when clicked", () => {
    fireEvent.press(birthdayField);
    const firstOption = wrapper.getByText(message1);
    fireEvent.press(firstOption);
    expect(wrapper.queryByText(message2)).toBeNull();
    expect(wrapper.getByText(message1)).toBeDefined();
  });
});
