import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Assests/Styles/Main.css';
import './Assests/Styles/Bootstrap.css';
import './Assests/Styles/Responsive.css';
import './Assests/Styles/Swiperslider.css'
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";

import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Aboutus from './Pages/Aboutus';
import Serviceprovider from './Pages/Serviceprovider';
import Contactus from './Pages/Contactus';
import Signup from './Pages/Signup';


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Aboutus' element={<Aboutus/>}></Route>
      <Route path='/Serviceprovider' element={<Serviceprovider/>}></Route>
      <Route path='/Contactus' element={<Contactus/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
