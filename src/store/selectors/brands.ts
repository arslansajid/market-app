import { BrandType } from "../../types/brand.types";
import { IStore } from "../store.types";

export const selectAllBrands = (state: IStore): BrandType[] =>
  state.brands.brands;

export const selectVisibleBrands = (state: IStore): BrandType[] =>
  state.brands.visibleBrands;
