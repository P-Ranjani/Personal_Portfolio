import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      className={styles.heading}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.title}>
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.underline} aria-hidden="true" />
    </motion.div>
  );
}
