import { useEffect, useState } from 'react';
import AboutMeComponent from './about-me/AboutMe';
import ExperienceComponent from './experience/ExperienceComponent';
import ContactMeComponent from './contact-me/ContactMeComponent';
import LandingSectionComponent from './landing-section/LandingSectionComponent';
import SkillSectionComponent from './skill-section/SkillSectionComponent';
import style from './LandingPageComponent.module.scss';
export const LandingPageComponent = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledFromTop = window.scrollY;
            const totalPageHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;

            setIsAtBottom(scrolledFromTop + viewportHeight >= totalPageHeight - 5);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Call once to check initial position
        handleScroll();

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollClick = () => {
      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Find the next section position
      const sections = document.querySelectorAll('.section'); // Assuming your components are wrapped in section tags
      let nextScrollPosition = 0;
  
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        if (sectionTop > currentScroll + 10) { // Adding small offset to handle rounding
          nextScrollPosition = sectionTop;
          break;
        }
      }
  
      // If no next section found, scroll to bottom
      if (nextScrollPosition === 0) {
        nextScrollPosition = document.documentElement.scrollHeight - viewportHeight;
      }
  
      window.scrollTo({
        top: nextScrollPosition,
        behavior: 'smooth'
      });
    }
    return (
        <>
            <section className='section'><LandingSectionComponent /></section>
            <section className='section'><AboutMeComponent /></section>
            <section className='section'><SkillSectionComponent /></section>
            <section className='section'><ExperienceComponent /></section>
            <section className='section'><ContactMeComponent /></section>
            <div onClick={handleScrollClick} class={`${style.scrollIndicator} ${isAtBottom ? style.hidden: ''
                }`}>
                <span class={style.arrow}></span>
            </div>
        </>
    );
};