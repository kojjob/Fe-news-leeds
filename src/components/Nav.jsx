import React from "react";
import { Link } from "@reach/router";

import "./Nav.css";

function Nav() {
  return (
    <nav className="Navbar">
      <Link to="/" className="Nav-item">
        Home
      </Link>
      <Link to="/articles" className="Nav-item">
        Articles{" "}
      </Link>
      <Link to="/topics" className="Nav-item">
        Topics
      </Link>
    </nav>
  );
}

export default Nav;
