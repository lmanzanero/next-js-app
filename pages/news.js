import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ArticleCard from '../components/articles/article_card';

export default function News  () {
    return (
      <Layout>
         <Head>
          <title>News - Ecocrypt.org </title> 
        </Head>
        <div className="page news">
          <h1 className="title">Learn about the environment and more!</h1>
          <ArticleCard/>
        </div>
      </Layout>
    )
}