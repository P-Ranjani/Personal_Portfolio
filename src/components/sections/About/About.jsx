import { FiTarget, FiBookOpen, FiAward } from 'react-icons/fi';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import ScrollReveal from '../../common/ScrollReveal/ScrollReveal';
import skillsData from '../../../data/skills.json';
import educationData from '../../../data/education.json';
import styles from './About.module.css';

export default function About({ personal }) {
  const topSkills = skillsData.categories
    .flatMap((cat) => cat.skills)
    .slice(0, 8);

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className={styles.grid}>
          <ScrollReveal>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FiBookOpen className={styles.icon} />
                <h3>Professional Summary</h3>
              </div>
              <p className={styles.text}>{personal.summary}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FiTarget className={styles.icon} />
                <h3>Career Objective</h3>
              </div>
              <p className={styles.text}>{personal.careerObjective}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className={`${styles.card} ${styles.educationCard}`}>
              <div className={styles.cardHeader}>
                <FiAward className={styles.icon} />
                <h3>Education</h3>
              </div>
              <ul className={styles.educationList}>
                {educationData.education.map((edu) => (
                  <li key={edu.id} className={styles.educationItem}>
                    <strong>{edu.degree}</strong>
                    <span>{edu.institution}</span>
                    <span className={styles.eduMeta}>
                      {edu.duration} · {edu.grade}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className={styles.skillsOverview}>
            <h3 className={styles.skillsTitle}>Core Skills</h3>
            <div className={styles.skillTags}>
              {topSkills.map((skill) => (
                <span key={skill.name} className={styles.skillTag}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
