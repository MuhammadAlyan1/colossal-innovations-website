import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { careers } from '../../data';
import './CareerDetails.css';
import emailjs from '@emailjs/browser';
import { InView } from 'react-intersection-observer';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const CareerDetails = () => {
  const [emailFeedback, setEmailFeedBack] = useState('');
  const [inView, setInView] = useState(false);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_u34fd5j',
        'template_du42bdp',
        form.current,
        'nhM5ZYdNE5pxT7fCY'
      );

      setEmailFeedBack('Your message has been sent!');
      form.current.reset();
      console.log('Email sent!');
    } catch (error) {
      setEmailFeedBack(error.text);
      console.log('Email sent!');
    } finally {
      setTimeout(() => {
        setEmailFeedBack('');
      }, 2500);
    }
  };

  const navigate = useNavigate();
  const { careerID } = useParams();

  useEffect(() => {
    if (!career) {
      navigate('/404');
    }
  }, [careerID]);

  const career = careers.find((career) => career.id == careerID);

  if (!career) {
    return null;
  }

  return (
    <section className="detailed-career">
      <section className="detailed-career__content">
        <ReactMarkdown children={career.content} remarkPlugins={[remarkGfm]} />
      </section>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-form__label-input-container">
          <label className="contact-form__label">Full Name</label>
          <input
            className="contact-form__input"
            type="text"
            name="user_name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="contact-form__label-input-container">
          <label className="contact-form__label">Phone</label>
          <input
            className="contact-form__input"
            type="text"
            name="user_phone"
            required
            placeholder="Enter your phone number"
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
          <label className="contact-form__label">Cover letter</label>
          <textarea
            name="user_cover_letter"
            required
            className="contact-form__input"
            placeholder="Enter your cover letter"
            rows={3}
          />
        </div>

        <InView
          as="input"
          type="submit"
          value="Apply now"
          threshold="0.5"
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

export default CareerDetails;
