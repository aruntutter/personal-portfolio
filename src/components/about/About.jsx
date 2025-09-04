import "./About.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
];

const experiences = [
  {
    title: "Freelance & Personal Projects",
    company: "Self-Employed",
    jobType: "(Freelance - Remote)",
    period: "May 2025 - Present",
    details: [
      "Designed and developed responsive websites and landing pages using HTML, CSS, JavaScript, and React.",
      "Built and deployed projects on GitHub Pages and Netlify with version control via GitHub.",
      "Collaborated with friends and small businesses to create tailored digital solutions.",
      "Built MVPs (Minimum Viable Products) to validate ideas and deliver quick, functional prototypes.",
    ],
  },
  {
    title: "Operations Coordinator",
    company: "Spinny",
    jobType: "(Full Time - Hybrid)",
    period: "Aug 2024 - Apr 2025",
    details: [
      "Renew motor insurance for Spinny's existing customers in the South region, particularly Tamil Nadu.",
      "Generate car insurance renewal and break-in quotes from ICICI Lombard, Royal Sundaram, HDFC, Zurich, etc.",
      "Work with internal teams to optimize renewals and enhance customer experience.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Synexoo",
    jobType: "(Internship - Remote)",
    period: "May 2024 - Jun 2024",
    details: [
      "Built React components and dynamic functionality.",
      "Optimized website performance for faster loading.",
      "Implemented responsive designs for mobile and desktop views.",
    ],
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "Japanese / JLPT N5", level: "Beginner" },
];

const About = () => {
  return (
    <section className="about">
      <h2 className="about-h2">ABOUT</h2>
      <div className="about-description">
        <p className="about-p">
          Fluent in multiple languages and grounded in humanities, I bring
          creative thinking and analytical skills to my development work,
          turning complex problems into elegant, user-friendly solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="skills">
        <h3 className="skills-h3">Tech Stacks</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="experience">
        <h3 className="timeline-h3">Experience Timeline</h3>
        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline">
              <div className="title">{exp.title}</div>
              <div className="company">
                {exp.company} <span className="job-type">{exp.jobType}</span>
              </div>
              <div className="period">{exp.period}</div>
              <ul className="timeline-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="languages">
        <h3 className="language-h3">Languages I Speak</h3>
        <ul className="language-list">
          {languages.map((lang, index) => (
            <li key={index} className="language" data-level={lang.level}>
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
