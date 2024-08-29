import React, { useState } from 'react';
import leaf from "../img/focus/leaf.png"
import { galleryData } from '../data'
import { PhotoAlbum } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const slides = galleryData.images.map(({original, width, height})=> ({
  src: original,
  width,
  height,
}))

const GallerySection = () => {
  const [index, setIndex] = useState(-1)
  const { title, btnText, btnIcon, images } = galleryData;
  return (
    <section className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'>
      <div className='container mx-auto'>
      <div className='relative'>
        <img  data-aos="zoom-in" data-aos-delay="180" src={leaf} alt="" className='absolute left-20 -top-10'/>
      </div>
        <motion.h1 variants={fadeIn('up')} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className='h2 max-w-[370px] lg:mb-20'>{title}</motion.h1>
      </div>
      <motion.div className='mb-8 lg:mb-20'>
        <PhotoAlbum onClick={(event, photo, index)=> setIndex(index)} layout='rows' photos={images} />
        <Lightbox slides={slides} styles={{ container: { backgroundColor: 'rgba(0,0,0,.9)' } }} open={index >= 0} index={index} close={()=> setIndex(-1)} />
      </motion.div>

      <motion.div variants={fadeIn('up')} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.2}} className='flex justify-center'>
        <button className='btn btn-lg btn-dark'>
          {btnText} <div className='text-xl'>{btnIcon}</div>
        </button>
      </motion.div>
      <div className='relative'>
        <img  data-aos="zoom-in" data-aos-delay="180" src={leaf} alt="" className='absolute left-20 -top-10'/>
      </div>
    </section>
  );
};

export default GallerySection;
