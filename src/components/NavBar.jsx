import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
      <nav className='navbar'>
          <div className='navbar-brand'>
              <Link to='/' className='navbar-brand-link'>Movie Explorer App</Link>
          </div>
          <div className='navbar-links'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/favorites' className='nav-link'>Favorites</Link>
          </div>
    </nav>
  )
}

export default Navbar;