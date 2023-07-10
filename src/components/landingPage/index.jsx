import React from 'react';
import backgroundVideo from '../../assets/paint-explosion.mp4';
import './landingPage.css';

const LandingPage = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__overlay"></div>
      <video
        className="hero-section__video"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <section className="hero-section__content">
        <h1 className="hero-section__title">
          Colossal Innovation - Unleashing Business Potential through Innovation
        </h1>
        <p className="hero-section__description">
          Transform Your Business with Colossal Innovation. We are a leading
          consultancy and technology solutions provider, dedicated to empowering
          organizations to achieve unparalleled success. Harness our expertise
          and cutting-edge solutions to unlock your business's full potential.
        </p>
        <button className="button">Get in Touch</button>
      </section>
    </div>
  );
};

export default LandingPage;
