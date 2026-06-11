import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.screen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.content}>
        <motion.div
          className={styles.logo}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="gradient-text">RP</span>
        </motion.div>
        <motion.div
          className={styles.loader}
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}
