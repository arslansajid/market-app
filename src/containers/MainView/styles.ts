import { FlexParentCenter } from "../../theme/StyledElements";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  overflow-x: hidden;
`;

export const SmFilterContainer = styled.div`
  background: ${(props) => props.theme.white};
  display: none;
  padding: 10px 0;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

export const FilterButton = styled.button`
  ${FlexParentCenter};
  min-height: 35px;

  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  font-size: 0.8rem;
  padding: 5px;
`;
