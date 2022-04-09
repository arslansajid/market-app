import { FlexParentCenter } from "../../theme/StyledElements";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.theme.primaryColor};
  min-height: 76px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  @media only screen and (max-width: 767px) {
    left: 3rem;
    transform: none;
  }
`;

export const CartContainer = styled.div`
  ${FlexParentCenter};
  margin-left: auto;
  background-color: ${(props) => props.theme.secondaryColor};
  min-height: 76px;
  width: 130px;
`;

export const TotalText = styled.span`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.white};
  margin-left: 8px;
`;

export const SmCartContainer = styled.div`
  position: absolute:
  right: 0;
  display: none;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
