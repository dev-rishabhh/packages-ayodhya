import React from 'react'
import "./Loader.css"; // Import the CSS file

function Loader() {
  return (
    <div className="loader-container">
    <div className="earth">
      <div className="plane"></div>
    </div>
    <p className="loading-text">Loading...</p>
  </div>
  )
}

export default Loader