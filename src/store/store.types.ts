import { BrandType } from "../types/brand.types";
import { FilterTypes } from "../types/filters.types";
import { ProductType } from "../types/product.types";
import { TagMapType } from "../types/tags.types";

type KeyValueType = {
  [key: string]: number | undefined;
};

export type StoreAppType = {
  isLoading: boolean;
};

export type StoreProductsType = {
  allProducts: ProductType[];
  visibleProducts: ProductType[];
};

export type StoreCartType = {
  quantityById: KeyValueType;
  totalPrice: number;
};

export type StoreBrandType = {
  brands: BrandType[];
  filterTerm: string;
  visibleBrands: BrandType[];
};

export type StoreTagsType = {
  allTags: string[];
  filterTerm: string;
  tags: TagMapType;
  visibleTags: TagMapType;
};

export type StoreFiltersType = {
  brandFilter: string[];
  categoryFilter: FilterTypes;
  sortFilter: number;
  tagFilter: string[];
};

export interface IStore {
  app: StoreAppType;
  products: StoreProductsType;
  cart: StoreCartType;
  brands: StoreBrandType;
  tags: StoreTagsType;
  filters: StoreFiltersType;
}
