import React from 'react'
import './CurrencyExchange.css';
import { Helmet } from 'react-helmet-async'

function CurrencyExchange() {
  return (
    <div className="CurrencyExchange-Container">
      <Helmet>
          {/* Title and Meta Description */}
          <title>Best Currency Exchange Service in Ayodhya & Other Cities | namaste Ayodhya</title>
        <meta name="description" content="Get the best currency exchange rates in Ayodhya. Trusted and secure money exchange services for tourists and travelers. Available in multiple cities across India." />
        <meta name="keywords" content="currency exchange Ayodhya, money exchange service, best forex rates Ayodhya, foreign exchange in Ayodhya, currency converter, forex exchange India" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Best Currency Exchange Service in Ayodhya & Other Cities" />
        <meta property="og:description" content="Find reliable currency exchange services in Ayodhya and other major cities. Get the best forex rates with secure transactions." />
        <meta property="og:image" content="https://packagesayodhya.in/currency-exchange-ayodhya.jpg" />
        <meta property="og:url" content="https://packagesayodhya.in/currency-exchange" />
        <meta property="og:site_name" content="packages ayodhya" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Secure Currency Exchange in Ayodhya | Best Forex Rates" />
        <meta name="twitter:description" content="Exchange foreign currency at the best rates in Ayodhya. Safe and reliable currency exchange services for travelers and tourists." />
        <meta name="twitter:image" content="https://packagesayodhya.in/currency-exchange-ayodhya.jpg"  />
        <meta name="twitter:url" content="https://packagesayodhya.in/currency-exchange"  />

        {/* Geo Meta Tags (For Local SEO) */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />

         {/*structured data  */}
         <script type="application/ld+json">{JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Best Currency Exchange Service in Ayodhya",
            "description": "Get the best currency exchange rates in Ayodhya. Secure and hassle-free money exchange services for tourists and travelers. Available in multiple cities across India.",
            "provider": {
              "@type": "Organization",
              "name": "namaste Ayodhya",
              "logo": {
                "@type": "ImageObject",
                "url": "https://packagesayodhya.in/images/favicon.png"
              }
            },
            "url": "https://packagesayodhya.in/currency-exchange",
            "image": "https://packagesayodhya.in/images/currency-exchange-ayodhya.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ayodhya",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "26.7980",
              "longitude": "82.2000"
            },
            "openingHours": "Mo-Su 09:00-21:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8960967852",
              "contactType": "customer service"
            },
            "currenciesAccepted": "INR, USD, EUR, GBP, AUD, CAD"
          }
         )}</script>
      </Helmet>
    {/* Header */}
    <div className="CurrencyExchange-Header">
      <h1>Currency Exchange Services</h1>
    </div>

    {/* Introduction Section */}
    <div className="CurrencyExchange-IntroSection">
      <h2>Why Choose Our Currency Exchange Service?</h2>
      <p>
        We offer competitive exchange rates, fast transactions, and exceptional customer service. Whether you’re traveling abroad, investing in foreign currency, or just need to convert money for personal use, we are here to assist you. Our simple and transparent process ensures that you get the best value for your money.
      </p>
    </div>
    {/* How It Works */}
    <div className="CurrencyExchange-HowItWorksSection">
      <h2>How It Works</h2>
      <p>
        Our process is simple and transparent, designed for your convenience:
      </p>
      <ul>
        <li><strong>Step 1:</strong> Get in touch with us to discuss your currency exchange requirements.</li>
        <li><strong>Step 2:</strong> Receive real-time quotes based on the current market trends.</li>
        <li><strong>Step 3:</strong> Securely complete your exchange online or in person.</li>
        <li><strong>Step 4:</strong> Enjoy fast and efficient service with no hidden fees, just great rates!</li>
      </ul>
    </div>

    {/* Call to Action */}
    <div className="CurrencyExchange-CtaSection">
      <h2>Start Your Currency Exchange Today!</h2>
      <p>Don't wait to get the best rates. Contact us now to get your currency exchange process started smoothly and securely!</p>
    </div>
  </div>
  )
}

export default CurrencyExchange