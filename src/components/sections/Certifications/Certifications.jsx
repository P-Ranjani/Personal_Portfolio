import { FiExternalLink, FiAward } from 'react-icons/fi';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import ScrollReveal from '../../common/ScrollReveal/ScrollReveal';
import styles from './Certifications.module.css';

export default function Certifications({ data }) {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <SectionHeading
          title="Certificates & Achievements"
          subtitle="Professional credentials and accomplishments"
        />

        <div className={styles.grid}>
          {data.certifications.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 0.1}>
              <article className={styles.card}>
                <div className={styles.badge}>
                  <img
                    src={cert.badge}
                    alt=""
                    className={styles.badgeImage}
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                  <FiAward className={styles.badgeIcon} aria-hidden="true" />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{cert.name}</h3>
                  <p className={styles.org}>{cert.organization}</p>
                  <p className={styles.date}>{cert.date}</p>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewBtn}
                  >
                    <FiExternalLink size={16} />
                    View Certificate
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
