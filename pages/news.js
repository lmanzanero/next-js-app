import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ArticleCard from '../components/articles/article_card';

export default function News  () {
    return (
      <Layout>
         <Head>
          <title>News - Ecocrypt.org </title> 
          <meta name="description" content="Read academic articles, case studies, and educational articles about the environemtal and pollution."/>
        </Head>
        <div className="page news">
          <h1 className="title">Learn about the environment and more!</h1>
          <p className="desc">Academic and peer reviewed articles to educate society about the environment!</p>
          <ArticleCard/>
          <ArticleCard/>
        </div>
      </Layout>
    )
}