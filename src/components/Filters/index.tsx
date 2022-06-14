import { Container, FilterButton } from "./styles";
import React, { useEffect, useState } from "react";
import {
  filterProducts,
  setProductsByCategory,
} from "../../store/actions/products";
import {
  selectAllFilters,
  selectCategoryFilter,
} from "../../store/selectors/filters";
import { useDispatch, useSelector } from "react-redux";

import { FilterTypes } from "../../types/filters.types";
import { ProductType } from "../../types/product.types";
import { selectAllProducts } from "../../store/selectors/products";
import { selectAppIsLoading } from "../../store/selectors/app";
import { setCategoryFilter } from "../../store/actions/filters";
import { setIsLoading } from "../../store/actions/app";

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
  const dispatch = useDispatch();
  const [categorizedProducts, setCategorizedProducts] = useState<ProductType[]>(
    []
  );
  const isLoading = useSelector(selectAppIsLoading);
  const storeFilters = useSelector(selectAllFilters);
  const allItems = useSelector(selectAllProducts);
  const selectedFilter = useSelector(selectCategoryFilter);

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
