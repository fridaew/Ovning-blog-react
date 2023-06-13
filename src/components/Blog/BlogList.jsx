import { useState } from 'react'
import BlogPosts from '../../pages/BlogPosts'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'


const BlogList = ({user}) => {

  if (user == null) { // om vi inte har en användare så navigerar vi oss till logga in sidan. Om vi har en användare hoppar vi över detta steg och gör nästa
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://blog-test-api-nt7u.onrender.com/posts?userId='+ user.user.id) // hämtar bara post från den som är inloggad
      if (!res.ok) {
        console.log(res.statusText);
        return
      }
      const data = await res.json()
      setBlogs(data)
      console.log(data);
    }
    getPosts()
  }, [])

  const handleDelete = async (id) => {
    const res = await fetch(`https://blog-test-api-nt7u.onrender.com/posts${id}`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      console.log(res.statusText)
      return
    }
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
  }




  return (
    <div className='Blogs'>
      {blogs && blogs.map((blog) => (
        <BlogPosts className='blogs-details' key={blog.id} blogPost={blog} onDelete={handleDelete} />
      ))}
    </div>
  )

}

export default BlogList