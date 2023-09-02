//eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import {
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiReact,
  mdiVuejs,
  mdiNodejs,
} from '@mdi/js';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import styles from '../styles';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

import PropTypes from 'prop-types';

const EducationCard = ({ education }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Adds a listener for changes to screen size below 786px
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
      date={`${isMobile ? '' : education.date}`}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.school_name}
            className="w-full h-full rounded-full object-cover scale-110"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <div className="text-secondary flex items-center">
          <p className="text-secondary text-[16px] font-semibold pr-4">@ {education.school_name}</p>
          {isMobile ?
            <>
              <span className="mt-3">| |</span>
              <p className="pl-4"> {education.date}</p>
            </>
            :
            ""
          }
        </div>
      </div>
      {education.school_name === "Wild Learner" ?
      <div className="mt-5 ml-5 space-y-2">
        <article className="flex justify-between items-center">
        <div className="flex items-center text-white-100 pl-1 tracking-wider">
          <Icon
            path={mdiLanguageHtml5}
            size={1}
            style={{
              color: "#E34C26",
            }}
          />
          <small className="pl-2">{education.wlPointHTML}</small>
        </div>
        <div className="flex absolute left-[55%] items-center text-white-100 pl-1 tracking-wider">
          <Icon
            path={mdiLanguageCss3}
            size={1}
            style={{
              color: "#2965F1",
            }}
          />
          <small className="pl-2">{education.wlPointCSS}</small>
        </div>
        </article>
        <article className="flex justify-between items-center">
          <div className="flex items-center text-white-100 pl-1 tracking-wider">
            <Icon
              path={mdiLanguageJavascript}
              size={1}
              style={{
                color: "#F7DF00",
              }}
            />
            <small className="pl-2">{education.wlPointJS}</small>
          </div>
          <div className="flex absolute left-[55%] items-center text-white-100 pl-1 tracking-wider">
            <Icon
              path={mdiReact}
              size={1}
              style={{
                color: "#61DBFB",
              }}
            />
            <small className="pl-2">{education.wlPointReact}</small>
          </div>
        </article>
        <article className="flex justify-between items-center">
          <div className="flex items-center text-white-100 pl-1 tracking-wider">
            <Icon
              path={mdiVuejs}
              size={1}
              style={{
                color: "#41B883",
              }}
            />
            <small className="pl-2">{education.wlPointVue}</small>
          </div>
          <div className="flex absolute left-[55%] items-center text-white-100 pl-1 tracking-wider">
            <Icon
              path={mdiNodejs}
              size={1}
              style={{
                color: "#68A063",
              }}
            />
            <small className="pl-2">{education.wlPointNode}</small>
          </div>
        </article>
        <article className="flex justify-between items-center">
          <div className="flex items-center text-white-100 tracking-wider">
            <img
              src="src\assets\express-js.png"
              alt="express-js-icon"
              className="w-8 h-6"
              style={{
                color: "#F7DF00",
              }}
            />
            <small className="pl-1">{education.wlPointExpress}</small>
          </div>
          <div className="flex absolute left-[54%] items-center text-white-100 pl-1 tracking-wider">
            <img
              src="src\assets\advanced-js.png"
              alt="advanced-js-icon"
              className="w-8 h-6"
              style={{
                filter: "brightness(2)",
              }}
            />
            <small className="pl-1">{education.wlPointAdvJS}</small>
          </div>
        </article>
      </div>
      :
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      }
    </VerticalTimelineElement>
  )
}

const Education = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have learned so far</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              education={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

EducationCard.propTypes = {
  education: PropTypes.object.isRequired,
}

export default SectionWrapper(Education, "");