import React from 'react'

export default function HighlightsSection() {
  return (
    <div className="section highlights">
     <h1 className="title">Featured Articles</h1>
     <p className="desc">Peered reviewed articles from our community</p>
     <div className="highlights-section">
        <div className="articles">
          <div className="article">
            <img src="https://avatars.githubusercontent.com/u/48746942?s=280&v=4" alt=""/>
            <h2 className="article-title">
              What is EcoCrypt.org?
            </h2>
            <p className="author">Luis Manzanero</p>
            <p className="article-exerpt">
               Ecocrypt.org is a social network that helps gather information about pollution or environmental crimes around the world.
            </p>
            <button><span>Read More</span></button>
          </div>
          <div className="article">
            <img src="https://www.iberdrola.com/wcorp/gc/prod/en_US/comunicacion/green_data_1_res/Green_data_746x419.jpg" alt=""/>
            <h2 className="article-title">
              How data can help enforce enviormental laws
            </h2>
            <p className="author">Luis Manzanero</p>
            <p className="article-exerpt">
               Data can help authorities and scientist make better decisions for a more sustainable earth!
            </p>
            <button><span>Read More</span></button>
          </div>
          <div className="article">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo_ykGExeA2yrB0PWFqI4mtEbDRsro4P8OQ&usqp=CAU" alt=""/>
            <h2 className="article-title">
              Help save Riparian Forests!
            </h2>
            <p className="author">Luis Manzanero</p>
            <p className="article-exerpt">
            A riparian forest or riparian woodland is a forested or wooded area of land adjacent to a body of water such as a river, stream, pond, lake, marshland, estuary, canal, sink or reservoir.
            </p>
            <button><span>Read More</span></button>
          </div>
        </div>
     </div>
     <button><span>See More</span></button>
    </div>
  )
}
