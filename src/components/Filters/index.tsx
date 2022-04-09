import { Container, FilterButton } from "./styles";
import React, { useCallback, useEffect } from "react";
import {
  setProductsByCategory,
  setVisibleProducts,
} from "../../store/actions/products";
import { useDispatch, useSelector } from "react-redux";

import { FilterTypes } from "../../types/filters.types";
import { IStore } from "../../store/store.types";
import { ProductType } from "../../types/product.types";
import { setCategoryFilter } from "../../store/actions/filters";
import { setIsLoading } from "../../store/actions/app";

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IStore) => state.app.isLoading);
  const sortFilterValue = useSelector(
    (state: IStore) => state.filters.sortFilter
  );
  const brandFilterValue = useSelector(
    (state: IStore) => state.filters.brandFilter
  );
  const tagFilterValue = useSelector(
    (state: IStore) => state.filters.tagFilter
  );
  const allItems = useSelector((state: IStore) => state.products.allProducts);
  const selectedFilter = useSelector(
    (state: IStore) => state.filters.categoryFilter
  );

  const applyCustomSortFilter = useCallback((filterVal, products) => {
    switch (filterVal) {
      case 1:
        return products.sort(
          (a: any, b: any) => parseFloat(a.price) - parseFloat(b.price)
        );
      case 2:
        return products.sort(
          (a: any, b: any) => parseFloat(b.price) - parseFloat(a.price)
        );
      case 3:
        return products.sort((a: any, b: any) => a.added - b.added);
      case 4:
        return products.sort((a: any, b: any) => b.added - a.added);
      default:
        return () => {};
    }
  }, []);

  useEffect(() => {
    if (allItems.length) {
      const filterByCategoryItems = allItems.filter(
        (x) => x.itemType === selectedFilter
      );
      dispatch(setProductsByCategory(filterByCategoryItems));
    }
  }, [allItems, dispatch, selectedFilter]);

  useEffect(() => {
    let products = [...allItems];
    if (allItems.length) {
      const filterByCategory = products.filter(
        (x) => x.itemType === selectedFilter
      );
      products = [...filterByCategory];
      const filterBySort = applyCustomSortFilter(sortFilterValue, products);
      products = [...filterBySort];

      const filterByBrand: ProductType[] = [];
      if (brandFilterValue.length) {
        brandFilterValue.forEach((brandItem: string) => {
          products.forEach((product: ProductType) => {
            if (product.manufacturer === brandItem) {
              filterByBrand.push(product);
            }
          });
        });
        products = [...filterByBrand];
      }

      const filterByTag: ProductType[] = [];
      if (tagFilterValue.length) {
        tagFilterValue.forEach((tag: string) => {
          products.forEach((product: ProductType) => {
            if (product.tags.includes(tag)) {
              filterByTag.push(product);
            }
          });
        });
        products = [...filterByTag];
      }

      dispatch(setVisibleProducts(products));
      if (isLoading) dispatch(setIsLoading(false));
    }
  }, [
    allItems,
    applyCustomSortFilter,
    dispatch,
    selectedFilter,
    sortFilterValue,
    brandFilterValue,
    tagFilterValue,
    isLoading,
  ]);

  const toggleFilter = (filter: FilterTypes) => {
    if (selectedFilter !== filter) {
      dispatch(setCategoryFilter(filter));
    }
  };

  return (
    <Container>
      <FilterButton
        isActive={selectedFilter === FilterTypes.mug}
        onClick={() => toggleFilter(FilterTypes.mug)}
      >
        {FilterTypes.mug}
      </FilterButton>
      <FilterButton
        isActive={selectedFilter === FilterTypes.shirt}
        onClick={() => toggleFilter(FilterTypes.shirt)}
      >
        {FilterTypes.shirt}
      </FilterButton>
    </Container>
  );
};

export default Filters;
