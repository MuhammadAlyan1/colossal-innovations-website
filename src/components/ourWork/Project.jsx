import React from 'react';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';

const Project = ({ title, tags, image }) => {
  const [inView, setInView] = useState(false);
  return (
    <InView
      as="section"
      onChange={setInView}
      className={`project ${inView ? 'slide-in-fade' : 'hidden-left'}`}
    >
      <div className="project__image-container">
        <img className="project__image" src={image} alt={title} />
      </div>
      <div className="project__content-container">
        <h3 className="project__title">{title}</h3>
        <ul className="project__tags-container">
          {tags.map((tag) => (
            <li key={tag} className="project__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </InView>
  );
};

export default Project;
