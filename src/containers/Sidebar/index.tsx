import { BoxContainer, Container, FilterTitle } from "./styles";

import BrandFilter from "../../components/BrandFilter";
import FilterBox from "../../components/FilterBox";
import React from "react";
import SortFilter from "../../components/SortFilter";
import TagFilter from "../../components/TagFilter";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Container>
      <FilterTitle>Sorting</FilterTitle>
      <BoxContainer>
        <FilterBox>
          <SortFilter />
        </FilterBox>
      </BoxContainer>
      <FilterTitle>Brands</FilterTitle>
      <BoxContainer>
        <FilterBox>
          <BrandFilter />
        </FilterBox>
      </BoxContainer>
      <FilterTitle>Tags</FilterTitle>
      <BoxContainer>
        <FilterBox>
          <TagFilter />
        </FilterBox>
      </BoxContainer>
    </Container>
  );
};

export default Sidebar;
