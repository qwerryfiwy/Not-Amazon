import React from 'react';
import './styles/todaysDeals.css'; // Assuming you have a CSS file for styling
const TodaysDeals = () => {
    return (
        <div>
            <section className="deal-section">
      <h2 className="deal-header">🕵️ Today's Highly Questionable Deal 🕵️</h2>
      <div className="deal-card">
        <img src="/todays-deal.jpg" alt="Definitely Legit Product" />
        <h3>Mystery Box (Probably Not Stolen)</h3>
        <p><span className="price-strike"
        style={{ textDecoration: 'line-through' }}>$999.99</span> <br />
        <span className="price-deal">$4.99</span></p>
        <div className="deal-description">
          No questions asked. You get... something.  
          Could be a phone. Could be a rock. That's the thrill.  
          <br />🔒 *All sales final. No refunds, obviously.*
        </div>
        <button className="buy-now-btn">Take the Risk</button>
      </div>
    </section>
        </div>
    );
};

export default TodaysDeals;



