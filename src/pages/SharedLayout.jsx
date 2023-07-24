import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Theme from '../components/Theme';
import { useState } from 'react';

const SharedLayout = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Theme isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </>
  );
};

export default SharedLayout;
