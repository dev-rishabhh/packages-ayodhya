import React from 'react'
import './bottombar.css'
import { Link } from 'react-router-dom'
export default function bottombar() {
    return (
       <div className='bottom-bar'>
        <Link to={'/contact'}><button >Enquiry</button></Link> 
        <Link to={'https://wa.me/918960967852'} target='_blank'><button>Whatsapp</button></Link>
        <Link to={'/donation'}><button> Donate to us</button></Link> 
        </div>
    )
}
