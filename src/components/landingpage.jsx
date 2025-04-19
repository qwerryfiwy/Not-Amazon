import React from 'react';
import './styles/landingpage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="main-title">Welcome to NotAmazon.com</h1>
        <p className="sub-title">Where your friend’s stuff magically appears on sale 👀</p>
        <a href="/home"><button className="cta-btn">Enter The Dark Market</button></a>
      </div>
    </div>
  );
}

export default LandingPage;
