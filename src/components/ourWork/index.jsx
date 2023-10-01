import React from 'react';
import './ourWork.css';
import Testimonials from './testimonials';
import Portfolio from './portfolio';

const OurWork = () => {
  return (
    <section id="ourWork" className="ourWork">
      <Portfolio />
      <Testimonials />
    </section>
  );
};

export default OurWork;
