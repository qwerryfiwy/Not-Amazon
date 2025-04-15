import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Head from './components/head'
import Home from './components/home'
import LandingPage from './components/landingpage'
import CustomerService from './components/customerService'
import Complaint from './components/complaint'

function App() {

  return (
    <Router>
      <Head /> {/* this will stay at top on every page */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/complaint" element={<Complaint />} />
        {/* Add more routes like login, product etc */}
      </Routes>
    </Router>
  );
};

export default App
