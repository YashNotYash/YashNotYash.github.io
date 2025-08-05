import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './styles/Navbar.css';

function App() {

  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="navbar-logo">Maa Beauty Care</div>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/services" className="navbar-link">Services</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
