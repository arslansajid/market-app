import { IStore } from "../../store/store.types";
import { ProductType } from "../../types/product.types";

export const selectAllProducts = (state: IStore): ProductType[] =>
  state.products.allProducts;

export const selectVisibleProducts = (state: IStore): ProductType[] =>
  state.products.visibleProducts;
