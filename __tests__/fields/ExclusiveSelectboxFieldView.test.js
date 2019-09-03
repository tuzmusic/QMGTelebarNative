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
  const props = { fields, ...customProps }; // not tested
  wrapper = render(
    <Fragment>
      <ExclusiveSelectboxesFieldView fields={fields} {...props} />
    </Fragment>
  );
  // wrapper = render(
  //   <Fragment>
  //     <ExclusiveSelectboxesFieldView {...props}>
  //       <SelectboxFieldView field={fields[0]} />
  //       <SelectboxFieldView field={fields[1]} />
  //       <TextareaFieldView field={fields[2]} />
  //     </ExclusiveSelectboxesFieldView>
  //   </Fragment>
  // );
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
    expect(checkboxes[0].props.checked).toBe(false);
    expect(checkboxes[2].props.checked).toBe(true);
  });

  it("shows the value of the currently selected field", () => {
    fireEvent.press(checkboxes[1]);
    fireEvent.press(wrapper.getByText("Second field option 2"));
    expect(checkboxes[1].props.checked).toBe(true);
  });

  xit("selects one field at a time", () => {});
  xit("does not show the value of the other fields", () => {});
  xit("passes the selected value to its parent", () => {});
});
