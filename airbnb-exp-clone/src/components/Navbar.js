import React from 'react'
import airbnbLogo from '../images/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav>
      <img className='nav-logo' src={airbnbLogo} alt="Logo" />
    </nav>
  )
}

export default Navbar