import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import ScrollReveal from '../../common/ScrollReveal/ScrollReveal';
import styles from './Skills.module.css';

function SkillBar({ skill, inView }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className={styles.category} ref={ref}>
        <h3 className={styles.categoryName}>{category.name}</h3>
        <div className={styles.skillsList}>
          {category.skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Skills({ data }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />
        <div className={styles.grid}>
          {data.categories.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
