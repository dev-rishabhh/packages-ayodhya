import React  from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
export default function footer() {
  return (
    <footer>
      <div className='footer-cont'>
        <article>
          <div>
            <img src='/images/logo.webp' alt="logo image" className='footer-img' height={"50px"}/>
            <p>Gaddopur, near RTO office Ayodhya 224001</p>
            <p>Phone: +91 8960967852</p>
            <Link to="mailto:rishabhpandey@packagesayodhya.in">rishabhpandey@packagesayodhya.in</Link>
            <p>www.packagesayodhya.in</p>
          </div>
          <div>
            <h2>Management</h2>
            <p>Developed and Managed by Rishabh Pandey</p>
            <p>Privacy Policy</p>
            <p>@ Rishabh Pandey | All Rights Reserved</p>
            <div className='footer-icon'>
            <p><FaFacebook/></p>
            <p><FaInstagram/></p>
            <p> <FaYoutube/></p>
            </div>
          </div>
          <div className='links-cont'>
            <h2> Important Links</h2>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/blogs'>Blogs</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
              <li><a href='/sitemap.xml'>Sitemap</a></li>
            </ul>
          </div>
        </article>
      </div>
    </footer>
  )
}
