import React from 'react'
import './Tour.css'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import Package from './package';
import { FaStar } from 'react-icons/fa'

import { fetchData } from '../hooks/getData';

function Tour() {

    const PackageData = fetchData("Packages")
    const { id } = useParams();
    let Tour;
    if (PackageData) {
        Tour = PackageData.find((tour) => tour.id === (id));
    }
    let restData;
    if (PackageData) {
        restData = PackageData.filter((data) => data.id !== (id))
    }
    return (
        <>
            {Tour && <div>
                <Helmet>
                    {/* <!-- Meta Tags for Bike Rental Page --/> */}
                    <title>{Tour.meta_title}</title>
                    <meta name="description" content={Tour.meta_description} />
                    <meta name="keywords" content={Tour.meta_keywords} />
                    <meta name="robots" content="index, follow" />

                    {/* <!-- Open Graph Tags for Social Media --/> */}
                    <meta property="og:title" content={Tour.meta_og_title} />
                    <meta property="og:description" content={Tour.meta_og_description} />
                    <meta property="og:image" content={Tour.meta_og_image} />
                    <meta property="og:url" content={Tour.meta_og_url} />

                    {/* Canonical Links */}
                    <meta name="canonical" content={Tour.meta_canonical} />

                    {/* <!-- Twitter Card Tags for Social Media --/> */}
                    <meta name="twitter:title" content={Tour.meta_twitter_title} />
                    <meta name="twitter:description" content={Tour.meta_twitter_description} />
                    <meta name="twitter:image" content={Tour.meta_twitter_image} />
                    <meta name="twitter:url" content={Tour.meta_twitter_url} />

                    {/* <!-- Local SEO Tags for Ayodhya and Other Cities --/> */}
                    <meta name="geo.region" content="IN-UP" />
                    <meta name="geo.placename" content="Ayodhya, Lucknow, Varanasi" />
                    <meta name="geo.position" content="26.7980;82.2000" />
                    <meta name="ICBM" content="26.7980, 82.2000" />

                    {/*structured data  */}
                    <script type="application/ld+json">{JSON.stringify(Tour.structured_data)}</script>

                </Helmet>
                <div>
                    <h1 className='tour-name'>{Tour.name}</h1>
                    <p className='tour-overview'>{Tour.overview}</p>
                </div>
                <section className="banner">
                    <img src={`/images/${Tour.image}`} alt="Tour Photo" className="banner-image" loading='lazy' />
                </section>

                <section className="quick-info">
                    <h2>Quick Info</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Rating:</td>
                                <td className='stars'>{Tour.rating.map((Star, idx) => (<FaStar key={idx} />))}</td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>{Tour.name}</td>
                            </tr>
                            <tr>
                                <td>Destination:</td>
                                <td>{Tour.destination}</td>
                            </tr>
                            <tr>
                                <td>Duration:</td>
                                <td>{Tour.duration}</td>
                            </tr>
                            {/* <tr>
                                <td>Price:</td>
                                <td>&#8377;{Tour.price}</td>
                            </tr> */}

                        </tbody>
                    </table>
                </section>

                <section className="itinerary">
                    <h2>Detailed Day Wise Itinerary</h2>
                    {Tour.days.map((day, idx) => (
                        <div className="day" key={idx}>
                            <h3>{day.Day}</h3>
                            <p>{day.desc}</p>
                        </div>
                    ))}
                </section>

                <section className="inclusion-exclusion">
                    <div className="inclusion">
                        <h2>Inclusion</h2>
                        <ul>
                            {Tour.inclusion.map((inc, idx) => (<li key={idx}><span>&#10004; </span>{inc}</li>))}
                        </ul>
                    </div>
                    <div className="exclusion">
                        <h2>Exclusion</h2>
                        <ul>
                            {Tour.exclusion.map((exc, idx) => (<li key={idx}><span>&#10006; </span>{exc}</li>))}
                        </ul>
                    </div>
                </section>
                <section className=" call-to-action">
                    <p>To book this tour package, please make an enquiry or call us at <strong>+91 8960967852</strong>.</p>
                </section>
                {restData && <section className="more-cont">
                    <h2>Similar Pacakages you may like</h2>
                    <article className='more'>
                        {restData.map((data, idx) => (
                            <Package data={data} key={idx} />
                        )
                        )}
                    </article>

                </section>
                }
            </div>
            }
        </>
    )
}

export default Tour