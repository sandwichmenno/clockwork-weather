import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Main from './components/Main/Main';
import {StoreProvider} from "./store/store";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: ${props => props.theme.bg};
  
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;


const lightTheme = {
    primary: "#928eff",
    secondary: "rgba(255,255,255,0.3)",
    bg: "linear-gradient(to top, #0f2027, #203a43, #2c5364)",
    text: "#fdfeff",
}

const App = () => {
  return (
      <ThemeProvider theme={lightTheme}>
          <StoreProvider>
              <AppContainer>
                <Main />
              </AppContainer>
          </StoreProvider>
      </ThemeProvider>
  );
}

export default App;
