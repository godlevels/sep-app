// import images
import Logo from '../src/img/header/logo.png';
import GalleryImg1 from '../src/img/gallery/1.jpg';
import GalleryImg2 from '../src/img/gallery/2.jpg';
import GalleryImg3 from '../src/img/gallery/3.jpg';
import GalleryImg4 from '../src/img/gallery/4.jpg';
import GalleryImg5 from '../src/img/gallery/5.jpg';
import GalleryImg6 from '../src/img/gallery/6.jpg';
import GalleryImg7 from '../src/img/gallery/7.jpg';
import GalleryImg8 from '../src/img/gallery/8.jpg';
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
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
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'I’m Void Sir.',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const doings = [
  {
      icon: hand,
      name: 'Hand',
      heading: '01. protecting water quality',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum congue libero ultricies et condimentum vulputate convallis aliquet. At massa rhoncus, suspendisse in viverra risus feugiat ut.',
      desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum congue libero ultricies et condimentum.',
      button: 'read more'
  },
  {
      icon: cycle,
      name: 'Cycle',
      heading: '02. creating healthy economy',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum congue libero ultricies et condimentum vulputate convallis aliquet. At massa rhoncus, suspendisse in viverra risus feugiat ut.',
      desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum congue libero ultricies et condimentum.',
      button: 'read more'
  },
  {
      icon: protect,
      name: 'Protect',
      heading: '03. protecting farms and ranches',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum congue libero ultricies et condimentum vulputate convallis aliquet. At massa rhoncus, suspendisse in viverra risus feugiat ut.',
      desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum congue libero ultricies et condimentum.',
      button: 'read more'
  },
]


export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
    },
  ],
};

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'About me' },
      { href: '/', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};

export const eventsData = [
  {
      date: '21-23',
      month: 'April',
      image: img1,
      heading: 'energy export festival',
      icon: imgg,
      desc: '304 Falls Blvd , Quinc MA 2169',
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
      desc: '304 Falls Blvd , Quinc MA 2169',
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
      desc: '304 Falls Blvd , Quinc MA 2169',
      desc2: 'event details',
      icon2: note,
      text: 'remind me'
  },
]
