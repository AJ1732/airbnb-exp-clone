import React from 'react'

import star from '../images/star.png'

const Card = (props) => {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }


  return (
    <section>
      <div className="card">
        {badgeText && 
          <div className='in-stock'>
            <p>{badgeText}</p>
          </div>
        }

        <img src={props.img} alt="" />

        <div className="card-group">
          <div className="rating">
            <img className='star' src={star} alt="star" />
            <span className="rate">{props.stats.rating}</span>
            <span className="figure">({props.stats.reviewCount}) | {props.country}</span>
          </div>
          
          <p className='desc'>{props.desc}</p>
          <p className='pricing'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
      </div>
    </section>
  )
}

export default Card