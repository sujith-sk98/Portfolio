import { useRef } from 'react';
import style from './AboutMe.module.scss';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownToLine, Briefcase, Code, Coffee } from 'lucide-react';

const AboutMeComponent = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['0.3 end', 'center center'],
  });

  const { scrollYProgress: forDescription } = useScroll({
    target: targetRef,
    offset: ['0.5 end', 'center center'],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], ['-50vh', '0vh']);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(forDescription, [0, 1], [500, 0]);
  const y = useTransform(forDescription, [0, 1], [500, 0]);

  const stats = [
    { icon: <Briefcase size={24} />, value: '4+', label: 'Years Experience' },
    { icon: <Code size={24} />, value: '6+', label: 'Major Projects' },
    { icon: <Coffee size={24} />, value: '∞', label: 'Cups of Coffee' },
  ];

  return (
    <div className={style.aboutMeScreen} ref={targetRef} id="about-me">
      <motion.div className={style.contentWrapper}>
        <motion.h2 style={{ y: yTitle }} className={style.title}>
          About Me
        </motion.h2>

        <div className={style.aboutMeSection}>
          <motion.div
            className={style.imageContainer}
            style={{ scale, opacity: scale }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 50,
              damping: 10,
            }}
          >
            <div className={style.imageBorder}>
              <img src={`/images/my-image.jpeg`} alt="Sujith S Kumar" />
            </div>
            <div className={style.floatingShape} />
          </motion.div>

          <div className={style.textContent}>
            <motion.div
              className={style.descriptionCard}
              style={{ x, scale, opacity: scale }}
              transition={{
                duration: 1.5,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
            >
              <p className={style.description}>
                I am a dedicated{' '}
                <span className={style.highlight}>software developer</span> with{' '}
                <span className={style.highlight}>4 years of experience</span>,
                specializing in front-end technologies like{' '}
                <span className={style.highlight}>React</span> and{' '}
                <span className={style.highlight}>Angular</span>. I also possess
                hands-on experience in back-end development with{' '}
                <span className={style.highlight}>Node.js</span>.
              </p>
              <p className={style.description}>
                My passion lies in crafting{' '}
                <span className={style.highlight}>intuitive</span> and{' '}
                <span className={style.highlight}>
                  high-performance applications
                </span>
                , and I am always eager to leverage my skills to contribute to
                dynamic teams and drive impactful projects forward.
              </p>
            </motion.div>

            <motion.div className={style.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={style.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { delay: 0, duration: 0.1 },
                  }}
                  transition={{
                    duration: 1.5 + index * 0.3,
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 50,
                    damping: 10,
                  }}
                >
                  <div className={style.statIcon}>{stat.icon}</div>
                  <div className={style.statValue}>{stat.value}</div>
                  <div className={style.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className={style.buttons}>
              <motion.button
                className={style.primaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact-me">Contact Me</a>
              </motion.button>

              <motion.button
                className={style.secondaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowDownToLine size={'1.2rem'} />
                <a href="/Sujith_Resume.pdf" download="Sujith_resume.pdf">
                  Download Resume
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeComponent;
