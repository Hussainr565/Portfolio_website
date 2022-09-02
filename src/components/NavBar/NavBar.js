import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLinkName,
  Text
} from './NavbarElements';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavLinkName to='/' exact>
        <span>Syed Hussain Raza</span>
          </NavLinkName>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            <Text>About</Text>
          </NavLink>
          <NavLink to='/services' activeStyle>
          <Text>Services</Text>
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
          <Text>Contact Us</Text>
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
          <Text>Sign Up</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;