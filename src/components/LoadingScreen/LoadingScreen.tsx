import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ComponentProps {
  movingBarWidth?: string;
  movingBarRotation?: string;
  movingBarOpacity?: number;
}

const LoadingWrapperStyled = styled.div<ComponentProps>`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  min-height: 100%;

  @keyframes loadingAnimation {
    from {
      left: -50%;
    }
    to {
      left: 150%;
    }
  }

  ::before {
    position: absolute;
    content: "";
    left: -50%;
    top: -25%;
    width: ${(props) => props.movingBarWidth};
    background: white;
    height: 150%;
    transform: rotate(${(props) => props.movingBarRotation});
    animation: loadingAnimation 1s infinite;
    opacity: ${(props) => props.movingBarOpacity};
  }
`;
function LoadingScreen({
  children,
  movingBarWidth = "5%",
  movingBarRotation = "35deg",
  movingBarOpacity = 0.6,
}: PropsWithChildren<ComponentProps>) {
  return (
    <LoadingWrapperStyled
      movingBarRotation={movingBarRotation}
      movingBarWidth={movingBarWidth}
      movingBarOpacity={movingBarOpacity}
    >
      {children}
    </LoadingWrapperStyled>
  );
}

export default LoadingScreen;
