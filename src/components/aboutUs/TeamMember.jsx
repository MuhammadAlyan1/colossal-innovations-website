import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const TeamMember = ({
  name,
  position,
  image,
  linkedIn,
  twitter,
  instagram,
}) => {
  return (
    <section className="team__member">
      <div className="team__image-container">
        <img className="team__image" src={image} alt={name} loading="lazy" />
      </div>
      <p role="heading" aria-level="5" className="team__name">
        {name}
      </p>
      <p className="team__position">{position}</p>
      <div className="team__socials-container">
        <a className="team__social" href={linkedIn} target="__blank">
          <FaLinkedin />
        </a>
        <a className="team__social" href={twitter} target="__blank">
          <FaTwitter />
        </a>
        <a className="team__social" href={instagram} target="__blank">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default TeamMember;
