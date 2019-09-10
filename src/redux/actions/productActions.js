// @flow
import { ApiUrls } from "../../constants/urls";
import axios from "axios";
import type { Saga } from "redux-saga";
import { call, put, select, takeEvery, all } from "redux-saga/effects";
import type { AllProductCollection, ProductAction } from "../ProductTypes";
import ProductFactory from "../../models/ProductFactory";

export function fetchProducts(): ProductAction {
  return { type: "FETCH_PRODUCTS_START" };
}

export async function fetchProductsApi(): Promise<Object[]> {
  const { data } = await axios.get(ApiUrls.getProducts);
  return data;
}

export function* fetchProductsSaga(): Saga<void> {
  try {
    const res: Object[] = yield call(fetchProductsApi);
    const products: AllProductCollection = ProductFactory.collectionFromApiArray(
      res
    );
    yield put({ type: "FETCH_PRODUCTS_SUCCESS", products });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCTS_FAILURE", error });
  }
}

export default function* productsSaga(): Saga<void> {
  yield all([yield takeEvery("FETCH_PRODUCTS_START", fetchProductsSaga)]);
}
