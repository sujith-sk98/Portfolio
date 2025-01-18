import React from 'react';
import styles from './SkillCardComponent.module.scss';
import { motion } from 'motion/react';
import { floatingVariants, jiggleVariants, oscillateVariants, wobbleVariants } from '../../constants';

const SkillCardComponent = ({ card }) => {
    return (
        <div className={styles.skillCardDiv}>
            <motion.div
                className={styles.skillCardImage}
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}

                whileTap={{
                    scale: 1.5,
                }}
                whileHover={{
                    scale: 1.1,
                }}
                initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale:1,
                    transition:{
                        opacity: {
                            duration: 0.5,
                            ease: "easeIn"
                        },
                        scale: {
                            duration: 0.5,
                            ease: "easeIn",
                        }
                    }
                }}
            ></motion.div>
            <div className={styles.SkillCardTitle}>
                <span>{card.title}</span>
            </div>
        </div>
    );
};

export default SkillCardComponent;