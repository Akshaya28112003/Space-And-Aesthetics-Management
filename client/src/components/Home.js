import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './Home.css';

/*import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import FeaturesSecond from './FeaturesSecond';
import NewItems from './NewItems';
import Products from './Products';
import Testimonial from './Testimonial';
import Newsletter from './Newsletter';
import Footer from './Footer';*/


const pages = ['Furniture','InteriorDesigning'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Home(props){
    if(props.store.getState()[0]== null){
       props.store.dispatch({type:"login",data:{un:props.un,role:1}})
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
     return(
        <div>
         < AppBar
          position="static"
          className="navihome"
          elevation={0}
          sx={{ borderBottom: (theme) => `2px solid ${theme.palette.divider}` }}
     >

      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{color:'bisque'}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography
                    textAlign="center"
                    variant="h10"
                    noWrap
                    component="a"
                    href={page.toLowerCase().substring(0,4)}
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'none' },
                      fontFamily: 'monospace',
                      fontWeight: 400,
                      letterSpacing: '.1rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {page}
                </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AESTHETICPRO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'cyan', display: 'block' }}
              >
             <Typography
                variant="h7"
                noWrap
                component="a"
                href={page.toLowerCase().substring(0,4)}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 400,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
            }}
            >
                {page}
            </Typography>

              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={props.store.getState()[0]} src="/static/images/avatar/2.jpg" /> 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
            {settings.map((setting) => (
               
               <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  
                <Typography
                    textAlign="center"
                    variant="h10"
                    noWrap
                    component="a"
                    href={setting.toLowerCase().substring(0,3)}
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 400,
                      letterSpacing: '.1rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                 >
                
                       {setting}
                  </Typography>
                </MenuItem>
                  
              ))}

            </Menu>
            </Box>
        </Toolbar>
      </Container>
        <div style={{marginTop:"0px"}}>
            <Typography component="h1" variant="h5" color="inherit" gutterBottom>
            welcome {props.store.getState()[0]} !!!
            </Typography>
        </div>
      </AppBar>
          

      {/*<div className='w-full max-w-[1440px] mx-auto bg-white'>
           
            <Hero />
            <Features />
            <NewItems />
            <FeaturesSecond />
            <Products />
            <Testimonial />
            <Newsletter />
            <Footer />
      </div>*/}

<div className='hero-container'>
      <video src='/videos/interior.mp4' autoPlay loop muted />
      <h1>Space & Aesthetic Management System</h1>
      <p>  Transform your space with our unique interior design and space management solutions.</p>
      <div className='hero-btns'>
       
        
      </div>
    </div>
  </div>
     );
}
export default Home;