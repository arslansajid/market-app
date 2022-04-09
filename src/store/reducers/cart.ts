import {
  ADD_TO_CART,
  CHECKOUT_SUCCESS,
  REMOVE_FROM_CART,
} from "../actions/cart";

import { StoreCartType } from "../store.types";
import { combineReducers } from "redux";
import { roundtoDigits } from "../../static/helpers";

const initialState: StoreCartType = {
  totalPrice: 0,
  quantityById: {},
};

interface ProductType {
  slug: string;
  price: number;
}

interface ActionType {
  type: string;
  product: ProductType;
}

function quantityById(state = initialState.quantityById, action: ActionType) {
  const { product } = action;
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      return initialState.quantityById;
    case ADD_TO_CART:
      return {
        ...state,
        [product.slug]: (state[product.slug] || 0) + 1,
      };
    case REMOVE_FROM_CART:
      const qty = (state[product.slug] || 0) - 1;
      const copy = { ...state };
      if (qty > 0) {
        copy[product.slug] = qty;
      } else {
        delete copy[product.slug];
      }
      return copy;
    default:
      return state;
  }
}

function totalPrice(state = initialState.totalPrice, action: ActionType) {
  switch (action.type) {
    case ADD_TO_CART:
      return roundtoDigits(+state + action.product.price, 2);
    case REMOVE_FROM_CART:
      return roundtoDigits(+state - action.product.price, 2);
    default:
      return state;
  }
}

export default combineReducers({
  quantityById,
  totalPrice,
});
