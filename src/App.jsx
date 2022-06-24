import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import StyledGlobals from "./global.styles/global.styled";
import Theme from "./global.styles/Theme";
import StyledTitle from "./Components/Title/styles/Title.Styled";
import StyledCardsContainer from "./Components/CardContainer/styles/CardsContainer.Styled";
import StyledDetails from "./Components/Details/styles/Details.Styled";
import StyledMyself from "./Components/Myselft/styles/Myself.Styled";


const App = () => {
  return (
    <Theme>
      <StyledGlobals/>
      <NavBar/>
      <StyledTitle/>
      <StyledCardsContainer>
        <StyledMyself/>
        <StyledDetails/>
      </StyledCardsContainer>
    </Theme>
  );
}

export default App;
