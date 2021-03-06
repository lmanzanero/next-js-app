import React from 'react'

export default function BettTtesingSection() {
  return (
    <div className="section beta-promotion">
        <h2>Become a beta Tester Today</h2>
        <p className="desc">Help us launch by testing our platform!</p>
        <div className="input-row">
            <input type="email" id="login" className="fadeIn second" name="login" placeholder="email"/>
            <button><span>Get Invited</span></button>
        </div>
    </div>
  )
}
