import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
`;

export const FooterLink = styled.span`
  margin: 0 16px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 13px;
  line-height: 174%;
`;
