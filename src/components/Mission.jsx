/* eslint-disable jsx-a11y/img-redundant-alt */
import missionImg from '../img/about/story3.jpg'
import { fadeIn } from '../variants'
import { motion } from 'framer-motion'
import leaf from "../img/focus/leaf.png"


 

const Mission = () => {

    return (
        <div className='w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse'>
        <div className='lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg'>
            <img src={missionImg} alt="Mission Image" className='w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55%] object-cover'/>
        </div> 

        <div className='lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-start'>
        <div className=''>
          <img src={leaf} alt="" data-aos="zoom-in" data-aos-delay="160"/>
        </div>
            <motion.h6 variants={fadeIn('up')} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className='h2 max-w-[370px] lg:mb-8'>Our Mission:</motion.h6>
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0'>Effortless Strength, Timely Gains: Building Better Communities, Together</h1>
            <p className='lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4'>To inspire and enrich youth; women and children lives and experience and to empower them to reach their full potentials in health, wellbeing, education, learning and social inclusion.</p>
        </div>
        
    </div>
    )
}

export default Mission;

