import React from 'react';
import colossalInnovationLogo from '../../assets/Colossal-logo.png';
import './navbar.css';
import { linkItems } from '../../data';
import { Link, NavLink } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  window.addEventListener('scroll', () => {
    if (window.scrollY == 0) {
      setIsNavbarTransparent(true);
    } else {
      setIsNavbarTransparent(false);
    }
  });

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
        } ${isNavbarTransparent ? '' : 'navbar--active'}`}
      >
        <img
          className="navbar__logo"
          src={colossalInnovationLogo}
          alt="Colossal Innovation"
        />
        <ul className="navbar__list">
          {linkItems.map((item) => {
            return (
              <li key={item.name} className="navbar__item">
                <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'navbar__link navbar__link--active'
                      : 'navbar__link'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Link
          role="button"
          to="/contact-us"
          className="button"
          onClick={() => window.scrollTo(0, 0)}
        >
          Get in Touch
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
