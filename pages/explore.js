import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head'; 
import PostsView from '../components/explore/map/postsview';
import Map from '../components/explore/map/map';
import MapSideBar from '../components/explore/map/map_side_bar'; 

export default function Explore  ({ data }) { 
    const [toggleView, setToggleView] = useState("off");
    console.log(data);
    function toggleMapView() {
      //toggles map and post view
      setToggleView(toggleView === "off" ? "on" : "off");
    }

    return (
      <Layout>
        <Head>
          <title>Explore - Ecocrypt.org </title> 
          <meta name="description" content="See live updates, reports, and status of environmental pollution near your. Help identify and report environmental pollution!"/>
        </Head>
        <div className="page explore">
          <h1 className="title">Explore</h1>
          <p className="desc">See the status of enviormental pollution around the world</p>
          <ul className="explore-tabs">
            <li className="active">Reports</li>
            <li>Unresovled</li>
            <li>Hotspots</li>
            <li>Topics</li>
          </ul> 
          <div className="explore-section">
            <div className={`switch ${toggleView}`} onClick={toggleMapView} >
              <span>{toggleView === "off" ? "🌎 Map" : "👥 Posts"}</span>
            </div>
            <MapSideBar/> 
            {
              toggleView === "off" ?  <PostsView data={data}/> :  <Map/> 
            }
            {/* <MapSideBar/>
            <PostsView data={data}/> */}
            {/* <Map/> */}
          </div>
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