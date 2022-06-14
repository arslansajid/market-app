import { IStore, KeyValueType } from "../store.types";

export const selectTotalPrice = (state: IStore): number =>
  state.cart.totalPrice;

export const selectQuantityById = (state: IStore): KeyValueType =>
  state.cart.quantityById;
