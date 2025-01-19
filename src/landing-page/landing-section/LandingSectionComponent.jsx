import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import style from './LandingSectionComponent.module.scss';
import { useEffect, useRef, useState } from 'react';
import { navItems, textVariants } from '../../constants';

const LandingSectionComponent = () => {
    const [shouldTrackScroll, setShouldTrackScroll] = useState(false);

    // Update measurements on mount and resize
    useEffect(() => {
        // Small delay to ensure DOM is fully rendered
        const timer = setTimeout(() => {
            setShouldTrackScroll(true);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll(
        shouldTrackScroll ? {
            target: targetRef,
            offset: ["end end", "end start"]
        } : { offset: ["end end", "end start"] }
    );
    const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const minusY = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    useMotionValueEvent((scrollYProgress), 'change', (latest) => { console.log("y", latest, y) })

    return (
        <div className={style.landingScreen} ref={targetRef}>
            <nav>
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className={style.navItem}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                    >
                        <a href={item.href}>
                            <span>{item.title}</span>
                        </a>
                    </motion.div>
                ))}
            </nav>

            <motion.div
                className={style.landingContent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className={style.firstLine}>
                    <motion.h1
                        style={{ y: minusY, opacity }}

                    >
                        {"Hi I am Sujith SK".split(" ").map((char, index) => (
                            <motion.span
                                key={char + "-" + index}
                                custom={index / 10}
                                initial="hidden"
                                animate="visible"
                                variants={textVariants}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                <div className={style.secondLine}>
                    <motion.h1
                        style={{ y: y }}
                    >
                        {"Welcome To My Page".split(" ").map((char, index) => (
                            <motion.span
                                key={char + "-" + index}
                                custom={1 + (index / 10)}
                                initial="hidden"
                                animate="visible"
                                variants={textVariants}

                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
            </motion.div>
        </div>
    );
};

export default LandingSectionComponent;