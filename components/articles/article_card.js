import React from 'react'
import Image from '../image'
import Link from "next/link";

export default function ArticleCard({ article }) { 
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <div className="article-card">
      <div className="img-container">
        <Image image={article.image} />
      </div>
      <div className="content">
        <div className="categories">
          <a href="#" className="cat">#waterpollution</a>
        </div>
         <h1 className="title">{article.title}</h1>
         <p className="exerpt">{article.Seo.metaDescription}</p>
         <div className="author">
           <div className="profile-img">
           <img src={article.user.image.formats.thumbnail.url} alt=""/>
          </div> 
          <div className="name">{article.user.username}</div>
          <div className="date">1 day ago</div> 
         </div>
      </div>
    </div> 
    </Link>
  )
}
