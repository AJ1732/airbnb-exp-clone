// import React from 'react'

// const data = () => {
//   return (
//     <div>data</div>
//   )
// }

import img1 from '../images/swim-event.png'
import img2 from '../images/wedding-dress.png'
import img3 from '../images/mountain-bike.png'

const data = [
  {
    id: 1,
    img: img1,
    desc: "Life lessons with Katie Zaferes",
    stats: {
      rating: "5.0",
      reviewCount: "6",
    },
    country: "USA",
    price: "136",
    location: "Online",
    openSpots: 0,
  },
  {
    id: 2,
    img: img2,
    desc: "Learn wedding photography",
    stats: {
      rating: "5.0",
      reviewCount: "30",
    },
    country: "USA",
    price: "125",
    location: "Online",
    openSpots: 6,
  },
  {
    id: 1,
    img: img3,
    desc: "Group Mountain Biking",
    stats: {
      rating: "4.8",
      reviewCount: "2",
    },
    country: "USA",
    price: "50",
    location: "Online",
    openSpots: 50,
  },

]

export default data









{/* <div className="card">
        <div className='in-stock'>
            <p>ONLINE</p>
        </div>

        <img src={img2} alt="" />

        <div className="card-group">
          <div className="rating">
            <img className='star' src={star} alt="star" />
            <span className="rate">5.0</span>
            <span className="figure">(30) | USA</span>
          </div>
          
          <p className='desc'>Learn wedding photography</p>
          <p className='pricing'><span className='bold'>From $125</span> / person</p>
        </div>
      </div>

      <div className="card">
        <div className='in-stock'>
            <p>SOLD OUT</p>
        </div>

        <img src={img3} alt="" />

        <div className="card-group">
          <div className="rating">
            <img className='star' src={star} alt="star" />
            <span className="rate">4.8</span>
            <span className="figure">(2) | USA</span>
          </div>
          
          <p className='desc'>Group Mountain Biking</p>
          <p className='pricing'><span className='bold'>From $50</span> / person</p>
        </div>
      </div> */}