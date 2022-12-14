import { StrictMode, useState } from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { cartItemsContext } from "./contexts";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans TC', sans-serif;
  }

  #root {
    min-height: 100vh;
    padding: 140px 0 115px;
    position: relative;

    @media screen and (max-width: 1279px) {
      padding: 102px 0 208px;
    }
  }
`;

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(window.localStorage.getItem("cartItems")) || []
  );

  return (
    <StrictMode>
      <cartItemsContext.Provider value={[cartItems, setCartItems]}>
        <Reset />
        <GlobalStyle />
        <Header />
        <Outlet />
        <Footer />
      </cartItemsContext.Provider>
    </StrictMode>
  );
}

export default App;
