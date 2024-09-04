import * as React from 'react';

import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import FeaturesSecond from './FeaturesSecond';
import NewItems from './NewItems';
import Products from './Products';
import Testimonial from './Testimonial';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Typography from '@mui/material/Typography';

function Furniture(){
    
     return(
    
      <div className='w-full max-w-[1440px] mx-auto bg-white'>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/logi"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily:'sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'burlywood',
              textDecoration: 'none',
            }}
          >
           AESTHETICPRO
          </Typography>
           
            <Hero />
            <Features />
            <NewItems />
            <FeaturesSecond />
            <Products />
            <Testimonial />
            <Newsletter />
            <Footer />
      </div>
    
     );
}
export default Furniture;