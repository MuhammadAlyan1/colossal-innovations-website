import React from 'react';
import './navbar.css';
import { linkItems } from '../../data';
import { Link, NavLink } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const location = useLocation();

  window.addEventListener('scroll', () => {
    if (location.pathname === '/' && window.scrollY === 0) {
      setIsNavbarTransparent(true);
    } else {
      setIsNavbarTransparent(false);
    }
  });

  useEffect(() => {
    if (location.pathname === '/' && window.scrollY === 0) {
      setIsNavbarTransparent(true);
    } else {
      setIsNavbarTransparent(false);
    }
  }, [location]);

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
        <div className="logo">
          <img src={logo} alt="Colossal Innovations" className="logo__icon" />
          <div className="logo__text">
            <p className="logo__uppertext">Colossal</p>
            <p className="logo__lowertext">Innovations</p>
          </div>
        </div>
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
