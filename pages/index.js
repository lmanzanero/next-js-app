
import React, { useState, useEffect, useRef } from 'react'; 
import Layout from '../components/Layout';
import AppPromoSection from '../ui/app_promo_section';
import Features from '../ui/features_section';
import HeroSection from '../ui/hero_section';
import HighlightsSection from '../ui/highlights_section';
import HowItWorksSection from '../ui/how_it_works_section';

function App() {
  return (
    <Layout>
      <HeroSection/>
      <Features/>
      <HowItWorksSection/>
      <AppPromoSection/>
      <HighlightsSection/>
    </Layout>
  );
}

export default App;
