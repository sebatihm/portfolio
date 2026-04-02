import { projects } from '../../utils/Projects';
import './ProjectCard.css';

export const ProjectCard = () => {
  return (
    <section id='projects' className="project-section">
      <h2>Projects</h2>
      <p>Here are some of the projects I’ve worked on</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <img
              src={project.image_url}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.text}</p>

              <div className="project-technologies">
                <img src={project.technologies.main_language} alt="Main Language" />
                {project.technologies.tech.map((tech, i) => (
                  <img key={i} src={tech.url} alt={tech.alt} />
                ))}
              </div>

              <div className="project-links">
                { !project.is_private && project.links.github && (
                  <a href={project.links.github} target='_blank'>
                    GitHub
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