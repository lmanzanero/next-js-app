import React, { useState, useEffect, useRef } from 'react'; 
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
       <Head>
          <title>Login - Ecocrypt.org </title> 
        </Head>
      <div className="page">
        <h1>Login</h1>
      </div>
    </Layout>
  );
}
