// @flow
import React, { Fragment } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import SelectboxFieldView from "../../src/components/SelectboxFieldView";
import SelectboxField from "../../src/models/fields/SelectboxField";
import SelectOptionsOverlay from "../../src/components/SelectOptionsOverlay";

let wrapper;
const field: SelectboxField = Object.assign(new SelectboxField(), {
  title: "Select something!",
  type: "selectbox",
  placeholder: "Select one of these things",
  options: ["This", "That", "Something else"]
});

describe("SelectOptionsOverlay", () => {
  beforeEach(() => {
    const props = { dismissOverlay: jest.fn(), field, onSubmit: jest.fn() };
    wrapper = render(
      <Fragment>
        <SelectOptionsOverlay {...props} testID="overlay" />
      </Fragment>
    );
  });

  it("shows all the options", () => {
    expect(wrapper.queryByText("This")).not.toBeNull();
  });

  it("calls the onSubmit function when an option is pressed", () => {
    const overlay = wrapper.getByTestId("overlay");
    fireEvent.press(wrapper.getByText("This"));
    expect(overlay.props.onSubmit).toHaveBeenCalled();
  });
});

describe("SelectboxFieldView", () => {
  let view;
  beforeEach(() => {
    const props = {
      field,
      selectionHandler: jest.fn(),
      isSelected: false
    };
    wrapper = render(
      <React.Fragment>
        <SelectboxFieldView {...props} testID={"view"} />
      </React.Fragment>
    );
    view = wrapper.getByTestId("view");
  });

  it("shows the title", () => {
    expect(wrapper.getByText(field.title)).toBeDefined();
  });

  it("shows the options when clicked", () => {
    fireEvent.press(wrapper.getByText(field.title));
    expect(wrapper.getByText("This")).toBeDefined(); // failure = error
    expect(wrapper.queryByText("That")).not.toBeNull(); // failure = null
    expect(wrapper.getByText("Something else")).toBeDefined();
    expect(wrapper.queryByText("This!!!!")).toBeNull();
  });

  it("hides the options when one is clicked", () => {
    fireEvent.press(wrapper.getByText(field.title));
    fireEvent.press(wrapper.getByText("This"));
    expect(wrapper.queryByText("This")).toBeNull();
  });

  it("shows the selection when an option is clicked, if the isSelected prop is true", () => {
    const props = {
      field,
      selectionHandler: jest.fn(),
      isSelected: true
    };
    wrapper = render(
      <React.Fragment>
        <SelectboxFieldView {...props} />
      </React.Fragment>
    );

    fireEvent.press(wrapper.getByText(field.title));
    fireEvent.press(wrapper.getByText("This"));
    expect(wrapper.getByText("This")).toBeDefined();
  });
});
