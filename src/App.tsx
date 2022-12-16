import { ThemeProvider, createGlobalStyle } from "styled-components";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MainView from "./containers/MainView";
import { ModalProvider } from "styled-react-modal";
import OpenSans from "./assets/fonts/OpenSans/OpenSans.ttf";
import React from "react";
import styled from "styled-components";
import { theme } from "./theme/ThemeConfig";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  src: url(${OpenSans}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
   background: ${theme.backgroundColor};
 }
`;

export const AppContainer = styled.div<{ isLoading: boolean }>`
  filter: blur(${({ isLoading }) => (isLoading ? "5px" : "0")});
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <AppContainer isLoading={false}>
            <Header />
            <MainView />
            <Footer />
          </AppContainer>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
