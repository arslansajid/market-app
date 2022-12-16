import {
  RECEIVE_PRODUCTS,
  SET_PRODUCTS_BY_CATEGORY,
} from "../actions/products";

import { FILTER_TAGS } from "../actions/tags";
import { TagMapType } from "../../types/tags.types";
import { combineReducers } from "redux";
import { countBy } from "lodash";
import { storeInitialState } from "../../static/store";

const initialState = storeInitialState.tags;

interface ActionType {
  type: string;
  tag: string;
  products: ProductType[];
  items: ProductType[];
}

interface ProductType {
  tags: string[];
}

type FilteredTagsType = TagMapType & any;

function allTags(state = initialState.tags, action: ActionType) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const tags: string[] = [];
      action.products.forEach((product: ProductType) => {
        tags.push(...product.tags);
      });
      const uniqueTags = Array.from(new Set(tags));
      return [...uniqueTags];
    default:
      return state;
  }
}

function tags(state = initialState.tags, action: ActionType) {
  switch (action.type) {
    case SET_PRODUCTS_BY_CATEGORY:
      const tags: string[] = [];
      action.products.forEach((product: ProductType) => {
        tags.push(...product.tags);
      });
      const tagsMap = countBy(tags);
      return tagsMap;
    default:
      return state;
  }
}

function filterTerm(state = initialState.filterTerm, action: ActionType) {
  switch (action.type) {
    case FILTER_TAGS:
      return action.tag;
    case RECEIVE_PRODUCTS:
      return "";
    default:
      return state;
  }
}

function visibleTags(state = initialState.visibleTags, action: ActionType) {
  const { tag, items } = action;
  switch (action.type) {
    case SET_PRODUCTS_BY_CATEGORY:
      const tags: string[] = [];
      action.products.forEach((product: ProductType) => {
        tags.push(...product.tags);
      });
      const tagsMap = countBy(tags);
      return tagsMap;
    case FILTER_TAGS:
      let filteredTags: FilteredTagsType = {};
      Object.keys(items).forEach((tagItem: any) => {
        if (tagItem.toUpperCase().includes(tag)) {
          filteredTags[tagItem] = items[tagItem];
        }
      });
      return filteredTags;
    default:
      return state;
  }
}

export default combineReducers({
  allTags,
  tags,
  filterTerm,
  visibleTags,
});
