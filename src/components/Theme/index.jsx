import React from 'react';
import './theme.css';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Theme = ({ isDarkTheme, setIsDarkTheme }) => {
  if (isDarkTheme) {
    document.documentElement.style.setProperty('--clr-text-primary', '#fff');
    document.documentElement.style.setProperty(
      '--clr-text-secondary',
      '#b9b4b4'
    );
    document.documentElement.style.setProperty('--clr-bg-primary', '#0e1111');
    document.documentElement.style.setProperty('--clr-bg-secondary', '#1e2121');
  } else {
    document.documentElement.style.setProperty('--clr-text-primary', '#222');
    document.documentElement.style.setProperty('--clr-text-secondary', '#333');
    document.documentElement.style.setProperty('--clr-bg-primary', '#fff');
    document.documentElement.style.setProperty(
      '--clr-bg-secondary',
      '#e0ad6b86'
    );
  }
  return (
    <div
      className="change-theme"
      role="button"
      onClick={() => setIsDarkTheme((prev) => !prev)}
    >
      {isDarkTheme ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </div>
  );
};

export default Theme;
