import style from './LandingSectionComponent.module.scss'
import { motion } from 'motion/react';
const LandingSectionComponent = () => {
    return (
        <div className={style.landingScreen}>

            <motion.div className={`${style.section} ${style.section1}`}
                initial={{ x: 600 }}

                whileInView={{
                    x: 0,
                    y: 0,
                    skew: (0, -5),
                    scale: 1.1
                }}

                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                }}
            >
                <h2><a href="#about-me">About Me</a></h2>
            </motion.div>
            <motion.div className={`${style.section} ${style.section2}`}>
                <h2><a href="#my-skills">My Skills</a></h2>
            </motion.div>
            <motion.div className={`${style.section} ${style.section3}`}>
                <h2><a href="#my-experience">My Experience</a></h2>
            </motion.div>
            <motion.div className={`${style.section} ${style.section4}`}
                initial={{ x: -1000 }}

                whileInView={{
                    x: 0,
                    y: 0,
                    skew: (0, -5),
                    scale: 1.1
                }}

                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                }}
            >
                <h2><a href="#contact-me">Contact Me</a></h2>
            </motion.div>
        </div>
    )
}

export default LandingSectionComponent;