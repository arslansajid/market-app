export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const SET_SORT_FILTER = "SET_SORT_FILTER";
export const SET_BRAND_FILTER = "SET_BRAND_FILTER";
export const SET_TAG_FILTER = "SET_TAG_FILTER";

export function setCategoryFilter(filter: string) {
  return {
    type: SET_CATEGORY_FILTER,
    filter,
  };
}

export function setSortFilter(filter: number) {
  return {
    type: SET_SORT_FILTER,
    filter,
  };
}

export function setBrandFilter(filter: string[]) {
  return {
    type: SET_BRAND_FILTER,
    filter,
  };
}

export function setTagFilter(filter: string[]) {
  return {
    type: SET_TAG_FILTER,
    filter,
  };
}
