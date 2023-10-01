import React from 'react';
import './services.css';
import { services } from '../../data';
import Service from './Service';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section__main-title">What we do</h2>
      <div className="cards__container">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};

export default Services;
