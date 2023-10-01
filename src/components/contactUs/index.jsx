import { React } from 'react';
import './contactUs.css';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import ContactUsForm from './ContactUsForm';

export const ContactUs = () => {
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
      <ContactUsForm />
    </section>
  );
};
