import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import style from './SkillCarousal.module.scss';
import SkillCardComponent from '../skill-card/SkillCardComponent';

export const SkillCarousal = ({ skills, title, slideFrom, targetRef }) => {
  const [shouldTrackScroll, setShouldTrackScroll] = useState(false);

  // const targetRef = useRef(null);
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  // Update measurements on mount and resize
  useEffect(() => {
    const updateMeasurements = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth);
        setScreenWidth(window.innerWidth);
      }
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setShouldTrackScroll(true);
    }, 100);

    return () => {
      window.removeEventListener('resize', updateMeasurements);
      clearTimeout(timer);
    };
  }, [skills]); // Recalculate when skills change

  const { scrollYProgress } = useScroll(
    shouldTrackScroll
      ? {
          target: targetRef,
          offset: ['start end', '0.9 end'],
        }
      : { offset: ['start end', '0.9 end'] }
  );

  const { scrollYProgress: titleProgress } = useScroll(
    shouldTrackScroll
      ? {
          target: targetRef,
          offset: ['start end', '0.9 end'],
        }
      : { offset: ['start end', '0.9 end'] }
  );
  // Calculate the start and end positions based on screen and carousel width
  const startPosition =
    slideFrom === 'right' ? screenWidth - 100 : -carouselWidth + 100;
  const endPosition = (screenWidth - carouselWidth) / 2; // Centers the carousel

  const x = useTransform(scrollYProgress, [0, 1], [startPosition, endPosition]);

  // Title animation - moves in opposite direction of carousel
  const xTitle = useTransform(
    titleProgress,
    [0, 1],
    [startPosition - 400, endPosition + 50]
  );
  return (
    <>
      <section className={style.frontEndSkillsSection}>
        <motion.h2
          style={{ x: xTitle }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
          }}
        >
          {title}
        </motion.h2>

        <div className={style.frontEndSkillsDiv}>
          <motion.div
            style={{ x }}
            className={style.frontEndSkillSCarousel}
            ref={carouselRef}
          >
            {skills.map(card => {
              return <SkillCardComponent card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};
