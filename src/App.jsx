import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Head from './components/head'
import Home from './components/home'
import LandingPage from './components/landingpage'
import CustomerService from './components/customerService'
import Complaint from './components/complaint'
import TodaysDeals from './components/todaysDeals';
import GiftCard from './components/giftCard';
import Registry from './components/registry';

function App() {

  return (
    <Router>
      <Head /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/today's-deals" element={<TodaysDeals/>}/>
        <Route path="/gift-cards" element={<GiftCard/>}/>
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </Router> 
  );
};

export default App
