import "./Portfolio.css";
import portfolioImg1 from "../../assets/portfolio-img1.png";
import portfolioImg2 from "../../assets/portfolio-img2.png";

const projectData = [
  {
    title: "Japanese Quiz Application",
    imgSrc: portfolioImg1,
    demoLink: "https://japanese-quiz-application.netlify.app/",
    sourceLink: "https://github.com/aruntutter/quiz",
    description:
      "An MVP web application built to help learners revise and practice Japanese vocabulary for the JLPT exam (levels N5, N4, N3). The app is focused on simplicity, accessibility, and daily practice — starting with N4 chapters 26–50 and expanding further.",
    features: [
      "Covers JLPT Vocabulary (N5, N4, N3)",
      "Interactive quiz format with instant feedback",
      "Lightweight design — no frameworks, just clean Vanilla JavaScript",
      "Optimized for daily quick revision",
      "Completely free and open-source",
    ],
    techStack: [
      "HTML5 + CSS3",
      "Vanilla JavaScript (no frameworks)",
      "Netlify (deployment & hosting)",
      "GitHub (source control & collaboration)",
    ],
    futurePlans: [
      "Add support for more JLPT chapters and levels (N2, N1)",
      "Enhance UI/UX with animations and accessibility improvements",
      "Introduce progress tracking & scoring history",
      "Migrate to React or Vue for scalability",
    ],
  },
  {
    title: "Ultra Travels (Landing Page)",
    imgSrc: portfolioImg2,
    demoLink: "https://ultratravels.netlify.app/",
    sourceLink: null,
    description:
      "A polished landing page for ‘Ultra Travels’—a travel booking/ride-hailing service—designed to captivate visitors with compelling visuals, persuasive copy, and a clear call-to-action. Built for one of my friend's business.",
    features: ["Form to contact", "Form for booking", "Feedback form"],
    techStack: [
      "HTML5 + CSS3",
      "JavaScript(ES6)",
      "Vite + React",
      "Framer Motion",
    ],
    futurePlans: ["Adding live domain name"],
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio-h2">PORTFOLIO</h2>
      <p className="portfolio-p">
        Featured projects that showcase real-world value through thoughtful
        design and development.
      </p>

      <div className="portfolio-wrapper">
        {projectData.map((project, idx) => (
          <div className="portfolio-card" key={idx}>
            <img
              src={project.imgSrc}
              alt={project.title}
              className="portfolio-img"
            />
            <div className="portfolio-content">
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>

              <h4>✨ Features</h4>
              <ul className="portfolio-list">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h4>🛠 Tech Stack</h4>
              <ul className="portfolio-list">
                {project.techStack.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <h4>🚀 Future Plans</h4>
              <ul className="portfolio-list">
                {project.futurePlans.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="portfolio-links">
                <a
                  href={project.demoLink}
                  className="portfolio-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                {project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    className="portfolio-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
