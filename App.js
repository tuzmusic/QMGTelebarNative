import React from "react";
import { Provider } from "react-redux";
import { productFetchMock } from "./__mocks__/setup-fetch-mocks";
import AppNavigator from "./src/containers/AppNavigator";
import setupAndReturnStore from "./src/redux/createStore";
import { DEV_MODE } from "./src/constants/devMode";

const store = setupAndReturnStore();
const DEV = DEV_MODE && true;

if (DEV) {
  productFetchMock();
}

console.disableYellowBox = true;

import ExclusiveSelectRenderer from "./src/utilities/ExclusiveSelectRenderer";
import CheckboxesQuantityRenderer from "./src/utilities/CheckboxesQuantityRenderer";
import SubscriptionFormRenderer from "./src/utilities/SubscriptionFormRenderer";
import SubscriptionProductDetailRenderer from "./src/utilities/SubscriptionProductDetailRenderer";

export default function App() {
  let component = <AppNavigator />;

  // component = <SubscriptionProductDetailRenderer />;

  return <Provider store={store}>{component}</Provider>;
}
