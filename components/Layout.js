import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout  (props) {
    return (
      <div> 
        <Head>
          <title>EcoCrypt.org</title>
          <link rel="icon" href="/icons/planet-earth.svg" type="image/png" />
        </Head>
        <Header/>
        {props.children}
        <Footer/>
      </div>
    )
}