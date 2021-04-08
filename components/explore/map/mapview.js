import React from 'react'
import Post from '../posts/post'
import Map from './map'
import MapSideBar from './map_side_bar'

export default function MapView({ data }) { 
  return (
    <div className="map-view-container">
      {/* <MapSideBar/> */}
      {/* <Map/> */}
      {
        data.map((postdata, key)=> {
          return <Post data={postdata} key={key}/>
        })
      } 
    </div>
  )
}
