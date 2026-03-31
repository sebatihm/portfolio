import { proyects } from '../../utils/Proyects';
import './ProyectCard.css';

export const ProyectCard = () => {
  return (
    <section id='proyects' className="proyect-section">
      <h2>Projects</h2>
      <p>Here are some of the projects I’ve worked on</p>

      <div className="proyect-grid">
        {proyects.map((proyect, index) => (
          <div key={index} className="proyect-card">

            <img
              src={proyect.image_url}
              alt={proyect.title}
              className="proyect-image"
            />

            <div className="proyect-content">
              <h3>{proyect.title}</h3>
              <p>{proyect.text}</p>

              <div className="proyect-technologies">
                <img src={proyect.technologies.main_language} alt="Main Language" />
                {proyect.technologies.tech.map((tech, i) => (
                  <img key={i} src={tech.url} alt={tech.alt} />
                ))}
              </div>

              <div className="proyect-links">
                { !proyect.is_private && proyect.links.github && (
                  <a href={proyect.links.github} target='_blank'>
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