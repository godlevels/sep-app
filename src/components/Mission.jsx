import { fadeIn } from '../variants'
import { motion } from 'framer-motion'
import leaf from "../img/focus/leaf.png"

 

const Mission = () => {

    return (
        <div className='pt-20 mb-5'>
            <div className='container mx-auto'>
            <div className=''>
                <img src={leaf} alt="" data-aos="zoom-in" data-aos-delay="160"/>
            </div>
             <motion.div variants={fadeIn('up')} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className='mb-10'>
                <h1 data-aos="zoom-in" data-aos-delay="160" className='h2 max-w-[370px] lg:mb-20'>Our Mission:</h1>
             </motion.div>
                
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Mission;
