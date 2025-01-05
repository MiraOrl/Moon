import React from "react";
import logoImg from "./../img/icons/logo.svg";
import "./header.css";

function Header() {
  <header className="header">
    <div className="container">
      <div className="rov">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
}

export default Header;
