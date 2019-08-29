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
  return render(
    <Fragment>
      <CheckboxesFieldView {...props} />
    </Fragment>
  );
}

let wrapper;

describe("CheckboxesFieldView", () => {
  describe("Display stuff only!", () => {
    beforeEach(() => {
      wrapper = createWrapper();
    });

    it("shows the title for the checkboxes", () => {
      expect(wrapper.getByText(field.title)).toBeDefined();
    });

    // it("shows all the options", () => {});
    // it("shows an option as checked when it's checked", () => {});
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
