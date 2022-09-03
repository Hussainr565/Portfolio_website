import React, { useState, useContext } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLinkName,
  LinkButton,
  Text,
} from "./NavbarElements";
import "./Navbar.css";
import CVButton from "../Button/Button";
import ToggleIconButton from "../ToggleIcon/ToggleIconButton";

const Navbar = (props) => {

  return (
    <>
      <Nav >
        <Bars />
        <NavLinkName className="underline" to="/" exact>
          <span>Syed Hussain Raza</span>
        </NavLinkName>
        <NavMenu className="underline">
          <NavLink to="/about" activeStyle>
            <Text>About</Text>
          </NavLink>
          <NavLink to="/services" activeStyle>
            <Text>Services</Text>
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            <Text>Contact Us</Text>
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            <Text>Sign Up</Text>
          </NavLink>
          
        </NavMenu>
        
        <LinkButton
          to="/files/Syed_Hussain_Raza_Resume.pdf"
          target="_blank"
          download
        >
          <CVButton
            color="#444444"
            onClicked={props.onClicked}
            theme={props.theme}
            text="Download CV"
          />
        </LinkButton>
        <ToggleIconButton color="#EDEDED" />
      </Nav>
    </>
  );
};

export default Navbar;
