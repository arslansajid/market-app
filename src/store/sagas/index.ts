import { all, fork } from "redux-saga/effects";
import { getAllProducts, watchGetProducts } from "./products";

import { getAllBrands } from "./brands";

export default function* root() {
  yield all([fork(getAllProducts), fork(watchGetProducts), fork(getAllBrands)]);
}
