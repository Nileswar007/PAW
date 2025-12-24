import React from "react";

import "../styles/main.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🐾 PawCare</div>

      <ul className="nav-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="nav-actions">
        <a href="#">Login</a>
        <a href="#" className="btn">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;