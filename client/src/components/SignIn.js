import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import Home from './Home';


/*function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}*/

const theme = createTheme();


export default function SignIn({store}) 
{
    const[result,setResult]=useState(null); //state full component --to restore data in buffer and get its value even after reloading
    const[un,setUn]=useState(null);

    const handleSubmit = (event) => {
        alert("form submitted");
        event.preventDefault();
        const data= new FormData(event.currentTarget);
        setUn(data.get("un"));
        const pwd= data.get("pwd");
        axios.get('http://localhost:8081/check',{params:{
          un:data.get("un"),
          pwd:data.get("pwd")
         }}).then((response)=>{
                console.log(response.data);
                setResult(response.data);
                //console.log(result);
         })
  
        console.log(un+" "+pwd);
  }
  if(result==null || result=='FAIL')
  {
  return (
    <ThemeProvider theme={theme}>
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="un"    /*  * */
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="pwd"   /*  * */
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/regi" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
      </Container>
    </ThemeProvider>
  );
}

else //only when pass
{
    return(
        <div>
           <Home un={un} store={store} />
        </div>
   );
    }
}