import React, { useState, useEffect, useRef } from 'react'; 
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Register() {
  return (
    <Layout>
       <Head>
          <title>Register - Ecocrypt.org </title> 
        </Head>
        <div className="page">
        <div className="auth-section">
          <h1 className="title">Register</h1>
          <div className="desc">Create your Ecocrypt account and start contributing!</div>
          <form>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username"/>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="Email"/>
              <div className="desc">Confirm password</div>
              <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
              <input type="text" id="password" className="fadeIn third" name="login" placeholder="password confirmation"/>
              <input type="button" className="fadeIn fourth" value="Log in" />
          </form>
          <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
