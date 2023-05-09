import React from 'react'
import { Link } from 'react-router-dom'


const BlogPosts = ({ blogPost, onDelete }) => {

return (
    <div className='blog-wrapper'>
      <Link to={`/posts/${blogPost.id}`} className='post-item'>
        <div className='blog-details'>

          <div className='blog-desc'>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.body}</p>
          </div>
        </div>
      </Link>
      <button onClick={() => onDelete(blogPost.id)} className='remove-btn'>remove post</button>
    </div>
  )
}

export default BlogPosts