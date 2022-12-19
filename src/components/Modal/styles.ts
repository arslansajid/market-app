import { FlexParentMixin } from "../../theme/StyledElements";
import Modal from "styled-react-modal";
import styled from "styled-components";

export const StyledModal = Modal.styled`
  width: 20rem;
  height: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  border-radius: 0.1rem;
`;

export const ModalWrapper = styled.div`
  ${FlexParentMixin};
  flex-direction: column;
  width: 100%;
`;

export const CloseContainer = styled.div`
  margin-bottom: 20px;
  margin-left: auto;
`;
