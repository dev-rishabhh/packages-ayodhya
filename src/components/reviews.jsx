import React from 'react'
function reviews({data}) {
    const{name,review}=data
  return (
    <article className='client'>
        <p className='client-review'>{review}</p>
        <p className='client-name'>{name}</p>
      </article>
  )
}

export default reviews