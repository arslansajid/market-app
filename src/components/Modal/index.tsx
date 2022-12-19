import { CloseContainer, ModalWrapper, StyledModal } from "./styles";

import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, closeModal }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      <ModalWrapper>
        <CloseContainer>
          <button onClick={closeModal}>Close</button>
        </CloseContainer>
        {children}
      </ModalWrapper>
    </StyledModal>
  );
};
export default Modal;
