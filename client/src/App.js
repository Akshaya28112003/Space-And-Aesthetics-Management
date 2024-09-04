import logo from './logo.svg';
import './App.css';
//import Login from './components/Login.js';
import Login from './components/SignIn';
import Registration from './components/Registration';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import { Container,AppBar,Toolbar } from  '@material-ui/core';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Furniture from './components/Furniture';
import InteriorDesign from './components/InteriorDesign';

import Home from './components/Home';

function App({store}) {
  console.log(store.getState()[0]);
  return(
    <div className="App">

      {/*<div className="App-header">
        <img src={logo} className="App-logo" style={{width:"70px",height:"70px"}}/>
        <p>Website title goes here</p>
      </div> */}

      {/*<div className="App-body">*/}

      <container>
          
          <BrowserRouter>
             <Routes>
             <Route path='/' element={ <Navigation store={store}/>} />
                <Route path='/logi' element={<Login store={store} />} />
                <Route path='/regi' element={<Registration />} /> 
                <Route path='/prof' element={<Profile/>} /> 
                <Route path='/abou' element={<AboutUs/>} /> 
                <Route path='/furn' element={<Furniture/>} /> 
                <Route path='/inte' element={<InteriorDesign/>} />
                <Route path='/home' element={<Home/>} />
             </Routes>
          </BrowserRouter> 
        </container>

        {/*</div>*/} 
      </div>
      
  
  );
}

export default App;
