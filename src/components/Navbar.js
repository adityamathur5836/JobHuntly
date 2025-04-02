import React, { useState } from "react";
import logo from "../assets/Frame 3.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-nav">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
            <Link className="joblist" to={"/"}>
              <h2>JobHuntly</h2>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="companies">
            <Link to={"/joblist"} className="nav-link">
              Find jobs
            </Link>
            <a className="nav-link">Browse Companies</a>
            <Link to={"/applied"} className="nav-link">
              Applied Jobs
            </Link>
          </div>
        </div>

        {/* Desktop Login/Signup */}
        <div className="login">
          <a>Login</a>
          <div className="signup-btn">
            <button className="signup">Sign Up</button>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to={"/joblist"} className="mobile-link" onClick={toggleMenu}>
          Find jobs
        </Link>
        <a className="mobile-link">Browse Companies</a>
        <Link to={"/applied"} className="mobile-link" onClick={toggleMenu}>
          Applied Jobs
        </Link>
        <div className="mobile-auth">
          <a className="login-link">Login</a>
          <button className="signup-mobile">Sign Up</button>
        </div>
      </div>
    </>
  );
}