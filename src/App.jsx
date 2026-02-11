import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ImageSlider from './components/ImageSlider';
import Donation from './components/Donation';
import AartiTimings from './components/AartiTimings';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

console.log('App.jsx loaded');

function App() {
  const [donations, setDonations] = useState([]);

  console.log('App component rendering');

  return (
    <div className="min-h-screen font-work-sans" style={{ backgroundColor: 'lightblue' }}>
      <div style={{ padding: '20px', backgroundColor: 'red', color: 'white' }}>
        DEBUG: App is rendering!
      </div>
      <Header />
      <Hero />
      <Features />
      <ImageSlider />
      <Donation donations={donations} setDonations={setDonations} />
      <AartiTimings />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;