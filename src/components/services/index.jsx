import React from 'react';
import './services.css';
import { services } from '../../data';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';
import Service from './Service';

const Services = () => {
  const [inView, setInView] = useState(false);

  return (
    <section id="services" className="services">
      <h2 className="section__main-title">What we do</h2>
      <div className="cards__container">
        {services.map((service) => {
          return (
            // <InView onChange={() => setInView(!inView)}>
            //   <section key={service.id} className="card">
            //     <img
            //       className="card__image"
            //       src={service.image}
            //       alt={service.title}
            //     />
            //     <h3 className="card__title">{service.title}</h3>
            //     <p className="card__description">{service.description}</p>
            //   </section>
            // </InView>
            <Service {...service} key={service.id} />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
