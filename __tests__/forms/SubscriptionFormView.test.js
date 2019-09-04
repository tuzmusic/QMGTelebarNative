import React, { Fragment } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import { subscriptionProducts } from "../../__mocks__/subscription-products-response";
import Form from "../../src/models/forms/Form";
import SubscriptionFormView from "../../src/subviews/SubscriptionFormView";

let wrapper;
const product = subscriptionProducts[0];
const formInfo = product.form_info;
const form = Form.assembleForm(formInfo);

const getWrapperProps = () => ({
  form
});

function createWrapper(customProps) {
  wrapper = render(
    <Fragment>
      <SubscriptionFormView {...getWrapperProps()} {...customProps} />
    </Fragment>
  );
  return wrapper;
}

describe("SubscriptionFormView", () => {
  beforeEach(() => {
    createWrapper();
  });

  it("shows all the fields", () => {
    const { getByText } = wrapper;

    const TITLES = form.fields.map(f => f.title);

    expect(getByText(TITLES[0])).toBeDefined();
    expect(getByText(TITLES[1])).toBeDefined();
    expect(getByText(TITLES[2])).toBeDefined();
    expect(getByText(TITLES[3])).toBeDefined();
    expect(getByText(TITLES[4])).toBeDefined();
    expect(getByText(TITLES[5])).toBeDefined();
  });
});
