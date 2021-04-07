import React from 'react'
import Map from './map'
import MapSideBar from './map_side_bar'

export default function MapView() {
  return (
    <div className="map-view-container">
      <MapSideBar/>
      <Map/>
    </div>
  )
}
