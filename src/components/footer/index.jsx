import React from 'react';
import './footer.css';
import colossalInnovationLogo from '../../assets/Colossal-logo.png';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuLinkedin, LuFacebook } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__content">
        <div className="footer__contacts-container">
          <img
            className="footer__logo"
            src={colossalInnovationLogo}
            alt="Colossal Innovation"
          />
          <div className="footer__contact">
            <HiOutlineLocationMarker className="footer__icon" />
            <a
              href="https://goo.gl/maps/mP52U6dd5deMRFbU7"
              target="__blank"
              className="footer__link"
            >
              Office # 1, 1st Floor, Shiraz Plaza, Plot # 2F, Suleman Market,
              F-11/2, Islamabad, Pakistan.
            </a>
          </div>
          <div className="footer__contact">
            <BsTelephone className="footer__icon" />
            <a href="tel:+92 313 5666600" className="footer__link">
              +92 3135666600
            </a>
          </div>
          <div className="footer__contact">
            <MdOutlineMailOutline className="footer__icon" />
            <a
              href="mailto:info@colossalinnovationsco.com"
              className="footer__link"
            >
              info@colossalinnovationsco.com
            </a>
          </div>
          <div className="footer__contact">
            <LuLinkedin className="footer__icon" />
            <a
              href="https://www.linkedin.com/company/colossal-innovations-pvt-ltd/"
              target="__blank"
              className="footer__link"
            >
              LinkedIn
            </a>
          </div>
          <div className="footer__contact">
            <LuFacebook className="footer__icon" />
            <a
              href="https://www.facebook.com/profile.php?id=100089008380128"
              target="__blank"
              className="footer__link"
            >
              Facebook
            </a>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13280.085886104882!2d72.9804534!3d33.6825082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd370f4597b9%3A0xd9795b7af677db1a!2sColossal%20Innovations!5e0!3m2!1sen!2s!4v1689259359242!5m2!1sen!2s"
          width={'100%'}
          style={{ border: 0 }}
          allowFullScreen=""
          loading={'lazy'}
          className="footer__map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <p className="footer__rights">
        Copyright {new Date().getFullYear()}. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
