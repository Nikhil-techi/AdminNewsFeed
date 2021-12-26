import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "./UI/SearchIcon";

import "./Header.css";

function Header() {
  const [InputValue, setInputValue] = useState("");

  const ChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const ClickHandler = () => {
    setInputValue("");
  };

  return (
    <ul className="header">
      <li>
        <NavLink to="/">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/createpost">Create</NavLink>
      </li>

      <li>
        <NavLink to="/updatepost">Update</NavLink>
      </li>
      <li>
        <NavLink to="/deletepost">Delete</NavLink>
      </li>

      <div className="searchbox">
        <li>
          <input
            className="input"
            onChange={ChangeHandler}
            type="text"
            placeholder="Heading Search..."
            value={InputValue}
          />

          <NavLink to={`/getpost/${InputValue}`} onClick={ClickHandler}>
            {SearchIcon()}
          </NavLink>
        </li>
      </div>
    </ul>
  );
}

export default Header;
