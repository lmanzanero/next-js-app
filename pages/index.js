
import React, { useState, useEffect, useRef } from 'react'; 
import Layout from '../components/Layout';
import Head from 'next/head';
import AppPromoSection from '../ui/app_promo_section';
import Features from '../ui/features_section';
import HeroSection from '../ui/hero_section';
import HighlightsSection from '../ui/highlights_section';
import HowItWorksSection from '../ui/how_it_works_section';

function App() {
  return (
    <Layout>
       <Head>
          <title>EcoCrypt.org - A social network to enforce environmental laws</title>
          <link rel="icon" href="/icons/planet-earth.svg" type="image/png" />
        </Head>
      <HeroSection/>
      <Features/>
      <HowItWorksSection/>
      <AppPromoSection/>
      <HighlightsSection/>
    </Layout>
  );
}

export default App;
