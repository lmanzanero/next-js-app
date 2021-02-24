import React from 'react'

export default function AppPromoSection() {
  return (
    <div className="section">
      <div className="app-promo-section">
        <div className="promo-details">
          <h2 className="title">Explore from anywhere!</h2>
          <p className="desc">You can contribute and address to any illegal activity happening in your community. Protecting and enforcing our enviromental laws is now much easier throught our platforms!</p>
          <div className="platforms">
            <div className="platform">
              <img src="https://cdn.freebiesupply.com/logos/large/2x/get-it-on-google-play-logo-png-transparent.png" alt=""/>
            </div> 
            <div className="platform">
              <img src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store-1.svg" alt=""/>
            </div> 
          </div>
        </div>
        <div className="app-screens">
          <div className="screen">
            <img src="http://assets.stickpng.com/thumbs/5cb0633d80f2cf201a4c3253.png" alt="Phone screen"/>
          </div>
          <div className="screen">
            <img src="http://assets.stickpng.com/thumbs/5cb0633d80f2cf201a4c3253.png" alt="Phone screen"/>
          </div>
          <div className="screen">
            <img src="http://assets.stickpng.com/thumbs/5cb0633d80f2cf201a4c3253.png" alt="Phone screen"/>
          </div>
        </div>
      </div>
    </div>
  )
}
