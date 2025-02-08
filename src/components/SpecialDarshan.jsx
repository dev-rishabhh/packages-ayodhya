import React,{lazy,Suspense} from 'react'
import './SpecialDarshan.css'
import { Helmet } from "react-helmet-async";
const Package = lazy(() => import('./package'));
import { fetchData } from '../hooks/getData';

function SpecialDarshan() {

     const PackagesData=fetchData("Packages")
   
    let PackageData;
    if (PackagesData) {
        PackageData = PackagesData.find((data) => data.id === "Special-Ayodhya-tour")
    }
    return (
        <div className="special-darshan-container">
            <Helmet>
                  {/* 🔹 Title and Meta Description */}
        <title>Special Darshan Package in Ayodhya | Book VIP Passes for Ram Mandir</title>
        <meta name="description" content="Book a Special Darshan Package for VIP access to Ram Mandir in Ayodhya. Skip the lines and enjoy a personalized spiritual experience." />
        <meta name="keywords" content="special darshan package, Ayodhya VIP darshan, Ram Mandir VIP pass, Ayodhya darshan booking, Ram Mandir special darshan, Ayodhya darshan tickets" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Special Darshan Package in Ayodhya | Book VIP Passes for Ram Mandir" />
        <meta property="og:description" content="Get VIP access to Ram Mandir in Ayodhya with our special darshan packages. Skip the lines and have a personalized spiritual experience." />
        <meta property="og:image" content="https://packagesayodhya.in/images/ram-mandir.webp" />
        <meta property="og:url" content="https://packagesayodhya.in/special-darshan" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Meta Tags */}
        <meta name="twitter:title" content="Special Darshan Package in Ayodhya | VIP Access to Ram Mandir" />
        <meta name="twitter:description" content="Book your special darshan package for Ram Mandir in Ayodhya and enjoy a hassle-free VIP experience." />
        <meta name="twitter:image" content="https://packagesayodhya.in/images/ram-mandir.webp" />
        <meta name="twitter:url" content="https://packagesayodhya.in/special-darshan" />

        {/* 🔹 Local SEO (Geo Meta Tags) */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />

        {/* 🔹 Canonical URL */}
        <link rel="canonical" href="https://packagesayodhya.in/special-darshan" />

        {/* 🔹 Structured Data for Special Darshan Package (Schema Markup) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Special Darshan Package for Ram Mandir",
            "description": "Book your special darshan package for VIP access to Ram Mandir in Ayodhya, skip the line and enjoy a personalized spiritual experience.",
            "image": "https://packagesayodhya.in/images/ram-mandir.webp",
            "url": "https://packagesayodhya.in/special-darshan",
            "priceCurrency": "INR",
            "price": "₹5000",
            "eligibleRegion": {
              "@type": "Place",
              "name": "Ayodhya"
            },
            "offers": {
              "@type": "Offer",
              "price": "₹5000",
              "priceCurrency": "INR",
              "url":  "https://packagesayodhya.in/special-darshan",
              "eligibleRegion": {
                "@type": "Place",
                "name": "Ayodhya"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Special Darshan Package"
              }
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://packagesayodhya.in/book-darshan-package?package_id={package_id}",
                "inLanguage": "en"
              }
            }
          })}
        </script>
            </Helmet>
            {/* Header */}
            <div className="header">
                <h1>Experience Divine Blessings with Special Darshan</h1>
                <p>Embark on a spiritual journey with our VIP Darshan package for a hassle-free, peaceful, and sacred experience.</p>
            </div>

            {/* Benefits */}
            <div className="benefits-section">
                <h2>Why Choose VIP Darshan?</h2>
                <ul>
                    <li>Skip the long lines and get fast-track entry to the temple.</li>
                    <li>Personalized guidance to ensure a meaningful and peaceful visit.</li>
                    <li>Access to exclusive areas for a closer and more personal experience.</li>
                    <li>Enjoy a premium service with all the comforts taken care of.</li>
                    <li>Priority Darshan for a spiritual journey free from any hassle.</li>
                </ul>
            </div>

            {/* How it Works */}
            <div className="how-it-works-section">
                <h2>How Does It Work?</h2>
                <p>
                    Once you book your Special Darshan package, you will receive confirmation and instructions to proceed with your visit. Upon arrival, our expert guide will meet you and escort you through the entire experience, ensuring you have an enriching and divine encounter with the deity. Enjoy refreshments and personalized services throughout the journey.
                </p>
            </div>
            {/* Call to Action */}
            <div className="cta-section">
                <h2>Book Your Special Darshan Today</h2>
                <p>Don’t miss out on this opportunity to experience a divine, hassle-free Darshan. Book your VIP Darshan and let your spiritual journey begin.</p>
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                {PackageData && <Package data={PackageData}/>}
                  </Suspense>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>Contact us for more information or assistance in booking your Special Darshan experience.</p>
            </div>
        </div>
    )
}

export default SpecialDarshan