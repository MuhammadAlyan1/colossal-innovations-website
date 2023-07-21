import React from 'react';

import LandingPage from '../../components/landingPage';
import { ContactUs } from '../../components/contactUs';
import Introduction from '../../components/aboutUs/Introduction';
import OurValues from '../../components/aboutUs/ourValues';
import Team from '../../components/aboutUs/team';
import Testimonials from '../../components/ourWork/testimonials';

const Home = () => {
  return (
    <>
      <LandingPage />
      <Introduction />
      <OurValues />
      <Team />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
