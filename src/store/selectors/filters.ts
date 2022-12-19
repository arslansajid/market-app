import { FilterTypes } from "../../types/filters.types";
import { IStore } from "../../store/store.types";

export const selectAllFilters = (state: IStore) => state.filters;

export const selectBrandFilter = (state: IStore): string[] =>
  state.filters.brandFilter;

export const selectCategoryFilter = (state: IStore): FilterTypes =>
  state.filters.categoryFilter;

export const selectSortFilter = (state: IStore): number =>
  state.filters.sortFilter;

export const selectTagFilter = (state: IStore): string[] =>
  state.filters.tagFilter;
