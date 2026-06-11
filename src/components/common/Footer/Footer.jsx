import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import styles from './Footer.module.css';

const socialIcons = {
  linkedin: FiLinkedin,
  github: FiGithub,
  medium: SiMedium,
  email: FiMail,
};

export default function Footer({ personal, navLinks }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.brand}>
          <h3 className={styles.name}>
            <span className="gradient-text">{personal.name}</span>
          </h3>
          <p className={styles.tagline}>{personal.tagline}</p>
        </div>

        <div className={styles.links}>
          <h4 className={styles.linksTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.social}>
          <h4 className={styles.linksTitle}>Connect</h4>
          <div className={styles.socialIcons}>
            {Object.entries(personal.social).map(([key, url]) => {
              const Icon = socialIcons[key];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className={styles.socialLink}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {currentYear} {personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
