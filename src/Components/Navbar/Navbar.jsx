import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <div className='Navlogo'>
            <h1>Tasker</h1>
        </div>
        <ul className='Nav-menu'>
            <Link to={"/LoginPage"}><button className='Nav-btn'>Login</button></Link>
            <Link to={"/SignupPage"}><button className='Nav-btn' >Sign Up</button></Link>
        </ul>

    </nav>
  )
}

export default Navbar