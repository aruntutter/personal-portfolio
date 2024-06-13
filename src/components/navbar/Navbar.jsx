import React, { useState } from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className={`nav-item ${activeNavItem === "home" ? "active" : ""}`}>
          <a
            href="#home"
            className="nav-link"
            onClick={() => handleNavItemClick("home")}
          >
            <FaHome className="nav-icon" />
          </a>
        </li>
        <li className={`nav-item ${activeNavItem === "about" ? "active" : ""}`}>
          <a
            href="#about"
            className="nav-link"
            onClick={() => handleNavItemClick("about")}
          >
            <FaUser className="nav-icon" />
          </a>
        </li>
        <li
          className={`nav-item ${
            activeNavItem === "portfolio" ? "active" : ""
          }`}
        >
          <a
            href="#portfolio"
            className="nav-link"
            onClick={() => handleNavItemClick("portfolio")}
          >
            <FaFolderOpen className="nav-icon" />
          </a>
        </li>
        <li
          className={`nav-item ${activeNavItem === "contact" ? "active" : ""}`}
        >
          <a
            href="#contact"
            className="nav-link"
            onClick={() => handleNavItemClick("contact")}
          >
            <FaEnvelope className="nav-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
