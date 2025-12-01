import React, { useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Send,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import style from './ContactMeComponent.module.scss';

const ContactMeComponent = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['0.3 end', 'center center'],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const contactDetails = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'Sujithskumar1298@gmail.com',
      href: 'mailto:Sujithskumar1298@gmail.com',
      color: '#00d4ff',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '(+91) 7907003467',
      href: 'tel:+917907003467',
      color: '#a855f7',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Kerala, India',
      href: null,
      color: '#ec4899',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sujith-sk',
      color: '#0077b5',
    },
    {
      icon: <Instagram size={24} />,
      name: 'Instagram',
      href: 'https://www.instagram.com/es_kay_98/',
      color: '#e4405f',
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      href: 'https://x.com/@sujith916007',
      color: '#1da1f2',
    },
    {
      icon: <MessageCircle size={24} />,
      name: 'WhatsApp',
      href: 'https://wa.me/7907003467',
      color: '#25d366',
    },
  ];

  return (
    <div className={style.contactContainer} ref={targetRef} id="contact-me">
      <div className={style.contactContent}>
        <motion.h1 className={style.title} style={{ y: yTitle }}>
          Let's Connect
        </motion.h1>

        <motion.p
          className={style.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind or just want to chat? Feel free to reach out!
        </motion.p>

        <div className={style.contactGrid}>
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              className={style.contactCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div
                className={style.iconWrapper}
                style={{ background: detail.color }}
              >
                {detail.icon}
              </div>
              <div className={style.cardContent}>
                <h3>{detail.label}</h3>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span>{detail.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={style.socialSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h2>Connect on Social Media</h2>
          <div className={style.socialLinks}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={style.socialLink}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
              >
                <div
                  className={style.socialIcon}
                  style={{ background: social.color }}
                >
                  {social.icon}
                </div>
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={style.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p>© 2024 Sujith S Kumar. Built with React & Framer Motion</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMeComponent;
