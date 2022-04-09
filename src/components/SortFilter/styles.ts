import { FlexParentMixin } from "../../theme/StyledElements";
import checked from "../../assets/icons/checked-blue.svg";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexParentMixin};
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 12px;
`;

export const Label = styled.div`
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: ${(props) => props.theme.labelColor}; ;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  border: 2px solid #dfdee2;
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    &::after {
      display: block;
      color: white;
      width: 11px;
      height: 11px;
    }
  }
  &:checked + ${Item} {
    border: 2px solid ${(props) => props.theme.primaryColor};
  }
  &:checked + ${RadioButtonLabel} {
    border: 2px solid ${(props) => props.theme.primaryColor};
    &::after {
      content: url(${checked});
      display: block;
      color: white;
      width: 11px;
      height: 11px;
      margin: -2px 3px;
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;
