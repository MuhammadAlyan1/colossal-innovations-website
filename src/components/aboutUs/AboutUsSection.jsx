import React from 'react';
import { InView } from 'react-intersection-observer';
import './aboutUs.css';

import { useState } from 'react';

const AboutUsSection = ({ id, image, title, description }) => {
  const [inView, setInView] = useState(false);

  return (
    <InView
      as="section"
      onChange={setInView}
      threshold={0.2}
      className="about__section"
    >
      <div className="about__image-container">
        <img
          className={`about__image ${inView ? 'scale-full' : 'scale-80'}`}
          src={image}
          alt={title}
        ></img>
      </div>
      <div className="about__content">
        <p
          role="title"
          className={`about__title transition-delay ${
            inView ? 'slide-in-fade' : 'hidden-top'
          }`}
        >
          {title}
        </p>
        <p
          className={`about__description transition-delay ${
            inView
              ? 'slide-in-fade'
              : id % 2 === 0
              ? 'hidden-right'
              : 'hidden-left'
          }`}
        >
          {description}
        </p>
      </div>
    </InView>
  );
};

export default AboutUsSection;
