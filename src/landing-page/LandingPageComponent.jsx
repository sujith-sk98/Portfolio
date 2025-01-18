import React, { useRef } from 'react';
import style from './LandingPageComponent.module.scss';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { SkillCarousal } from './skill-carousal/SkillCarousal';
import { backendSkillsCards, frontEndSkillCards, otherSkills } from '../constants';
import AboutMeComponent from './about-me/AboutMe';
import ExperienceComponent from './experience/ExperienceComponent';
import ContactMeComponent from './contact-me/ContactMeComponent';
import LandingSectionComponent from './landing-section/LandingSectionComponent';
import SkillSectionComponent from './skill-section/SkillSectionComponent';


export const LandingPageComponent = () => {

    return (
        <>
            <LandingSectionComponent />
            <AboutMeComponent />
            <SkillSectionComponent />
            <ExperienceComponent />
            <ContactMeComponent />
        </>
    );
};