import { FlexParentCenter, FlexParentMixin } from "../../theme/StyledElements";

import styled from "styled-components";

export const Container = styled.div`
  ${FlexParentMixin};
  flex-direction: column;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 20px;
  height: 227px;
  position: relative;
`;

export const ImageContainer = styled.div`
  ${FlexParentCenter};
  height: 124px;
  left: 30.28%;
  right: 61.11%;
  top: 225px;

  background: #fefefe;
  border: 1.17666px solid #f3f0fe;
  border-radius: 12px;
`;

export const ImageBox = styled.img`
  width: 92px;
  height: 92px;
  object-fit: cover;

  background: #c4c4c4;
`;

export const AddButton = styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.primaryColor};
  width: 100%;
  height: 22px;
  border-radius: 2px;
  border: unset;
  cursor: pointer;
  position: absolute;
  bottom: 0;
`;

export const NameText = styled.span`
  color: ${(props) => props.theme.textColor};
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const PriceText = styled.span`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 6px 0;
`;
