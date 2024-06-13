import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(
    localStorage.getItem("activeNavItem") || "home"
  );

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    localStorage.setItem("activeNavItem", navItem);
  };

  useEffect(() => {
    const savedNavItem = localStorage.getItem("activeNavItem");
    if (savedNavItem) {
      setActiveNavItem(savedNavItem);
    }
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className={`nav-item ${activeNavItem === "home" ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${activeNavItem === "home" ? "active" : ""}`}
            onClick={() => handleNavItemClick("home")}
          >
            <FaHome className="nav-icon" />
          </Link>
        </li>
        <li className={`nav-item ${activeNavItem === "about" ? "active" : ""}`}>
          <Link
            to="/about"
            className={`nav-link ${activeNavItem === "about" ? "active" : ""}`}
            onClick={() => handleNavItemClick("about")}
          >
            <FaUser className="nav-icon" />
          </Link>
        </li>
        <li
          className={`nav-item ${
            activeNavItem === "portfolio" ? "active" : ""
          }`}
        >
          <Link
            to="/portfolio"
            className={`nav-link ${
              activeNavItem === "portfolio" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("portfolio")}
          >
            <FaFolderOpen className="nav-icon" />
          </Link>
        </li>
        <li
          className={`nav-item ${activeNavItem === "contact" ? "active" : ""}`}
        >
          <Link
            to="/contact"
            className={`nav-link ${
              activeNavItem === "contact" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("contact")}
          >
            <FaEnvelope className="nav-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
