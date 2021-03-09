
import React, { useState, useEffect, useRef } from 'react'; 
import Layout from '../components/Layout';
import Head from 'next/head';
import AppPromoSection from '../ui/app_promo_section';
import Features from '../ui/features_section';
import HeroSection from '../ui/hero_section';
import HighlightsSection from '../ui/highlights_section';
import HowItWorksSection from '../ui/how_it_works_section';
import BettTtesingSection from '../ui/betta_tesing_section';

function App() {
  return (
    <Layout>
       <Head>
          <title>EcoCrypt.org - A social network to enforce environmental laws</title>
          <link rel="icon" href="/icons/planet-earth.svg" type="image/png" />
          <meta name="google-site-verification" content="kLIHlMJptobkvx6CYO5iWIzsCF3LUy2CrwthXExk9Z4" />
        </Head>
      <HeroSection/>
      <Features/>
      <HowItWorksSection/>
      <AppPromoSection/>
      <BettTtesingSection/>
      <HighlightsSection/>
    </Layout>
  );
}

export default App;
