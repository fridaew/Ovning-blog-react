import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from '../assets/kaktus.jpg'

const Details = () => {

  const [post, setPost] = useState(null)
  const { id } = useParams()


  useEffect(() => {

    const getPost = async () => {
      const res = await fetch('http://localhost:3000/posts/' + id)
      const data = await res.json()
      setPost(data)
    }

    getPost()

  }, [])
  return (
    <div>

     
      {post && (
        <div className='details-card'>
          <img src={img} alt="" className='details-img' />
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}


    </div>
  )
}

export default Details