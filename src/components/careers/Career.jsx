import React from 'react';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';
const Career = ({ title, description, tags }) => {
  const [inView, setInView] = useState(false);
  const [inViewButton, setInViewButton] = useState(false);
  return (
    <InView
      as="section"
      className="career"
      onChange={setInView}
      threshold={0.7}
    >
      <div className="career__details">
        <h3
          className={`career__title ${
            inView ? 'slide-in-fade' : 'hidden-left'
          }`}
        >
          {title}
        </h3>
        <p className="career__description">{description}</p>
        <ul className="career__tags-container">
          {tags.map((tag, index) => (
            <li key={tag + index} className="career__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <InView
        as="button"
        threshold={1}
        delay={200}
        onChange={setInViewButton}
        className={`career__apply ${
          inViewButton ? 'slide-in-fade' : 'hidden-bottom'
        }`}
      >
        Apply now
      </InView>
    </InView>
  );
};

export default Career;
