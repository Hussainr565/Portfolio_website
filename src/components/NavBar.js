import React, { useState } from "react";
import "./NavBar.css";
import items from "./MenuItems";

const NavBar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Syed Hussain Raza
      </a>
      <ul className={active}>
        {items.map(item => (
          <li key={item.title} sx={{ my: 2, color: "white", display: "block" }}>
            <a href={item.url} className="nav__link">{item.title}</a>
          </li>
        ))}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
