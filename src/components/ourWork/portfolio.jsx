import React from 'react';
import './portfolio.css';
import { projects } from '../../data';
import Project from './Project';

const Portfolio = () => {
  return (
    <section>
      <h2 className="section__main-title">Our Work</h2>
      <div className="projects__container">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
