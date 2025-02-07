import React from 'react'
import './testimonial.css'
import Reviews from './reviews'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import{ Pagination,Autoplay } from 'swiper/modules';

//put data to database
// import { putData } from '../hooks/putData';
// putData("Reviews",ReviewsData)

import { fetchData } from '../hooks/getData';


function Testimonials() {

  const ReviewsData=fetchData("Reviews")

  return (
    <section className='testimonial'>
      <h1><p className="text-center">Feedback</p></h1>
      <h2><p className='text-center'>What our guests says about us</p></h2>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay:3000,
          disableOnInteraction:false,
        }
        
        }
        spaceBetween={10}
        modules={[Pagination,Autoplay]}
        pagination={
          {clickable:true}
        }
        className='mySwiper'
        >
          {/* if not reviews data */}
          {ReviewsData=='' && <div className="skeleton">
          <div className="skeleton-image"></div>
          <div className="card-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-excerpt"></div>
          </div>
        </div>
        }
        {/* if reviews data */}
      {ReviewsData && ReviewsData.map((data, idx) =>
      <SwiperSlide key={idx}>
        <Reviews data={data}/>
        </SwiperSlide>
      )}
         </Swiper>
    </section>
  )
}

export default Testimonials