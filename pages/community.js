import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import UserCard from '../components/profiles/user_card';
import UserRow from '../components/profiles/user_row';

export default function Community  () {
    return (
      <Layout>
        <Head>
          <title>Community - Ecocrypt.org </title> 
          <meta name="description" content="Connect with concerned citizens, authors and environmental scientist to enforce and protect our enviornment!"/>
        </Head>
        <div className="page community">
        <h1 className="title">Connect and learn with our community</h1>
        <p className="desc">Protecting our enviornment has never been more important. Connect with others to start enforcing our environmental laws!</p>
        <section>
          <h3 className="section-title">Latest Top Contributors</h3> 
          <div className="contributors-row">
            <div className="contributors-col">
                <div className="contributors top-contributors">
                  <h5>Most Reports</h5>
                  <UserRow/>
                </div>
            </div>
            <div className="contributors-col"> 
                <div className="contributors top-contributors">
                  <h5>Most Reports</h5>
                  <UserRow/>
                </div>
            </div>
            <div className="contributors-col"> 
                <div className="contributors top-contributors">
                  <h5>Most Reports</h5>
                  <UserRow/>
                </div>
            </div>
          </div>
        </section> 
        <section>
          <h3 className="section-title">2020 Top Contributors</h3> 
          <div className="contributors-row">
            <div className="contributors-col">
                <div className="contributors top-contributors">
                  <h5>Most Reports</h5>
                  <UserRow/>
                </div>
            </div>
            <div className="contributors-col"> 
                <div className="contributors top-contributors">
                  <h5>Most Reports</h5>
                  <UserRow/>
                </div>
            </div>
            <div className="contributors-col"> 
                <div className="contributors top-contributors">
                  <h5>Most Reports</h5>
                  <UserRow/>
                </div>
            </div>
          </div>
        </section> 
        <section>
          <h3 className="section-title">Near you</h3> 
          <div className="community-row">
            <UserCard/>
            <UserCard/>
            <UserCard/>
          </div>
        </section>
        </div>
      </Layout>
    )
}