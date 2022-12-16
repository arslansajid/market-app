import { FILTER_BRANDS, RECEIVE_BRANDS } from "../actions/brands";

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

function filterTerm(state = initialState.filterTerm, action: ActionType) {
  switch (action.type) {
    case FILTER_BRANDS:
      return action.brand;
    case RECEIVE_BRANDS:
      return "";
    default:
      return state;
  }
}

function visibleBrands(state = initialState.visibleBrands, action: ActionType) {
  const { brand, brands } = action;
  switch (action.type) {
    case RECEIVE_BRANDS:
      return action.brands;
    case FILTER_BRANDS:
      let filteredBrands: BrandType[] = [];
      brands.forEach((brandItem: BrandType) => {
        if (brandItem.name.toUpperCase().includes(brand)) {
          filteredBrands.push(brandItem);
        }
      });
      return filteredBrands;
    default:
      return state;
  }
}

export default combineReducers({
  brands,
  filterTerm,
  visibleBrands,
});
