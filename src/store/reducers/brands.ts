import { RECEIVE_BRANDS } from "../actions/brands";

import { BrandType } from "../../types/brand.types";
import { StoreBrandType } from "../store.types";
import { combineReducers } from "redux";
import { storeInitialState } from "../../static/store";

const initialState: StoreBrandType = storeInitialState.brands;
interface ActionType {
  type: string;
  brands: BrandType[];
  brand: string;
}

function brands(state = initialState.brands, action: ActionType) {
  switch (action.type) {
    case RECEIVE_BRANDS:
      return [...action.brands];
    default:
      return state;
  }
}

function visibleBrands(state = initialState.visibleBrands, action: ActionType) {
  const { brands } = action;
  switch (action.type) {
    case RECEIVE_BRANDS:
      return brands;
    default:
      return state;
  }
}

export default combineReducers({
  brands,
  visibleBrands,
});
