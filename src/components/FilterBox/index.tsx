import React, { ReactElement } from "react";

import { Container } from "./styles";

interface FilterBoxProps {
  children: ReactElement | ReactElement[];
}

const FilterBox: React.FC<FilterBoxProps> = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default FilterBox;
