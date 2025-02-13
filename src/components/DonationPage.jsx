import React from 'react'
import { Helmet } from "react-helmet-async";
import './DonationPage.css';

// const Qr = lazy(() => import('../assets/myQr.webp'))

function DonationPage() {
    return (
        <section className='donation'>
          <Helmet>
              {/* Title and Meta Description */}
        <title>Donate Food for Cows, Street Dogs & Animals in Need | namasteAyodhya</title>
        <meta name="description" content="Support our mission to provide food for cows, street dogs, and stray animals. Your donation can help save lives and improve animal welfare." />
        <meta name="keywords" content="donate for animals, cow food donation, street dog feeding, animal welfare donation, charity for animals, help stray animals" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Donate Food for Cows, Street Dogs & Animals in Need" />
        <meta property="og:description" content="Join us in feeding and caring for stray animals, cows, and street dogs. Every donation makes a difference in their lives." />
        <meta property="og:image" content="https://packagesayodhya.in/images/Qr.webp" />
        <meta property="og:url" content="https://packagesayodhya.in/donation" />
        <meta property="og:site_name" content="namaste Ayodhya" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Support Animal Welfare | Donate Food for Stray Animals" />
        <meta name="twitter:description" content="Your small act of kindness can help feed and save stray animals. Donate today to support our cause." />
        <meta name="twitter:image" content="https://packagesayodhya.in/images/Qr.webp" />
        <meta name="twitter:url" content="https://packagesayodhya.in/donation" />

        {/* Geo Meta Tags (For Local SEO) */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />

        {/* Structured Data for Donation Page (Schema Markup) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DonateAction",
            "name": "Donate Food for Stray Animals & Cows",
            "description": "Support our mission to provide food for cows, street dogs, and other animals in need. Your donation can help save lives and improve animal welfare.",
            "provider": {
              "@type": "Organization",
              "name": "packages ayodhya",
              "logo": {
                "@type": "ImageObject",
                "url": "https://packagesayodhya.in/donation/images/favicon.png"
              }
            },
            "url": "https://packagesayodhya.in/donation",
            "image": "https://packagesayodhya.in/donation/images/Qr.webp",
            "beneficiary": {
              "@type": "Organization",
              "name": "Stray Animals & Cows Welfare Fund"
            },
            "recipient": {
              "@type": "Organization",
              "name": "Animal Rescue NGO",
              "sameAs": "https://packagesayodhya.in/",
            },
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "India",
                "addressCountry": "IN"
              }
            },
            "potentialAction": {
              "@type": "DonateAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://packagesayodhya.in/donation"
              }
            }
          })}
        </script>
          </Helmet>
          <div className="donation-container">
      <div className="donation-header">
        <h1>Support Our Mission</h1>
        <p>
         Be a part of Ayodhya's legacy of compassion.Your donation feeds  sacred cows, monkeys and street dogs giving you the pride of nurturing lives in this holy city
        </p>
        <p>Join us in creating a better tomorrow. Every donation counts!</p>
      </div>

      <div className="donation-content">
        <h2>How to Donate</h2>
        <p>Scan the QR code below with your preferred payment app to contribute:</p>
        <div className="qr-code-wrapper">
          <img src='/images/myQr.webp' alt="QR Code for Payment" className="qr-code" loading='lazy'/>
        </div>
        <p>After donating, don't forget to share your payment screenshot/recipt along with your name to our WhatsApp to claim your benefits as a valued supporter!</p>
      </div>

      <div className="donor-benefits">
        <h2>Benefits for Our Donors</h2>
        <ul>
          <li>
            <strong>Certificate of Appriciation:</strong>Recieve a certificate honoring your generosity and commitment to helping animals in need
          </li>
          <li>
            <strong>Exclusive Discounts:</strong> Be the first to know about our latest discounts and offers.
          </li>
          <li>
            <strong>Emotional Fulfillment:</strong>Feel the joy of knowing your kindness is helping provide nourishment and hope to innocent animals.
          </li>
          <li>
            <strong>Sense of Pride:</strong> Experience the honour of contributing to Ayodhya's legacy of compassion  .
          </li>
          <li>
            <strong>Preserve Ayodhya's Heritage:</strong> Contribute to maintaining Ayodhya's spiritual essence by fostering care and compassion for its animals.
          </li>
        </ul>
      </div>

      <div className="donation-footer">
        <p>
          Thank you for supporting our mission! &#10084;.
        </p>
      </div>
    </div>
        </section>
    )
}
export default DonationPage