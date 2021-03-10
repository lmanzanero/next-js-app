import React from 'react'

export default function HighlightsSection() {
  return (
    <div className="section highlights">
     <h1 className="title">Featured Articles</h1>
     <p className="desc">Peered reviewed articles from our community</p>
     <div className="highlights-section">
        <div className="articles">
          <div className="article">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo_ykGExeA2yrB0PWFqI4mtEbDRsro4P8OQ&usqp=CAU" alt=""/>
            <h2 className="article-title">
              Importance of the Riparian Forest
            </h2>
            <p className="author">Author</p>
            <p className="article-exerpt">
               A riparian forest or riparian woodland is a forested or wooded area of land adjacent to a body of water such as a river, stream, pond, lake, marshland, estuary, canal, sink or reservoir.
            </p>
            <button><span>Read More</span></button>
          </div>
          <div className="article">
            <img src="https://lh3.googleusercontent.com/proxy/yRi9mvBHQU6Rw5pN786JPnrwx26nO-KMeyOlpQBTKFX76pCUHQy9ZVF5-AqbcgwqxJSCBgOehpQjHp8WRTfdPL8FLIQWcsEwmNrl1lis0B8ZeKu2a4WAykdNcLEBoC7fIoLqoceYjNc1rcL2gxgHj1laE7c7MI29SiNx2Ck" alt=""/>
            <h2 className="article-title">
              Mangroves with super powers!
            </h2>
            <p className="author">Author</p>
            <p className="article-exerpt">
            A riparian forest or riparian woodland is a forested or wooded area of land adjacent to a body of water such as a river, stream, pond, lake, marshland, estuary, canal, sink or reservoir.
            </p>
            <button><span>Read More</span></button>
          </div>
          <div className="article">
            <img src="https://i.unu.edu/media/ourworld.unu.edu-en/article/5776/waste.jpg" alt=""/>
            <h2 className="article-title">
              The life of garbage!
            </h2>
            <p className="author">Author</p>
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
