import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
const NavBar = () => {
    
    
    //const searchForName = 
    

  return (
      <nav className='navbar'>
        <ul><li><NavLink className='link' to='/'>Home</NavLink></li></ul>  
    </nav>
  )
}

export default NavBar