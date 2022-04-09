import { BrandType } from "../../types/brand.types";

export const RECEIVE_BRANDS = "RECEIVE_BRANDS";
export const FILTER_BRANDS = "FILTER_BRANDS";

export function receiveBrands(brands: string[]) {
  return {
    type: RECEIVE_BRANDS,
    brands,
  };
}

export function filterBrands(brand: string, brands: BrandType[]) {
  return {
    type: FILTER_BRANDS,
    brand,
    brands,
  };
}
