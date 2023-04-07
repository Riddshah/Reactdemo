import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Home.css';




function Home() {

  // const [openLinks, setOpenLinks ] = useState(false);

  // const toggleNavbar = () => {
  //   setOpenLinks(!openLinks);
  // }
  return (
    <div className='Home'>
      <div className="headerContainer">

    
      
        <h1>FUTURE CAPITALS</h1>
        <p>It's time to INVEST in your future</p>
       
          <Link to="/searchd"> Search </Link></div>
        
     
        </div>
  
      
  );
  
}

export default Home;
