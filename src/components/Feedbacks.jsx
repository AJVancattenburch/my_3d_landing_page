//eslint-disable-next-line
import React from 'react';

import { motion } from 'framer-motion';

import styles from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

import PropTypes from 'prop-types';

const FeedbackCard = ({ index, testimonial, newLine, name, designation, image, company }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 px-1.5 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px] pl-5 pt-5">"</p>
    <div className="mb-7 px-5 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback-by-${name}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
    <div className="mt-1 my-5 overflow-auto h-[250px]">
      <div className="container-shadow py-5 mx-5">
        <p className="text-white tracking-wider text-[15px]">{testimonial}</p>
        {newLine ? <br /> : ''}
        <p className="text-white tracking-wider text-[15px]">{newLine ? newLine : ''}</p>
      </div>
      
    </div>

  </motion.div>
)

FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  testimonial: PropTypes.string.isRequired,
  newLine: PropTypes.string,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
}

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say...</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");