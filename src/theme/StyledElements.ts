import { css } from "styled-components";

export const FlexParentMixin = css`
  display: flex;
  flex-direction: ${(props: { type?: "row" | "column" }) =>
    props.type || "row"};
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
`;

export const FlexParentCenter = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
`;

export const BoxShadow = css`
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;
