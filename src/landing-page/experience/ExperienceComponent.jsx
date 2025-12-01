import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import style from './ExperienceComponent.module.scss';
import { useRef, useState, useEffect } from 'react';
import { projects1, projects2, projects3 } from '../../constants';
import { Briefcase, Calendar, ChevronDown } from 'lucide-react';

const ExperienceComponent = () => {
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 968);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleProject = projectId => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef || { current: null },
    offset: ['start 0.8', 'start center'],
  });
  const y = useTransform(titleProgress, [0, 1], [-260, 0]);

  const experiences = [
    {
      company: 'Experion Technologies',
      role: 'Associate Software Engineer',
      period: '2021 - 2022',
      projects: projects1,
      color: '#00d4ff',
    },
    {
      company: 'Experion Technologies',
      role: 'Software Engineer',
      period: '2022 - 2024',
      projects: projects2,
      color: '#a855f7',
    },
    {
      company: 'Infosys Limited',
      role: 'Senior Associate Consultant',
      period: '2024 - Present',
      projects: projects3,
      color: '#ec4899',
    },
  ];

  return (
    <div ref={titleRef} className={style.myExperienceScreen} id="my-experience">
      <motion.h2 className={style.heading} style={{ y }}>
        My Experience
      </motion.h2>

      <div className={style.timeline}>
        {experiences.map((exp, expIndex) => (
          <motion.div
            key={expIndex}
            className={style.timelineItem}
            initial={{
              opacity: 0,
              x: isMobile ? -30 : expIndex % 2 === 0 ? '-40%' : '40%',
            }}
            whileInView={{
              opacity: 1,
              x: isMobile ? 0 : expIndex % 2 === 0 ? '46%' : '-46%',
            }}
            transition={{ duration: 0.6, delay: expIndex * 0.2 }}
          >
            {(isMobile || expIndex % 2 === 0) && (
              <div
                className={style.timelineDot}
                style={{ background: exp.color }}
              >
                <Briefcase size={24} />
              </div>
            )}

            <motion.div
              className={style.experienceCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={style.cardHeader}>
                <div>
                  <h3>{exp.role}</h3>
                  <h4 style={{ color: exp.color }}>{exp.company}</h4>
                </div>
                <div className={style.period}>
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className={style.projectsContainer}>
                {exp.projects.map((project, projIndex) => (
                  <motion.div
                    key={project.id}
                    className={style.projectCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: projIndex * 0.1 }}
                  >
                    <div
                      className={`${style.projectTitle} ${isMobile ? style.collapsible : ''}`}
                      onClick={() => isMobile && toggleProject(project.id)}
                    >
                      <span>{project.project}</span>
                      {isMobile && (
                        <ChevronDown
                          size={18}
                          className={`${style.chevron} ${expandedProjects[project.id] ? style.expanded : ''}`}
                        />
                      )}
                    </div>
                    {(!isMobile || expandedProjects[project.id]) && (
                      <AnimatePresence>
                        <motion.ul
                          className={style.responsibilities}
                          initial={isMobile ? { height: 0, opacity: 0 } : false}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.responsibilities.map((item, idx) => (
                            <motion.li
                              key={idx}
                              whileHover={{ x: isMobile ? 0 : 10 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {!isMobile && expIndex % 2 !== 0 && (
              <div
                className={style.timelineDot}
                style={{ background: exp.color }}
              >
                <Briefcase size={24} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
