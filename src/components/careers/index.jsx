import React from 'react';
import './careers.css';
import Career from './Career';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../loading';

const Careers = () => {
  const URL = `${process.env.REACT_APP_BASE_URL}careers/`;
  const { isLoading, isError, data: careers } = useFetch(URL);

  if (isLoading || isError) return <Loading />;

  return (
    <section id="careers" className="careers">
      <h2 className="section__main-title">Be part of our mission</h2>
      {careers.map((career) => {
        return <Career key={career._id} {...career} />;
      })}
    </section>
  );
};

export default Careers;
