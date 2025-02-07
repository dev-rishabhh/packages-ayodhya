import React from 'react'
import './tours.css'
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'

export default function Package({ data }) {
    
    const { name, image, destination, rating, duration, id } = data
    return (
        <article className='package'>
            <div className='logo-cont'>
                <img src={`/images/${image}`} alt="packages-image" loading='lazy' />
                <p className='package-name'>{name}</p>
            </div>
            <div className='package-desc'>
                <ul>
                    <li className='rating'>
                        {rating.map((Star,idx) => (
                            <FaStar key={idx} />
                        )
                        )}
                    </li>
                    {/* <Stars/> */}
                    <li> Duration: {duration}</li>
                    <li>Destinations:{destination}
                    </li>
                </ul>
            </div>
            <div className='button-cont'>
                <Link to={`/tours/${id}`}>
                    <button>Get Details</button>
                </Link>
                <Link to={'/contact'}>
                    <button>Enquiry Now</button>
                </Link>
            </div>
        </article>
    )
}
