import './App.css';
import LandingPage from './components/landingPage';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <div style={{ height: '200vh' }}></div>
    </div>
  );
}

export default App;
