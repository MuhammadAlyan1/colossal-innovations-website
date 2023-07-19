import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactUs.css';
import { InView } from 'react-intersection-observer';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';

export const ContactUs = () => {
  const [emailFeedback, setEmailFeedBack] = useState('');
  const [inView, setInView] = useState(false);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const result = await emailjs.sendForm(
      'service_u34fd5j',
      'template_as6rgmv',
      form.current,
      'nhM5ZYdNE5pxT7fCY'
    );

    if (result.status === 200) {
      setEmailFeedBack('Your message has been sent!');
      form.current.reset();
    } else {
      setEmailFeedBack('There seems to be an issue!');
    }

    setTimeout(() => {
      setEmailFeedBack('');
    }, 2500);
  };

  return (
    <section id="contactUs" className="contact-us">
      <section className="contact-us__details-container">
        <h2 className="contact-us__main-title">Let's Collaborate</h2>
        <p className="section__description">Ask us anything, or just say Hi</p>
        <div className="contact-us__contacts">
          <div className="contact-us__contact">
            <BsTelephone className="contact-us__icon" />
            <a href="tel:+92 313 5666600" className="contact-us__link">
              +92 3135666600
            </a>
          </div>
          <div className="contact-us__contact">
            <MdOutlineMailOutline className="contact-us__icon" />
            <a
              href="mailto:info@colossalinnovationsco.com"
              className="contact-us__link"
            >
              info@colossalinnovationsco.com
            </a>
          </div>
        </div>
      </section>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-form__label-input-container">
          <label className="contact-form__label">Name</label>
          <input
            className="contact-form__input"
            type="text"
            name="user_name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="contact-form__label-input-container">
          <label className="contact-form__label">Email</label>
          <input
            className="contact-form__input"
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="contact-form__label-input-container">
          <label className="contact-form__label">Message</label>
          <textarea
            name="message"
            required
            className="contact-form__input"
            placeholder="Enter your message"
            rows={3}
          />
        </div>

        <InView
          as="input"
          type="submit"
          value="Send"
          threshold="1"
          onChange={setInView}
          className={`contact-form__button button ${
            inView ? 'slide-up-fade--slow' : 'hidden-bottom'
          }`}
        />
        <p
          className={`contact-form__feedback ${
            emailFeedback ? 'contact-form__feedback--fade-up' : ''
          }`}
        >
          {emailFeedback ? emailFeedback : ''}
        </p>
      </form>
    </section>
  );
};
