import {
  CheckboxButton,
  CheckboxButtonLabel,
  Container,
  Item,
  Label,
  ScrollContainer,
  SearchInput,
} from "./styles";
import React, { useCallback, useEffect, useState } from "react";
import {
  selectAllBrands
} from "../../store/selectors/brands";
import { useDispatch, useSelector } from "react-redux";

import { BrandType } from "../../types/brand.types";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { SideBarLoadingIcon } from "../LoadingScreen/BlankSlates";
import { selectAppIsLoading } from "../../store/selectors/app";
import { selectBrandFilter } from "../../store/selectors/filters";
import { setBrandFilter } from "../../store/actions/filters";
import { selectProductsByCategory } from "../../store/selectors/products";
import { ProductType } from "../../types/product.types";
import _ from "lodash";
import { api } from "../../store/services";

interface BrandFilterProps {}

const BrandFilter: React.FC<BrandFilterProps> = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [filteredBrands, setFilteredBrands] = useState<BrandType[]>([]);
  const selectedFilter = useSelector(selectBrandFilter);
  const isLoading = useSelector(selectAppIsLoading);
  const allBrands = useSelector(selectAllBrands);
  const categorizedProducts = useSelector(selectProductsByCategory);

  useEffect(() => {
    if (allBrands.length) {
      setFilteredBrands(allBrands);
    }
  }, [allBrands]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === "All") {
      dispatch(setBrandFilter([]));
    } else {
      const tempSelected = [...selectedFilter];
      if (tempSelected.includes(value)) {
        const index = tempSelected.findIndex((x) => x === value);
        tempSelected.splice(index, 1);
      } else {
        tempSelected.push(value);
      }
      dispatch(setBrandFilter([...tempSelected]));
    }
  };

  const searchBrands = async (input: string) => {
    const params = {
      searchTerm: input,
    };
    const response = await api.getBrands(params);
    setFilteredBrands(response);
  };

  /* eslint-disable */
  const debounceSearchBrands = useCallback(_.debounce(searchBrands, 1000), []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
    if(value === "") {
      setFilteredBrands(allBrands);
    } else {
    debounceSearchBrands(value);
    }
  };

  const getBrandProductsCount = useCallback(
    (brand: BrandType) => {
      const brandsArray: any[] = [];
      categorizedProducts.forEach((product: ProductType) => {
        if (product.manufacturer === brand.slug) {
          brandsArray.push(product);
        }
      });
      return brandsArray.length;
    },
    [categorizedProducts]
  );

  return (
    <Container>
      <SearchInput
        value={searchInput}
        onChange={(e) => handleInputChange(e)}
        placeholder={"Search brand"}
      />
      <ScrollContainer>
        {isLoading ? (
          <LoadingScreen>
            <SideBarLoadingIcon />
          </LoadingScreen>
        ) : (
          <>
            <Item>
              <CheckboxButton
                type="checkbox"
                name="radio"
                value="All"
                checked={selectedFilter.length === 0}
                onChange={(event) => handleSelectChange(event)}
              />
              <CheckboxButtonLabel />
              <Label>All</Label>
            </Item>
            {filteredBrands.map((brand: BrandType) => (
              <Item key={brand.slug}>
                <CheckboxButton
                  type="checkbox"
                  name="radio"
                  value={brand.slug}
                  checked={selectedFilter.includes(brand.slug)}
                  onChange={(event) => handleSelectChange(event)}
                />
                <CheckboxButtonLabel />
                <Label>
                  {brand.name}&nbsp;
                  <span>({getBrandProductsCount(brand)})</span>
                </Label>
              </Item>
            ))}
          </>
        )}
      </ScrollContainer>
    </Container>
  );
};

export default BrandFilter;
