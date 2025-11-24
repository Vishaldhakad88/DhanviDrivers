import React from 'react'
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/heroSection/Hero.jsx';
import RideBookingSection from './components/heroSection/RideBookingSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import QuickRidesSection from './components/QuickRidesSection.jsx';
import FlexibleEarningSection from './components/FlexibleEarningSection.jsx';
import SafetySection from './components/SafetySection.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickRidesSection />
      <FlexibleEarningSection />
      <SafetySection />
      <Footer />
     </div>
  )
}

export default App