import React, { useState, createContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";
import { Button } from "@mui/material";
import "./App.css";
import ThemeContext from "./contexts/themeContext";

const StyledDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = (theme) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme)
  };

  let value = { theme, setTheme };
  return (

    // <ThemeContext.Provider value={{theme, themeToggler}}>
    //   <div className="App" id={theme}>
    //   <Router>
    //       <NavBar />
    //       <Routes>
    //         <Route path="/" exact element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/services" element={<Services />} />
    //         <Route path="/contact-us" element={<Contact />} />
    //         <Route path="/sign-up" element={<SignUp />} />
    //       </Routes>
    //   </Router>
    //   <Button color="primary" onClick={() => themeToggler()}>
    //     Click me!
    //   </Button>
    //   </div>
    // </ThemeContext.Provider>


    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <ThemeContext.Provider value={value}>
      <GlobalStyles />
      <Router>
        <StyledDiv>
          <NavBar onClicked={themeToggler} theme={theme} />
        </StyledDiv>
        <StyledDiv>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </StyledDiv>
      </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
    
  );
};

export default App;
