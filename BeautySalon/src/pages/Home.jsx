import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Maa Beauty Care!</h1>
      <p className="home-subtitle">Experience luxury and care. Visit our services page to begin your transformation.</p>
      
      <button className="home-button" onClick={() => window.location.href='/services'}>
        View Services
      </button>
    </div>
  );
}
export default Home;