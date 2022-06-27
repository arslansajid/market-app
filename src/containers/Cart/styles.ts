import { FlexParentCenter } from "../../theme/StyledElements";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primaryColor};
  border-radius: 2px;
  padding: 8px;
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  min-height: 280px;
  max-height: 600px;
  overflow: scroll;
`;

export const CartItemBlock = styled.div`
  display: flex;
  width: 100%;
`;

export const TotalContainer = styled.div`
  ${FlexParentCenter};
  margin-left: auto;
  width: 92px;
  height: 52px;
  background: ${(props) => props.theme.white};
  border: 2px solid ${(props) => props.theme.primaryColor};
  box-sizing: border-box;
  border-radius: 2px;
`;

export const CartMessageContainer = styled.div`
  ${FlexParentCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
