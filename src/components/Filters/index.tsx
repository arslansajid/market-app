import { Container, FilterButton } from "./styles";
import React, { useEffect, useState } from "react";
import {
  filterProducts,
  setProductsByCategory,
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
  const [categorizedProducts, setCategorizedProducts] = useState<ProductType[]>(
    []
  );
  const isLoading = useSelector((state: IStore) => state.app.isLoading);
  const storeFilters = useSelector((state: IStore) => state.filters);
  const allItems = useSelector((state: IStore) => state.products.allProducts);
  const selectedFilter = useSelector(
    (state: IStore) => state.filters.categoryFilter
  );

  useEffect(() => {
    if (allItems.length) {
      const filterByCategoryItems = allItems.filter(
        (x) => x.itemType === selectedFilter
      );
      setCategorizedProducts(filterByCategoryItems);
      dispatch(setProductsByCategory(filterByCategoryItems));
    }
  }, [allItems, dispatch, selectedFilter]);

  useEffect(() => {
    if (categorizedProducts.length) {
      dispatch(filterProducts(categorizedProducts, storeFilters));
      if (isLoading) dispatch(setIsLoading(false));
    }
  }, [categorizedProducts, dispatch, isLoading, storeFilters]);

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
