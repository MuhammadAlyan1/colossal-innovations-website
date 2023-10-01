import React from 'react';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { quotes } from '../../data';
import Stats from './stats';

const Introduction = () => {
  const [inView, setInView] = useState(false);

  return (
    <InView as="section" className="about__introduction" onChange={setInView}>
      <Swiper
        className="mySwiper"
        loop={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 3500,
        }}
        grabCursor={true}
        modules={[Autoplay]}
      >
        {quotes.map((quote) => {
          return (
            <SwiperSlide key={quote.quote}>
              <div className="about__quote-container">
                <div className="about__quote-contents">
                  <h2
                    className={`about__quote ${
                      inView ? ' slide-in-fade ' : ' hidden-left '
                    }`}
                  >
                    {quote.quote}
                  </h2>
                  <p
                    className={`about__quote-author transition-delay  ${
                      inView ? 'slide-up-fade--slow' : 'hidden-bottom'
                    } `}
                  >
                    {quote.author}
                  </p>
                </div>
                <div className="about__quote-image-container">
                  <img
                    className={`about__quote-image ${
                      inView ? 'scale-full' : 'scale-80'
                    }`}
                    src={quote.image}
                    alt={quote.author}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Stats />
    </InView>
  );
};

export default Introduction;
