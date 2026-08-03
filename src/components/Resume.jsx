import { Link } from "react-router-dom";
import { experience, myeducation, projects } from "./data";
import "../css/resume.css";

export default function Resume() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="resume-page">
      <div className="resume-header">
        <p className="resume-tag">Portfolio Resume</p>
        <h1>Pradeep Kumar</h1>
        <p className="resume-subtitle">
          Web Developer • Software Engineer • IIT Kanpur Graduate
        </p>
        <div className="resume-actions">
          <a href="https://drive.google.com/file/d/1J9zVpu8PvgFsSmLaQ211JrCU-R2sMq0h/view?usp=drive_link" target="_blank" rel="noreferrer">
            Open Resume PDF
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1J9zVpu8PvgFsSmLaQ211JrCU-R2sMq0h" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a href="mailto:pradeepkumariitk22@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/pradeepkumar-es/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/pradeepkumar-es" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link to="/">Back to Home</Link>
        </div>
      </div>

      <section className="resume-section">
        <h2>Profile</h2>
        <p>
          Recent graduate from IIT Kanpur with a strong interest in web and software
          development. I enjoy building responsive interfaces, scalable front-end systems,
          and full-stack experiences that combine good design with clean engineering.
        </p>
      </section>

      <section className="resume-section">
        <h2>Core Skills</h2>
        <div className="resume-skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>ReactJS</span>
          <span>NextJS</span>
          <span>NodeJS</span>
          <span>ExpressJS</span>
          <span>MongoDB</span>
          <span>Firebase</span>
          <span>Tailwind CSS</span>
          <span>Google Cloud</span>
        </div>
      </section>

      <section className="resume-section">
        <h2>Work Experience</h2>
        {experience.map((item, index) => (
          <div className="resume-item" key={index}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </div>
            <span>{item.period}</span>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        {myeducation.map((item, index) => (
          <div className="resume-item" key={index}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </div>
            <span>{item.period}</span>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Selected Projects</h2>
        {featuredProjects.map((project, index) => (
          <div className="resume-project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.tech}</p>
            <p>{project.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
