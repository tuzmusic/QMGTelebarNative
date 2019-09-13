// #region Imports
// @flow
import React, { Fragment, useState } from "react";
import "@testing-library/jest-native/extend-expect";
import { render, fireEvent, debug } from "react-native-testing-library";
import { Text } from "react-native";
import { subscriptionProducts } from "../../__mocks__/subscription-products-response";
import { CheckBox, Button } from "react-native-elements";
import * as Types from "../../src/redux/FormTypes";
import Form from "../../src/models/forms/Form";
import { SubscriptionFormView } from "../../src/subviews/SubscriptionFormView";
import Quantity from "../../src/components/Quantity";
import SelectboxField from "../../src/models/fields/SelectboxField";
import SubscriptionProduct from "../../src/models/SubscriptionProduct";
import ShopWorker from "../../src/models/ShopWorker";
// #endregion

const product = SubscriptionProduct.fromApi(subscriptionProducts[0]);
const form = product.form;
const TITLES = form.fields.map(f => f.title);

// #region Wrapper Setup

class Wrapper extends React.Component<Object, Object> {
  render() {
    return (
      <Fragment>
        <SubscriptionFormView
          selectionReporter={selection => this.setState(selection)}
          submitOrder={submitOrderMock}
          form={form}
          testID={"SUBSCRIPTION_FORM_VIEW"}
          {...this.props}
        />
      </Fragment>
    );
  }
}
function createWrapper(customProps) {
  const wrapper = render(<Wrapper {...customProps} />);
  return wrapper;
}
// #endregion

// #region Test Helper Functions
const submitOrderMock = jest.fn();

let wrapper, card, field, formStateSpy, wrapperStateSpy;
formStateSpy = jest.spyOn(SubscriptionFormView.prototype, "setState");
wrapperStateSpy = jest.spyOn(Wrapper.prototype, "setState");

const checkbox = (fieldIndex, i) =>
  wrapper.getByTestId(`CHECKBOXES[${fieldIndex}][${i}]`);

const check = (fieldIndex, i) => fireEvent.press(checkbox(fieldIndex, i));

const checkedBoxesInField = fieldIndex => {
  const testIdBase = `CHECKBOXES[${fieldIndex}]`;
  return wrapper
    .getAllByType(CheckBox)
    .filter(c => c.props.testID && c.props.testID.startsWith(testIdBase))
    .filter(c => c.props.checked);
};

const selectFirstCard = async (opt?: number = 0) => {
  const cardField = form.fields[3];
  if (!(cardField instanceof SelectboxField)) return;

  await fireEvent.press(wrapper.getByText(cardField.title));
  await fireEvent.press(wrapper.getByTestId(`VISIBLE_SELECT_OPTIONS[${opt}]`));
};

// #endregion

describe("SubscriptionFormView integration", () => {
  describe("overall form", () => {
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
  });

  describe("card section", () => {
    beforeEach(async () => {
      // formStateSpy = jest.spyOn(SubscriptionFormView.prototype, "setState");
      // wrapperStateSpy = jest.spyOn(Wrapper.prototype, "setState");
      wrapper = createWrapper();
      field = form.fields[3];
      if (!(field instanceof SelectboxField)) return;
      card = { message: field.options[0], field };
      await selectFirstCard();
    });
    afterEach(() => {
      formStateSpy.mockClear();
      wrapperStateSpy.mockClear();
    });

    it("sets the card", async () => {
      expect(formStateSpy).toHaveBeenCalledWith({ card });
    });

    it("uses the selectionReporter prop to send the card to its parent", async () => {
      expect(wrapperStateSpy).toHaveBeenCalledWith(
        expect.objectContaining({ card })
      );
    });
  });

  fdescribe("checkboxes fields", () => {
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
      expect(checkedBoxesInField(0).length).toBe(4);

      // try to check another box
      check(0, 4);
      // we should have failed to check that box
      expect(checkbox(0, 4).props.checked).toBe(false);
      // and we should still only have 4 checked boxes
      expect(checkedBoxesInField(0).length).toBe(4);
    });

    it("uses the selectionReporter prop to send the items to its parent", () => {
      check(0, 0);
      check(1, 1);
      const items: Types.CheckboxesSelection[] = [
        {
          selections: [{ name: "Butterfinger", price: null, quantity: 1 }],
          fieldName:
            "Choose 4 separate or mix and match candy to began placing your order"
        },
        {
          selections: [{ name: "Twix", price: 5, quantity: 1 }],
          fieldName:
            "Get 4 gifts per month starting at only $20 a month. Includes a gift box, 1 candy bar per week and gift message of your choice each week. Add additional candy bars for only $5 each."
        }
      ];
      expect(wrapperStateSpy).toHaveBeenCalledWith(
        expect.objectContaining({ items })
      );
      wrapperStateSpy.mockClear();
    });
  });

  describe("using both fields together", () => {
    // expected results
    const cardField = form.fields[3];
    if (!(cardField instanceof SelectboxField)) return;
    const card = { message: cardField.options[1], field: cardField };
    const items = [
      { name: "Butterfinger", price: null, quantity: 1 },
      { name: "Twix", price: 5, quantity: 1 }
    ];

    beforeEach(async () => {
      wrapper = createWrapper();

      // select card
      await selectFirstCard();

      // check boxes (shouldn't nullify card)
      check(0, 0);
      check(1, 1);

      // select another card (shouldn't nullify items; should change the selected card)
      await selectFirstCard(1);
    });

    afterEach(() => {
      formStateSpy.mockClear();
      wrapperStateSpy.mockClear();
    });

    it("reports the quantities", async () => {
      expect(wrapperStateSpy).toHaveBeenCalledWith(
        expect.objectContaining({ items })
      );
    });
    it("reports the card", async () => {
      expect(wrapperStateSpy).toHaveBeenCalledWith(
        expect.objectContaining({ card })
      );
    });
  });
});
