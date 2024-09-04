// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './pics/img10.png';
import Features2Img from './pics/img11.png';

import Img1 from './pics/products/img1.png';
import Img2 from './pics/products/img2.png';
import Img3 from './pics/products/img3.png';
import Img4 from './pics/products/img4.png';
import Img5 from './pics/products/img5.png';
import Img6 from './pics/products/img6.png';
import Img7 from './pics/products/img7.png';
import Img8 from './pics/products/img8.png';
import Img9 from './pics/img9.png';


import TestimonialImg from './pics/img9.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';


export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'features',
    href: 'features',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

export const hero = {
  title: 'INTERIOR DESIGNING',
  subtitle:
    'We are here to design your space with the items you shop',
  buttonText: 'Shop Now',
};

export const stats = [
  {
    value: '100%',
    text: 'quality',
  },
  {
    value: '0',
    text: 'complients',
  },
  {
    value: '100+',
    text: 'areas to decour',
  },
  {
    value: '260+',
    text: 'Variant Furniture',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'We Create your home more aesthetic',
  subtitle:
    'Furniture power is a software as services for multipurpose business management system',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Valuation Services',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Development of Furniture Models',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'The Best Furniture Manufacturer of your choice',
    subtitle:
      'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
  },
};

export const newInStore = {
  title: 'New In Store Now',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'Aesthetic Mirror',
      image: <Img1 />,
    },
    {
      name: 'Room Interior',
      image: <Img2 />,
    },
    {
      name: 'Living Space',
      image: <Img3 />,
    },
    {
      name: 'lighting',
      image: <Img4 />,
    },
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Img5 />,
          icon: <IoMdAddCircle />,
          name: 'Wooden Steps',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Img6 />,
          icon: <IoMdAddCircle />,
          name: 'Artistic Wall',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Img7 />,
          icon: <IoMdAddCircle />,
          name: 'Wall Decoration',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Img8 />,
          icon: <IoMdAddCircle />,
          name: 'Interior-Living Space',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Img9 />,
          icon: <IoMdAddCircle />,
          name: 'Interior-Bed Room',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Img1 />,
          icon: <IoMdAddCircle />,
          name: 'Interior-Dressing Room',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Img2 />,
          icon: <IoMdAddCircle />,
          name: 'Interior-Sofa set',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Img3 />,
          icon: <IoMdAddCircle />,
          name: 'Interior-Hall',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Img8 />,
          icon: <IoMdAddCircle />,
          name: 'Creative-Hall',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Img9 />,
          icon: <IoMdAddCircle />,
          name: 'Interior-Sleeping Area',
          price: 75,
          oldPrice: 82,
        },
      ],
   
    },
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'Interio 2022 - All Rights Reserved.',
};
