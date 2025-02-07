import React from 'react';
import {Link} from 'react-router-dom'
import './Blogs.css';
import BlogCard from './BlogCard';


//logic to push blogs data to database 
// import { putData } from '../hooks/putData';
// putData("Blogs",BlogsData)

import { fetchData } from '../hooks/getData';


const BlogPage = () => {

  const BlogsData = fetchData("Blogs")

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Explore Spiritual Journeys Across the World</h1>
          <p>Embark on your next pilgrimage or spiritual adventure today.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="content-container">
        <div className="blogs-list">
          <h2>Latest Blogs</h2>
          <div className="blog-cards-container">
            
            {/*if not blogs component */}
            {BlogsData=='' && <div className="skeleton">
              <div className="skeleton-image"></div>
              <div className="card-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-excerpt"></div>
              </div>
            </div>
            }
            {/* If blogs component */}
            {BlogsData && BlogsData.map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <BlogCard blog={blog} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
