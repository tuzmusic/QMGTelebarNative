// @flow
import { ApiUrls } from "../../constants/urls";
import axios from "axios";
import type { Saga } from "redux-saga";
import { call, put, select, takeEvery, all } from "redux-saga/effects";
import Product from "../../models/Product";
import type { ProductCollection } from "../../models/Product";
import type { ProductAction } from "../reducers/productsReducer";

export function fetchProducts(): ProductAction {
  return { type: "FETCH_PRODUCTS_START" };
}

export async function fetchProductsApi(): Promise<Object[]> {
  // console.log("called api");
  const { data } = await axios.get(ApiUrls.getProducts);
  // console.log("got data from axios call");
  return data;
}

export function* fetchProductsSaga(): Saga<void> {
  try {
    // console.log("started fetchProductsSaga");
    const res: Object[] = yield call(fetchProductsApi);
    // console.log("returned from api");
    const products: ProductCollection = Product.collectionFromApiArray(res);
    // console.log("converted array to collection", Object.keys(products).length);
    yield put({ type: "FETCH_PRODUCTS_SUCCESS", products });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCTS_FAILURE", error });
  }
}

export default function* productsSaga(): Saga<void> {
  yield all([yield takeEvery("FETCH_PRODUCTS_START", fetchProductsSaga)]);
}
