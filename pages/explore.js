import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { fetchAPI } from '../services/api/ArticleService';
import Reports from '../components/explore/reports';
import Topics from '../components/explore/topics';
import Unresolved from '../components/explore/unresolved';
import Contributors from '../components/explore/contributors';

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
              <Tab>Trending</Tab>
              <Tab>Topics</Tab>
              <Tab>Unresolved</Tab>
              <Tab>Hotspots</Tab>
            </TabList>
            <TabPanel>
              <Reports data={data}/>
            </TabPanel>
            <TabPanel>
              <Topics/>
            </TabPanel>
            <TabPanel>
              <Unresolved/>
            </TabPanel>
            <TabPanel>
              <Contributors/>
            </TabPanel>
          </Tabs>
          {/* <div className="more-section">
            <h2>More ways to explore</h2>
            <div className="more-row">
              <div className="content">
                <img src="https://specials-images.forbesimg.com/imageserve/5efc9a2df5e132000839a2f1/960x0.jpg?fit=scale" alt=""/>
                <div className="title">Explore Hotspots</div>
                <div className="desc">Explore hotspots near you and around the world!</div>
              </div>
              <div className="content">
                <img src="https://kinsta.com/wp-content/uploads/2017/10/wordpress-charts-2.png" alt=""/>
                <div className="title">Explore Charts</div>
                <div className="desc">Visual data from contributors with bar charts and more!</div>
              </div>
              <div className="content">
                <img src="https://cdn.vox-cdn.com/thumbor/XGWCZqwUTWea0BgzpOf9lJ9Y5uE=/0x0:1221x787/1200x800/filters:focal(514x297:708x491)/cdn.vox-cdn.com/uploads/chorus_image/image/60732143/Screen_Shot_2018_08_05_at_10.37.13_AM.0.png" alt=""/>
                <div className="title">View cases near your location!</div>
                <div className="desc">Explore hotspots near you and around the world!</div>
              </div>
              <div className="content">
                <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/11/Screen-Shot-2017-11-07-at-10.05.41.png" alt=""/>
                <div className="title">Help Resolve issues!</div>
                <div className="desc">Ensure that issues are being resolved with your evidence!</div>
              </div>
            </div> 
          </div> */}
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