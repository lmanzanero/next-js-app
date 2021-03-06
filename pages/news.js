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
          <ArticleCard/>
        </div>
      </Layout>
    )
}