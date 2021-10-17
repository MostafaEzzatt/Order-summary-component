import { useState } from "react";

import { ThemeProvider } from "styled-components";
import theme from "./Components/styled/Themes";
import Cart from "./Components/Cart";
import GlobalStyles from "./Components/styled/Global";
import ContainerDiv from "./Components/styled/ContainerDiv.styled";

import Nav from "./Components/Nav";
import Product from "./Components/Product";

import productInfo from "./productInfo";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <ContainerDiv>
          {showCart && <Cart />}
          <Nav showCart={showCart} setShowCart={setShowCart} />
          <Product productInfo={productInfo} />
        </ContainerDiv>
      </>
    </ThemeProvider>
  );
}

export default App;
