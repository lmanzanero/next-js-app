import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Community  () {
    return (
      <Layout>
        <Head>
          <title>Community - Ecocrypt.org </title> 
        </Head>
        <div className="page community">
        <h1 className="title">Connect and learn with our community</h1>
        <br/>
        <div class="profile-card">
          <div class="cover"></div>
          <div class="profile">
            <div class="pic"></div>
            <div class="above-fold">
              <div class="name">
                Luis Manzanero
              </div>
              <div class="role">
                Environmental Scientist
              </div>
              <div class="location">
                <i class="fas fa-map-marker-alt"></i>Gouda, the Netherlands
              </div>
              <div class="row">
                <div class="button">
                  FOLLOW
                </div>
                <div class="button">
                  MESSAGE
                </div>
              </div> 
            </div> 
              <div class="row stats">
                <div class="stat">
                  <label>Posts</label>
                  <div class="num">
                    0
                  </div>
                </div>
                <div class="stat">
                  <label>Followers</label>
                  <div class="num">
                    0
                  </div>
                </div>
                <div class="stat">
                  <label>Following</label>
                  <div class="num">
                    0
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div> 
      </Layout>
    )
}