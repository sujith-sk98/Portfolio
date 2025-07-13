import { motion, useScroll, useTransform } from 'framer-motion';
import style from './LandingSectionComponent.module.scss';
import { useEffect, useRef, useState } from 'react';
import { navItems, textVariants } from '../../constants';

const LandingSectionComponent = () => {
    const [shouldTrackScroll, setShouldTrackScroll] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
    const { scrollYProgress } = useScroll(
        shouldTrackScroll ? {
            target: targetRef,
            offset: ["end end", "end start"]
        } : { offset: ["end end", "end start"] }
    );
    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);
    const minusY = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className={style.landingScreen} ref={targetRef}>
            <nav className={isScrolled ? style.scrolledNav : ''}>
                {navItems.map((item, index) => (
                    <div
                        key={item.title}
                        className={style.navItem}
                    >
                        <a href={item.href}>
                            <span>{item.title}</span>
                        </a>
                    </div>
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