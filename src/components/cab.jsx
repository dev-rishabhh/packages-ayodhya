import React from 'react'

export default function cab({ data }) {
  const { name, image, station, roundtrip, oneway, fullday } = data

  const handleCall = () => {
    window.location.href = 'tel:+918960967852';
  }
  return (
    <article className='taxi'>
      <h2>{name}</h2>
      <img src={`/images/${image}`} alt='Cab Image' loading='lazy' />
      <div className='info'>
        <p>Airport/Station Pickup/Drop: &#8377;{station}</p>
        <p>One way: &#8377;{oneway}/km</p>
        <p>Round Trip: &#8377;{roundtrip}/km</p>
        <p>Full Day/80KM = &#8377;{fullday}</p>
      </div>
      <div className='book-btn-cont' onClick={handleCall}>
        <button className='book-btn' name='cab booking button'>Book Now</button>
      </div>
    </article>
  )
}
