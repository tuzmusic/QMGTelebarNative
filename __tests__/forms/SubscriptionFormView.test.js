// @flow
import React, { Fragment, useState } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import { Text } from "react-native";
import { subscriptionProducts } from "../../__mocks__/subscription-products-response";
import { CheckBox, Button } from "react-native-elements";
import * as Types from "../../src/redux/FormTypes";
import Form from "../../src/models/forms/Form";
import { SubscriptionFormView } from "../../src/subviews/SubscriptionFormView";
import Quantity from "../../src/components/Quantity";
import SelectboxField from "../../src/models/fields/SelectboxField";

const product = subscriptionProducts[0];
const formInfo = product.form_info;
const form = Form.assembleForm(formInfo);
const TITLES = form.fields.map(f => f.title);

const checkbox = (fieldIndex, i) =>
  wrapper.getByTestId(`CHECKBOXES[${fieldIndex}][${i}]`);
const quantInput = i => wrapper.getAllByType(Quantity)[i];
const check = (fieldIndex, i) => fireEvent.press(checkbox(fieldIndex, i));
const pressSubmitButton = () =>
  fireEvent.press(wrapper.getByTestId("SUBMIT_BUTTON"));

// const box = (i: number) => wrapper.getByText(field.options[i].name);

const submitOrderMock = jest.fn();

let wrapper;

const Wrapper = props => {
  return (
    <Fragment>
      <SubscriptionFormView
        submitOrder={submitOrderMock}
        form={form}
        {...props}
      />
    </Fragment>
  );
};

function createWrapper(customProps) {
  const wrapper = render(<Wrapper {...customProps} />);
  return wrapper;
}

describe("SubscriptionFormView integration", () => {
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it("shows all the fields", () => {
    const { getByText } = wrapper;

    expect(getByText(TITLES[0])).toBeDefined();
    expect(getByText(TITLES[1])).toBeDefined();
    expect(getByText(TITLES[2])).toBeDefined();
    expect(getByText(TITLES[3])).toBeDefined();
    expect(getByText(TITLES[4])).toBeDefined();
    expect(getByText(TITLES[5])).toBeDefined();
  });

  xit("can accept starting values for an existing order", () => {});

  it("has a submit button that calls the submitOrder function from props ", () => {
    pressSubmitButton();
    expect(submitOrderMock).toHaveBeenCalled();
    jest.resetAllMocks();
  });

  describe("card section", () => {
    it("sets the card", async () => {
      const field = form.fields[3];
      if (!(field instanceof SelectboxField)) return;

      const stateSpy = jest.spyOn(SubscriptionFormView.prototype, "setState");
      const expectedArgs = { card: { message: field.options[0], field } };

      await fireEvent.press(wrapper.getByText(field.title));
      await fireEvent.press(wrapper.getByText(field.options[0]));
      pressSubmitButton();
      expect(stateSpy).toHaveBeenCalledWith(expectedArgs);
      jest.resetAllMocks();
    });
  });

  describe("checkboxes fields", () => {
    it("lets you select 4 free candies (and no more)", async () => {
      await check(0, 0);
      await check(0, 1);
      await check(0, 2);
      await check(0, 3);
      await check(0, 4);
      expect(checkbox(0, 0).props.checked).toBe(true);
      expect(checkbox(0, 4).props.checked).toBe(false);

      expect(wrapper.getAllByText("Butterfinger").length).toBe(4);
    });
    xit("shows the total price", () => {});
  });

  xit("submits all the information for the order", () => {
    const expectedOrder = {
      // order properties
    };

    // Select a bunch of stuff
    pressSubmitButton();
    expect(submitOrderMock).toHaveBeenCalledWith(expectedOrder);
  });
});
