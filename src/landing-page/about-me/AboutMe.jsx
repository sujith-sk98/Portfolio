import { useRef } from 'react';
import style from './AboutMe.module.scss';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownToLine } from 'lucide-react';

const AboutMeComponent = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["0.3 end", "center center"]
    });

    const { scrollYProgress: forDescription } = useScroll({
        target: targetRef,
        offset: ["0.5 end", "center center"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 1], ["-50vh", "0vh"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const x = useTransform(forDescription, [0, 1], [500, 0]);
    const button1x = useTransform(forDescription, [0, 1], [200, 0]);
    const button2x = useTransform(forDescription, [0, 1], [-200, 0]);

    return (
        <div className={style.aboutMeScreen} ref={targetRef} id='about-me'>
            <motion.div className={style.contentWrapper}>
                <motion.h2 
                    style={{ y: yTitle }}
                    className={style.title}
                >
                    About Me
                </motion.h2>
                
                <div className={style.aboutMeSection}>
                    <motion.div 
                        className={style.myImage}
                        style={{ scale, opacity: scale }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 50,
                            damping: 10
                        }}
                    >
                        <img 
                            src={`${process.env.PUBLIC_URL}/images/my-image.jpeg`} 
                            alt="Sujith S Kumar"
                        />
                    </motion.div>

                    <div className={style.textContent}>
                        <motion.p 
                            className={style.description}
                            style={{ x, scale, opacity: scale }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 50,
                                damping: 10,
                                delay: 0.8
                            }}
                        >
                            "I am a software developer skilled in front-end technologies like Angular and React, with hands-on experience in back-end development using Node.js. I seek opportunities to contribute to a dynamic team and drive impactful projects."
                        </motion.p>
                        
                        <div className={style.buttons}>
                            <motion.button 
                                style={{x: button1x, scale}}
                                className={style.primaryBtn}
                            >
                                <a href="#contact-me">Contact Me</a>
                            </motion.button>
                            
                            <motion.button 
                                style={{x: button2x, scale}}
                                className={style.secondaryBtn}
                            >
                                <ArrowDownToLine size={'1.2rem'} />
                                <a href='/Sujith_Resume.pdf' download="Sujith_resume.pdf">
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