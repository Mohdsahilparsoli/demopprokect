

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
        <>  
        
        <header>

            <ul className='navlink'>
                <li><NavLink  to={"/"}    >Home</NavLink></li>
                <li><NavLink    to={"/posts"} >Posts</NavLink></li>
                <li><NavLink   to={"/contact"} >Contact</NavLink></li>
                <li><NavLink     to={"/services"} >Services</NavLink></li>
            </ul>
        </header>
          </>
  )
}

export default Header