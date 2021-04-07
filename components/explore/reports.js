import React from 'react'
import MapView from './map/mapview'

export default function Reports({ data }) {
  return (
    <div className="explore-section"> 
      {/* Sticky Side bar here */}
      <MapView data={data}/>
    </div>
  )
}
