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

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
