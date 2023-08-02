import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import BusList from './booking/BusList';
import Nav from './layouts/Nav';
import NotFound from './general/NotFound';
import PrintTicket from './booking/PrintTicket';
import Login from './login/Login';
import Signup from './signup/Signup';

const App = () => {


  return (

    <BrowserRouter>
        <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bus-tickets' element={<BusList />} /> 
        <Route path='/booked-ticket' element={<PrintTicket />} /> 
        <Route path='/*' element={<NotFound />} /> 
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
            {/* <Route path='home' element={<App/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/> */}



       


      </Routes>
    </BrowserRouter>
  )
}


export default App;
