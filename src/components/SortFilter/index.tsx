import {
  Container,
  Item,
  Label,
  RadioButton,
  RadioButtonLabel,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import React from "react";
import { SideBarLoadingIcon } from "../LoadingScreen/BlankSlates";
import { selectAppIsLoading } from "../../store/selectors/app";
import { selectSortFilter } from "../../store/selectors/filters";
import { setSortFilter } from "../../store/actions/filters";
import { sortFilterOptions } from "../../static/filters";

interface SortFilterProps {}

const SortFilter: React.FC<SortFilterProps> = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppIsLoading);
  const selectedFilter = useSelector(selectSortFilter);

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const parsedNumberValue = Number(value);
    dispatch(setSortFilter(parsedNumberValue));
  };

  return (
    <Container>
      {isLoading ? (
        <LoadingScreen>
          <SideBarLoadingIcon />
        </LoadingScreen>
      ) : (
        sortFilterOptions.map((option) => (
          <Item key={option.value}>
            <RadioButton
              type="radio"
              name={option.label}
              value={option.value}
              checked={selectedFilter === option.value}
              onChange={(event) => handleSelectChange(event)}
            />
            <RadioButtonLabel />
            <Label>{option.label}</Label>
          </Item>
        ))
      )}
    </Container>
  );
};

export default SortFilter;
