import { BoxShadow, FlexParentMixin } from "../../theme/StyledElements";

import checked from "../../assets/icons/checked-white.svg";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexParentMixin};
  flex: 1;
  flex-direction: column;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 244px;
  overflow-y: auto;
  position: relative;
`;

export const SearchInput = styled.input`
  ${BoxShadow}
  height: 48px;
  background: ${(props) => props.theme.white};
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  padding: 12px 16px;
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primaryColor};
  }
`;

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  position: relative;
  border-radius: 2px;
  margin-bottom: 12px;
`;

export const Label = styled.div`
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  margin-top: 4px;
  color: ${(props) => props.theme.labelColor};

  span {
    color: ${(props) => props.theme.placeholderColor};
  }
`;

export const CheckboxButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 18px;
  height: 18px;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;
`;

export const CheckboxButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;

  &:hover ~ ${CheckboxButtonLabel} {
    &::after {
      display: block;
      color: white;
      width: 11px;
      height: 11px;
    }
  }
  &:checked + ${Item} {
    background: ${(props) => props.theme.primaryColor};
    border: 2px solid ${(props) => props.theme.primaryColor};
    background: ${(props) => props.theme.white};
  }
  &:checked + ${CheckboxButtonLabel} {
    background: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
    &::after {
      content: url(${checked});
      display: block;
      color: white;
      width: 11px;
      height: 11px;
      margin: -2px 3px;
    }
  }
`;
