import React from 'react';
import './BlogCard.css'; // Styles for BlogCard

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={`/images/${blog.image}`} alt='Blog Related Image' className="blog-card-image"  loading='lazy'/>
      <div className="blog-card-content">
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
