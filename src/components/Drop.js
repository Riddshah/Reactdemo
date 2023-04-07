// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import '../styles/Dropdown.css';


// function Dropdown() {
  
//   const [openLinks, setOpenLinks ] = useState(false);

//   const toggleNavbar = () => {
//     setOpenLinks(!openLinks);
//   }
//    const [state, setstate] = useState(false);
//    const showDropdown=()=>{
//         setstate(true);

//    }
//    const hideDropdown=()=>{
//     setstate(false);
//}


//   return (
//     <div className='dropdown'>
//         <div className='dropdown-menu' onMouseEnter={showDropdown}onMouseLeave={hideDropdown}>
//             Admin

//             {state ? (<ul className= "dropdown-list"onMouseEnter={showDropdown}>
                
//                 <Link to="/upload"> </Link>
       
//                 <button onClick={toggleNavbar}>Upload</button>
                
//                 <Link to="/update"> </Link>
       
//                 <button onClick={toggleNavbar}>Update</button>
               
//                 <Link to="/delete"> </Link>
       
//                 <button onClick={toggleNavbar}>Delete</button>
//             </ul>):
//             null}
           
           
//         </div>
      
//     </div>
//   )


// export default Dropdown
// import React,{ useState } from 'react'

// function Drop() {
//   const [openLinks, setOpenLinks ] = useState(false);

//        const toggleNavbar = () => {
//         setOpenLinks(!openLinks);
//       }
//   return (
    
//     <div>
//       <button onClick={toggleNavbar}>Upload</button>
//       <button onClick={toggleNavbar}>Update</button>
//       <button onClick={toggleNavbar}>Delete</button>
      
//     </div>
//   )
// }

// export default Drop

