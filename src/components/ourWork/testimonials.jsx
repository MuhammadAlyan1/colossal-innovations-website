import React from 'react';
import './testimonials.css';
import { testimonials } from '../../data';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Autoplay, EffectCoverflow } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section__main-title">What our clients say</h2>
      <Swiper
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          scale: 0.8,
        }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 2500,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        {testimonials.map((testimony) => {
          return (
            <SwiperSlide
              key={testimony.author + testimony.position}
              className="testimony"
            >
              <img
                className="testimonial__image"
                src={testimony.image}
                alt={testimony.author}
                loading="lazy"
              />
              <p className="testimonial__author">{testimony.author}</p>
              <p className="testimonial__company">
                {testimony.position} - {testimony.company}
              </p>
              <h3 className="testimonial__quote">{testimony.quote}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
