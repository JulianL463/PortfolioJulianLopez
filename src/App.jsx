import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import StyledGlobals from "./global.styles/global.styled";
import Theme from "./global.styles/Theme";
import StyledTitle from "./Components/Title/styles/Title.Styled";


const App = () => {
  return (
    <Theme>
      <StyledGlobals/>
      <NavBar/>
      <StyledTitle/>
    </Theme>
  );
}

export default App;
