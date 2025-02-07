import React,{useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import './header.css'
import {Link,} from 'react-router-dom'
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (e) => {
      e.stopPropagation()
      setIsOpen(!isOpen);
    };

    // useEffect(()=>{
    //   window.addEventListener("click",()=>{
    //     setIsOpen(true)
    //   })
    // },[isOpen])
  
    return (
      <nav className="navbar">
        <div className="navbar-logo"><img src='/images/logo.webp' alt="logo image" height={"38px"}/></div>
        <button className="navbar-toggler" onClick={(e)=>toggleMenu(e)} aria-label='Open menu'>
          <span>{isOpen?<FaTimes/>:<IoIosMenu/>}</span>
        </button>
        <ul className={`navbar-links ${isOpen ? "" :"active"}`} onClick={(e)=>toggleMenu(e)}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
}
