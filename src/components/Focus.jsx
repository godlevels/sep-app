import React, { useState } from 'react'
import leaf from "../img/focus/leaf.png"
import { doings } from '../data';

const Focus = () => {
  const [itemName, setItemName] = useState('Hand');
  return (
    <section className='pt-20 mb-5'>
        <div className="container mx-auto">
            <div className=''>
                <img src={leaf} alt="" data-aos="zoom-in" data-aos-delay="160"/>
            </div>
            <div className='mb-10'>
                <h1 data-aos="zoom-in" data-aos-delay="160" className='text-center font-semibold text-2xl capitalize'>what we do</h1>
            </div>

            <div className='flex flex-col gap-[45px] lg:flex-row px-0 lg:px-8'>
                {doings.map((item, index) => {
                    const {icon, name, heading, button, desc, desc2} = item

                    return (
                        <div data-aos="fade-up" data-aos-delay="165" key={index} onClick={() => setItemName(name)} 
                            className={`${ name === itemName ? 'bg-green-400 text-white' : 'bg-white'} w-full rounded-2xl py-12 px-6 shadow-2xl drop-shadow-md cursor-pointer transition ease-in duration-500`}
                        >
                                <div className='flex flex-col'>
                                    <img src={icon} alt="" className='w-16 h-16 py-1 bg-green-200 rounded-md px-2 object-cover text-green-400' />
                                </div>
                               
                               <div className='py-5'>
                                    <h2 className='text-xl font-semibold capitalize'>{heading}</h2>
                               </div>

                               <div className=''>
                                    <p className='mb-5 text-sm'>{desc}</p>
                                    <p className='mb-5 text-sm'>{desc2}</p>

                                <button className='text-green-500 border-b border-green-600'>{button}</button>
                               </div>


                        </div>
                    )
                        
                })}

            </div>

            <div className='button flex justify-center items-center py-10'>
                <button  data-aos="fade-up" data-aos-delay="170" className=' border border-green-500 capitalize rounded-md px-10 py-2 text-black hover:bg-green-500 hover:text-white'>join us</button>
            </div>




        </div>

    </section>
  )
}

export default Focus
