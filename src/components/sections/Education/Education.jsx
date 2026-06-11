import { FiBookOpen } from 'react-icons/fi';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import ScrollReveal from '../../common/ScrollReveal/ScrollReveal';
import styles from './Education.module.css';

export default function Education({ data }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          title="Education"
          subtitle="My academic background"
        />

        <div className={styles.timeline}>
          {data.education.map((edu, index) => (
            <ScrollReveal key={edu.id} delay={index * 0.15}>
              <article className={styles.card}>
                <div className={styles.iconWrapper}>
                  <FiBookOpen className={styles.icon} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <p className={styles.institution}>{edu.institution}</p>
                  <div className={styles.meta}>
                    <span className={styles.duration}>{edu.duration}</span>
                    <span className={styles.grade}>{edu.grade}</span>
                  </div>
                  <p className={styles.description}>{edu.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
