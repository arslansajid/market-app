import styled from "styled-components";

export const Container = styled.div``;

export const BoxContainer = styled.div`
  margin: 12px 0 24px 0;
`;

export const FilterTitle = styled.div`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme.headingColor};
`;
