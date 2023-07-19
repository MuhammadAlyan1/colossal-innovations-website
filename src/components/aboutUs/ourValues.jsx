import React from 'react';
import './ourValues.css';
import { ourValues } from '../../data';
import Value from './Value';

const OurValues = () => {
  return (
    <section className="our-values">
      <h2 className="section__main-title">Our Values</h2>
      <p className="our-values__description">
        We are committed to providing our customers with the highest quality of
        service. We believe that our success is directly linked to the success
        of our customers, and we are always looking for ways to improve our
        services.
      </p>
      <div className="cards__container">
        {ourValues.map((value) => {
          return <Value key={value.id} {...value} />;
        })}
      </div>
    </section>
  );
};

export default OurValues;
