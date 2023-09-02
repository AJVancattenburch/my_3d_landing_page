/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import styles from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

import PropTypes from 'prop-types';

const ServiceCard = ({ index, title, icon, scaleValue }) => {
  const customStyles = title === "Three JS Developer"
    ? {
        transform: `scale(${scaleValue})`,
        borderRadius: "25%",
        boxShadow: "0px 0px 20px 0px #222)",
                    
        // Add any other specific styles for the threejsPlanet icon here
      }
    : {};

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-24 h-24 object-contain"
            style={{ ...customStyles }}
          />
          <h3 className="text-white text-[20px] font-hold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Driven by my personal journey and guided by a deep sense of purpose as a developer, I am always excited to contribute with a dynamic and forward-thinking team. I bring <span className="text-[#00D8FF] font-semibold">perseverance</span>, <span className="text-[#00D8FF] font-semibold">integrity</span>, and a <span className="text-[#00D8FF] font-semibold">rapid learning ability</span> to every project, striving to create impactful software solutions that push boundaries and drive positive change.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            scaleValue={service.title === "Three JS Developer" ? 1.25 : 1} // Set scale value for Three JS Developer
          />
        ))}
      </div>
    </>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  scaleValue: PropTypes.number, // Add a prop for scale value
}

export default SectionWrapper(About, "about");
