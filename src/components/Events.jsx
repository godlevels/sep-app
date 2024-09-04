import leaf from "../img/focus/leaf.png"
import { eventsData } from '../data'

const Events = () => {
  return (
        <section className='pt-16'>
            <div className="container mx-auto">
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold capitalize'>upcoming events</h1>
                </div>

                <div className='relative'>
                    <img src={leaf} alt="" className='right-20 absolute' />
                </div>


                <div className='flex flex-col gap-x-10'>
                    {eventsData.map((item, index) => {
                        const {date, month, image ,heading, icon, icon2, desc, desc2, text} = item 
                            return (
                                <div key={index} className='border-b border-gray-600'>
                                    
                                    <div className='flex items-center justify-center flex-col lg:justify-start lg:flex-row '>
                                        <div className='flex-col border text-center hover:bg-green-300  border-gray-500 p-6 rounded-md mb-10 mt-10 mr-5'>
                                        <h4>{date}</h4>
                                        <h5 className='capitalize'>{month}</h5>
                                        </div>

                                        <div className='flex items-center flex-col lg:flex-row gap-x-7'>
                                            <img data-aos="zoom-in" data-aos-delay="255" src={image} alt="" className='w-full lg:w-36 mb-3'/>

                                            <div className='flex flex-col mb-5'>
                                                <div>
                                                <h1 className='capitalize font-semibold mb-4'>{heading}</h1>
                                                </div>
                                               <div className='flex gap-x-1'>
                                               <img src={icon} alt="" className='w-3 h-5'/>
                                                <p>{desc}</p>
                                               </div>
                                            </div>
                                        </div>


                                        <div className='flex flex-col items-center justify-center ml-0 lg:ml-80'>
                                            <h2 className='border border-green-600 px-8 py-1 rounded-md text-black'>{desc2}</h2>
                                            <div className='flex items-center justify-center gap-x-2 py-4'>
                                                <img src={icon2} className='w-3 h-3' alt="" />
                                                <p>{text}</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                    })}
                </div>


            </div>



        </section> 
  )
}

export default Events