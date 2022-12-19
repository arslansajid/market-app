import { ProductType } from "../../types/product.types";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const CHECKOUT_REQUEST = "CHECKOUT_REQUEST";
export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
export const CHECKOUT_FAILURE = "CHECKOUT_FAILURE";

export function addToCart(product: ProductType) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeFromCart(product: ProductType) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}
