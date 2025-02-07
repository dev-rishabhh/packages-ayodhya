import React, {lazy,Suspense } from 'react'
import { Link } from 'react-router-dom'
import './BlogsSection.css'
import BlogCard from './BlogCard';
import { fetchData } from '../hooks/getData';

const Loader = lazy(() => import('./Loader'))



function BlogsSection() {
    // const BlogsData = lazy(() => fetchData("Blogs"))
    const BlogsData=fetchData("Blogs")
    let blog;
    if (BlogsData) {
        blog = BlogsData.find((data) => data.id === 'ram-mandir-darshan-timings');
    }
    return (
        <section className="BlogsSection">
            <h1  className='text-center'>Blog</h1>
            <h2><p className='text-center'>Blogs & News from Packages Ayodhya</p></h2>
            <Link to={'/blogs'}><p className='text-center'>See More Articles--</p></Link>

            {!blog && <div className="skeleton">
          <div className="skeleton-image"></div>
          <div className="card-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-excerpt"></div>
          </div>
        </div>}

            {blog && <div>
                <Suspense fallback={<Loader/>}>
                <BlogCard blog={blog} />
                <Link to={`/blogs/${blog.id}`}><p>Read More--</p></Link>
                </Suspense>
            </div>}
        </section>
    )
}

export default BlogsSection