import React, { useState } from 'react';
import './styles/giftCard.css'; // Assuming you have a CSS file for styling

const GiftCard = () => {
  const [amount, setAmount] = useState(500); // Default value
  const [message, setMessage] = useState('');

  const handlePurchase = () => {
    alert(`Gift card of ₹${amount} ready with message: "${message || 'No message'}"`);
  };

  return (
    <div className="gift-card">
      <h2 className="gift-card-title">Gift a Special Surprise 🎁</h2>

      <div className="gift-card-form">
        <label className="gift-card-label">
          Select Amount:
          <select 
            className="gift-card-select" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
          >
            <option value="500">₹500</option>
            <option value="1000">₹1000</option>
            <option value="2000">₹2000</option>
            <option value="5000">₹5000</option>
          </select>
        </label>

        <label className="gift-card-label">
          Personal Message (optional):
          <textarea
            className="gift-card-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a sweet message..."
          />
        </label>

        <button className="gift-card-btn" onClick={handlePurchase}>
          Purchase Gift Card
        </button>
        <a href='/home'>
        <button className='add-to-cart-btn'>Return to Safety</button>
        </a>
      </div>    
    </div>
  );
};  

export default GiftCard;
