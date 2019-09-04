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

import ExclusiveBlah from "./src/utilities/ExclusiveSelectRenderer";

export default function App() {
  let component = <AppNavigator />;

  component = <ExclusiveBlah />;

  return <Provider store={store}>{component}</Provider>;
}
