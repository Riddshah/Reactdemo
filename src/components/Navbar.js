import React,{useState} from 'react'
import Logo from '../assets/MicrosoftTeams-image.png';
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';



function Navbar() {

  const [openLinks, setOpenLinks ] = useState(false);

 

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return ( 
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />&nbsp;&nbsp;&nbsp;
        
        
        
       
        <p>FUTURE CAPITALS</p>
        
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/aboutus"> About us</Link>
        <Link to="/contactus"> Contact us</Link> 
        <Link to="/drop">Security Master</Link>
       
        </div>
      </div>
      <div className="rightSide">
       
        <Link to="/"> Home</Link>
        <Link to="/aboutus"> About us</Link>
        <Link to="/contactus"> Contact us</Link>
        <Link to="/drop">Security Master</Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
      
    </div>
  );
}

export default Navbar;
