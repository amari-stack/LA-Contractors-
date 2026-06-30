/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [estimateDetails, setEstimateDetails] = useState({
    service: '',
    size: '',
    total: '',
  });

  const handleBookNowTrigger = () => {
    // Scroll directly to contact form
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleExploreWorkTrigger = () => {
    // Scroll directly to work/portfolio section
    const element = document.getElementById('work');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookServiceTrigger = (serviceName: string) => {
    setEstimateDetails({
      service: serviceName,
      size: 'Standard Contract Run',
      total: 'Proposal Under Evaluation',
    });
  };

  const handleApplyEstimateTrigger = (details: { service: string; size: string; total: string }) => {
    setEstimateDetails(details);
  };

  const handleClearEstimateDetails = () => {
    setEstimateDetails({
      service: '',
      size: '',
      total: '',
    });
  };

  return (
    <div id="la-contractors-app" className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Top Header Navigation */}
      <Header onBookNow={handleBookNowTrigger} />

      <main id="app-main-content">
        {/* 1. Hero Section */}
        <Hero 
          onBookNow={handleBookNowTrigger} 
          onExploreWork={handleExploreWorkTrigger} 
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Services / Programs Section */}
        <Services onBookService={handleBookServiceTrigger} />

        {/* Dynamic Pricing Estimator Section (Supporting [PRICING] Nav) */}
        <Pricing onApplyEstimate={handleApplyEstimateTrigger} />

        {/* 4. Portfolio / Testimonials Section */}
        <Work />

        {/* 5. Contact Section */}
        <Contact 
          initialService={estimateDetails.service}
          initialSize={estimateDetails.size}
          initialTotal={estimateDetails.total}
          onClearInitial={handleClearEstimateDetails}
        />
      </main>

      {/* 6. Footer Section */}
      <Footer />
    </div>
  );
}
