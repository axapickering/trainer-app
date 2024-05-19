import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        Home
      </Link>
      <br/>
    </nav>
  );
}

export default NavBar;