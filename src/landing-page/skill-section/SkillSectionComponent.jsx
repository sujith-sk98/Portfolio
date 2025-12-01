import { useRef } from 'react';
import style from './SkillSectionComponent.module.scss';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  backendSkillsCards,
  frontEndSkillCards,
  otherSkills,
} from '../../constants';
import SkillCardComponent from '../skill-card/SkillCardComponent';

const SkillSectionComponent = () => {
  const skillsRef = useRef(null);
  const { scrollYProgress: titleProgress } = useScroll({
    target: skillsRef || { current: null },
    offset: ['start end', 'start 0.3'],
  });
  const skillsY = useTransform(titleProgress, [0, 1], [-200, 0]);

  const skillCategories = [
    { title: 'Front End', skills: frontEndSkillCards, color: '#00d4ff' },
    { title: 'Back End', skills: backendSkillsCards, color: '#a855f7' },
    { title: 'Other Skills', skills: otherSkills, color: '#ec4899' },
  ];

  return (
    <div className={style.mySkillsScreen} id="my-skills" ref={skillsRef}>
      <motion.h2 style={{ y: skillsY }}>My Skills</motion.h2>

      <div className={style.skillsContainer}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className={style.skillCategory}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
          >
            <div className={style.categoryHeader}>
              <h3 style={{ color: category.color }}>{category.title}</h3>
              <div
                className={style.headerLine}
                style={{ background: category.color }}
              />
            </div>

            <div className={style.skillsGrid}>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SkillCardComponent
                    card={skill}
                    accentColor={category.color}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSectionComponent;
