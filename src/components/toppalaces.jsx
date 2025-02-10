import React from 'react'
import './toppalaces.css'
import { Helmet } from "react-helmet-async";
import Places from './places'


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import{ Pagination } from 'swiper/modules';

//put data to database

// import { putData } from '../hooks/putData';
// putData("Places",PlacesData)

import { fetchData } from '../hooks/getData';


export default function toppalaces() {
  
  const PlacesData=fetchData("Places")


  return (
    <section className='top-places'>
      <Helmet>
            {/* 🔹 Title and Meta Description */}
            <title>Top Places to Visit in Ayodhya | Explore Temples, Landmarks & More</title>
        <meta name="description" content="Discover the top places to visit in Ayodhya including Ram Mandir, Hanuman Garhi, Kanak Bhawan, and other famous landmarks in the city." />
        <meta name="keywords" content="top places to visit Ayodhya, Ram Mandir Ayodhya, best temples in Ayodhya, Ayodhya landmarks, sightseeing in Ayodhya, must visit places Ayodhya" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Top Places to Visit in Ayodhya | Explore Temples, Landmarks & More" />
        <meta property="og:description" content="Explore the top places to visit in Ayodhya, from Ram Mandir to Hanuman Garhi and other must-visit temples and landmarks." />
        <meta property="og:image" content="https://packagesayodhya.in/images/ram-img .webp" />
        <meta property="og:url" content="https://packagesayodhya.in/top-places-to-visit-ayodhya" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Meta Tags */}
        <meta name="twitter:title" content="Top Places to Visit in Ayodhya | Explore Temples, Landmarks & More" />
        <meta name="twitter:description" content="Discover the most iconic places in Ayodhya, including Ram Mandir, Hanuman Garhi, and more must-visit landmarks and temples." />
        <meta name="twitter:image" content="https://packagesayodhya.in/images/ram-img .webp"/>
        <meta name="twitter:url" content="https://packagesayodhya.in/top-places-to-visit-ayodhya"  />

        {/* 🔹 Local SEO (Geo Meta Tags) */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />

        {/* 🔹 Canonical URL */}
        {/* 🔹 Structured Data for Top Places to Visit in Ayodhya (Schema Markup) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Top Places to Visit in Ayodhya",
            "description": "Discover the top places in Ayodhya, from temples like Ram Mandir to scenic landmarks, with detailed descriptions and visitor information.",
            "image": "https://packagesayodhya.in/images/ram-img .webp",
            "url": "https://packagesayodhya.in/top-places-to-visit-ayodhya" ,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ayodhya",
              "addressLocality": "Ayodhya",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "224123",
              "addressCountry": "IN"
            },
            "offers": {
              "@type": "Offer",
              "url":"https://packagesayodhya.in/top-places-to-visit-ayodhya" ,
              "priceCurrency": "INR",
              "price": "₹500",
              "eligibleRegion": {
                "@type": "Place",
                "name": "Ayodhya"
              }
            },
            "potentialAction": {
              "@type": "ReadAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://packagesayodhya.in/top-places-to-visit-ayodhya" ,
                "inLanguage": "en"
              }
            }
          })}
        </script>
      </Helmet>
      <h1 className='dark-blue'>Top tourist attractions in Ayodhya</h1>
      <p className='greyish-white'>Ayodhya is home to a wealth of captivating destinations, where visitors can immerse themselves in rich history, spiritual heritage, and scenic beauty, making it an unforgettable place to explore.</p>
      <div className="place-cont">
        <Swiper
        slidesPerView='auto'
        breakpoints={{
         640:{
          slidesPerView:1,
         },
         860:{
          slidesPerView:2,
         },
         1200:{
          slidesPerView:3,
         },
         1400:{
          slidesPerView:4,
         },
        }}
        spaceBetween={10}
        modules={[Pagination]}
        pagination={
          {clickable:true}
        }
        className='mySwiper'
        >
            {/*if not places data  */}
         {PlacesData=='' && <div className="skeleton">
          <div className="skeleton-image"></div>
          <div className="card-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-excerpt"></div>
          </div>
        </div>
        }
        {/* if places data */}
          {PlacesData && PlacesData.map((placeData,index) => (
          <SwiperSlide key={index}>
            <Places data={placeData} />
          </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
    </section>
  )
}
