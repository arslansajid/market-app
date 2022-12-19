import { default as app } from "./app";
import { default as brands } from "./brands";
import { default as cart } from "./cart";
import { combineReducers } from "redux";
import { default as filters } from "./filters";
import { default as products } from "./products";
import { default as tags } from "./tags";

interface ActionInterface {
  type: string;
  payload: any;
}

const shoppingCart = combineReducers({
  cart,
  products,
  app,
  brands,
  tags,
  filters,
});

export default function root(state: any, action: ActionInterface) {
  return shoppingCart(state, action);
}
