import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import styles from './Hero.module.css';

const socialIcons = {
  linkedin: FiLinkedin,
  github: FiGithub,
  medium: SiMedium,
  email: FiMail,
};

export default function Hero({ personal }) {
  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className={styles.imageRing}>
            <img
              src={personal.profileImage}
              alt={`${personal.name} profile`}
              className={styles.profileImage}
              loading="eager"
              width={280}
              height={280}
            />
          </div>
        </motion.div>

        <div className={styles.textContent}>
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.h2
            className={styles.designation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {personal.designation}
          </motion.h2>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {personal.introduction}
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href={personal.resumeUrl} className="btn btn-primary" download>
              <FiDownload size={18} />
              Download Resume
            </a>
            <button className="btn btn-outline" onClick={handleContact}>
              <FiMail size={18} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className={styles.social}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {Object.entries(personal.social).map(([key, url]) => {
              const Icon = socialIcons[key];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={key}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
