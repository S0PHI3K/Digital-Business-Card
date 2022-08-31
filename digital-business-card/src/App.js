import React from 'react';
import Information from './Components/Information';
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';
import './App.css';

function BusinessCard() {
  return (
    <div className='canvas'>
        <Information />
        <About />
        <Interests />
        <Footer />
    </div>

  );
}

export default BusinessCard;
