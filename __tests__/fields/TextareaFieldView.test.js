// @flow
import React, { Fragment } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import TextareaFieldView from "../../src/components/TextareaFieldView";
import TextareaField from "../../src/models/fields/TextareaField";
import TextAreaOverlay from "../../src/components/TextAreaOverlay";
import { Input } from "react-native-elements";

let wrapper;
const field: TextareaField = Object.assign(new TextareaField(), {
  title: "Enter some text!",
  type: "textarea"
});

describe("TextareaField", () => {
  beforeEach(() => {
    const props = { field, selectionHandler: jest.fn() };
    wrapper = render(
      <Fragment>
        <TextareaFieldView {...props} />
      </Fragment>
    );
  });

  const pressField = () =>
    fireEvent.press(wrapper.getByText("Enter some text!"));
  const pressSave = () => fireEvent.press(wrapper.getByText("Save"));

  it("shows the title", () => {
    expect(wrapper.getByText("Enter some text!")).toBeDefined();
  });

  it("displays the overlay when pressed", () => {
    pressField();
    expect(wrapper.getByType(TextAreaOverlay)).toBeDefined();
  });

  it("hides the overlay when the save button is pressed", () => {
    pressField();
    pressSave();
    expect(wrapper.queryByType(TextAreaOverlay)).toBeNull();
  });

  it("calls handleSubmit with the message when save is pressed", () => {
    const submitSpy = jest.spyOn(TextareaFieldView.prototype, "handleSubmit");
    pressField();
    const textArea = wrapper.getByType(Input);
    fireEvent.changeText(textArea, "Some text");
    pressSave();
    expect(submitSpy).toHaveBeenCalledWith("Some text");
    submitSpy.mockRestore();
  });

  it("displays the message when save is pressed, and showSubmittedText is true", () => {
    const props = {
      field,
      selectionHandler: jest.fn(),
      showSubmittedText: true
    };
    wrapper = render(
      <React.Fragment>
        <TextareaFieldView {...props} />
      </React.Fragment>
    );
    pressField();
    const textArea = wrapper.getByType(Input);
    fireEvent.changeText(textArea, "Some text");
    pressSave();
    expect(wrapper.queryByType(TextAreaOverlay)).toBeNull();
    expect(wrapper.getByText("Some text")).toBeDefined();
  });
});
