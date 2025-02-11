import React, {lazy } from 'react'
import './taxiservice.css'
import { Helmet } from "react-helmet-async";

const Cab = lazy(() => import('./cab'));


//fetch data
import { fetchData } from '../hooks/getData';

//put data to database
// import { putData } from '../hooks/putData';
// putData("Cabs",CabsData)

export default function taxiservice() {
  const CabsData = fetchData("Cabs")
  return (
    <section className='taxi-service'>
      <Helmet>
          {/* 🔹 Title and Meta Description */}
          <title>Cab Services in Ayodhya | Affordable Taxi & Private Car Rentals</title>
        <meta name="description" content="Book affordable cab services in Ayodhya for local and outstation trips. Private car rentals, taxis, and airport transfers available." />
        <meta name="keywords" content="cab services Ayodhya, taxi services Ayodhya, car rentals Ayodhya, private car rental Ayodhya, taxi booking Ayodhya, airport transfers Ayodhya" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Cab Services in Ayodhya | Affordable Taxi & Private Car Rentals" />
        <meta property="og:description" content="Book reliable and affordable cab services in Ayodhya for local sightseeing, outstation travel, and airport transfers." />
        <meta property="og:image" content="https://packagesayodhya.in/images/ertiga.webp" />
        <meta property="og:url" content="https://packagesayodhya.in/cab-services" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Meta Tags */}
        <meta name="twitter:title" content="Cab Services in Ayodhya | Affordable Taxi & Private Car Rentals" />
        <meta name="twitter:description" content="Book reliable and affordable taxi and private car rentals in Ayodhya for local sightseeing, outstation, and airport transfers." />
        <meta name="twitter:image" content="https://packagesayodhya.in/images/ertiga.webp" />
        <meta name="twitter:url" content="https://packagesayodhya.in/cab-services" />

        {/* 🔹 Local SEO (Geo Meta Tags) */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />

        {/* 🔹 Canonical URL */}
        <link rel="canonical" href="https://packagesayodhya.in/cab-services"/>

        {/* 🔹 Structured Data for Cab Services (Schema Markup) */}
        <script type="application/ld+json">{JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cab Services in Ayodhya",
            "description": "Affordable and reliable taxi services in Ayodhya for local sightseeing, airport transfers, and outstation trips. Book private car rentals and taxis online.",
            "image": "https://packagesayodhya.in/images/ertiga.webp",
            "url": "https://packagesayodhya.in/cab-services",
            "keywords": "cab services in ayodhya, cab services in varanasi, cab services near ram mandir, taxi services in ayodhya varanasi lucknow,affordable cab in ayodhya",
            "provider": {
              "@type": "Organization",
              "name": "Ayodhya Travel Services",
              "logo":"https://packagesayodhya.in/images/logo.webp",
              "sameAs": "https://packagesayodhya.in"
            },
            "serviceType": "Cab Services, Taxi Booking, Car Rentals, Airport Transfers",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "₹1500",
              "eligibleRegion": {
                "@type": "Place",
                "name": "Ayodhya"
              },
              "url": "https://packagesayodhya.in/cab-services",
              "category": "Transportation"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8960967852",
              "contactType": "customer service"
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://packagesayodhya.in/book-cab?service_id={service_id}",
                "inLanguage": "en"
              }
            }
          })}
        </script>
      </Helmet>
      <h1>Affordable Ayodhya Cabs</h1>
      <p>Discover hassle-free travel with our reliable cab services in Ayodhya, offering convenient and comfortable rides to explore the city’s sacred landmarks and vibrant culture</p>
          {/*if not cabs data  */}
        {CabsData=='' && <div className="skeleton">
          <div className="skeleton-image"></div>
          <div className="card-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-excerpt"></div>
          </div>
        </div>
        }
      <div className='cont'>
        {/* if cabs data */}
        {CabsData &&
          CabsData.map((cabData, idx) => (
            <Cab data={cabData} key={idx} />
          ))
        }
      </div>
    </section>
  )
}
