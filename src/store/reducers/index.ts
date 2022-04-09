import { default as app } from "./app";
import { default as brands } from "./brands";
import { default as cart } from "./cart";
import { combineReducers } from "redux";
import { default as filters } from "./filters";
import { default as products } from "./products";
import { default as tags } from "./tags";

// type CartStateType = {
//   quantityById: {};
//   totalPrice: number;
// };

// type ProductsStateType = {
//   visibleProducts: any[];
//   filterTerm: string;
//   allProducts: any[];
//   productsByCategory: any;
// };

// type AppStateType = {
//   isLoading: boolean;
// };

// type BrandsStateType = {
//   brands: any[];
//   filterTerm: string;
//   visibleBrands: any[];
// };

// type TagsStateType = {
//   allTags: string[];
//   tags: any[];
//   filterTerm: string;
//   visibleTags: any[];
// };

// interface FiltersInterface {
//   brandFilter: any[];
//   categoryFilter: string;
//   sortFilter: number;
//   tagFilter: any[];
// }

// interface StoreInterface {
//   cart: CartStateType;
//   products: ProductsStateType;
//   app: AppStateType;
//   brands: BrandsStateType;
//   tags: TagsStateType;
//   filters: FiltersInterface;
// }

interface ActionInterface {
  type: string;
  payload: any;
}

const shoppingCart = combineReducers({
  cart,
  products,
  app,
  brands,
  tags,
  filters,
});

export default function root(state: any, action: ActionInterface) {
  return shoppingCart(state, action);
}
