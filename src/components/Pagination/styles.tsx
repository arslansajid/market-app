import { FlexParentCenter } from "../../theme/StyledElements";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const ListingsContainer = styled.div`
  padding: 20px;
  border-radius: 2px;
  background: ${(props) => props.theme.white};
`;

export const LoadingContainer = styled.div`
  ${FlexParentCenter};
  width: 100%;
  min-height: 300px;

  @media only screen and (max-width: 767px) {
    min-width: 75vw;
  }

  @media only screen and (max-width: 500px) {
    min-width: 60vw;
  }
`;

// Use inner class names to style the controls.
export const ReactStyledPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: "active", // default to "disabled"
})`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  justify-content: space-evenly;
  list-style-type: none;
  padding: 0 1rem;

  li a {
    border-radius: 2px;
    padding: 0.7rem 0.72rem;
    cursor: pointer;
    user-select: none;
    color: ${(props) => props.theme.headingColor};

    @media only screen and (max-width: 767px) {
      padding: 0.32rem 0.32rem;
    }

    @media only screen and (max-width: 320px) {
      padding: 2px;
    }
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: ${(props) => props.theme.primaryColor};
    border-color: transparent;
    color: ${(props) => props.theme.white};
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const MessageContainer = styled.div`
  ${FlexParentCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
`;
