import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { fetchAPI } from '../services/api/ArticleService';
import Reports from '../components/explore/reports';
import Topics from '../components/explore/topics';
import Unresolved from '../components/explore/unresolved';
import Contributors from '../components/explore/contributors';
import MapView from '../components/explore/map/mapview';
import MapSideBar from '../components/explore/map/map_side_bar';

export default function Explore  ({ data }) {
  const [tabIndex, setTabIndex] = useState(0);
  //https://jsonplaceholder.typicode.com/users
    return (
      <Layout>
        <Head>
          <title>Explore - Ecocrypt.org </title> 
          <meta name="description" content="See live updates, reports, and status of environmental pollution near your. Help identify and report environmental pollution!"/>
        </Head>
        <div className="page explore">
          <h1 className="title">Explore</h1>
          <p className="desc">See the status of enviormental pollution around the world</p>
          <Tabs  selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList className="explore-tabs">
              <Tab>Reports</Tab>
              <Tab>Unresolved</Tab>
              <Tab>Hotspots</Tab>
              <Tab>Topics</Tab>
            </TabList>
            <div className="explore-section">
            <MapSideBar/>
            <MapView data={data}/>
          </div>
          </Tabs> 
        </div>
      </Layout>
    )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
  const data = await response.json();

  return {
    props: { data },
    revalidate: 1,
  };
}