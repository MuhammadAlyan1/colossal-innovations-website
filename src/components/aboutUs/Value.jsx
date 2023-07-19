import React from 'react';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
const Value = ({ id, title, image, description }) => {
  const [inView, setInView] = useState(false);

  return (
    <InView as="section" classID="card" onChange={setInView} threshold={0.3}>
      <img
        className={`card__image ${inView ? 'scale-100' : 'scale-80'}`}
        src={image}
        alt={title}
      />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </InView>
  );
};

export default Value;
