import React, { useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import style from './ContactMeComponent.module.scss';

const ContactMeComponent = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['0.3 end', 'center center'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [600, 0]);
  const minusX = useTransform(scrollYProgress, [0, 1], [-600, 0]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={style.contactContainer} ref={targetRef} id="contact-me">
      <div className={style.contactContent}>
        <motion.h1 className={style.title} style={{ y: yTitle }}>
          Contact Me
        </motion.h1>

        <div className={style.contactInfo}>
          <motion.div
            className={style.infoCard}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{ x, scale }}
            animate={false}
          >
            <Mail className={style.icon} />
            <span>Sujithskumar1298@gmail.com</span>
          </motion.div>

          <motion.div
            className={style.infoCard}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{ x: minusX, scale }}
          >
            <Phone className={style.icon} />
            <span>(+91)7907003467</span>
          </motion.div>

          <motion.div
            className={style.infoCard}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{ x, scale }}
          >
            <MapPin className={style.icon} />
            <span>Kerala, India</span>
          </motion.div>
        </div>

        <div className={style.socialLinks}>
          <motion.a
            href="https://www.instagram.com/es_kay_98/"
            whileHover={{ scale: 1.1 }}
            style={{ x: minusX }}
            target="_blank"
          >
            <Instagram />
          </motion.a>
          <motion.a
            href="https://x.com/@sujith916007"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{ x: minusX }}
            target="_blank"
          >
            <Twitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sujith-sk"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{ x }}
            target="_blank"
          >
            <Linkedin />
          </motion.a>
          <motion.a
            href="https://wa.me/7907003467"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{ x }}
            target="_blank"
          >
            <MessageCircle />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ContactMeComponent;
