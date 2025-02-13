
import './homepage.css'
import { Suspense, lazy } from 'react'

const AyodhyaHistory = lazy(() => import('./ayodhyaHistory'))
const Toppalaces = lazy(() => import('./toppalaces'))
const WhetherCard = lazy(() => import('./WhetherCard'));
const Services = lazy(() => import('./services'));
const Tours = lazy(() => import('./tours'))
const Taxiservice = lazy(() => import('./taxiservice'))
const WhyUs = lazy(() => import('./WhyUs'));
const Testimonials = lazy(() => import('./testimonials'));
const BlogsSection = lazy(() => import('./BlogsSection'));
const Loader = lazy(() => import('./Loader'))


import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom'
export default function homepage() {
    return (
        <>
            <section className='homepage'>
                <Helmet>
                     <link rel="preload" href="/images/varanasi-background.webp" as='image'/>
                    {/* Title and Meta Description */}
                    <title>Explore Ayodhya & Beyond | Best Travel Guides, Rentals & Tours</title>
                    <meta name="description" content="Discover Ayodhya's rich history, top attractions, and best travel experiences. Book bike rentals, find tour guides, and explore nearby destinations." />
                    <meta name="keywords" content="Ayodhya tourism, best places to visit in Ayodhya, Ayodhya travel guide, bike rental in Ayodhya, top Ayodhya tours, Ayodhya attractions" />
                    <meta name="robots" content="index, follow" />

                    {/* Open Graph Meta Tags */}
                    <meta property="og:title" content="Explore Ayodhya & Beyond | Best Travel Guides, Rentals & Tours" />
                    <meta property="og:description" content="Plan your trip to Ayodhya with our complete travel guide. Get the best bike rentals, find local tours, and explore hidden gems." />
                    <meta property="og:image" content="https://packagesayodhya.in/images/varanasi-background.webp" />
                    <meta property="og:url" content="https://packagesayodhya.in/" />
                    <meta property="og:site_name" content="packages ayodhya" />
                    <meta property="og:type" content="website" />

                    {/* Twitter Meta Tags */}
                    <meta name="twitter:title" content="Ayodhya Travel Guide | Best Tours & Rentals" />
                    <meta name="twitter:description" content="Get the best travel tips for Ayodhya. Explore historic sites, find bike rentals, and book guided tours for a hassle-free trip." />
                    <meta name="twitter:image" content="https://packagesayodhya.in/images/varanasi-background.webp"/>
                    <meta name="twitter:url" content="https://packagesayodhya.in/" />

                    {/* Geo Meta Tags (For Local SEO) */}
                    <meta name="geo.region" content="IN-UP" />
                    <meta name="geo.placename" content="Ayodhya" />
                    <meta name="geo.position" content="26.7980;82.2000" />
                    <meta name="ICBM" content="26.7980, 82.2000" />

                    {/* Canonical Tag */}
                    <link rel="canonical" href="https://packagesayodhya.in/" />

                    {/* Structured Data for Homepage (Schema Markup) */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "packagesayodhya",
                            "url": "https://packagesayodhya.in/",
                            "description": "Explore Ayodhya and beyond with expert travel guides, bike rentals, and tour packages. Plan your perfect trip today!",
                            "image": "https://packagesayodhya.in/images/varanasi-background.webp",
                            "keywords": "ayodhya tour packages, ram mandir tour packages, chennai to ayodhya tour, bengluru to ayodhya tour, ayodhya varanasi lucknow tour, hotels in ayodhya, ram mandir, ram temple, cab in ayodhya, top places to visit in ayodhya, ram temple tour",
                            "publisher": {
                                "@type": "Organization",
                                "name": "packagesyodhya",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://packagesayodhya.in/images/favicon.png"
                                }
                            },
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://packagesayodhya.in/search?q={Ayodhya tour packages}",
                                "query-input": "required name=Ayodhya tour packages"
                            }
                        })}
                    </script>
                </Helmet>
                <div className='bg-img-cont'>
                    <img src='/images/varanasi-background.webp' alt="HomePage Image"/>
                    <div className='bg-text-cont'>
                        <p className='text-one'>Planning a tour to Ayodhya!</p>
                        {/* <p className='text-two'>The land of lord Rama</p> */}
                        <p className='text-three'>Discover this amazing place with us</p>
                        <div className='btn-cont'>
                            <Link className='homepage-link' to='/tours'>Explore Tours </Link>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<Loader/>}> <AyodhyaHistory/> </Suspense>
                <Suspense fallback={<Loader/>}> <Toppalaces /> </Suspense>
                <Suspense fallback={<Loader/>}> <WhetherCard /> </Suspense>
                <Suspense fallback={<Loader/>}> <Services /> </Suspense>
                <Suspense fallback={<Loader/>}> <Tours /> </Suspense>
                <Suspense fallback={<Loader/>}>  <Taxiservice /> </Suspense>
                <Suspense fallback={<Loader/>}>  <WhyUs />, </Suspense>
                <Suspense fallback={<Loader/>}>  <Testimonials /></Suspense>
                <Suspense fallback={<Loader/>}>  <BlogsSection  /></Suspense>

            </section>
        </>
    )
}
