import { ProductType } from "../../types/product.types";
import { StoreFiltersType } from "../store.types";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const SET_PRODUCTS_BY_CATEGORY = "SET_PRODUCTS_BY_CATEGORY";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

export function getProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

export function receiveProducts(products: ProductType[]) {
  return {
    type: RECEIVE_PRODUCTS,
    products,
  };
}

export function setProductsByCategory(products: ProductType[]) {
  return {
    type: SET_PRODUCTS_BY_CATEGORY,
    products,
  };
}

export function filterProducts(
  products: ProductType[],
  filters: StoreFiltersType
) {
  return {
    type: FILTER_PRODUCTS,
    products,
    filters,
  };
}
