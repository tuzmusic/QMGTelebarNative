import React from "react";
import { Text, View } from "react-native";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import productsReducer from "./src/redux/reducers/productsReducer";
import productSaga from "./src/redux/actions/productActions";
import { productFetchMock } from "./__mocks__/setup-fetch-mocks";
import AppNavigator from "./src/containers/AppNavigator";
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

function setupAndReturnStore() {
  const combinedReducer = combineReducers({
    productsReducer
  });

  function* rootSaga() {
    sagaMiddleware.run(productSaga);
  }

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combinedReducer,
    {},
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
};
