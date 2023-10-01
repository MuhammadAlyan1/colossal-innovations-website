import { InView } from 'react-intersection-observer';
import React, { useState } from 'react';
import axios from 'axios';

const CareerApplicationForm = ({ careerID }) => {
  const [inView, setInView] = useState(false);
  const [emailFeedback, setEmailFeedBack] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    career: careerID,
    resumeFile: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('career', formData.career);
    formDataToSend.append('resume', formData.resumeFile);

    try {
      const URL = `${process.env.REACT_APP_BASE_URL}career-applications`;

      const response = await axios.post(URL, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        setEmailFeedBack('Your application has been submitted!');
      } else {
        setEmailFeedBack('Failed to submit the application!');
      }
    } catch (error) {
      console.error(error);
      setEmailFeedBack('Failed to submit the application!');
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resumeFile: file
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__label-input-container">
        <label htmlFor="fullName" className="contact-form__label">
          Full Name
        </label>
        <input
          className="contact-form__input"
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Your Full Name"
          value={formData.fullName}
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
          className="contact-form__input"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-form__label-input-container">
        <label htmlFor="phone" className="contact-form__label">
          Phone
        </label>
        <input
          className="contact-form__input"
          type="tel"
          id="phone"
          placeholder="Your Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-form__label-input-container">
        <label htmlFor="resume" className="contact-form__label">
          Resume
        </label>
        <input
          className="contact-form__input"
          type="file"
          id="resume"
          name="resumeFile"
          accept=".pdf"
          onChange={handleFileChange}
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

export default CareerApplicationForm;
