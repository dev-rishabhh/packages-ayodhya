import React from 'react'
import './BikeRental.css'
import { Helmet } from 'react-helmet-async'

function BikeRental() {
  const bikes = [
    {
      name: "Bajaj Pulsar",
      description: "A sporty bike with great mileage and performance.",
      price: "₹500/day",
      image: '/images/pulsar.webp',
    },
    {
      name: "Royal Enfield Classic 350",
      description: "Perfect for long rides with classic style.",
      price: "₹800/day",
      image: '/images/Royal Enfield.webp',
    },
    {
      name: "Honda Activa",
      description: "A convenient and fuel-efficient scooter for city rides.",
      price: "₹300/day",
      image: '/images/activa.webp',
    },
  ];

  const documents = [
    "Valid Driving License",
    "Government-issued ID Proof (e.g., Aadhar, Passport)",
    "Security Deposit",
  ];
  return (
    <div className="bike-rental-container">
      <Helmet>
        {/* <!-- Meta Tags for Bike Rental Page --/> */}
        <title>Bike Rental in Ayodhya,Lucknow - Affordable and Convenient Rentals | packages ayodhya</title>
        <meta name="description" content="Rent a bike in Ayodhya and other major cities. Affordable bike rentals with flexible plans, convenient pick-up locations, and the best bikes for your city travel. Explore Ayodhya, Lucknow, Varanasi, and more with our rental services." />
        <meta name="keywords" content="bike rental Ayodhya, bike rental in Ayodhya, rent a bike in Ayodhya, affordable bike rentals, bike rentals in India, bike rental Lucknow, Varanasi bike rental, rent a bike India, city bike rental services" />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph Tags for Social Media --/> */}
        <meta property="og:title" content="Bike Rental in Ayodhya and Other Cities - Affordable Rentals & City Travel" />
        <meta property="og:description" content="Rent bikes in Ayodhya and other cities like Lucknow and Varanasi. Affordable rental options with flexible plans for exploring city landmarks and scenic locations. Book now!" />
        <meta property="og:image" content="[URL to an image showing a bike rental or popular city landmarks]" />
        <meta property="og:url" content="https://packagesayodhya.in/bike-rental" />
        <meta property="og:site_name" content="packages ayodhya" />

        {/* <!-- Twitter Card Tags for Social Media --/> */}
        <meta name="twitter:title" content="Bike Rental in Ayodhya & Other Cities - Explore with Affordable Rentals" />
        <meta name="twitter:description" content="Book affordable bike rentals in Ayodhya, Lucknow, Varanasi, and more. Perfect for city exploration and local adventures. Easy pick-up and flexible rental plans." />
        <meta name="twitter:image" content="[URL to an image showing the bike rental service]" />
        <meta name="twitter:url" content="https://packagesayodhya.in/bike-rental" />

        {/* <!-- Local SEO Tags for Ayodhya and Other Cities --/> */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya, Lucknow, Varanasi" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />

        {/*structured data  */}
        <script type="application/ld+json">{JSON.stringify(
           {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Bike Rental",
            "provider": {
              "@type": "Organization",
              "name": "Your Website Name",
              "url": "https://packagesayodhya.in/",
            },
            "areaServed": [
              {
                "@type": "Place",
                "name": "Ayodhya"
              },
              {
                "@type": "Place",
                "name": "Lucknow"
              },
              {
                "@type": "Place",
                "name": "Varanasi"
              }
            ],
            "priceRange": "₹500–₹2000 per day",
            "offers": {
              "@type": "Offer",
              "url": "https://packagesayodhya.in/bike-rental",
              "priceCurrency": "INR",
              "price": "500",
              "eligibleRegion": {
                "@type": "Place",
                "name": "India"
              }
            },
            "mainEntityOfPage": "https://namsteAyodhya.com/bike-rental",
            "description": "Affordable bike rental services in Ayodhya, Lucknow, Varanasi, and more. Rent bikes for city exploration, tourist visits, and short-term trips. Flexible plans and easy booking.",
            "image": "https://namaste.com/images/pulsar.webp"
          }
        )}</script>

      </Helmet>
      <div className="header">
        <h1>Bike Rental Service</h1>
        <p>Find the perfect bike for your journey!</p>
      </div>
      <div className="bikes-section">
        <h2>Available Bikes</h2>
        <div className="bikes-list">
          {bikes.map((bike, index) => (
            <div className="bike-card" key={index}>
              <img src={bike.image} alt=' Rental Bike Image ' className="bike-image"  loading='lazy'/>
              <h3>{bike.name}</h3>
              <p>{bike.description}</p>
              <p className="bike-price">{bike.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents */}
      <div className="documents-section">
        <h2>Required Documents</h2>
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div className="faq-section">
        <h2>FAQs</h2>
        <div className="faq">
          <h3>What is the minimum age to rent a bike?</h3>
          <p>The minimum age is 18 years with a valid driving license.</p>
        </div>
        <div className="faq">
          <h3>Are there any additional charges?</h3>
          <p>Fuel charges are not included in the rental price. Late returns may incur a penalty.</p>
        </div>
        <div className="faq">
          <h3>How do I make a reservation?</h3>
          <p>You can contact us or visit our office for reservations.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Contact us for more details and bookings!</p>
      </div>
    </div>
  )
}

export default BikeRental