import { IStore } from "../store/store.types";
import { FilterTypes } from "../types/filters.types";

export const storeInitialState: IStore = {
  cart: {
    quantityById: {},
    totalPrice: 0,
  },
  products: {
    visibleProducts: [],
    allProducts: [],
    productsByCategory: [],
  },
  app: {
    isLoading: true,
  },
  brands: {
    brands: [],
    visibleBrands: [],
  },
  tags: {
    allTags: [],
    tags: {},
    filterTerm: "",
    visibleTags: {},
  },
  filters: {
    categoryFilter: FilterTypes.mug,
    sortFilter: 1,
    brandFilter: [],
    tagFilter: [],
  },
};
