import React from 'react'

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import BlogList from './components/Blog/BlogList'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Details from './pages/Details'

import Create from './pages/Create'

import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {



  const [posts, setPosts] = useState([])

  const [user, setUser] = useState(null)

  return (
    <div>
      <Navbar user={user} setUser={setUser}/>
      <div className='container'>
        <Routes>
          <Route path='/'element={<Home user={user}/>}/>
          <Route path='/add' element={<Create user ={user} setPosts={setPosts}/>} />
          <Route path='/posts' element={<BlogList user ={user} posts={posts} setPosts={setPosts}/>} />
          <Route path='/posts/:id' element={<Details user ={user} posts={posts} setPosts={setPosts}/>} />

          <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
          <Route path='/register' element={<Register user={user} setUser={setUser}/>} />
        </Routes>
    </div>

 
</div>
  )
}

export default App
 