import React from 'react';
import styles from './SkillCardComponent.module.scss';
import { motion } from 'motion/react';

const SkillCardComponent = ({ card, accentColor }) => {
  return (
    <motion.div
      className={styles.skillCardDiv}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={styles.cardGlow} style={{ background: accentColor }} />
      <div className={styles.skillCardImage}>
        <img src={card.url} alt={card.title} />
      </div>
      <div className={styles.skillCardTitle}>
        <span>{card.title}</span>
      </div>
    </motion.div>
  );
};

export default SkillCardComponent;
