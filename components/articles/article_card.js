import React from 'react'

export default function ArticleCard() {
  return (
    <div className="article-card">
      <div className="img-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Riparian_strip.jpg"/>
      </div>
      <div className="content">
        <div className="categories">
          <a href="#" className="cat">#waterpollution</a>
        </div>
         <h1 className="title">The importance of the Riparian Forest</h1>
         <p className="exerpt">A riparian forest or riparian woodland is a forested or wooded area of land adjacent to a body of water such as a river, stream, pond, lake, marshland, estuary, canal, sink or reservoir.</p>
         <div className="author">
           <div className="profile-img">
           <img src="https://avatars.githubusercontent.com/u/20497361?s=460&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4" alt=""/>
          </div> 
          <div className="name">Luis Manznaero</div>
          <div className="date">1 day ago</div>
         </div>
      </div>
    </div>
  )
}
