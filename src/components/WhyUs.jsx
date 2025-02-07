import React from 'react'
import './WhyUs.css'

function WhyUs() {
  return (
<section className='whyus'>
    <h1 className='whyus-heading'><p>Why Choose Us?</p></h1>
    <div className='whyus-cont'>
    <article className='whyus-card'>
    <div className="reason-logo">
       <p>&#8377;</p>
    </div>
    <h2><p>Best price in Guarantee</p></h2>
    <p>We guarantee the best prices across all our services, including tour packages, hotel bookings, and transportation. Enjoy unbeatable rates without compromising on quality, ensuring you get the most value for your visit to Ayodhya.</p>
   </article>
   <article className='whyus-card'>
    <div className="reason-logo">
    <p>&#10084;</p>
    </div>
    <h2><p>Personalised Services</p></h2>
    <p>Our services are customized to your preferences, offering a tailored experience for every traveler. From personalized tours to handpicked hotel accommodations, we ensure your journey through Ayodhya meets your unique needs and desires.</p>
   </article>
   <article className='whyus-card'>
    <div className="reason-logo">
    <p>&#127970; </p>
    </div>
    <h2><p>Based in Ayodhya</p></h2>
    <p>As a locally based service provider, we bring unmatched knowledge and expertise to your Ayodhya experience. From exclusive insights into local culture to seamless travel planning, we ensure an authentic and memorable visit to the city</p>
   </article>
    </div>
  
</section>
  )
}

export default WhyUs