import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomeSection from './Pages/HomeSection.jsx';
import AboutSection from './Pages/AboutSection.jsx';
import ServicesSection from './Pages/ServicesSection.jsx';
import ContactSection from './Pages/ContactSection.jsx';
import PrivacySection from './Pages/PrivacySection.jsx';
import TermsSection from './Pages/TermsSection.jsx';
import SupportSection from './Pages/SupportSection.jsx';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about-us" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/privacy-policy" element={<PrivacySection />} />
          <Route path="/terms-of-service" element={<TermsSection />} />
          <Route path="/support" element={<SupportSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;