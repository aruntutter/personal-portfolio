import { useState } from "react";
import "./Home.css";
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
    window.open(
      "https://drive.google.com/file/d/1pF-_9aoiHy4T0DcHpnB8bebW18uHuj_R/view?usp=sharing"
    );
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="home">
      <div className="home-wrapper">
        {/* LEFT SIDE (Image + Rotating Circle of Icons) */}
        <div className="home-left image-section">
          <div className={`circle ${isHovered ? "paused" : ""}`}>
            <a
              href="https://www.linkedin.com/in/arunkumarr-/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ "--i": 1 }}
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/aruntutter"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ "--i": 2 }}
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://twitter.com/ByteOops"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ "--i": 3 }}
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.instagram.com/arun_tutter/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ "--i": 4 }}
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100012953448827"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ "--i": 5 }}
            >
              <FaFacebook className="icon" />
            </a>
          </div>
          <img src={ImageHome} alt="man standing with laptop" />
        </div>

        {/* RIGHT SIDE (Top + Bottom text) */}
        <div className="home-right">
          {/* Top Section */}
          <div className="home-top top-text">
            <p className="home-p1">Hey there,</p>
            <h1 className="content">
              I'm Arun <span>Kumar R</span>
            </h1>
          </div>

          {/* Role/Title */}
          <div className="role-title">
            <p className="home-p2">
              <span>&lt;/&gt;</span> Frontend Developer
            </p>
          </div>

          {/* Description Section */}
          <div className="home-description">
            <p>
              From literature to lines of code, my journey into web development
              has been shaped by curiosity and creativity. Today, I build
              interactive applications that balance clean design with powerful
              functionality, always focusing on crafting intuitive experiences
              for users.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="home-bottom">
            <div className="btn">
              <button onClick={handleDownload}>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
