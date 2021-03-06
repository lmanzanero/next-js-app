import React from 'react'

export default function UserCard() {
  return (
    <div class="profile-card">
        <div class="cover"></div>
        <div class="profile">
          <div class="pic"></div>
          <div class="above-fold">
            <div class="name">
              Luis Manzanero
            </div>
            <div class="role">
              Environmental Scientist
            </div>
            <div class="location">
              <i class="fas fa-map-marker-alt"></i>San Ignacio, Belize
            </div>
            <div class="row">
              <div class="button">
                FOLLOW
              </div>
              <div class="button">
                View
              </div>
            </div> 
          </div> 
            <div class="row stats">
              <div class="stat">
                <label>Posts</label>
                <div class="num">
                  0
                </div>
              </div>
              <div class="stat">
                <label>Followers</label>
                <div class="num">
                  0
                </div>
              </div>
              <div class="stat">
                <label>Following</label>
                <div class="num">
                  0
                </div>
              </div>
            </div>
          </div>
      </div> 
  );
}
