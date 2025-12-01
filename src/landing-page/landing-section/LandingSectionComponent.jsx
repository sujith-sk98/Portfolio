import { motion, useScroll, useTransform } from 'framer-motion';
import style from './LandingSectionComponent.module.scss';
import { useEffect, useRef, useState } from 'react';
import { navItems, textVariants } from '../../constants';
import { Code2, Sparkles } from 'lucide-react';

const LandingSectionComponent = () => {
  const [shouldTrackScroll, setShouldTrackScroll] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update measurements on mount and resize
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setShouldTrackScroll(true);
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);
  const minusY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className={style.landingScreen} ref={targetRef}>
      {/* Animated background particles */}
      <div className={style.particleContainer}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={style.particle}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Modern Navigation */}
      <nav className={`${style.nav} ${isScrolled ? style.scrolledNav : ''}`}>
        <div className={style.navLogo}>
          <Code2 size={24} />
          <span>SK</span>
        </div>
        <div className={style.navItems}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={style.navItem}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
            >
              <a href={item.href}>
                <span>{item.title}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </nav>

      <motion.div
        className={style.landingContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <motion.div
          className={style.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles size={20} />
          <span>Full Stack Developer</span>
        </motion.div>

        <div className={style.mainTitle}>
          <motion.h1 style={{ y: minusY, opacity }}>
            <span className={style.greeting}>Hi, I'm</span>
            <span className={style.name}>Sujith S Kumar</span>
          </motion.h1>
        </div>

        <motion.div
          className={style.subtitle}
          style={{ y: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>Crafting exceptional digital experiences</p>
          <p className={style.subtext}>with modern web technologies</p>
        </motion.div>

        <motion.div
          className={style.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#contact-me" className={style.primaryCta}>
            Let's Connect
          </a>
          <a href="#my-experience" className={style.secondaryCta}>
            View Work
          </a>
        </motion.div>

        <motion.div
          className={style.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { repeat: Infinity, duration: 1.5 },
          }}
        >
          <div className={style.mouse}>
            <div className={style.wheel}></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingSectionComponent;
