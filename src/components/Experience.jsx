//eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import styles from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

import PropTypes from 'prop-types';
import { intermountain } from "../assets";


const ExperienceCard = ({ experience }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Adds a listener for changes to screen size below 768px
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Sets initial value of `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Defines callback to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Adda callback as a listener for changes to media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Removes listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1D1836', color: '#FFF' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      iconStyle={{ background: experience.iconBg }}
      date={`${isMobile ? '' : experience.date}`}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={`w-full h-full object-cover rounded-full ${experience.icon === intermountain ? 'scale-115' : 'scale-100'}`}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-[#F0f8ff] text-[16px] font-semibold" style={{ marginTop: '10px' }}>{experience.company_name}</p>
          <p className={`text-secondary text-[16px] font-semibold ${isMobile ? 'block' : 'hidden'}`} style={{ marginTop: '10px' }}>{experience.date}</p>
        </div>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-20"
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
}

export default SectionWrapper(Experience, "");