import React from 'react'
import { Helmet } from 'react-helmet-async'
import './AyodhyaHistory.css'

export default function ayodhyaHistory() {
  return (
    <article className='ayodhya-history'>

      {/* Meta Description for SEO */}
      <Helmet>
        {/* <!-- Meta Tags for History of Ayodhya Page -- */}
        <title>History of Ayodhya - Explore Ancient Temples, Culture, and Heritage | packages ayodhya</title>
        <meta name="description" content="Explore the rich and fascinating history of Ayodhya, India. Discover the legendary Ram Janmabhoomi, ancient temples, sacred ghats, and the city’s cultural heritage. Immerse yourself in Ayodhya’s historical significance in Hindu mythology." />
        <meta name="keywords" content="Ayodhya history, ancient temples of Ayodhya, Ram Janmabhoomi, historical significance of Ayodhya, Ayodhya cultural heritage, sacred sites in Ayodhya, Ayodhya temples, history of Ayodhya city" />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph Tags for Social Media --/> */}
        <meta property="og:title" content="History of Ayodhya - Explore Ancient Temples, Culture, and Heritage" />
        <meta property="og:description" content="Discover the rich history of Ayodhya, from the Ram Janmabhoomi to its ancient temples and cultural heritage. Learn about Ayodhya's importance in Hindu mythology and its evolution." />
        <meta property="og:image" content="[URL to an image showcasing Ayodhya's historical landmarks]" />
        <meta property="og:url" content="https://packagesayodhya.in/" />
        <meta property="og:site_name" content="packages ayodhya" />

        {/* <!-- Twitter Card Tags for Social Media --/> */}
        <meta name="twitter:title" content="History of Ayodhya - Discover Ancient Temples & Culture" />
        <meta name="twitter:description" content="Explore Ayodhya’s legendary temples, Ram Janmabhoomi, and rich cultural heritage. Uncover the city’s deep historical and spiritual significance in Hindu mythology." />
        <meta name="twitter:image" content="https://packagesayodhya.in/images/ram-bg .webp" />
        <meta name="twitter:url" content="https://packagesayodhya.in/" />

        {/* <!-- Local SEO Tags for Ayodhya --/> */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />

        {/*structured data  */}
        <script type="application/ld+json">{JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Ayodhya Historical Sites",
            "description": "Discover Ayodhya's rich history, including ancient temples, sacred sites like Ram Janmabhoomi, and cultural landmarks. A must-visit destination for history lovers and spiritual seekers.",
            "image": "/images/ram-img .webp",
            "url": "https://packagesayodhya.in/",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ayodhya",
              "addressLocality": "Ayodhya",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "224123",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.7980,
              "longitude": 82.2000
            },
            "telephone": "8960967852",
          }
        )}</script>
        
      </Helmet>

      <div className='image-cont'>
        <div className='ram-img'>
          <img src='/images/ram-img .webp'alt="lord rama image" loading='eager' />
        </div>
      </div>
      <div className='info-cont'>
        <h2 className='info-heading'>Ayodhya:The Eternal Land of Spiritual Blessings</h2>
        <p className='info-text'>
          Ayodhya, an ancient city on the banks of the Sarayu River, holds a revered place in Hindu tradition as the birthplace of Lord Rama. Known for its rich
          spiritual heritage, Ayodhya is a land where history, devotion, and divine blessings converge. The city is home to sacred temples, including the Ram
          Janmabhoomi Temple, drawing millions of pilgrims seeking peace and spiritual awakening. Beyond its religious significance, Ayodhya's cultural richness
          and timeless beauty offer a unique glimpse into India's ancient traditions and practices. The eternal connection to Lord Rama's legacy makes Ayodhya
          a spiritual haven, inviting all who visit to experience its divine tranquility and profound blessings.
        </p>
        <p className='info-text'>Whether seeking solace or a deeper connection
          to spirituality, Ayodhya remains a destination that nurtures the soul and uplifts the spirit.
        </p>
      </div>
    </article>
  )
}
