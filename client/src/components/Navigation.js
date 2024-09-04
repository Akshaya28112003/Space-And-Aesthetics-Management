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
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import '../App.css';

const pages = ['Registration', 'Login','AboutUs'];


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  
}));


function Navigation(props) {

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

  const footers = [
    {
      title: 'Company',
      description: ['Login','Registration','Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

  const itemData = [
    {
      img: 'https://wallpaperaccess.com/full/2076086.jpg',
      title: 'Aesthetic furniture',
      author: '@bkristastucchio',
      
    },
    {
      img: 'https://i.pinimg.com/originals/9e/39/8a/9e398a232e9ecffb9430c4e0969ed893.jpg',
      title: 'Conference halls',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1306/4195/products/wallmantra-collage-photo-frames-the-wall-of-memories-photo-frame-set-with-beautiful-art-placeholders-set-of-36-frames-30129178378406_800x.jpg?v=1628478173',
      title: 'Wall of memories',
      author: '@helloimnik',
    },
    {
      img: 'https://i.pinimg.com/564x/8e/f1/35/8ef1353c6192c56f712a67493823d808.jpg',
      title: 'Artistic look',
      author: '@nolanissac',
     
    },
    {
      img: 'https://i.pinimg.com/564x/14/69/21/14692192b36874973baddb1673c945b8.jpg',
      title: 'Restaurant interior',
      author: '@hjrc33',
     
    },
    {
      img: 'https://i.pinimg.com/564x/82/be/84/82be848b701be1f7a6adb17de3c22527.jpg',
      title: 'Green Wall',
      author: '@arwinneil',
      
    },
    {
      img: 'https://i.pinimg.com/564x/dd/e3/67/dde3670ca1eac480f5734d4236abe43d.jpg',
      title: 'Cafe Interior',
      author: '@nolanissac',
     
    },
    {
      img: 'https://i.pinimg.com/564x/85/b8/0d/85b80d283ca7afb89f1329af19df70b3.jpg',
      title: 'Modern study Space',
      author: '@hjrc33',
      
    },
    /*{
      img: 'https://i.pinimg.com/564x/2f/6a/b1/2f6ab1369e4048bc732d7a58f5dbb5f6.jpg',
      title: 'Space Saving',
      author: '@arwinneil',
      
    },*/
    
  ]

  const classes = useStyles();

  return (
  <div>
    <div>
    < AppBar
          position="static"
          className="navidiv"
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
          
          
        </Toolbar>
      </Container>
      <div style={{marginTop:"130px" ,dispaly:'block'}}>
      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Space & Aesthetic Management System
            </Typography>
        <Typography variant="h5" color="inherit" paragraph>
             Transform your space with our unique interior design and space management solutions.
        </Typography>
        </div>
      </AppBar>     
      </div>
    
    {/*imagelist */}
    <div className={classes.root} style={{marginTop:"0px"}}>
      <ImageList rowHeight={400} className={classes.imageList} style={{width:"100%"}}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">OUR SERVICES</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
      {/*footer*/}
    <div style={{marginTop:"0%",marginRight:"0px",marginLeft:"0px"}}>
      <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Footer */}
      <Container 
        maxWidth="100%"
        component="footer"
        /*sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                      
                  }}*/

      sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],

          backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
        }}
        //className="footer-col" 
      >
        <Grid container spacing={4} justifyContent="space-evenly" >
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href={item.toLowerCase().substring(0,3) } variant="subtitle1" color='text.secondary' style={{textDecoration: 'none'}}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid> 
      </Container>
      {/* End footer */}
     
    
     </React.Fragment>
    </div>
     
  </div>
    
  );
}
export default Navigation;