import React from 'react';
import backgroundVideo from '../../assets/solar.mp4';
import './landingPage.css';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [inView, setInView] = useState(false);

  return (
    <div className="hero-section" id="home">
      <div className="hero-section__overlay"></div>
      <video
        className="hero-section__video"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <section className="hero-section__content">
        <h2 className="hero-section__company-name">Colossal Innovation</h2>
        <h1 className="hero-section__slogan">
          Unleashing Business Potential through Innovation
        </h1>
        <p className="hero-section__description">
          Transform Your Business with Colossal Innovation. We are a leading
          consultancy and technology solutions provider, dedicated to empowering
          organizations to achieve unparalleled success. Harness our expertise
          and cutting-edge solutions to unlock your business's full potential.
        </p>
        <InView
          onChange={setInView}
          threshold={1}
          className={inView ? 'slide-up-fade--slow' : 'hidden-bottom'}
        >
          <Link
            role="button"
            to="/contact-us"
            onClick={() => window.scrollTo(0, 0)}
            className={`button ${
              inView ? 'slide-up-fade--slow' : 'hidden-bottom'
            }`}
          >
            Get in Touch
          </Link>
        </InView>
      </section>
    </div>
  );
};

export default LandingPage;
