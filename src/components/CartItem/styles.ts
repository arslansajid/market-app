import { FlexParentCenter, FlexParentMixin } from "../../theme/StyledElements";

import styled from "styled-components";

export const Container = styled.div`
  ${FlexParentMixin};
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.textColor};
  width: 100%;
  margin-bottom: 18px;
  position: relative;

  :after {
    content: "";
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.dividerColor};
    position: absolute;
    left: 0;
    bottom: -7.5px;
    z-index: 1;
  }
`;

export const ProductSection = styled.div``;

export const CountSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CounterButton = styled.button`
  background: unset;
  border: unset;
  color: ${(props) => props.theme.primaryColor};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const ValueContainer = styled.div`
  ${FlexParentCenter};
  flex-direction: row;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  margin: 0 8px;
`;

export const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  margin-left: -100px;
`;

export const NameText = styled.div`
  color: ${(props) => props.theme.textColor};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  margin-bottom: 4px;
`;

export const PriceText = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 0.16px;
`;
