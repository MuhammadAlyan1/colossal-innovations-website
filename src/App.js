import './App.css';
import SharedLayout from './pages/SharedLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import BlogDetails from './pages/blogsPage/BlogDetails';
import Error from './pages/errorPage/Error';
import CareerDetails from './pages/careersPage/CareerDetails';
import OurWorkPage from './pages/ourWorkPage';
import BlogsPage from './pages/blogsPage/index';
import CareersPage from './pages/careersPage';
import ServicesPage from './pages/servicesPage';
import AboutUsPage from './pages/aboutUsPage/index';
import ContactUsPage from './pages/contactUsPage/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:careerID" element={<CareerDetails />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="blogs/:blogID" element={<BlogDetails />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
