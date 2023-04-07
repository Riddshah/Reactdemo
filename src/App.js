import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Drop from './components/Drop';
import Searchd from './pages/Searchd';




import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
// import { Search } from '@mui/icons-material';
 

function App() {
  return(

  <div className='App'>
    <Router>
     <Navbar/>
      <Routes>


       <Route exact path="/" element={<Home/>} ></Route>
       <Route exact path="/aboutus" element={<About/>} ></Route>
       <Route exact path="/contactus" element={<Contact/>} ></Route>
       <Route exact path="/drop" element={<Drop/>} ></Route>
       <Route exact path="/searchd" element={<Searchd/>} ></Route>
     
       
      </Routes>
    
      <Footer/>
    </Router>
   
  </div>
  
  );
 }
export default App;
