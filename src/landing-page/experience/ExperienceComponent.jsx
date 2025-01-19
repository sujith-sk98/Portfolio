import { delay, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import style from "./ExperienceComponent.module.scss"
import { useRef } from "react";
import { floatingVariants, jiggleVariants, projects1, projects2, projects3 } from "../../constants";
const ExperienceComponent = () => {

    const experience1Ref = useRef(null);
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: experience1Ref || { current: null },
        offset: ["0.3 end", "start start"]
    });
    const rotate1 = useTransform(scrollYProgress1, [0, 0.8], [90, 0])
    const scale1 = useTransform(scrollYProgress1, [0, 0.8], [0, 1])
    const title1y = useTransform(scrollYProgress1, [0,0.8], [-250, 0])


    const experience2Ref = useRef(null);
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: experience2Ref || { current: null },
        offset: ["0.3 end", "start start"]
    });
    const rotate2 = useTransform(scrollYProgress2, [0, 0.8], [-90, 0])
    const scale2 = useTransform(scrollYProgress2, [0, 0.8], [0, 1])
    const title2y = useTransform(scrollYProgress2, [0,0.8], [-120, 0])

    const experience3Ref = useRef(null);
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: experience3Ref || { current: null },
        offset: ["0.3 end", "start start"]
    });
    const rotate3 = useTransform(scrollYProgress3, [0, 0.8], [90, 0])
    const scale3 = useTransform(scrollYProgress3, [0, 0.8], [0, 1])
    const title3y = useTransform(scrollYProgress3, [0, 0.8], [-120, 0])

    const titleRef = useRef(null);
    const { scrollYProgress: titleProgress } = useScroll({
        target: titleRef || { current: null },
        offset: ["0.3 end", "start center"]
    });
    const y = useTransform(titleProgress, [0, 1], [0, -150]);

    return (
    <div ref={titleRef} className={style.myExperienceScreen} id='my-experience'>
        <motion.h2 className={style.heading} style={{ y }}>My Experience</motion.h2>
        <div className={style.experienceDiv} ref={experience1Ref}>
            <motion.div className={style.experienceCardDiv} animate='animate' variants={floatingVariants} >
                <motion.div className={style.experienceCard} style={{ rotate: rotate1, scale: scale1 }}>
                    <motion.h3>Associate Software Engineer</motion.h3>
                    {
                        projects1.map((project) => {
                            return (
                                <motion.ul id={project.id}>
                                    <motion.h5>{project.project}</motion.h5>
                                    {
                                        project.responsibilities.map((item) => {
                                            return <motion.li
                                                whileHover={{ x: 20 }}
                                            >{item}</motion.li>
                                        })
                                    }
                                </motion.ul>
                            )
                        })
                    }

                </motion.div>
            </motion.div>
            <div className={`${style.experienceTitle} ${style.belowTitle}`}>
                <motion.h1 style={{ y: title1y }}>Experion Technologies</motion.h1>
                <motion.h2 style={{ scale: scale1, opacity: scale1 }}>2021 - 2022</motion.h2>
            </div>
        </div>

        <div className={style.experienceDiv} ref={experience2Ref}>
            <div className={style.experienceTitle}>
                <motion.h1 style={{ y: title2y }}>Experion Technologies</motion.h1>
                <motion.h2 style={{ scale: scale2, opacity: scale2 }}>2022 - 2023</motion.h2>
            </div>
            <motion.div className={style.experienceCardDiv} animate='animate' variants={floatingVariants} >
                <motion.div className={style.experienceCard} style={{ rotate: rotate2, scale: scale2 }}>
                    <motion.h3>Software Engineer</motion.h3>
                    {
                        projects2.map((project) => {
                            return (
                                <motion.ul id={project.id}>
                                    <motion.h5>{project.project}</motion.h5>
                                    {
                                        project.responsibilities.map((item) => {
                                            return <motion.li
                                                whileHover={{ x: 20 }}
                                            >{item}</motion.li>
                                        })
                                    }
                                </motion.ul>
                            )
                        })
                    }

                </motion.div>
            </motion.div>
        </div>

        <div className={style.experienceDiv} ref={experience3Ref}>
            <motion.div className={style.experienceCardDiv} animate='animate' variants={floatingVariants}>
                <motion.div className={style.experienceCard} style={{ rotate: rotate3, scale: scale3 }}>
                    <motion.h3>Senior Associate Consultant</motion.h3>
                    {
                        projects3.map((project) => {
                            return (
                                <motion.ul id={project.id}>
                                    <motion.h5>{project.project}</motion.h5>
                                    {
                                        project.responsibilities.map((item) => {
                                            return <motion.li
                                                whileHover={{ x: 20 }}
                                            >{item}</motion.li>
                                        })
                                    }
                                </motion.ul>
                            )
                        })
                    }

                </motion.div>
            </motion.div>
            <div className={`${style.experienceTitle} ${style.belowTitle}`}>
                <motion.h1 style={{ y: title3y }}>Infosys Limited</motion.h1>
                <motion.h2 style={{ scale: scale3, opacity: scale3 }}>2023 - Present</motion.h2>
            </div>
        </div>
    </div>
    )
}

export default ExperienceComponent;