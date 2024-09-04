import * as React from 'react';

import Header1 from './Header1';
import Hero1 from './Hero1';
import Features1 from './Features1';
import FeaturesSecond1 from './FeaturesSecond1';   
import NewItems1 from './NewItems1';
import Products1 from './Products1';
import Testimonial1 from './Testimonial1';
import Newsletter1 from './Newsletter1';
import Footer1 from './Footer1';
import Typography from '@mui/material/Typography';

function InteriorDesign(){
    
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
           
            <Hero1 />
            <Features1 />
            <NewItems1 />
            <FeaturesSecond1 />
            <Products1 />
            <Testimonial1 />
            <Newsletter1 />
            <Footer1 />
      </div>
    
     );
}
export default InteriorDesign;