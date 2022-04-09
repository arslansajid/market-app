import { FlexParentCenter } from "../../theme/StyledElements";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartContainer = styled.div``;

export const LoadingContainer = styled.div`
  ${FlexParentCenter};
  background: ${(props) => props.theme.white};
  // width: 100%;
  padding: 20px;
  border-radius: 2px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ViewCartLinkSm = styled.div`
  position: relative;
  color: ${(props) => props.theme.secondaryColor};
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
  }

  :after {
    content: "";
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.secondaryColor};
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
`;

export const Heading = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  display: flex;
  align-items: center;
  letter-spacing: 0.25px;

  color: #6f6f6f;
`;

export const ListingsContainer = styled.div`
  padding: 20px;
  border-radius: 2px;
  background: ${(props) => props.theme.white};
`;
