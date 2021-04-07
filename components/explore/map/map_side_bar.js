import React from 'react'

export default function MapSideBar() {
  return (
    <div className="map-side-bar">
      <input type="search" placeholder="Search" />
      <div className="current-location">
        <span></span> <h3>Current Location</h3>
      </div>
      <ui className="map-stories-container">
        <div className="title">Trending</div> 
        <li className="story">
          <img src="https://avatars.githubusercontent.com/u/20497361?s=460&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4"/>
          <div className="story-details">
            <p className="story-title">Pollution</p>  
            <span>San Ignacio, Belize</span>
          </div>
        </li>
        <li className="story">
          <img src="https://avatars.githubusercontent.com/u/20497361?s=460&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4"/>
          <div className="story-details">
            <p className="story-title">Pollution</p> 
            <span>San Ignacio, Belize</span>
          </div>
        </li>
        <li className="story">
          <img src="https://avatars.githubusercontent.com/u/20497361?s=460&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4"/>
          <div className="story-details">
            <p className="story-title">Pollution</p> 
            <span>San Ignacio, Belize</span>
          </div>
        </li>
      </ui>
    </div>
  )
}
