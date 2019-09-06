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
import {
  SubscriptionFormView,
  SUBSCRIPTION_FORM_FIELDS
} from "../../src/subviews/SubscriptionFormView";
import Quantity from "../../src/components/Quantity";
import SelectboxField from "../../src/models/fields/SelectboxField";

const product = subscriptionProducts[0];
const formInfo = product.form_info;
const form = Form.assembleForm(formInfo);
const TITLES = form.fields.map(f => f.title);
const {
  FREE_CANDIES,
  EXTRA_CANDIES,
  HEADER_FIELD,
  BIRTHDAY_CARD_FIELD,
  ANNIV_CARD_FIELD,
  CUSTOMER_CARD_FIELD
} = SUBSCRIPTION_FORM_FIELDS;

const checkbox = i => wrapper.getAllByType(CheckBox)[i];
const quantInput = i => wrapper.getAllByType(Quantity)[i];
const check = (i: number) => fireEvent.press(checkbox(i));
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

describe("SubscriptionFormView", () => {
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
    fireEvent.press(wrapper.getByTestId("submitButton"));
    expect(submitOrderMock).toHaveBeenCalled();
    jest.resetAllMocks();
  });

  describe("card section", () => {
    it("sets the card", async () => {
      wrapper = createWrapper();
      const field: SelectboxField = form.fields[BIRTHDAY_CARD_FIELD];
      const expectedArgs = { card: { message: field.options[0], field } };

      await fireEvent.press(wrapper.getByText(field.title));
      await fireEvent.press(wrapper.getByText(field.options[0]));
      fireEvent.press(wrapper.getByTestId("submitButton"));
      expect(submitOrderMock).toHaveBeenCalledWith(expectedArgs);
    });
  });

  xdescribe("checkboxes fields", () => {
    it("lets you select 4 free candies (and no more)", () => {
      check(0);
      check(1);
      check(2);
      check(3);
      check(4);
      expect(wrapper.getAllByDisplayValue("1").length).toBe(4);
      expect(checkbox(4).props.checked).toBe(false);
    });
    xit("shows the total price", () => {});
  });

  xit("submits all the information for the order", () => {});
});
