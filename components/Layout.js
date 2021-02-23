import React from 'react';
import Head from 'next/head';
import Footer from './Footer'; 
import Header from './Header';


export default function Layout  (props) {
    return (
      <div>
        <Head>
          <link rel="icon" href="/icons/planet-earth.svg" type="image/png" />
        </Head>
        <Header/>
        {props.children}
        <Footer/>
      </div>
    )
}