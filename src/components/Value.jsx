import { fadeIn } from '../variants'
import { motion } from 'framer-motion'
import leaf from "../img/focus/leaf.png"

 

const Value = () => {

    return (
        <div className='pt-20 mb-5'>
            <div className='container mx-auto'>
            <div className=''>
                <img src={leaf} alt="" data-aos="zoom-in" data-aos-delay="160"/>
            </div>
             <motion.div variants={fadeIn('up')} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className='mb-10'>
                <h1 data-aos="zoom-in" data-aos-delay="160" className='h2 max-w-[370px] lg:mb-20'>Our Value:</h1>
             </motion.div>
                <div className='w-full h-auto flex items-center justify-center gap-x-32 gap-y-5 flex-wrap mb-10'>
                        <div className="bg-[#104823]">
                          <div className='w-full h-full bg-black/80 absolute top-0 left-0 -z-10'></div>
                          <div className='w-full h-full flex items-center justify-center flex-col text-white py-4 px-8 z-50 text-[1.5rem]'>
                          <h1>Integrity</h1>
                          </div>
                        </div>
                        <div className="bg-[#000]">
                          <div className='w-full h-full bg-black/80 absolute top-0 left-0 -z-10'></div>
                          <div className='w-full h-full flex items-center justify-center flex-col text-white py-4 px-8 z-50 text-[1.5rem]'>
                          <h1>Transparency</h1>
                          </div>
                        </div>
                        <div className="bg-[#104823]">
                          <div className='w-full h-full bg-black/80 absolute top-0 left-0 -z-10'></div>
                          <div className='w-full h-full flex items-center justify-center flex-col text-white py-4 px-8 z-50 text-[1.5rem]'>
                          <h1>Equity</h1>
                          </div>
                        </div>
                        <div className="bg-[#000]">
                          <div className='w-full h-full bg-black/80 absolute top-0 left-0 -z-10'></div>
                          <div className='w-full h-full flex items-center justify-center flex-col text-white py-4 px-8 z-50 text-[1.5rem]'>
                          <h1>Accountability</h1>
                          </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Value;
