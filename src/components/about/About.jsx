import React from "react";
import "./About.css";
import { FaDownload } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import TechImg1 from "../../assets/tech-icons/tech-html.png";
import TechImg2 from "../../assets/tech-icons/tech-css.png";
import TechImg3 from "../../assets/tech-icons/tech-js.png";
import TechImg4 from "../../assets/tech-icons/tech-react.png";
import TechImg5 from "../../assets/tech-icons/tech-bootstrap.png";
import TechImg6 from "../../assets/tech-icons/tech-api.png";
import TechImg7 from "../../assets/tech-icons/tech-git.png";
import TechImg8 from "../../assets/tech-icons/tech-tailwind.png";
import TechImg9 from "../../assets/tech-icons/tech-node.png";
import TechImg10 from "../../assets/tech-icons/tech-github.png";

const About = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1y_sR7Fw1exg-7-Fhav6rucgeDS77xaVI/view?usp=sharing";
  };

  return (
    <section className="about">
      <h2 className="h2">ABOUT</h2>
      <div className="about-wrapper">
        <div className="about-left">
          <p className="p">
            As a dedicated and skilled Front-End Web Developer, I bring a strong
            proficiency in creating engaging and responsive web applications.
            <br />
            <br />
            My commitment to continuous learning and exploring new skills and
            technologies drives my dedication to staying at the forefront of web
            development.
          </p>
          <div className="btn about-btn">
            <button onClick={handleDownload}>
              Download Resume <FaDownload className="icon-download" />
            </button>
          </div>
        </div>
        <div className="about-right">
          <h3 className="about-right-h3">Languages I Speak</h3>
          <ul className="language-list">
            <li className="language">English</li>
            <li className="language">Tamil</li>
            <li className="language">Hindi</li>
            <li className="language">Currently pursuing Japanese - JLPT N5</li>
          </ul>
        </div>
      </div>
      {/* Marquee */}
      <div className="auto-scroll">
        <h3 className="tech-h3">Tech Stacks</h3>
        <Marquee>
          <div className="tech-stacks">
            <img src={TechImg1} alt="tech image" className="tech" />
            <img src={TechImg2} alt="tech image" className="tech" />
            <img src={TechImg3} alt="tech image" className="tech" />
            <img src={TechImg4} alt="tech image" className="tech" />
            <img src={TechImg5} alt="tech image" className="tech" />
            <img src={TechImg6} alt="tech image" className="tech" />
            <img src={TechImg7} alt="tech image" className="tech" />
            <img src={TechImg8} alt="tech image" className="tech" />
            <img src={TechImg9} alt="tech image" className="tech" />
            <img src={TechImg10} alt="tech image" className="tech" />
          </div>
        </Marquee>
      </div>
      {/* Experience */}
      <div className="experience">
        <h3 className="timeline-h3">Timeline</h3>
        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="title">Web Developer</div>
            <div className="company">Codsoft</div>
            <div className="period">Jul-2024 - Present</div>
          </div>
          <div className="timeline">
            <div className="title">Web Developer</div>
            <div className="company">Oasis Infobyte</div>
            <div className="period">Jun-2024 - Jul-2024</div>
          </div>
          <div className="timeline">
            <div className="title">Frontend Developer</div>
            <div className="company">Synexoo</div>
            <div className="period">May-2024 - Jun-2024</div>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="education">
        <h3 className="education-h3">Education</h3>
        <div className="education-wrapper">
          {/* Skill Safari */}
          <div className="education-timeline">
            <div className="education-title">
              Full Stack Web Development - MERN
            </div>
            <div className="education-company">Skill Safari</div>
            <div className="education-period">Feb, 2023 - Mar, 2024</div>
          </div>
          {/* College */}
          <div className="education-timeline">
            <div className="education-title">B.A. Programme</div>
            <div className="education-company">University of Delhi</div>
            <div className="education-period">Jul, 2020 - Dec, 2023</div>
          </div>
          {/* School */}
          <div className="education-timeline">
            <div className="education-title">Higher Secondary</div>
            <div className="education-company">DTEA Sr. Sec. School</div>
            <div className="education-period">2019 - 2020</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
