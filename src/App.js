import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Focus from './components/Focus';
import Events from './components/Events';
import Cta from './components/Cta';
import Value from './components/Value';


const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <Focus />
      <Value />
      <GallerySection />
      <Events />
      <Cta />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
