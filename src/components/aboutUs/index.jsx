import React from 'react';
import './aboutUs.css';
import { aboutUs } from '../../data';
import OurValues from './ourValues';
import Team from './team';
import AboutUsSection from './AboutUsSection';
import Introduction from './Introduction';
import '../../index.css';

const AboutUS = () => {
  return (
    <section className="about" id="aboutUs">
      <Introduction />
      {aboutUs.map((section) => {
        return <AboutUsSection key={section.title} {...section} />;
      })}
      <OurValues />
      <Team />
    </section>
  );
};

export default AboutUS;
