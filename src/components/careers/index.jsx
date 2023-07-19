import React from 'react';
import './careers.css';
import { careers } from '../../data';
import Career from './Career';

const Careers = () => {
  return (
    <section id="careers" className="careers">
      <h2 className="section__main-title">Be part of our mission</h2>
      {careers.map((career) => {
        return <Career key={career.id} {...career} />;
      })}
    </section>
  );
};

export default Careers;
