import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './styles/customerService.css';

const CustomerService = () => {
  return (
    <div className="customer-service-container">
      <h1 className="support-heading">Customer Service</h1>
      <p className="support-subtext">
        Our repliers are currently busy bailing our sellers. Try again once they’re legally available.
      </p>

      <div className="fake-chatbox">
        <p><strong>User:</strong> I never got my package?</p>
        <p><strong>Support:</strong> Our seller's van was confiscated. We’ll get back once the paperwork clears.</p>
        <hr />
        <p><strong>User:</strong> Your site charged me twice!</p>
        <p><strong>Support:</strong> Sounds like a "you" problem. We’re not Amazon.</p>
        <hr />
        <p><strong>User:</strong> Can I return a broken item?</p>
        <p><strong>Support:</strong> Sure, just toss it at a police station and run.</p>
      </div>

     <a href="/complaint"> <button className="add-to-cart-btn" style={{ marginTop: '30px' }} >
        File a Complaint (Good Luck!)
      </button></a>
      <Link to="/home" className="return-home-link">
          <button className="add-to-cart-btn">Return to Safety (Home)</button>
        </Link>
    </div>
  );
};

export default CustomerService;
