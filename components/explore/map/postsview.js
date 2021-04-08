import React from 'react'
import Post from '../posts/post'  

export default function PostsView({ data }) { 
  return (
    <div className="posts-view-container">  
      {
        data.map((postdata, key)=> {
          return <Post data={postdata} key={key}/>
        })
      } 
    </div>
  )
}
