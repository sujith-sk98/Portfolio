import { useRef } from 'react';
import { SkillCarousal } from '../skill-carousal/SkillCarousal';
import style from './SkillSectionComponent.module.scss';
import { motion, useScroll, useTransform } from 'motion/react';
import { backendSkillsCards, frontEndSkillCards, otherSkills } from '../../constants';

const SkillSectionComponent = () => {
    const skillsRef = useRef(null);
    const { scrollYProgress: titleProgress } = useScroll({
        target: skillsRef || { current: null },
        offset: ["0.1 end", "center center"]
    });
    const skillsY = useTransform(titleProgress, [0, 1], [-150, 0]);


    // useMotionValueEvent((titleProgress), 'change', (latest) => { console.log("skills", latest) })

    return (
        <div className={style.mySkillsScreen} id='my-skills' ref={skillsRef}>
            <motion.h2 style={{ y: skillsY }}>My Skills</motion.h2>
            <SkillCarousal skills={frontEndSkillCards} title={'Front End'}
                slideFrom={'right'} targetRef={skillsRef}
            />
            <SkillCarousal skills={backendSkillsCards} title={'Back End'}
                slideFrom={'left'} targetRef={skillsRef}
            />
            <SkillCarousal skills={otherSkills} title={'Other'}
                slideFrom={'right'} targetRef={skillsRef}
            />
        </div>
    )
}

export default SkillSectionComponent;