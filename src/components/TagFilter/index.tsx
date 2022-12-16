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
import { selectAllTags, selectVisibleTags } from "../../store/selectors/tags";
import { useDispatch, useSelector } from "react-redux";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { SideBarLoadingIcon } from "../LoadingScreen/BlankSlates";
import { filterTags } from "../../store/actions/tags";
import { selectAppIsLoading } from "../../store/selectors/app";
import { selectTagFilter } from "../../store/selectors/filters";
import { setTagFilter } from "../../store/actions/filters";

interface TagFilterProps {}

const TagFilter: React.FC<TagFilterProps> = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const isLoading = useSelector(selectAppIsLoading);
  const allTags = useSelector(selectAllTags);
  const visibleTags = useSelector(selectVisibleTags);

  const selectedFilter = useSelector(selectTagFilter);

  const tagNames = Object.keys(visibleTags);

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === "All") {
      dispatch(setTagFilter([]));
    } else {
      const tempSelected = [...selectedFilter];
      if (tempSelected.includes(value)) {
        const index = tempSelected.findIndex((x) => x === value);
        tempSelected.splice(index, 1);
      } else {
        tempSelected.push(value);
      }
      dispatch(setTagFilter([...tempSelected]));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
    dispatch(filterTags(value.toUpperCase().trim(), allTags));
  };

  return (
    <Container>
      <SearchInput
        value={searchInput}
        onChange={(e) => handleInputChange(e)}
        placeholder={"Search tag"}
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
            {tagNames.map((tag: string) => (
              <Item key={tag}>
                <CheckboxButton
                  type="checkbox"
                  name="radio"
                  value={tag}
                  checked={selectedFilter.includes(tag)}
                  onChange={(event) => handleSelectChange(event)}
                />
                <CheckboxButtonLabel />
                <Label>
                  {tag} &nbsp; <span>({allTags[tag]})</span>
                </Label>
              </Item>
            ))}
          </>
        )}
      </ScrollContainer>
    </Container>
  );
};

export default TagFilter;
