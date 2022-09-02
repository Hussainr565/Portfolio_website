import React from "react";
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

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavLinkName to="/" exact>
          <span>Syed Hussain Raza</span>
        </NavLinkName>
        <NavMenu>
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
        <LinkButton to="/files/Syed_Hussain_Raza_Resume.pdf" target="_blank" download>
          <CVButton color="#444444"  />
        </LinkButton>
      </Nav>
    </>
  );
};

export default Navbar;
