import React, { Fragment } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import HeaderField from "../../src/models/fields/HeaderField";
import HeaderFieldview from "../../src/components/HeaderFieldView";

let wrapper;
const field = Object.assign(new HeaderField(), {
  title: "Things",
  type: "header"
});

describe("HeaderFieldView", () => {
  beforeEach(() => {
    const props = { field };
    wrapper = render(
      <Fragment>
        <HeaderFieldview {...props} />
      </Fragment>
    );
  });

  it("shows the title", () => {
    expect(wrapper.getByText("Things")).toBeDefined();
  });
});
