import { FlexParentMixin } from "../../theme/StyledElements";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexParentMixin};
  flex-direction: row;
  margin: 1rem 0;
`;

export const FilterButton = styled.button<{ isActive: boolean }>`
  margin-right: 8px;
  padding: 6px 16px;
  width: 60px;
  height: 30px;
  border-radius: 2px;
  border: unset;
  cursor: pointer;
  background: ${(props) =>
    props.isActive ? props.theme.primaryColor : "#F2F0FD"};
  color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.primaryColor};
`;
