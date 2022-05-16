import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a className='changelinkcolor' href="#home">Home</a></p>
          <p><a className='changelinkcolor' href="#wgpt3">What is GPT3?</a></p>
          <p><a className='changelinkcolor' href="#possibility">Open AI</a></p>
          <p><a className='changelinkcolor' href="#features">Case Studies</a></p>
          <p><a className='changelinkcolor' href="#blog">Library</a></p> 
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a className='changelinkcolor' href="#home">Home</a></p>
            <p><a className='changelinkcolor' href="#wgpt3">What is GPT3?</a></p>
            <p><a className='changelinkcolor' href="#possibility">Open AI</a></p>
            <p><a className='changelinkcolor' href="#features">Case Studies</a></p>
            <p><a className='changelinkcolor' href="#blog">Library</a></p> 
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar; 






// import React, { useState } from 'react' 
// // note for css styling per component we use one dot notation ./
// // we use useState for hamburger Menu animation in React.
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; 
// import logo from '../../assets/logo.svg';
// import './navbar.css';

// const Menu = () => (
//   <>
//           <p><a className='changelinkcolor' href="#home">Home</a></p>
//           <p><a className='changelinkcolor'  href="#wgpt3">What is GPT3?</a></p>
//           <p><a className='changelinkcolor'  href="#possibility">Open AI</a></p>
//           <p><a  className='changelinkcolor' href="#features">Case Studies</a></p>
//           <p><a className='changelinkcolor' href="#blog">Library</a></p>   
//     </>
// )
 
// const Navbar = () => {

//   const [toggleMenu, setToggleMenu] = useState(false); 

//   return (
//       <div className=".gpt3__navbar"> 
//       <div className="gpt3__navbar-links">
//         <div className="gpt3__navbar-links_logo"> 
//           <img src={logo} alt="logo" /> 
//         </div>
//         <div className="gpt3__navbar-menu_container"> 
//             <Menu />  
//           {/* <p><a className='changelinkcolor' href="#home">Home</a></p>
//           <p><a className='changelinkcolor'  href="#wgpt3">What is GPT3?</a></p>
//           <p><a className='changelinkcolor'  href="#possibility">Open AI</a></p>
//           <p><a  className='changelinkcolor' href="#features">Case Studies</a></p>
//           <p><a className='changelinkcolor'  href="#blog">Library</a></p>  */}
//         </div> 
//       </div> 
       
//       <div className=' gpt3__navbar-sign'>
//         <p>Sign in</p>
//         <button type='button'> Sign up</button>   

//       </div>
//       <div className='gpt3__navbar-menu '>  
//         {toggleMenu 
//           ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
//           :  <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />  
//         }

//         {toggleMenu && (
//           <div className='gpt3__navbar-menu_container scale-up-center'>   
//             <div className='gpt3__navbar-menu_container-links'>  
//               <Menu /> 
//                <div className='gpt3__navbar-menu_container-links-sign'>   
//                 <p>Sign in</p>
//                 <button type='button'> Sign up</button>   

//               </div>
//             </div>
//           </div>
//         )}

//       </div>

//     </div>
//   )
// }

// export default Navbar;  
