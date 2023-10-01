import React from 'react';
import './portfolio.css';
import Project from './Project';

import { useFetch } from '../../hooks/useFetch';
import Loading from '../loading';

const Portfolio = () => {
  const URL = `${process.env.REACT_APP_BASE_URL}projects/`;
  const { isLoading, isError, data: projects } = useFetch(URL);

  if (isLoading || isError) return <Loading />;

  return (
    <section>
      <h2 className="section__main-title">Our Work</h2>
      <div className="projects__container">
        {projects.map((project) => {
          return <Project key={project._id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
