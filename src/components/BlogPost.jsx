import React, {Suspense, lazy} from 'react';
import './BlogPost.css';
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchData } from '../hooks/getData';
import { FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';
const Tours = lazy(() => import('./tours'))
const Loader = lazy(() => import('./Loader'))


// import BlogsData from  '../data/BlogsData/BlogsData'
// import PackageData from '../data/places/packages';

const BlogPost = () => {
  const { id } = useParams("id")
  const BlogsData = fetchData("Blogs")

  let blog;

  if (BlogsData) {
    blog = BlogsData.find((data) => data.id === id)
  }
  return (
    BlogsData && <div className="blog-post-container">
      <Helmet>
        {/* <!-- Meta Tags for Bike Rental Page --/> */}
        <title>{blog.meta_title}</title>
        <meta name="description" content={blog.meta_description} />
        <meta name="keywords" content={blog.meta_keywords} />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph Tags for Social Media --/> */}
        <meta property="og:title" content={blog.meta_og_title} />
        <meta property="og:description" content={blog.meta_og_description} />
        <meta property="og:image" content={blog.meta_og_image} />
        <meta property="og:url" content={blog.meta_og_url} />
        <meta property="og:site_name" content={blog.meta_og_site_name} />

        {/* <!-- Twitter Card Tags for Social Media --/> */}
        <meta name="twitter:title" content={blog.meta_twitter_title} />
        <meta name="twitter:description" content={blog.meta_twitter_description} />
        <meta name="twitter:image" content={blog.meta_twitter_image} />
        <meta name="twitter:url" content={blog.meta_twitter_url} />

        {/* <!-- Local SEO Tags for Ayodhya and Other Cities --/> */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya, Lucknow, Varanasi" />
        <meta name="geo.position" content="26.7980;82.2000" />
        <meta name="ICBM" content="26.7980, 82.2000" />

        {/*structured data  */}
        <script type="application/ld+json">{JSON.stringify(blog.structured_data)}</script>

      </Helmet>
      <div className="blog-post-header">
        <h1>{blog.title}</h1>
        <img src={`/images/${blog.image}`} alt="Blog related Image" className="blog-post-image" loading='lazy' />
      </div>

      <div className="blog-post-content">
        {blog.content}
      </div>

      <div className="social-share">
        <p>Share this article via</p>
        <div className="share-btns">
          <Link to={`https://www.facebook.com/share/sharer.php?u=${window.location.href}&quote=${blog.title}`} target='_blank' rel='noopener noreferrer'><FaFacebook /></Link>
          <Link to={`https://api.whatsapp.com/send?text=${blog.title}-${window.location.href}`} target='_blank' rel='noopener noreferrer'><FaWhatsapp /></Link>
          <Link to={`https://twitter.com/intent/tweet?text=${blog.title} &url=${window.location.href}`} target='_blank' rel='noopener noreferrer'><FaTwitter /></Link>
        </div>
      </div>

      <div className="comments-section">
        <Suspense fallback={<Loader/>}>
        <Tours />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogPost;
