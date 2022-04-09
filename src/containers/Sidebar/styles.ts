import styled from "styled-components";

export const Container = styled.div`
  // @media screen and (max-width: 700px) {
  //   display: none;
  // }
`;

export const BoxContainer = styled.div`
  margin: 12px 0 24px 0;
`;

export const FilterTitle = styled.div`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  color: ${(props) => props.theme.headingColor};
`;
