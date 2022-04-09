import {
  RECEIVE_PRODUCTS,
  SET_PRODUCTS_BY_CATEGORY,
  SET_VISIBLE_PRODUCTS,
} from "../actions/products";

import { ProductType } from "../../types/product.types";
import { combineReducers } from "redux";

const initialState = {
  allProducts: [],
  visibleProducts: [],
  productsByCategory: [],
};

interface ActionType {
  type: string;
  products: ProductType[];
}

function allProducts(state = initialState.allProducts, action: ActionType) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return [...action.products];
    default:
      return state;
  }
}

function visibleProducts(
  state = initialState.visibleProducts,
  action: ActionType
) {
  const { products } = action;
  switch (action.type) {
    case SET_VISIBLE_PRODUCTS:
      return [...products];
    default:
      return state;
  }
}

function productsByCategory(
  state = initialState.productsByCategory,
  action: ActionType
) {
  const { products } = action;
  switch (action.type) {
    case SET_PRODUCTS_BY_CATEGORY:
      return [...products];
    default:
      return state;
  }
}

export default combineReducers({
  visibleProducts,
  allProducts,
  productsByCategory,
});
