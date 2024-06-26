import React from "react";
import "./Portfolio.css";
import portfolioImg1 from "../../assets/red.svg";
import portfolioImg2 from "../../assets/blue.svg";
import portfolioImg3 from "../../assets/green.svg";
import portfolioImg4 from "../../assets/purple.svg";
import portfolioImg5 from "../../assets/yellow.svg";
import portfolioImg6 from "../../assets/teal.svg";

const projectData = [
  {
    title: "E-Com Website",
    imgSrc: portfolioImg1,
    demoLink: "https://ez-buy.netlify.app/",
    sourceLink: "https://github.com/aruntutter/react-ecommerce-crud-app",
  },
  {
    title: "Blog Website",
    imgSrc: portfolioImg2,
    demoLink: "https://blogops.netlify.app/",
    sourceLink: "https://github.com/aruntutter/react-firebase-blog-app",
  },
  {
    title: "Movie Search",
    imgSrc: portfolioImg3,
    demoLink: "https://movie-search-quest.netlify.app/",
    sourceLink:
      "https://github.com/aruntutter/react-movie-search-with-api-integration",
  },
  {
    title: "JS CRUD Operation",
    imgSrc: portfolioImg4,
    demoLink: "https://eclectic-mochi-5fa3fd.netlify.app/",
    sourceLink:
      "https://github.com/aruntutter/js-crud-operations-with-localstorage",
  },
  {
    title: "Animated Home Page Replica",
    imgSrc: portfolioImg5,
    demoLink: "https://motion-art-effect-clone.netlify.app/",
    sourceLink:
      "https://github.com/aruntutter/motion-art-effect-home-page-clone",
  },
  {
    title: "Expense Tracker",
    imgSrc: portfolioImg6,
    demoLink: "https://nimble-taffy-71512b.netlify.app/",
    sourceLink: "https://github.com/aruntutter/expense-tracker",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="h2">PORTFOLIO</h2>
      <p className="p">
        Welcome to my portfolio! Explore my frontend projects showcasing
        expertise in HTML, CSS, JavaScript, React, and Firebase. See how I
        create dynamic, user-friendly, and responsive web applications.
      </p>

      <div className="list-of-projects">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.imgSrc} alt={project.title} />
            <div className="project-overlay">
              <a href={project.demoLink} className="project-link">
                Live Demo
              </a>
              <a href={project.sourceLink} className="project-link">
                Source Code
              </a>
            </div>
            <p className="p project-name">{project.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
