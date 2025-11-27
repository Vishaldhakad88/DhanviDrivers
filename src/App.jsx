import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";  // ⭐ ADD THIS

import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/heroSection/Hero.jsx";
import RideBookingSection from "./components/heroSection/RideBookingSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import QuickRidesSection from "./components/QuickRidesSection.jsx";
import FlexibleEarningSection from "./components/FlexibleEarningSection.jsx";
import SafetySection from "./components/SafetySection.jsx";

import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Press from "./components/Press.jsx";
import Ads from "./components/Ads.jsx";

function App() {
  return (
    <>
      <ScrollToTop />   {/* ⭐ ADD THIS -- ensures scroll to top on page change */}

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <QuickRidesSection />
              <FlexibleEarningSection />
              <SafetySection />
              <Ads />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
