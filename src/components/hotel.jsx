import React from 'react'
import { FaStar } from 'react-icons/fa';
export default function hotel({ data }) {
    const { name, rating, image } = data
    return (
        <article className="hotel-card">
            <img src={`/images/${image}`} alt="Hotel image" className="hotel-image" loading='lazy' />
            <div className='hotel-desc'>
                <ul>
                    <li className='hotel-rating'>
                        {rating.map((Star, idx) => (
                            <FaStar key={idx} />
                        )
                        )}
                    </li>
                </ul>
                <h3 className="hotel-name">{name}</h3>
            </div>
        </article>
    )
}
