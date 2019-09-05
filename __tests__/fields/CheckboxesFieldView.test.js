import React, { Fragment, useState } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import CheckboxesField from "../../src/models/fields/CheckboxesField";
import { CheckboxesQuantityFieldView } from "../../src/subviews/fields/CheckboxesQuantityFieldView";
import { CheckBox } from "react-native-elements";
import Quantity from "../../src/components/Quantity";

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

const updateCheckboxes = () => (checkboxes = wrapper.getAllByType(CheckBox));
const checkbox = i => wrapper.getAllByType(CheckBox)[i];
const quantInput = i => wrapper.getAllByType(Quantity)[i];
const updateQuantityInputs = () =>
  (quantityInputs = wrapper.getAllByType(Quantity));

let wrapper, checkboxes, quantityInputs;

const Wrapper = props => {
  const [quantities, setQuantities] = useState([0, 0, 0]);
  const changeQuantity = (i, val) => {
    const quants = [...quantities];
    quants[i] = val;
    setQuantities(quants);
  };

  return (
    <Fragment>
      <CheckboxesQuantityFieldView
        changeQuantity={changeQuantity}
        quantities={quantities}
        {...props}
      />
    </Fragment>
  );
};

function createWrapper(customProps) {
  const wrapper = render(<Wrapper field={field} {...customProps} />);
  return wrapper;
}

const box = (i: number) => wrapper.getByText(field.options[i].name);
const check = (i: number) => fireEvent.press(box(i));

describe("CheckboxesQuantityFieldView", () => {
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

    it("checks and unchecks boxes when pressed", async () => {
      await check(0);
      // const checkbox = wrapper.getAllByType(CheckBox)[0];
      expect(checkbox(0).props.checked).toBe(true);
      await check(0);
      expect(checkbox(0).props.checked).toBe(false);
    });
  });

  describe("Advanced Display (quantity)", () => {
    beforeEach(() => {
      wrapper = createWrapper();
    });

    it("should not show a quantity selector for unchecked options", () => {
      expect(wrapper.queryByDisplayValue("1")).toBeNull();
    });

    it("shows a quantity selector for checked options", () => {
      check(0);
      expect(wrapper.queryAllByDisplayValue("1").length).toBe(1);
    });

    xit("accepts an initialQuantities prop", () => {
      const wrapper = createWrapper({ initialQuantities: [3, 0, 7] });
      expect(wrapper.queryAllByDisplayValue("3").length).toBe(1);
      expect(wrapper.queryAllByDisplayValue("7").length).toBe(1);
      const boxes = wrapper.getAllByType(CheckBox);
      expect(boxes[1].props.checked).toBe(false);
    });

    it("can change the quantity", () => {
      check(0);
      check(1);
      plusButtons = wrapper.queryAllByTestId("plus");
      fireEvent.press(plusButtons[0]);
      fireEvent.press(plusButtons[1]);
      expect(wrapper.queryAllByDisplayValue("2").length).toBe(2);
    });
  });

  describe("Behavior (selection limits)", () => {
    describe("with limits", () => {
      it("limits the number of boxes you can check", () => {
        wrapper = createWrapper({ maximumSelections: 2 });
        check(0);
        check(1);
        check(2);
        const boxes = wrapper.getAllByType(CheckBox);
        expect(boxes[0].props.checked).toBe(true);
        expect(boxes[1].props.checked).toBe(true);
        expect(boxes[2].props.checked).toBe(false);
      });
      describe("at maximum capacity", () => {
        let boxes, plusButtons;
        beforeEach(() => {
          // NOTE: Don't worry about customizing/genericizing this!
          // This includes treating "maximumSelections" and "maximumQuantity" as one concept
          // I don't think it's worth our time now, I don't think we need it.
          wrapper = createWrapper({ maximumSelections: 4 });
          boxes = wrapper.getAllByType(CheckBox);
          // check the first two boxes (of 3), exposing the quantity buttons
          check(0);
          check(1);
          plusButtons = wrapper.queryAllByTestId("plus");
          // press both plus buttons, reaching maximum quantity
          fireEvent.press(plusButtons[0]);
          fireEvent.press(plusButtons[1]);
          expect(wrapper.queryAllByDisplayValue("2").length).toBe(2);
        });

        it("should prohibit add'l boxes from being checked", () => {
          expect(boxes.length).toBe(3);
          check(2);
          expect(boxes[2].props.checked).toBe(false);
        });

        it("should prohibit quantity from being increased", () => {
          fireEvent.press(plusButtons[1]);
          expect(wrapper.queryAllByDisplayValue("3").length).toBe(0);
          expect(wrapper.queryAllByDisplayValue("2").length).toBe(2);
        });

        xit("should re-allow checking/increasing when quantity is reduced", () => {
          // this shouldn't need to be tested.
        });
      });
    });
  });
  describe("no limits", () => {
    beforeEach(() => {
      wrapper = createWrapper();
    });
    it("doesn't limit the number of boxes you can check", () => {
      check(0);
      check(1);
      check(2);
      expect(wrapper.queryAllByDisplayValue("1").length).toBe(3);
    });
    it("doesn't limit the quantity you can select", () => {
      check(0);
      plusButtons = wrapper.queryAllByTestId("plus");
      for (let i = 0; i < 10; i++) {
        fireEvent.press(plusButtons[0]);
      }
      expect(wrapper.queryAllByDisplayValue("11").length).toBe(1);
    });
  });
});

describe("new tests", () => {
  it("takes its quantities from its container through the quantities prop", () => {
    wrapper = createWrapper({ quantities: [2, 0, 0] });

    // expect justin to be checked
    expect(checkbox(0).props.checked).toBe(true);
    // expect justin's quantity to be 2
    expect(quantInput(0).props.value).toBe(2);
    // expect travis and griffin not to be checked
    expect(checkbox(1).props.checked).toBe(false);
    expect(checkbox(2).props.checked).toBe(false);
  });

  it("has default quantities (everything is zero and unchecked)", () => {
    wrapper = createWrapper();
    expect(checkbox(0).props.checked).toBe(false);
    expect(checkbox(1).props.checked).toBe(false);
    expect(checkbox(2).props.checked).toBe(false);
  });
  xit(`updates its parent's quantities`, () => {});
});
