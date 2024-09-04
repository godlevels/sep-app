import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp } from 'react-icons/io'
import Logo from '../img/header/logo.png'


const Footer = () => {
  return (
   <footer className='bg-dark text-white'>
        <div className="container mx-auto pt-10 py-10">
            <div className="flex flex-col lg:flex-row gap-x-44 gap-y-6">
                <div className=''>
                    <div className='flex items-center'>
                        <img src={Logo} alt="" className='w-9 h-9' />
                        <span className='text-xl font-bold'>SEPCEYOWOC</span>
                    </div>
                    <p className='max-w-[400px] leading-relaxed text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque error neque, ullam ducimus corrupti vero distinctio assumenda voluptas officia itaque.</p>

                    <p className='text-xs pt-8 mb-3'>follow us on</p>
                    <div className='flex gap-x-3'>
                        <IoLogoWhatsapp />
                        <IoLogoTwitter />
                        <IoLogoInstagram />
                        <IoLogoFacebook />
                    </div>
                </div>

                <div className='flex flex-col capitalize'>
                    <h1 className='font-semibold'>useful links</h1>
                    <a href="/">what we do</a>
                    <a href="/">faq</a>
                    <a href="/">our people</a>
                    <a href="/">socails</a>
                    <a href="/">banks</a>
                </div>

                <div className='flex flex-col capitalize'>
                    <h1 className='font-semibold'>pages</h1>
                    <a href="/">home</a>
                    <a href="/">about</a>
                    <a href="/">what we do</a>
                    <a href="/">offers</a>
                    <a href="/">contact</a>
                </div>

                <div className='flex flex-col capitalize'>
                    <h1 className='font-semibold'>contact us</h1>
                    <p>7788990000048</p>
                </div>
            </div>
        </div>

   </footer>
  )
}

export default Footer