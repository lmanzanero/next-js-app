import React from 'react'

export default function UserCard() {
  return (
    <div className="profile-card">
        <div className="cover"></div>
        <div className="profile">
          <div className="pic"></div>
          <div className="above-fold">
            <div className="name">
              Luis Manzanero
            </div>
            <div className="role">
              Environmental Scientist
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>San Ignacio, Belize
            </div>
            <div className="row">
              <div className="button">
                FOLLOW
              </div>
              <div className="button">
                View
              </div>
            </div> 
          </div> 
            <div className="row stats">
              <div className="stat">
                <label>Posts</label>
                <div className="num">
                  0
                </div>
              </div>
              <div className="stat">
                <label>Followers</label>
                <div className="num">
                  0
                </div>
              </div>
              <div className="stat">
                <label>Following</label>
                <div className="num">
                  0
                </div>
              </div>
            </div>
          </div>
      </div> 
  );
}
