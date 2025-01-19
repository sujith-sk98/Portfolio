import React from 'react';
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