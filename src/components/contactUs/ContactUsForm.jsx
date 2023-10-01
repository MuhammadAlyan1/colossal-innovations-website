import { InView } from 'react-intersection-observer';
import React, { useState } from 'react';
import axios from 'axios';

const ContactUsForm = () => {
  const [inView, setInView] = useState(false);
  const [emailFeedback, setEmailFeedBack] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const URL = `${process.env.REACT_APP_BASE_URL}emails/contact-us`;

      const response = await axios.post(URL, formData);

      if (response.data.success) {
        setEmailFeedBack('Your email has been submitted!');
      } else {
        setEmailFeedBack('Failed to submit the email!');
      }
    } catch (error) {
      console.error(error);
      setEmailFeedBack('Failed to submit the email!');
    } finally {
      setTimeout(() => {
        setEmailFeedBack('');
      }, 2500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__label-input-container">
        <label htmlFor="name" className="contact-form__label">
          Name
        </label>
        <input
          className="contact-form__input"
          type="text"
          id="name"
          placeholder="Your Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-form__label-input-container">
        <label htmlFor="email" className="contact-form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email Address"
          className="contact-form__input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-form__label-input-container">
        <label htmlFor="subject" className="contact-form__label">
          Subject
        </label>
        <input
          className="contact-form__input"
          type="tel"
          id="subject"
          placeholder="Topic of Discussion"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-form__label-input-container">
        <label htmlFor="message" className="contact-form__label">
          Message
        </label>
        <input
          className="contact-form__input"
          type="tel"
          id="message"
          placeholder="Tell Us How We Can Assist You"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
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
  );
};

export default ContactUsForm;
