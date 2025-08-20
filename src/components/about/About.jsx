import "./About.css";

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
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">JavaScript</li>
          <li className="skill">React.js</li>
          <li className="skill">Node.js</li>
          <li className="skill">Express.js</li>
          <li className="skill">MongoDB</li>
          <li className="skill">Git & GitHub</li>
        </ul>
      </div>

      {/* Experience / Timeline */}
      <div className="experience">
        <h3 className="timeline-h3">Experience Timeline</h3>
        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="title">Operations Coordinator</div>
            <div className="company">
              Spinny <span className="job-type">(Full Time - Hybrid)</span>
            </div>
            <div className="period">Aug 2024 - Apr 2025</div>
            <ul className="timeline-details">
              <li>
                Renew motor insurance for Spinny's existing customers in the
                South region, particularly Tamil Nadu.
              </li>
              <li>
                Generate car insurance renewal and break-in quotes from ICICI
                Lombard, Royal Sundaram, HDFC, Zurich, etc.
              </li>
              <li>
                Work with internal teams to optimize renewals and enhance
                customer experience.
              </li>
            </ul>
          </div>

          <div className="timeline">
            <div className="title">Web Developer - Intern</div>
            <div className="company">
              Oasis Infobyte{" "}
              <span className="job-type">(Internship - Remote)</span>
            </div>
            <div className="period">Jun 2024 - Jul 2024</div>
            <ul className="timeline-details">
              <li>
                Developed responsive web pages using HTML, CSS, and JavaScript.
              </li>
              <li>Deployed projects on GitHub Page.</li>
            </ul>
          </div>

          <div className="timeline">
            <div className="title">Frontend Developer</div>
            <div className="company">
              Synexoo <span className="job-type">(Internship - Remote)</span>
            </div>
            <div className="period">May 2024 - Jun 2024</div>
            <ul className="timeline-details">
              <li>Built React components and dynamic functionality.</li>
              <li>Optimized website performance for faster loading.</li>
              <li>
                Implemented responsive designs for mobile and desktop views.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="languages">
        <h3 className="language-h3">Languages I Speak</h3>
        <ul className="language-list">
          <li className="language">English</li>
          <li className="language">Tamil</li>
          <li className="language">Hindi</li>
          <li className="language">Japanese / JLPT N5</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
