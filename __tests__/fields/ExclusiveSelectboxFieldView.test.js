// @flow
import React, { Fragment } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import SelectboxField from "../../src/models/fields/SelectboxField";
import TextareaField from "../../src/models/fields/TextareaField";
import Field from "../../src/models/fields/Field";
import FieldCreator from "../../src/models/fields/FieldCreator";
import ExclusiveSelectboxesFieldView from "../../src/components/ExclusiveSelectboxesFieldView";
import SelectboxFieldView from "../../src/components/SelectboxFieldView";
import TextareaFieldView from "../../src/components/TextareaFieldView";
import { CheckBox } from "react-native-elements";

let wrapper;

const fieldsInfo: Object[] = [
  {
    type: "selectbox",
    title: "First field",
    options: [
      "First field option 1",
      "First field option 2",
      "First field option 3"
    ]
  },
  {
    type: "selectbox",
    title: "Second field",
    options: [
      "Second field option 1",
      "Second field option 2",
      "Second field option 3"
    ]
  },
  {
    type: "textarea",
    title: "Third field"
  }
];

const fields: Field[] = FieldCreator.createFieldsFromArray(fieldsInfo);

function createWrapper(customProps) {
  const props = { fields, onSubmit: (str: string) => {}, ...customProps };
  wrapper = render(
    <Fragment>
      <ExclusiveSelectboxesFieldView fields={fields} {...props} />
    </Fragment>
  );
  return wrapper;
}

describe("ExclusiveSelectboxesFieldView", () => {
  let checkboxes;
  beforeEach(() => {
    wrapper = createWrapper();
    checkboxes = wrapper.getAllByType(CheckBox);
    expect(checkboxes.length).toBe(3);
  });

  it("contains selectbox fields", () => {
    expect(wrapper.getByText("First field")).toBeDefined();
    expect(wrapper.getByText("Second field")).toBeDefined();
    expect(wrapper.getByText("Third field")).toBeDefined();
  });

  it("has the first field selected by default", () => {
    expect(checkboxes[0].props.checked).toBe(true);
  });

  it("accepts an initialSelection prop", () => {
    const wrapper = createWrapper({ initialSelectionIndex: 2 });
    checkboxes = wrapper.getAllByType(CheckBox);
    expect(checkboxes[0].props.checked).toBe(false);
    expect(checkboxes[2].props.checked).toBe(true);
  });

  it("shows the value of the currently selected field", async () => {
    await fireEvent.press(checkboxes[1]);
    await fireEvent.press(wrapper.getByText("Second field option 2"));

    // options should be gone
    expect(wrapper.queryByText("Second field option 1")).toBeNull();
    // selected option should still be on screen
    expect(wrapper.getByText("Second field option 2")).toBeDefined();
    expect(checkboxes[1].props.checked).toBe(true);
  });

  it("selects one field at a time", async () => {
    // pick the second one
    await fireEvent.press(checkboxes[1]);
    await fireEvent.press(wrapper.getByText("Second field option 2"));
    // pick the first one
    await fireEvent.press(checkboxes[0]);
    await fireEvent.press(wrapper.getByText("First field option 2"));

    // first one should be selected and show its selection
    expect(wrapper.getByText("First field option 2")).toBeDefined();
    expect(checkboxes[0].props.checked).toBe(true);

    // second one should be not selected and not show its selection
    expect(wrapper.queryByText("Second field option 2")).toBeNull();
    expect(checkboxes[1].props.checked).toBe(false);
  });

  describe("cancelTitle prop != null", () => {
    beforeEach(() => {
      wrapper = createWrapper({ cancelTitle: "None" });
      checkboxes = wrapper.getAllByType(CheckBox);
    });

    it("take a cancelTitle prop to render a 'none' field", async () => {
      // pick the second one
      await fireEvent.press(checkboxes[2]);
      await fireEvent.press(wrapper.getByText("Second field option 2"));

      // select "none"
      await fireEvent.press(wrapper.getByText("None"));

      // 'none' should be checked
      expect(checkboxes[0].props.checked).toBe(true);

      // the second one shouldn't be there or be checked
      expect(wrapper.queryByText("Second field option 2")).toBeNull();
      expect(checkboxes[2].props.checked).toBe(false);

      // pick the second one again
      await fireEvent.press(checkboxes[2]);
      await fireEvent.press(wrapper.getByText("Second field option 2"));

      // 'none' should not be checked
      expect(checkboxes[0].props.checked).toBe(false);
    });

    it("selects the none field by default when there is one ", () => {
      expect(checkboxes[0].props.checked).toBe(true);
      expect(checkboxes[1].props.checked).toBe(false);
    });
  });

  it("passes the selected value to its parent", async () => {
    let value;
    const onSubmit = message => (value = message);
    wrapper = createWrapper({ onSubmit, cancelTitle: "None" });
    checkboxes = wrapper.getAllByType(CheckBox);

    // pick the second one
    await fireEvent.press(checkboxes[2]);
    await fireEvent.press(wrapper.getByText("Second field option 2"));

    expect(value).toEqual("Second field option 2");

    // select "none"
    await fireEvent.press(wrapper.getByText("None"));

    expect(value).toEqual(null);
  });
});