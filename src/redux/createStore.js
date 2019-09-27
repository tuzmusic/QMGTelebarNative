import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import productSaga from "./actions/productActions";
import { productFetchMock } from "../../__mocks__/setup-fetch-mocks";
import AppNavigator from "../containers/AppNavigator";
import { DEV_MODE } from "../constants/devMode";

export default function setupAndReturnStore() {
  const combinedReducer = combineReducers({
    productsReducer,
    cartReducer
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
