import * as actions from "../actions/products";

import { call, put, takeEvery } from "redux-saga/effects";

import { api } from "../services";

type Yield = any;
type Return = any;
type Accept = any;

export function* getAllProducts(): Generator<Yield, Return, Accept> {
  const products = yield call(api.getProducts);
  yield put(actions.receiveProducts(products));
}

export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getProducts` task on each GET_PRODUCTS action
    i.e. concurrent GET_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.GET_PRODUCTS, getAllProducts);
}
