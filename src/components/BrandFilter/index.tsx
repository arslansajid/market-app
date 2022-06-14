import {
  CheckboxButton,
  CheckboxButtonLabel,
  Container,
  Item,
  Label,
  ScrollContainer,
  SearchInput,
} from "./styles";
import React, { useState } from "react";
import {
  selectAllBrands,
  selectVisibleBrands,
} from "../../store/selectors/brands";
import { useDispatch, useSelector } from "react-redux";

import { BrandType } from "../../types/brand.types";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { SideBarLoadingIcon } from "../LoadingScreen/BlankSlates";
import { filterBrands } from "../../store/actions/brands";
import { selectAppIsLoading } from "../../store/selectors/app";
import { selectBrandFilter } from "../../store/selectors/filters";
import { setBrandFilter } from "../../store/actions/filters";

interface BrandFilterProps {}

const BrandFilter: React.FC<BrandFilterProps> = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const selectedFilter = useSelector(selectBrandFilter);
  const isLoading = useSelector(selectAppIsLoading);
  const allBrands = useSelector(selectAllBrands);
  const brands = useSelector(selectVisibleBrands);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
    dispatch(filterBrands(value.toUpperCase().trim(), allBrands));
  };

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
            {brands.map((brand: BrandType) => (
              <Item key={brand.slug}>
                <CheckboxButton
                  type="checkbox"
                  name="radio"
                  value={brand.slug}
                  checked={selectedFilter.includes(brand.slug)}
                  onChange={(event) => handleSelectChange(event)}
                />
                <CheckboxButtonLabel />
                <Label>{brand.name}</Label>
              </Item>
            ))}
          </>
        )}
      </ScrollContainer>
    </Container>
  );
};

export default BrandFilter;
