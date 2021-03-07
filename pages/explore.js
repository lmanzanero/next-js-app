import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Reports from '../components/explore/reports';
import Topics from '../components/explore/topics';
import Unresolved from '../components/explore/unresolved';
import Contributors from '../components/explore/contributors';

export default function Explore  () {
  const [tabIndex, setTabIndex] = useState(0);
    return (
      <Layout>
        <Head>
          <title>Explore - Ecocrypt.org </title> 
        </Head>
        <div className="page explore">
          <h1 className="title">Explore - See the status of enviormental pollution around the world</h1>
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>
              <Tab>Reports</Tab>
              <Tab>Topics</Tab>
              <Tab>Unresolved</Tab>
              <Tab>Contributors</Tab>
            </TabList>
            <TabPanel>
              <Reports/>
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
          <div className="more-section">
            <h2>More ways to explore</h2>
            <div className="more-row">
              <div className="content">
                <img src="https://specials-images.forbesimg.com/imageserve/5efc9a2df5e132000839a2f1/960x0.jpg?fit=scale" alt=""/>
                <div className="title">Explore Statistics</div>
                <div className="desc">Explore hotspots near you and around the world!</div>
              </div>
              <div className="content">
                <img src="https://specials-images.forbesimg.com/imageserve/5efc9a2df5e132000839a2f1/960x0.jpg?fit=scale" alt=""/>
                <div className="title">Explore Statistics</div>
                <div className="desc">Explore hotspots near you and around the world!</div>
              </div>
              <div className="content">
                <img src="https://specials-images.forbesimg.com/imageserve/5efc9a2df5e132000839a2f1/960x0.jpg?fit=scale" alt=""/>
                <div className="title">Explore Statistics</div>
                <div className="desc">Explore hotspots near you and around the world!</div>
              </div>
              <div className="content">
                <img src="https://specials-images.forbesimg.com/imageserve/5efc9a2df5e132000839a2f1/960x0.jpg?fit=scale" alt=""/>
                <div className="title">Explore Statistics</div>
                <div className="desc">Explore hotspots near you and around the world!</div>
              </div>
            </div> 
          </div>
        </div>
      </Layout>
    )
}