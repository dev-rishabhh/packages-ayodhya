import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import Header from './components/Header';
import TopComponent from './components/TopComponent';
import Homepage from './components/homepage';


const AyodhyaHistory = lazy(() => import('./components/ayodhyaHistory'))
const Services = lazy(() => import('./components/services'));
const Tours = lazy(() => import('./components/tours'))
const Taxiservice = lazy(() => import('./components/taxiservice'))
const Testimonials = lazy(() => import('./components/testimonials'));
const BlogsSection = lazy(() => import('./components/BlogsSection'));
const WhyUs = lazy(() => import('./components/WhyUs'));

const Loader = lazy(() => import('./components/Loader'))

const Tour = lazy(() => import('./components/Tour'));
const Footer = lazy(() => import('./components/footer'))
const Bottombar = lazy(() => import('./components/bottombar'))
const Hotels = lazy(() => import('./components/hotels'))
const Form = lazy(() => import('./components/form'))
const BlogPage = lazy(() => import('./components/Blogs'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const DonationPage = lazy(() => import('./components/DonationPage'));
const BikeRental = lazy(() => import('./components/BikeRental'));
const SpecialDarshan = lazy(() => import('./components/SpecialDarshan'));
const CurrencyExchange = lazy(() => import('./components/CurrencyExchange'));

import './App.css'
function App() {
  return (
    <Router>
      <TopComponent/>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/tours' element={[<Suspense fallback={<Loader/>} key={0}><AyodhyaHistory key={1} />, <Tours key={2} />, <Testimonials key={3} />, <BlogsSection key={4} /></Suspense>]} />
        <Route path='/tours/:id' element={<Suspense fallback={<Loader/>}><Tour /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Loader/>}><Form /></Suspense>} />
        <Route path='/cab-services' element={<Suspense fallback={<Loader/>}><Taxiservice /></Suspense>} />
        <Route path='/services' element={[<Suspense fallback={<Loader/>} key={0}><AyodhyaHistory key={1}/>, <Services key={2} />, <WhyUs key={3} />, <BlogsSection key={4} /></Suspense>]} />
        <Route path='/hotels' element={<Suspense fallback={<Loader/>}><Hotels /></Suspense>} />
        <Route path='/blogs' element={<Suspense fallback={<Loader/>}><BlogPage /></Suspense>} />
        <Route path='/blogs/:id' element={<Suspense fallback={<Loader/>}><BlogPost /></Suspense>} />
        <Route path='/donation' element={<Suspense fallback={<Loader/>}><DonationPage /></Suspense>} />
        <Route path='/bike-rental' element={<Suspense fallback={<Loader/>}><BikeRental /></Suspense>} />
        <Route path='/special-darshan' element={<Suspense fallback={<Loader/>}><SpecialDarshan /></Suspense>} />
        <Route path='/currency-exchange' element={<Suspense fallback={<Loader/>}><CurrencyExchange /></Suspense>} />
        <Route path='*' element={<div>no page found</div>} />
      </Routes>
      <Bottombar />
      <Footer />
    </Router>
  )
}

export default App
