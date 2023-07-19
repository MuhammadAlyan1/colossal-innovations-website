import React from 'react';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Stats from './stats';
import steveJobs from '../../assets/steve-jobs.png';

const Introduction = () => {
  const [inView, setInView] = useState(false);

  return (
    <InView as="section" className="about__introduction" onChange={setInView}>
      <div className="about__quote-container">
        <div>
          <h2
            className={`about__quote ${
              inView ? ' slide-in-fade ' : ' hidden-left '
            }`}
          >
            Innovation distinguishes between a leader and a follower.
          </h2>
          <p
            className={`about__quote-author transition-delay  ${
              inView ? 'slide-up-fade--slow' : 'hidden-bottom'
            } `}
          >
            Steve Jobs
          </p>
        </div>
        <div className="about__quote-image-container">
          <img
            className={`about__quote-image ${
              inView ? 'scale-full' : 'scale-80'
            }`}
            src={steveJobs}
            alt="Steve Jobs"
          />
        </div>
      </div>
      <Stats />
    </InView>
  );
};

export default Introduction;
