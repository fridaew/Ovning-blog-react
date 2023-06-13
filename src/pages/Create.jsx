import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Create = ({ setPosts, user }) => {

  if (user == null) { // om vi inte har en användare så navigerar vi oss till logga in sidan. Om vi har en användare hoppar vi över detta steg och gör nästa
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    const post = {
      userId: user.user.id,
      title: title,
      body: body,
    

    }

 

    try {
      const res = await axios.post('https://blog-test-api-nt7u.onrender.com/posts', post, {
        headers: {
          authorization: 'Bearer' + user.token
        }
      })
      const newPost = res.data
      console.log(newPost)
      if (res.status === 201) {
        navigate('/posts')
      }

      setTitle('') //tömmer input
      setBody('')

      setPosts((prevPosts) => [...prevPosts, newPost])

    } catch (error) {
      console.log(error)
    }
  }

  return (

    <form noValidate onSubmit={handleSubmit}>
      <h2>Write new blog post: </h2>
      <div className="form-group">
        <label htmlFor="title">Title: </label>
        <input type="text" name='title' id='title' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="body">post: </label>
        <textarea placeholder="Skriv något..." name="body" id="body" cols="30" rows="10" className='form-control' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      </div>

    
      <button className='form-btn'>publish</button>
    </form>
  )

}

export default Create

