import {
  SET_BRAND_FILTER,
  SET_CATEGORY_FILTER,
  SET_SORT_FILTER,
  SET_TAG_FILTER,
} from "../actions/filters";

import { FilterTypes } from "../../types/filters.types";
import { RECEIVE_PRODUCTS } from "../actions/products";
import { combineReducers } from "redux";

const initialState = {
  categoryFilter: FilterTypes.mug,
  sortFilter: 1,
  brandsFilter: [],
  tagsFilter: [],
};

interface ActionType<Type> {
  type: string;
  filter: string | number | Type[];
}

function categoryFilter(
  state = initialState.categoryFilter,
  action: ActionType<string>
) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function sortFilter(
  state = initialState.sortFilter,
  action: ActionType<number>
) {
  switch (action.type) {
    case SET_SORT_FILTER:
      return action.filter;
    case RECEIVE_PRODUCTS:
      return state;
    default:
      return state;
  }
}

function brandFilter(
  state = initialState.brandsFilter,
  action: ActionType<string>
) {
  switch (action.type) {
    case SET_BRAND_FILTER:
      return action.filter;
    case RECEIVE_PRODUCTS:
      return state;
    default:
      return state;
  }
}

function tagFilter(
  state = initialState.tagsFilter,
  action: ActionType<string>
) {
  switch (action.type) {
    case SET_TAG_FILTER:
      return action.filter;
    case RECEIVE_PRODUCTS:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  categoryFilter,
  sortFilter,
  brandFilter,
  tagFilter,
});
