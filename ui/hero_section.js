import React from 'react'

export default function HeroSection() {
  return (
    <div className="section">
      <div className="hero-section">
           <div className="hero-section-1">
                <h1 className="hero-title">EcoCrypt.org</h1>
                <p className="hero-desc">A social network to enforce enviromental laws</p>
                <div className="buttons">
                  <button><span>Learn More</span></button>
                  <button><span>Get Started</span></button>
                </div>
           </div>
           <div className="hero-section-2">
             <img src="https://wallpapercave.com/wp/hxU3cUn.jpg" alt="stock photo to be removed"/>
           </div>
      </div>
    </div>
  )
}
