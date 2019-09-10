// #region Imports
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
  quantifiedItemList,
  totalPrice
} from "../../src/subviews/SubscriptionFormView";
import Quantity from "../../src/components/Quantity";
import SelectboxField from "../../src/models/fields/SelectboxField";
import SubscriptionProduct from "../../src/models/SubscriptionProduct";

// #endregion

const product = SubscriptionProduct.fromApi(subscriptionProducts[0]);
const form = product.form;
const TITLES = form.fields.map(f => f.title);

// #region Text Helper Functions
const checkbox = (fieldIndex, i) =>
  wrapper.getByTestId(`CHECKBOXES[${fieldIndex}][${i}]`);
const check = (fieldIndex, i) => fireEvent.press(checkbox(fieldIndex, i));
const checkedCount = fieldIndex => {
  const testIdBase = `CHECKBOXES[${fieldIndex}]`;
  return wrapper
    .getAllByType(CheckBox)
    .filter(c => c.props.testID && c.props.testID.startsWith(testIdBase))
    .map(c => c.props.checked)
    .filter(Boolean).length;
};
const pressSubmitButton = () =>
  fireEvent.press(wrapper.getByTestId("SUBMIT_BUTTON"));
// #endregion

// #region Wrapper Setup
const submitOrderMock = jest.fn();

let wrapper;

const Wrapper = props => (
  <Fragment>
    <SubscriptionFormView
      submitOrder={submitOrderMock}
      form={form}
      testID={"SUBSCRIPTION_FORM_VIEW"}
      {...props}
    />
  </Fragment>
);

function createWrapper(customProps) {
  const wrapper = render(<Wrapper {...customProps} />);
  return wrapper;
}
// #endregion

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
    beforeEach(() => {
      wrapper = createWrapper();
    });
    it("sets the card", async () => {
      const field = form.fields[3];
      if (!(field instanceof SelectboxField)) return;

      const stateSpy = jest.spyOn(SubscriptionFormView.prototype, "setState");
      const expectedArgs = { card: { message: field.options[0], field } };

      await fireEvent.press(wrapper.getByText(field.title));
      await fireEvent.press(wrapper.getByText(field.options[0]));
      pressSubmitButton();
      expect(stateSpy).toHaveBeenCalledWith(expectedArgs);
      stateSpy.mockClear();
    });
  });

  describe("checkboxes fields", () => {
    beforeEach(() => {
      wrapper = createWrapper();
    });

    it("can modify the quantities when a box is checked", () => {
      /* FIELD 0 */
      // check initial state
      expect(checkbox(0, 0).props.checked).toBe(false);
      expect(wrapper.queryByTestId("CHECKBOXES[0][0]_QUANTITY")).toBeNull();
      // check first box
      check(0, 0);
      // expect box to be checked and quantity to be displayed
      expect(checkbox(0, 0).props.checked).toBe(true);
      expect(wrapper.getByTestId("CHECKBOXES[0][0]_QUANTITY")).toBeDefined();

      /* FIELD 1 */
      // check initial state
      expect(checkbox(1, 0).props.checked).toBe(false);
      expect(wrapper.queryByTestId("CHECKBOXES[1][0]_QUANTITY")).toBeNull();
      // check first box
      check(1, 0);
      // expect box to be checked and quantity to be displayed
      expect(checkbox(1, 0).props.checked).toBe(true);
      expect(wrapper.getByTestId("CHECKBOXES[1][0]_QUANTITY")).toBeDefined();
    });

    it("lets you select 4 free candies (and no more)", () => {
      // select 4 candies
      check(0, 0);
      check(0, 1);
      check(0, 2);
      check(0, 3);
      // there should be 4 checked boxes. (just checking)
      expect(checkedCount(0)).toBe(4);

      // try to check another box
      check(0, 4);
      // we should have failed to check that box
      expect(checkbox(0, 4).props.checked).toBe(false);
      // and we should still only have 4 checked boxes
      expect(checkedCount(0)).toBe(4);
    });

    it("shows the total price", () => {
      check(1, 0);
      check(1, 1);

      const price = wrapper.getByTestId("OPTIONS_PRICE").props.children;

      expect(price).toEqual("$10");
    });
  });

  describe("calculation methods", () => {
    describe("quantifiedItemList", () => {
      const items: Types.OrderItem[] = [
        { name: "Butterfinger", price: null },
        { name: "Twix", price: 5 },
        { name: "Snickers", price: 5 }
      ];
      const quantities = [1, 2, 0];
      const expectedItems: Types.QuantifiedOrderItem[] = [
        { name: "Butterfinger", quantity: 1, price: null },
        { name: "Twix", quantity: 2, price: 5 }
      ];
      expect(quantifiedItemList({ quantities, items })).toEqual(expectedItems);
    });

    describe("totalPrice", () => {
      const items: Types.QuantifiedOrderItem[] = [
        { name: "Butterfinger", quantity: 1, price: null },
        { name: "Twix", quantity: 2, price: 5 },
        { name: "Snickers", quantity: 1, price: 10 }
      ];

      expect(totalPrice(items)).toEqual(20);
    });
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
