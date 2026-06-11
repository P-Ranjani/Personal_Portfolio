import { FiGithub } from 'react-icons/fi';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import ScrollReveal from '../../common/ScrollReveal/ScrollReveal';
import styles from './Projects.module.css';

export default function Projects({ data }) {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading
          title="Projects"
          subtitle="A selection of my recent work"
        />

        <div className={styles.grid}>
          {data.projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                  <div className={styles.overlay}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayLink}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub size={22} />
                    </a>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <FiGithub size={16} /> Code
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
