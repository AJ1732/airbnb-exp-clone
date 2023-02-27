import React from 'react'

import photoGrid from '../images/photo-grid.png'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-img-div'>
        <img className='hero-img' src={photoGrid} alt="hero-grid" />
      </div>
      <div className="hero-content">
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  )
}

export default Hero