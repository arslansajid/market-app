import { ProductType } from "../../types/product.types";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const SET_VISIBLE_PRODUCTS = "SET_VISIBLE_PRODUCTS";

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

export function setVisibleProducts(products: ProductType[]) {
  return {
    type: SET_VISIBLE_PRODUCTS,
    products,
  };
}
