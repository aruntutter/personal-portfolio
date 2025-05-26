import React, { useState } from "react";
import "./Home.css";
import { FaDownload } from "react-icons/fa";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import ImageHome from "../../assets/home-img.jpg";

const Home = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1TWcTknS-CSRTp3dCnA6Gvs7WQOFaxrlF/view?usp=drive_link";
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="home">
      <div className="home-wrapper">
        {/* Mobile View */}
        <div className="mobile-view">
          <div className={`circle ${isHovered ? "paused" : ""}`}>
            <a
              href="https://www.linkedin.com/in/arunkumarr-/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 1 }}
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/aruntutter"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 2 }}
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://twitter.com/ByteOops"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 3 }}
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.instagram.com/arun_tutter/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 4 }}
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100012953448827"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 5 }}
            >
              <FaFacebook className="icon" />
            </a>
          </div>
          <img src={ImageHome} alt="man standing with laptop" />
        </div>
        <div className="home-left">
          <p className="home-p1">Hey there,</p>
          <h1 className="content">
            I'm Arun
            <br />
            <span>Kumar R</span>
          </h1>
          <div className="role-title">
            <p className="home-p2">
              <span>&lt;/&gt;</span> Frontend Developer
            </p>
          </div>
          <div className="role-des">
            <p className="home-p3">
              Front-End Web Developer | Actively Advancing Skills in Modern Web
              Technologies | Pursuing Japanese - JLPT N5
            </p>
          </div>
          <div className="btn">
            <button onClick={handleDownload}>
              Download Resume <FaDownload className="icon-download" />
            </button>
          </div>
        </div>
        <div className="home-right">
          <div className={`circle ${isHovered ? "paused" : ""}`}>
            <a
              href="https://www.linkedin.com/in/arunkumarr-/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 1 }}
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/aruntutter"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 2 }}
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://twitter.com/ByteOops"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 3 }}
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.instagram.com/arun_tutter/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 4 }}
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100012953448827"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--i": 5 }}
            >
              <FaFacebook className="icon" />
            </a>
          </div>
          <img src={ImageHome} alt="man standing with laptop" />
        </div>
      </div>
    </section>
  );
};

export default Home;
