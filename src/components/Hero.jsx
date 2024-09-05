import React from 'react';
import { heroData } from "../data"
import { motion } from 'framer-motion';
import { fadeIn } from "../variants"


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
  const {title, btnText, btnIcon} = heroData;

  return (
    <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[848px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
      <motion.div variants={container} initial="hidden" whileInView={"show"} className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'>
        <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
          <motion.h1 variants={fadeIn('down')} className='h1'>{title}</motion.h1>
          <motion.div variants={fadeIn('down')}>
            <button className='btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0'>
              {btnText}
              <div className='text-xl'>{btnIcon}</div> 
            </button>
          </motion.div> 
        </div>
      </motion.div>
    </section>
  )
};

export default Hero;
