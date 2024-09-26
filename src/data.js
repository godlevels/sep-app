// import images
import Logo from '../src/img/header/logo.png';
import backgroundImage1 from "../src/img/hero/2.jpg"
import backgroundImage2 from "../src/img/hero/3.jpg"
import backgroundImage3 from "../src/img/hero/4.jpg"
import backgroundImage4 from "../src/img/hero/5.jpg"
import backgroundImage5 from "../src/img/hero/6.jpg"
import GalleryImg1 from '../src/img/gallery/1.jpg';
import GalleryImg2 from '../src/img/gallery/2.jpg';
import GalleryImg3 from '../src/img/gallery/3.jpg';
import GalleryImg4 from '../src/img/gallery/4.jpg';
import GalleryImg5 from '../src/img/gallery/5.jpg';
import GalleryImg6 from '../src/img/gallery/8.jpg';
import GalleryImg7 from '../src/img/gallery/7.jpg';
import GalleryImg8 from '../src/img/gallery/6.jpg';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoWhatsapp, IoMdArrowForward } from 'react-icons/io';
import {
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';
import hand from './img/focus/hand.png'
import protect from './img/focus/protect.png'
import cycle from './img/focus/cycle.png'
import img1 from './img/events/b1.png'
import img2 from './img/events/b2.png'
import img3 from './img/events/b3.png'
import imgg from './img/events/location.png'
import note from './img/events/bell.png'


export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/', name: 'About' },
    { href: '/', name: 'Focus' },
    { href: '/', name: 'Gallery' },
    { href: '/', name: 'Articles' },
    { href: '/', name: 'Contact' },
  ],
};

export const socialData = [
  { href: 'https://www.facebook.com/profile.php?id=100080074551293', icon: <GrFacebookOption /> },
  { href: 'https://chat.whatsapp.com/C2CZ4ANXtENEPzzKF1TyVG', icon : <IoLogoWhatsapp /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];


export const heroData = {
  slides: [
    {
      title: 'Healthier people, Champion Society.',
      btnText: 'read more',
      btnIcon: <IoMdArrowForward />,
      image: backgroundImage1,
    },
    {
      title: 'Child Protection',
      btnText: 'read more',
      btnIcon: <IoMdArrowForward />,
      image: backgroundImage2,
    },
    {
      title: 'International Youth Day',
      btnText: 'read more',
      btnIcon: <IoMdArrowForward />,
      image: backgroundImage3,
    },
    {
      title: 'International Day of the Girl Child.',
      btnText: 'read more',
      btnIcon: <IoMdArrowForward />,
      image: backgroundImage4,
    },
    {
      title: 'Health',
      btnText: 'read more',
      btnIcon: <IoMdArrowForward />,
      image: backgroundImage5,
    },
  ],
};

export const doings = [
  {
      icon: hand,
      name: 'Hand',
      heading: '01. Education',
      desc: 'Educate youth, women and children to have voice, different thinking and new perspectives.',
      desc2: 'Promote lifelong learning opportunities for all, emphasizing the importance of education in achieving personal and community growth.',
      button: 'read more'
  },
  {
      icon: cycle,
      name: 'Cycle',
      heading: '02. Empowerment',
      desc: 'Empower youth, women and adolescent ones to build their inner confidence.',
      desc2: 'Facilitate access to resources and support systems that help individuals gain control over their lives and make informed decisions.',
      button: 'read more'
  },
  {
      icon: protect,
      name: 'Protect',
      heading: '03. Engagement',
      desc: 'Engage more youth, women and children in community activities to have a champion society.',
      desc2: 'Foster active participation in social, economic, and cultural activities to strengthen community bonds and create a supportive environment.',
      button: 'read more'
  },
  {
    icon: hand,
    name: 'health',
    heading: '04. Health',
    desc: 'SEPCEYOWOC  provides Medical Outreaches for communities, educate,',
    desc2: 'and inspire individuals to take control of their well-being. We believe that every person deserves to live a vibrant, healthy life.',
    button: 'read more'
},
];



export const galleryData = {
  title: 'Check Our gallery:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images :[
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 890,
      height: 590,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 400,
      height: 300,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 700,
      height: 450,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 600,
      height: 768,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 1400,
      height: 900,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 300,
      height: 400,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 500,
      height: 375,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 700,
      height: 525,
    },
  ]
}


export const eventsData = [
  {
      date: '21-23',
      month: 'April',
      image: img1,
      heading: 'energy export festival',
      icon: imgg,
      desc: 'Ilorin',
      desc2: 'event details',
      icon2: note,
      text: 'remind me'
  },
  {
      date: '21-23',
      month: 'may',
      image: img2,
      heading: 'Operation Save the Economy',
      icon: imgg,
      desc: 'Ilorin',
      desc2: 'event details',
      icon2: note,
      text: 'remind me'
  },

  {
      date: '21-23',
      month: 'june',
      image: img3,
      heading: 'The Environment Music Festival',
      icon: imgg,
      desc: 'Ilorin',
      desc2: 'event details',
      icon2: note,
      text: 'remind me'
  },
]
