import React from 'react';
import colossalInnovationLogo from '../../assets/Colossal-logo.png';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const linkItems = [
    { name: 'home', href: '#home' },
    { name: 'about us', href: '#aboutUs' },
    { name: 'services', href: '#services' },
    { name: 'our work', href: '#ourWork' },
    { name: 'blog', href: '#blog' },
    { name: 'careers', href: '#careers' },
  ];

  return (
    <>
      {isNavbarOpen ? (
        <IoMdClose
          className="navbar__button navbar__button--closed"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        />
      ) : (
        <GiHamburgerMenu
          className="navbar__button navbar__button--opened"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        />
      )}
      <nav
        className={`navbar ${
          isNavbarOpen ? 'navbar--visible' : 'navbar--hidden'
        }`}
      >
        <img
          className="navbar__logo"
          src={colossalInnovationLogo}
          alt="Colossal Innovation"
        />
        <ul className="navbar__list">
          {linkItems.map((item) => {
            return (
              <li
                key={item.name}
                className="navbar__item"
                onClick={() => setActiveLink(item.name)}
              >
                <a
                  href={item.href}
                  className={`navbar__link ${
                    activeLink === item.name ? 'navbar__link--active' : ' '
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div>
          <button className="button">Get in Touch</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
