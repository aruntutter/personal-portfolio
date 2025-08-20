import "./Portfolio.css";
import portfolioImg1 from "../../assets/portfolio-img1.png";
import portfolioImg2 from "../../assets/portfolio-img2.png";
import portfolioImg3 from "../../assets/portfolio-img3.png";
import portfolioImg4 from "../../assets/portfolio-img4.png";

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
    title: "Japanese Quiz Application",
    imgSrc: portfolioImg4,
    demoLink: "https://japanese-quiz-application.netlify.app/",
    sourceLink: "https://github.com/aruntutter/quiz",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio-h2">PORTFOLIO</h2>
      <p className="portfolio-p">
        These projects illustrate my approach to solving real-world challenges
        through web development. By combining creativity, technical expertise,
        and attention to detail, I create applications that deliver measurable
        value.
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
