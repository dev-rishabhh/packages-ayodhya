import React from 'react'

export default function places({data}) {
    const {name,image,desc}=data
  return (
    <article className='place'>
    <h2 className='place-name'>{name}</h2>
    <div className='img-cont'>
        <img src={`/images/${image}`} alt="places-image" loading='lazy' />
    </div>
    <p className='place-desc'>
        {desc}
    </p>
</article>
  )
}
