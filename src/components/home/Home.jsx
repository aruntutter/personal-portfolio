import React from "react";
import "./Home.css";
import { FaDownload } from "react-icons/fa";
import ImageHome from "../../assets/home-img.jpg";

const Home = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1y_sR7Fw1exg-7-Fhav6rucgeDS77xaVI/view?usp=sharing";
  };

  return (
    <section className="home">
      <div className="home-wrapper">
        <div className="home-left">
          <p className="home-p1">Hey there,</p>
          <h1>
            I'm Arun
            <br />
            Kumar R
          </h1>
          <div className="role-title">
            <p className="home-p2">-- Frontend Developer</p>
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
          <img src={ImageHome} alt="man standing with laptop" />
        </div>
      </div>
    </section>
  );
};

export default Home;
