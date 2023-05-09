import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa" //importera icons


const Navbar = ({ user , setUser}) => {
  return (
    <nav className='navbar'>
      <Link to="/" className='Logo'><h2>Blog</h2><div className='pen-logo'><FaPencilAlt /></div></Link>
      <ul>

        {user ? ( // Om user är true så isar vi detta (truthy värde)
          <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add">Create New Post</NavLink></li>
            <li><NavLink to="/posts">Wiew all posts</NavLink></li>
            <li><Link to="/login" onClick={()=> setUser(null)}>Logout</Link></li> 
            {/* När vi klickar på logga ut knappen tömmer vi våran användare och går tillbaka till null,sen så kommer vi tillbaka till logga in sidan(se ovan) */}
          </>
        ) : ( //Om user är false så visar vi detta (falsy värde)
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </>
        )}




      </ul>
    </nav>
  )
}

export default Navbar