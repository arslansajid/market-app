import * as actions from "../actions/brands";

import { call, put } from "redux-saga/effects";

import { api } from "../services";

type Yield = any;
type Return = any;
type Accept = any;

export function* getAllBrands(): Generator<Yield, Return, Accept> {
  const products = yield call(api.getBrands);
  yield put(actions.receiveBrands(products));
}
