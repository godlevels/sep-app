import React from 'react';
import { heroData } from "../data";
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  const { slides } = heroData;

  return (
    <section className='relative mt-[120px] lg:mt-[150px]'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className='swiper-container'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className='bg-cover bg-center min-h-[40vh] lg:h-[848px] bg-no-repeat flex items-center justify-center xl:justify-end'
              style={{ backgroundImage: `url(${slide.image})` }}
              variants={container} 
              initial="hidden" 
              whileInView={"show"} 
            >
              <div className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'>
                <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
                  <motion.h1 variants={fadeIn('down')} className='h1'>{slide.title}</motion.h1>
                  <motion.div variants={fadeIn('down')}>
                    <a href="https://www.facebook.com/profile.php?id=100080074551293">
                      <button className='btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0'>
                        {slide.btnText}
                        <div className='text-xl'>{slide.btnIcon}</div>
                      </button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
