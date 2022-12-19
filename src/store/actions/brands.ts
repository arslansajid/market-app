import { BrandType } from "../../types/brand.types";

export const RECEIVE_BRANDS = "RECEIVE_BRANDS";

export function receiveBrands(brands: BrandType[]) {
  return {
    type: RECEIVE_BRANDS,
    brands,
  };
}
