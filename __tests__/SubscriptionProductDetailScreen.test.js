// #region Imports
// @flow
import React, { Fragment } from "react";
import "@testing-library/jest-native/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  debug
} from "react-native-testing-library";
import SubscriptionProductDetailScreen from "../src/screens/SubscriptionProductDetailScreen";
import { subscriptionProducts } from "../__mocks__/subscription-products-response";
import SubscriptionProduct from "../src/models/SubscriptionProduct";
import { CheckBox } from "react-native-elements";
import CheckboxesQuantityFieldView from "../src/subviews/fields/CheckboxesQuantityFieldView";
import { SubscriptionFormView } from "../src/subviews/SubscriptionFormView";
// #endregion

const product = SubscriptionProduct.fromApi(subscriptionProducts[0]);
const form = product.form;
const TITLES = form.fields.map(f => f.title);

// #region Wrapper Setup
let wrapper;

const Wrapper = props => (
  <Fragment>
    <SubscriptionProductDetailScreen
      product={product}
      testID={"SUBSCRIPTION_DETAIL_SCREEN"}
      {...props}
    />
  </Fragment>
);

function createWrapper(customProps) {
  const wrapper = render(<Wrapper {...customProps} />);
  return wrapper;
}
// #endregion

// #region Text Helper Functions
const checkbox = (fieldIndex, i) =>
  wrapper.getByTestId(`CHECKBOXES[${fieldIndex}][${i}]`);
const check = (fieldIndex, i) => fireEvent.press(checkbox(fieldIndex, i));
const pressSubmitButton = () =>
  fireEvent.press(wrapper.getByTestId("SUBMIT_BUTTON"));
// #endregion

describe("basic info", () => {
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it("shows the product title", () => {
    expect(wrapper.getByText(product.name)).toBeDefined();
  });

  it("shows the basic subscription price", () => {
    const priceStr = "$" + product.price;
    expect(wrapper.getByTestId("SUBSCRIPTION_PRICE").props.children).toEqual(
      priceStr
    );
  });

  it("shows the whole form", () => {
    for (let title of TITLES) {
      expect(wrapper.getByText(title)).toBeDefined();
    }
  });
});

describe("Form interaction", () => {
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it("displays the form using the correct form view", () => {
    expect(wrapper.getByType(SubscriptionFormView)).toBeDefined();
    expect(wrapper.getByTestId("SUBSCRIPTION_FORM_VIEW")).toBeDefined();
  });

  it("displays $0 when no items are selected", () => {
    expect(wrapper.getByTestId("OPTIONS_PRICE").props.children).toEqual("$0");
  });

  it("displays the tatal price of the currently selected options", () => {
    // select some options (3 $5 selections)
    check(1, 0);
    check(1, 1);
    expect(wrapper.getByTestId("OPTIONS_PRICE").props.children).toEqual("$10");
    const plusButton = wrapper.getAllByTestId("plus")[0];
    fireEvent.press(plusButton);
    expect(wrapper.getByTestId("OPTIONS_PRICE").props.children).toEqual("$15");
  });

  it("displays the total price, for the subscription plus options", () => {
    expect(wrapper.getByTestId("TOTAL_PRICE").props.children).toEqual("$20");
    check(1, 0);
    check(1, 1);
    expect(wrapper.getByTestId("TOTAL_PRICE").props.children).toEqual("$30");
  });
});
