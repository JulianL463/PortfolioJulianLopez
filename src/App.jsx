import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import StyledGlobals from "./global.styles/global.styled";
import Theme from "./global.styles/Theme";


const App = () => {
  return (
    <Theme>
      <StyledGlobals/>
      <NavBar/>
    </Theme>
  );
}

export default App;
