import React from 'react'
import './services.css'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <section className='our-services'>
      <Helmet>
        {/* 🔹 Title and Meta Description */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Ayodhya Travel Services | Tour Packages, Hotels, Bike & Cab Rentals</title>
        <meta name="description" content="Explore Ayodhya with our premium travel services. Book guided tour packages, hotels, bike & cab rentals, special darshan passes, and currency exchange assistance." />
        <meta name="keywords" content="Ayodhya tour services, Ayodhya travel packages, hotels in Ayodhya, bike rental Ayodhya, cab booking Ayodhya, special darshan package, currency exchange in Ayodhya" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Ayodhya Travel Services | Tours, Hotels & Rentals" />
        <meta property="og:description" content="Book Ayodhya tour packages, hotels, bike & cab rentals, special darshan passes, and currency exchange services. Plan your perfect trip today!" />
        <meta property="og:image" content="https://packagesayodhya.in/images/ram-img .webp.jpg" />
        <meta property="og:url" content="https://packagesayodhya.in/services" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Ayodhya Travel Services - Tours, Rentals & Hotels" />
        <meta name="twitter:description" content="Plan your Ayodhya trip with our top-rated services, including tour packages, hotels, rentals, special darshan, and currency exchange." />
        <meta name="twitter:image" content="https://packagesayodhya.in/images/ram-img .webp.jpg" />
        <meta name="twitter:url" content="https://packagesayodhya.in/services" />

        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />


        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ayodhya Travel Services",
            "description": "We offer premium travel services in Ayodhya, including guided tours, hotel bookings, bike & cab rentals, special darshan passes, and currency exchange assistance.",
            "image": "https://packagesayodhya.in/images/ram-img .webp.jpg",
            "url": "https://packagesayodhya.in/services",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Road, Near Ram Mandir",
              "addressLocality": "Ayodhya",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "224123",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "26.7980",
              "longitude": "82.2000"
            },
            "serviceType": [
              "Tour Packages",
              "Hotel Booking",
              "Bike Rental",
              "Cab Services",
              "Special Darshan Packages",
              "Currency Exchange Services"
            ],
            "openingHours": "Mo-Su 08:00-20:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8960967852",
              "contactType": "customer service"
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://packagesayodhya.in/book-service?service_id={service_id}",
                "inLanguage": "en"
              }
            }
          })}
        </script>
      </Helmet>
      <h1 className='services-heading'>Our services</h1>
      <p className='service-art-desc'>Discover the range of services provided, each carefully crafted to cater to your unique needs and deliver an exceptional experience, ensuring convenience, quality, and complete satisfaction at every step.</p>
      <div className='services-cont'>

        <Link className='service-card' to={'/tours'}>
          <div className="service-logo-cont">
            <p className='text-center'>&#9992;</p>
          </div>
          <h2 className='service-heading'><p className='text-center'>Tour Packages</p></h2>
          <p className='service-desc'>Customizable Ayodhya tour packages for a memorable travel experience. Click to know more.</p>
        </Link>
        <Link className='service-card' to={'/hotels'}>
          <div className="service-logo-cont">
            <p className='text-center'>&#127976;</p>
          </div>
          <h2 className='service-heading'><p className='text-center'>Hotel Services</p></h2>
          <p className='service-desc'>Hassle-free hotel bookings for a comfortable stay in Ayodhya. Click to know more.</p>
        </Link>

        <Link className='service-card' to={'/bike-rental'}>
          <div className="service-logo-cont">
            <p className='text-center'>&#127949;</p>
          </div>
          <h2 className='service-heading'><p className='text-center'>Bike Rental</p></h2>
          <p className='service-desc'>Affordable bike rentals for exploring Ayodhya at your pace. Click to know more.</p>
        </Link>

        <Link className='service-card' to={'/cab-services'}>
          <div className="service-logo-cont">
            <p className='text-center'>&#128663;</p>
          </div>
          <h2 className='service-heading'><p className='text-center'>Cab Services</p></h2>
          <p className='service-desc'>Comfortable and reliable cab services for convenient local travel. Click to know more.</p>
        </Link>

        <Link className='service-card' to={'/special-darshan'}>
          <div className="service-logo-cont">
            <p className='text-center'>&#128146;</p>
          </div>
          <h2 className='service-heading'><p className='text-center'>Special Darshan</p></h2>
          <p className='service-desc'>Exclusive VIP darshan services for a seamless temple visit. Click to know more.</p>
        </Link>

        <Link className='service-card' to={'/currency-exchange'}>
          <div className="service-logo-cont">
            <p className='text-center'>&#36;</p>
          </div>
          <h2 className='service-heading'><p className='text-center'>Currency Exchange</p></h2>
          <p className='service-desc'>Easy and secure currency exchange for international visitors. Click to know more.</p>
        </Link>
      </div>
    </section>
  )
}

export default Services