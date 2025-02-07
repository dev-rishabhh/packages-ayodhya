import React,{useEffect,useState,lazy}from 'react'
import './tours.css'
import { Helmet } from "react-helmet-async";
const Package = lazy(() => import('./package'))

// put data to database
// import { putData } from '../hooks/putData';
// putData("Packages",PackageData)

import { fetchData } from '../hooks/getData';

export default function tours() {
  
  const PackageData=fetchData("Packages")

  return (
    <section className='tours'>
      <Helmet>
      <title>Ayodhya and Other Spiritual Tour Packages | Explore India's Spiritual Heritage</title>
  <meta name="description" content="Explore our range of spiritual tour packages, including Ayodhya, Varanasi, Lucknow, and more. Book your next spiritual journey with us!" />
  <meta name="keywords" content="spiritual tours, ayodhya tour packages, varanasi tours, lucknow tours, india spiritual tours, holy tour packages, tour packages from delhi, best spiritual tours in india" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://packagesayodhya.in/" />
  <meta property="og:title" content="Ayodhya and Other Spiritual Tour Packages | Explore India's Spiritual Heritage" />
  <meta property="og:description" content="Browse through our exclusive range of spiritual tours to Ayodhya, Varanasi, Lucknow, and other sacred destinations in India. Book your journey now!" />
  <meta property="og:image" content="https://packagesayodhya.in/images/ram-img .webp" />
  <meta property="og:url" content="https://packagesayodhya.in/tours" />
  <meta name="twitter:title" content="Ayodhya and Other Spiritual Tour Packages | Explore India's Spiritual Heritage" />
  <meta name="twitter:description" content="Book your next spiritual tour to Ayodhya, Varanasi, and Lucknow. Visit famous temples, ghats, and sacred landmarks." />
  <meta name="twitter:image" content="https://packagesayodhya.in/images/ram-img .webp" />
  <meta name="twitter:url" content="https://packagesayodhya.in/tours" />
  <meta name="geo.region" content="IN-UP" />
  <meta name="geo.placename" content="Ayodhya" />
  <meta name="geo.position" content="26.7980;82.2000" />
  <meta name="ICBM" content="26.7980, 82.2000" />
  <script type="application/ld+json">
  {JSON.stringify(  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Ayodhya and Other Spiritual Tour Packages",
    "description": "Explore a variety of spiritual tour packages, including trips to Ayodhya, Varanasi, and Lucknow. Visit sacred temples and learn about India's rich spiritual heritage.",
    "image": "https://packagesayodhya.in/images/ram-img .webp",
    "url": "https://packagesayodhya.in/tours",
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
      "url": "https://packagesayodhya.in/tours",
      "priceCurrency": "INR",
      "price": "₹1500",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Ayodhya"
      }
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://packagesayodhya.in/tours",
        "inLanguage": "en"
      }
    }
  }
  )}
  </script>
      </Helmet>
        <h1>Explore Popular Tour Packages</h1>
        <p>Check out our well-designed and meticulously planned Ayodhya tour packages and get the best holiday
         deals when booking with us. Fill out the enquiry form for more details.</p>
          {/*if not packages data  */}
         {PackageData=='' && <div className="skeleton">
          <div className="skeleton-image"></div>
          <div className="card-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-excerpt"></div>
          </div>
        </div>
        }
         <div className='package-cont'>
          {/*  {/*if packages data  */} 
         {PackageData && 
         PackageData.map((placeData,index) => (
            <Package data={placeData} key={index}/>
          ))
      }
         </div>
    </section>
  )
}
