import React, { Fragment } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import CheckboxesField from "../../src/models/fields/CheckboxesField";
import CheckboxesFieldView from "../../src/components/CheckboxesFieldView";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

const fieldInfo = {
  type: "checkboxes",
  title: "Check some boxes!",
  maximumSelections: 2,
  defaultQuantity: 1,
  options: [
    { name: "Justin", price: null },
    { name: "Travis", price: 5 },
    { name: "Griffin", price: 5 }
  ]
};
const field = Object.assign(new CheckboxesField(), fieldInfo);

function createWrapper(customProps) {
  const props = { field, ...customProps }; // not tested
  wrapper = render(
    <Fragment>
      <CheckboxesFieldView {...props} />
    </Fragment>
  );
  return wrapper;
}

let wrapper = render(<View></View>);

describe("CheckboxesFieldView", () => {
  describe("Display stuff only!", () => {
    beforeEach(() => {
      wrapper = createWrapper();
    });

    it("shows the title for the checkboxes", () => {
      expect(wrapper.getByText(field.title)).toBeDefined();
    });

    it("shows all the options", () => {
      expect(wrapper.getByText(field.options[0].name)).toBeDefined();
      expect(wrapper.getByText(field.options[1].name)).toBeDefined();
      expect(wrapper.getByText(field.options[2].name)).toBeDefined();
    });

    it("actually doesn't display the price, because the title will include price info, and the price will just be used in calculations on the order", () => {});

    const box = (i: number) => wrapper.getByText(field.options[i].name);
    const check = (i: number) => fireEvent.press(box(i));

    it("checks and unchecks boxes when pressed", () => {
      check(0);
      const checkbox = wrapper.getAllByType(CheckBox)[0];
      expect(checkbox.props.checked).toBe(true);
      check(0);
      expect(checkbox.props.checked).toBe(false);
    });

    it("accepts an initial values array to pre-set checked boxes", () => {
      const wrapper = createWrapper({ initialValues: [false, true, true] });
      const checkboxes = wrapper.getAllByType(CheckBox);
      const mapped = checkboxes.map(c => c.props.checked);
      expect(mapped).toEqual([false, true, true]);
    });
  });

  describe("Advanced Display (quantity)", () => {
    // it("shows a quantity selector for checked options", () => {});
  });

  describe("Behavior (selection limits)", () => {
    describe("with limits", () => {
      // it("limits the number of boxes you can check", () => {});
      // it("limits the quantity that can be selected", () => {});
    });
    describe("N0 L1M17S!!!1!", () => {
      // it("doesn't limit the number of boxes you can check", () => {});
      // it("doesn't limit the quantity you can select", () => {});
    });
  });
});
