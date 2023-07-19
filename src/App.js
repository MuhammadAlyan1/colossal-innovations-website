import './App.css';
import LandingPage from './components/landingPage';
import Navbar from './components/navbar';
import AboutUs from './components/aboutUs';
import Careers from './components/careers';
import Services from './components/services';
import OurWork from './components/ourWork';
import Footer from './components/footer';
import { ContactUs } from './components/contactUs';
import Blogs from './components/blogs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Careers />
      <Services />
      <OurWork />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
