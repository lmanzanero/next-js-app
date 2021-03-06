import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import UserCard from '../components/profiles/user_card';

export default function Community  () {
    return (
      <Layout>
        <Head>
          <title>Community - Ecocrypt.org </title> 
        </Head>
        <div className="page community">
        <h1 className="title">Connect and learn with our community</h1>
        <br/>
        <UserCard/>
        </div>
      </Layout>
    )
}