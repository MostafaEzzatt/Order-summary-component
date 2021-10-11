import { ThemeProvider } from "styled-components";
import theme from "./Components/styled/Themes";
import GlobalStyles from "./Components/styled/Global";

import Wrapper from "./Components/styled/Wrapper.styled";
import Card from "./Components/Card";
import cardsContent from "./cardsContent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          {cardsContent.map((card) => {
            return (
              <Card
                key={card.id}
                personImage={card.personImage}
                name={card.name}
                headLine={card.headLine}
                bodyContent={card.bodyContent}
              />
            );
          })}
        </Wrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
