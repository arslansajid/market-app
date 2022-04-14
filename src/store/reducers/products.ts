import {
  FILTER_PRODUCTS,
  RECEIVE_PRODUCTS,
  SET_PRODUCTS_BY_CATEGORY,
} from "../actions/products";

import { ProductType } from "../../types/product.types";
import { StoreFiltersType } from "../store.types";
import { applyCustomSortFilter } from "../../static/helpers";
import { combineReducers } from "redux";

const initialState = {
  allProducts: [],
  visibleProducts: [],
  productsByCategory: [],
};

interface ActionType {
  type: string;
  products: ProductType[];
  filters: StoreFiltersType;
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
  const { products, filters } = action;
  switch (action.type) {
    case FILTER_PRODUCTS:
      const { brandFilter, sortFilter, tagFilter } = filters;
      let tempProducts = [...products];

      const filterByBrand: ProductType[] = [];
      if (brandFilter?.length) {
        brandFilter.forEach((brandItem: string) => {
          tempProducts.forEach((product: ProductType) => {
            if (product.manufacturer === brandItem) {
              filterByBrand.push(product);
            }
          });
        });
        tempProducts = [...filterByBrand];
      }

      const filterByTag: ProductType[] = [];
      if (tagFilter?.length) {
        tagFilter.forEach((tag: string) => {
          tempProducts.forEach((product: ProductType) => {
            if (product.tags.includes(tag)) {
              filterByTag.push(product);
            }
          });
        });
        tempProducts = [...filterByTag];
      }

      const filterBySort = applyCustomSortFilter(sortFilter, tempProducts);
      tempProducts = [...filterBySort];

      return [...tempProducts];
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
