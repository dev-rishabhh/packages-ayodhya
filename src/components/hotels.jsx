import React, { useEffect, useState} from 'react'
import './hotels.css'
import Hotel from './hotel'
import { Helmet } from "react-helmet-async";
import { fetchData } from '../hooks/getData';



//put data to database
// import { putData } from '../hooks/putData';
// putData("Hotels",HotelsData)


export default function hotels() {

  const HotelsData=fetchData("Hotels")

  const [data, setdata] = useState()

  useEffect(() => {
    setdata(HotelsData)
  }, [HotelsData])

  const handleFilter = (e) => {
    let filtereddata = HotelsData.filter((data) => data.type === e.target.value)
    setdata(filtereddata)
  }
  return (
    <section className="hotels">
      <Helmet>
         {/* Title and Meta Description */}
         <title>Best Hotels in Ayodhya | Budget & Luxury Stays Near Ram Mandir</title>
        <meta name="description" content="Find the best hotels in Ayodhya near Ram Mandir, from budget stays to luxury accommodations. Compare prices, reviews, and amenities for a comfortable trip." />
        <meta name="keywords" content="hotels in Ayodhya, best hotels near Ram Mandir, budget hotels in Ayodhya, luxury stays in Ayodhya, Ayodhya accommodation, top-rated Ayodhya hotels" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Best Hotels in Ayodhya | Budget & Luxury Stays Near Ram Mandir" />
        <meta property="og:description" content="Looking for hotels in Ayodhya? Book budget-friendly to 5-star luxury hotels near Ram Mandir with the best deals and ratings." />
        <meta property="og:image" content="https://packagesayodhya.in/images/clarksinn.webp" />
        <meta property="og:url" content="https://packagesayodhya.in/hotels" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Top Hotels in Ayodhya | Affordable & Luxury Stays" />
        <meta name="twitter:description" content="Compare the best hotels in Ayodhya, from budget lodges to premium resorts. Book now for the best rates and amenities!" />
        <meta name="twitter:image" content="https://packagesayodhya.in/images/clarksinn.webp" />
        <meta name="twitter:url" content="https://packagesayodhya.in/hotels" />

        {/* Local SEO (Geo Meta Tags) */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://packagesayodhya.in/hotels" />

        {/* Structured Data (Schema Markup for Hotels) */}
        <script type="application/ld+json">{JSON.stringify(
          {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Hotel Booking",
              "url": "https://packagesayodhya.in/hotel-booking-service",
              "name": "Hotel Booking in Ayodhya, Varanasi, Lucknow, Prayagraj",
              "description": "Book top-rated hotels in Ayodhya, Varanasi, Lucknow, and Prayagraj with the best prices. Convenient hotel booking service for pilgrims and tourists.",
              "provider": {
                "@type": "Organization",
                "name": "Packages Ayodhya",
                "url": "https://packagesayodhya.in",
                "logo": "https://packagesayodhya.in/images/favicon.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-8960967852",
                  "contactType": "Customer Support",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                }
              },
              "keywords": "hotel booking in Ayodhya, hotel booking Varanasi, hotel booking Prayagraj, best hotels near Ram Mandir, affordable hotels in Ayodhya, Varanasi hotels for pilgrims,  hotels near ram mandir",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.7980",
                "longitude": "82.2000"
              },
              "priceRange": "₹1500 - ₹5000 per night",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "1500",
                "url": "https://packagesayodhya.in/hotels",
                "itemOffered": {
                  "@type": "TaxiService",
                  "name": "Taxi Service from Ayodhya to Varanasi"
                }
              },
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://packagesayodhya.in/hotel?service_id={service_id}",
                  "inLanguage": "en"
                }
              }
            }
          )}
        </script>
      </Helmet>
      <header className="header">
        <h1 className="page-title">Best Hotels in Ayodhya</h1>
        <p className="intro-text">Comfort and Luxury for Every Traveler</p>
      </header>
      <section className="filter-section">
        <h2>Filter Hotels</h2>
        <div className="filters">
          <label>
            Type of Stay:
            <select
            onChange={(e) => handleFilter(e)}
            >
              <option value="all" hidden>All</option>
              <option value="luxury">Luxury</option>
              <option value="resort">Resort</option>
              <option value="heritage">Heritage</option>
              <option value="homestay">Homestay</option>
            </select>
          </label>
        </div>
      </section>
      <div className="hotel-list">

        {/* if not hotels data */}
      {data=='' && <div className="hotel-card skeleton">
          <div className="skeleton-image"></div>
          <div className="card-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-excerpt"></div>
          </div>
        </div>
        }

        {/* if hotels data */}
        {data &&
          data.map((hotelData,idx) => (
            <Hotel data={hotelData} key={idx}/>
          ))
        }
      </div>
      <section className="call-to-action">
        <h2>Book Your Stay with Us!</h2>
        <p>To book any of these hotels, please call us at <strong>+91 8960967852</strong>.</p>
        <p>Our team will assist you in making the reservation and ensuring a seamless experience.</p>
      </section>
      <footer className="footer">
        <p>Book your stay now and explore the divine city of Ayodhya!</p>
      </footer>
    </section >
  )
}
