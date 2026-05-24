import React from 'react';
import Features from './components/Features';
import Testimonials from './components/testimonials';
import FAQ from './components/FAQ';
import Trust from './components/Trust';
import Beams from './components/styles/Beams';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const page = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Beams />
      </div>
      <Navbar />
      <Hero />
      <Features />
      <Trust />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}

export default page