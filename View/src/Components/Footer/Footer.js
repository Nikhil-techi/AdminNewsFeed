import React from "react";
import { NavLink } from "react-router-dom";

import Icon from "./SVGIcon";

import "./Footer.css";

function Footer() {
  return (
    <footer className="foot">
      <div className="social">
        <NavLink to="/">
          <i>{Icon.insta}</i>
        </NavLink>
        <NavLink to="/">
          <i>{Icon.facebook}</i>
        </NavLink>
        <NavLink to="/">
          <i>{Icon.git}</i>
        </NavLink>
        <NavLink to="/">
          <i>{Icon.linkedin}</i>
        </NavLink>
      </div>
      <ul className="inline">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/"> Service</NavLink>
        </li>
        <li>
          <NavLink to="/"> Terms</NavLink>
        </li>
        <li>
          <NavLink to="/"> Contact US</NavLink>
        </li>
      </ul>
      <p>Company Name © 2019</p>
    </footer>
  );
}

export default Footer;
