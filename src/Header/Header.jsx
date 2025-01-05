import React from "react";
import logoImg from "./../img/icons/logo.svg";
import Search from "./../img/icons/Search.svg";
import User from "./../img/icons/User.svg";
import ShoppingCart from "./../img/icons/Shopping-cart.svg";
import Heart from "./../img/icons/Heart.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="rov">
          <div className="logo">
            <a href="#">
              <img src={logoImg} alt="logo" />
            </a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#" className="header-link">
                  Shop
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="search">
            <form>
              <button type="submit">
                <img src={Search} alt="search" />
              </button>
              <input type="text" placeholder="Search item..." />
            </form>
          </div>
          <div className="user-btn">
            <a href="#" className="heart">
              <img src={Heart} alt="heart" />
            </a>
            <a href="#" className="shoping-cart">
              <img src={ShoppingCart} alt="shoping-cart" />
            </a>
            <a href="#" className="user">
              <img src={User} alt="user" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
