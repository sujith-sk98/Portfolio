import { getTextRevealVariantDown, getTextRevealVariantUp } from '../../constants';
import style from './LandingSectionComponent.module.scss'
import { motion } from 'motion/react';
const LandingSectionComponent = () => {
    
    return (
        <div className={style.landingScreen}>
            <nav className={style.nav}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className={style.navItem}
                >
                    <a href="#about-me"><span>About Me</span></a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className={style.navItem}
                >
                    <a href="#skills"><span>Skills</span></a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className={style.navItem}
                >
                    <a href="#experience"><span>Experience</span></a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 1 }}
                    className={style.navItem}
                >
                    <a href="#contact-me"><span>Contact Me</span></a>
                </motion.div>
            </nav>
            <div className={style.landingContent}>
                <div className={style.firstLine}>
                    <motion.h1 animate="animate" variants={getTextRevealVariantUp()}>
                        Hi I am
                    </motion.h1>
                    <motion.h1 animate="animate" variants={getTextRevealVariantUp()}>
                        Welcome
                    </motion.h1>
                </div>
                <div className={style.secondLine}>
                    <motion.h1 animate="animate" variants={getTextRevealVariantUp()}>
                        Sujith S Kumar
                    </motion.h1>
                    <motion.h1 animate="animate" variants={getTextRevealVariantUp()}>
                        To my page
                    </motion.h1>
                </div>

            </div>
        </div>
    )
}

export default LandingSectionComponent;